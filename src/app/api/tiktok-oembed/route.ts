import { NextResponse } from "next/server";

interface TikTokOEmbedResponse {
  title?: string;
  thumbnail_url?: string;
  author_name?: string;
  html?: string;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL wajib diisi." }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`,
      { next: { revalidate: 86400 } }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: `oEmbed gagal (status ${res.status}). Kemungkinan ini photo post, bukan video.` },
        { status: 500 }
      );
    }

    const data: TikTokOEmbedResponse = await res.json();

    if (!data.thumbnail_url) {
      return NextResponse.json(
        { error: "Tidak ada thumbnail — kemungkinan ini photo post yang tidak didukung oEmbed." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      title: data.title ?? "",
      thumbnail: data.thumbnail_url,
      author: data.author_name ?? "",
      url,
    });
  } catch {
    return NextResponse.json(
      { error: "Video tidak ditemukan atau gagal dimuat." },
      { status: 500 }
    );
  }
}