import Image from "next/image";
import {
  CalendarDays,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

import type { Achievement } from "@/data/achievements";

interface AchievementCardProps {
  achievement: Achievement;
  onClick: () => void;
}

export function AchievementCard({
  achievement,
  onClick,
}: AchievementCardProps) {
  return (
    <button
      onClick={onClick}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-border
        bg-card/80
        backdrop-blur
        text-left
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-yellow-500/40
        hover:shadow-2xl
        hover:shadow-yellow-500/10
      "
    >
      {/* ================= IMAGE ================= */}

      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={achievement.image}
          alt={achievement.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center gap-1 rounded-full border border-yellow-500/30 bg-yellow-500/15 px-3 py-1 text-xs font-semibold text-yellow-400 backdrop-blur">
            <ShieldCheck className="size-3.5" />
            {achievement.type}
          </span>
        </div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="p-6">
        <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
          {achievement.credentialId}
        </p>

        <h3 className="line-clamp-2 text-lg font-semibold leading-7 transition-colors group-hover:text-yellow-500">
          {achievement.title}
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          {achievement.issuer}
        </p>

        {/* Categories */}

        <div className="mt-5 flex flex-wrap gap-2">
          {achievement.categories.map((cat) => (
            <span
              key={cat}
              className="
                rounded-full
                border
                border-border
                bg-muted/60
                px-3
                py-1
                text-xs
                text-muted-foreground
              "
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Footer */}

        <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="size-4 text-yellow-500" />
            {achievement.issueDate}
          </div>

          <span
            className="
              flex
              items-center
              gap-1
              text-sm
              font-medium
              text-yellow-500
            "
          >
            View Details

            <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </button>
  );
}