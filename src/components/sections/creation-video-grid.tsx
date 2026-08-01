"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import type { CreationItem } from "@/data/creations";

interface VideoData {
  title: string;
  thumbnail: string;
  url: string;
}

export function CreationVideoGrid({ items }: { items: CreationItem[] }) {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAll() {
      const results = await Promise.all(
        items.map(async (item) => {
          // Kalau sudah ada manual thumbnail, langsung pakai itu (skip oEmbed)
          if (item.manualThumbnail) {
            return {
              title: item.manualTitle ?? "",
              thumbnail: item.manualThumbnail,
              url: item.url,
            };
          }

          try {
            const res = await fetch(
              `/api/tiktok-oembed?url=${encodeURIComponent(item.url)}`
            );
            const data = await res.json();
            if (data.error) {
              console.warn(`Gagal load ${item.url}:`, data.error);
              return null;
            }
            return data as VideoData;
          } catch {
            return null;
          }
        })
      );

      setVideos(results.filter((v): v is VideoData => v !== null));
      setLoading(false);
    }

    fetchAll();
  }, [items]);

  if (loading) {
    return (
      <p className="text-center text-muted-foreground py-12">
        Memuat video...
      </p>
    );
  }

  if (videos.length === 0) {
    return (
      <p className="text-center text-muted-foreground py-12">
        Tidak ada video yang bisa dimuat.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos.map((video) => (
        <a
          key={video.url}
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-[9/16] rounded-xl overflow-hidden bg-muted group"
        >
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          <span className="absolute bottom-2 left-2 right-2 flex items-center gap-1 text-white text-xs font-semibold line-clamp-2">
            <Play className="size-3 fill-white shrink-0" />
            {video.title}
          </span>
        </a>
      ))}
    </div>
  );
}