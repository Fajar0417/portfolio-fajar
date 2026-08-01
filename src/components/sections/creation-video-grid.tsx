import Image from "next/image";
import { Play, Heart, MessageCircle } from "lucide-react";
import tiktokData from "@/data/tiktok.json";

interface TikTokVideo {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  video: string;
  createdAt: string;
  duration: number;
  views: number;
  likes: number;
  comments: number;
  shares: number;
}

function formatCount(n: number) {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return n.toString();
}

export function CreationVideoGrid() {
  const videos = (tiktokData as TikTokVideo[])
    .slice()
    .sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

  if (videos.length === 0) {
    return (
      <p className="text-center text-muted-foreground py-12">
        Belum ada video.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos.map((video) => (
        <a
          key={video.id}
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

          <div className="absolute bottom-2 left-2 right-2 text-white">
            <p className="text-xs font-semibold line-clamp-2 mb-1">
              {video.title}
            </p>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1">
                <Play className="size-3 fill-white" />
                {formatCount(video.views)}
              </span>
              <span className="flex items-center gap-1">
                <Heart className="size-3 fill-white" />
                {formatCount(video.likes)}
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle className="size-3 fill-white" />
                {formatCount(video.comments)}
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}