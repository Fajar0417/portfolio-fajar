import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import axios from "axios";
import fs from "fs/promises";

const API_KEY = process.env.BRIGHTDATA_API_KEY;
const DATASET_ID = "gd_lu702nij2f790tmv9h";
const USERNAME = "jayajahhh";
const NUMBER_OF_POSTS = 50;

if (!API_KEY) {
  console.error("❌ BRIGHTDATA_API_KEY belum diisi.");
  process.exit(1);
}

async function run() {
  console.log("🚀 Fetching TikTok data...");

  try {
    const scrape = await axios.post(
      `https://api.brightdata.com/datasets/v3/scrape?dataset_id=${DATASET_ID}&notify=false&include_errors=true&type=discover_new&discover_by=profile_url`,
      [
        {
          url: `https://www.tiktok.com/@${USERNAME}`,
          num_of_posts: NUMBER_OF_POSTS,
        },
      ],
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const snapshotId = scrape.data.snapshot_id;
    console.log("📦 Snapshot:", snapshotId);

    await waitUntilReady(snapshotId);
  } catch (err) {
    console.error("❌ Gagal membuat snapshot");
    if (axios.isAxiosError(err)) {
      console.error(err.response?.data);
    } else {
      console.error(err);
    }
  }
}

async function waitUntilReady(snapshotId) {
  const MAX_RETRY = 20;

  for (let i = 0; i < MAX_RETRY; i++) {
    try {
      const res = await axios.get(
        `https://api.brightdata.com/datasets/v3/snapshot/${snapshotId}`,
        {
          headers: { Authorization: `Bearer ${API_KEY}` },
        }
      );

      // Kalau data berupa array langsung
      if (Array.isArray(res.data)) {
        console.log(`[${i + 1}/${MAX_RETRY}] ✅ Data array diterima langsung`);
        await processData(res.data);
        return;
      }

      // Kalau data berupa string NDJSON (satu JSON object per baris)
      if (typeof res.data === "string") {
        const trimmed = res.data.trim();

        // Coba cek apakah ini string JSON biasa dulu (misal masih {status: running})
        try {
          const parsed = JSON.parse(trimmed);
          if (parsed.status) {
            console.log(`[${i + 1}/${MAX_RETRY}] ${parsed.status}`);
            if (parsed.status === "ready") {
              console.log("✅ Snapshot Ready, downloading...");
              await downloadSnapshot(snapshotId);
              return;
            }
            await new Promise((resolve) => setTimeout(resolve, 30000));
            continue;
          }
        } catch {
          // Bukan satu JSON tunggal, lanjut coba parse sebagai NDJSON
        }

        console.log(`[${i + 1}/${MAX_RETRY}] ✅ Data NDJSON diterima, parsing...`);
        const lines = trimmed.split("\n").filter((line) => line.trim().length > 0);
        const parsedData = lines.map((line) => JSON.parse(line));
        await processData(parsedData);
        return;
      }

      console.log(`[${i + 1}/${MAX_RETRY}] ${res.data.status}`);

      if (res.data.status === "ready") {
        console.log("✅ Snapshot Ready, downloading...");
        await downloadSnapshot(snapshotId);
        return;
      }

      await new Promise((resolve) => setTimeout(resolve, 30000));
    } catch (err) {
      console.log("Menunggu snapshot...", err.response?.data || err.message);
      await new Promise((resolve) => setTimeout(resolve, 30000));
    }
  }

  throw new Error("Snapshot timeout.");
}
async function downloadSnapshot(snapshotId) {
  try {
    console.log("Downloading snapshot:", snapshotId);

    const res = await axios.get(
      `https://api.brightdata.com/datasets/v3/snapshot/${snapshotId}?format=json`,
      {
        headers: { Authorization: `Bearer ${API_KEY}` },
      }
    );

    let data = res.data;

    if (typeof data === "string") {
      const lines = data.trim().split("\n").filter((line) => line.trim().length > 0);
      data = lines.map((line) => JSON.parse(line));
    }

    if (!Array.isArray(data)) {
      throw new Error("Response bukan array");
    }

    await processData(data);
  } catch (err) {
    console.log(err.response?.data || err);
  }
}

async function processData(data) {
  const videos = data.map((item) => ({
    id: item.post_id,
    title: item.description,
    url: item.url,
    thumbnail: item.preview_image,
    video: item.video_url,
    createdAt: item.create_time,
    duration: item.video_duration,
    views: item.play_count,
    likes: item.digg_count,
    comments: item.comment_count,
    shares: item.num_share_count ?? item.share_count ?? 0,
    profile: {
      username: item.account_id,
      avatar: item.profile_avatar,
      followers: item.profile_followers,
      bio: item.profile_biography,
    },
  }));

  await fs.mkdir("./src/data", { recursive: true });
  await fs.writeFile(
    "./src/data/tiktok.json",
    JSON.stringify(videos, null, 2),
    "utf8"
  );

  console.log("SUCCESS!");
  console.log("Video:", videos.length);
}

run();