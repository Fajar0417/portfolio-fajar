"use client";

import { useState } from "react";
import { CreationProfileCard } from "./creation-profile-card";
import { CreationVideoGrid } from "./creation-video-grid";
import { tiktokProfile, tiktokVideoUrls } from "@/data/creations";

type Platform = "TikTok" | "Instagram";

export function CreationTabs() {
  const [activeTab, setActiveTab] = useState<Platform>("TikTok");

  return (
    <div>
      <div className="flex gap-2 mb-8">
        <button
          onClick={() => setActiveTab("TikTok")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm transition-colors ${
            activeTab === "TikTok"
              ? "bg-muted text-foreground"
              : "bg-muted/30 text-muted-foreground"
          }`}
        >
          🎵 TikTok
        </button>
        <button
          onClick={() => setActiveTab("Instagram")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm transition-colors ${
            activeTab === "Instagram"
              ? "bg-muted text-foreground"
              : "bg-muted/30 text-muted-foreground"
          }`}
        >
          📷 Instagram
        </button>
      </div>

      {activeTab === "TikTok" ? (
        <>
          <CreationProfileCard profile={tiktokProfile} />

          <p className="text-muted-foreground text-sm mb-6">
            Menampilkan {tiktokVideoUrls.length} dari {tiktokProfile.totalVideos} video
          </p>

        <CreationVideoGrid items={tiktokVideoUrls} />
        </>
      ) : (
        <div className="text-center text-muted-foreground py-16">
          Konten Instagram belum tersedia.
        </div>
      )}
    </div>
  );
}