import Image from "next/image";
import { Plus } from "lucide-react";
import type { Achievement } from "@/data/achievements";

interface AchievementCardProps {
  achievement: Achievement;
  onClick: () => void;
}

export function AchievementCard({ achievement, onClick }: AchievementCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden hover:border-accent transition-colors">
      <button onClick={onClick} className="block w-full text-left">
        <div className="relative aspect-[4/3] bg-white">
          <Image
            src={achievement.image}
            alt={achievement.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-4">
          <p className="text-xs text-muted-foreground mb-1">
            {achievement.credentialId}
          </p>
          <h3 className="font-semibold mb-1 line-clamp-2">
            {achievement.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            {achievement.issuer}
          </p>

          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full">
              {achievement.type}
            </span>
            {achievement.categories.map((cat) => (
              <span
                key={cat}
                className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>

          <p className="text-xs text-accent uppercase tracking-wide">
            Issued on {achievement.issueDate}
          </p>
        </div>
      </button>

      <div className="px-4 pb-4">
        <span className="inline-flex items-center justify-center size-8 rounded-full border border-dashed border-border text-muted-foreground">
          <Plus className="size-4" />
        </span>
      </div>
    </div>
  );
}