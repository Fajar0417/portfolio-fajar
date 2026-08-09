
"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";

import type {
  Achievement,
  AchievementCategory,
  AchievementType,
} from "@/data/achievements";

interface AchievementModalProps {
  achievement: Achievement | null;
  onClose: () => void;
}

export function AchievementModal({
  achievement,
  onClose,
}: AchievementModalProps) {
  const t = useTranslations("achievements.achievementModal");
  const tAchievements = useTranslations("achievements");

  if (!achievement) return null;

  const getTypeLabel = (type: AchievementType) => {
    switch (type) {
      case "Profesional":
        return t("types.professional");

      case "Akademik":
        return t("types.academic");

      case "Kursus":
        return t("types.course");

      default:
        return type;
    }
  };

  const getCategoryLabel = (category: AchievementCategory) => {
    switch (category) {
      case "Backend":
        return tAchievements("categories.backend");

      case "Frontend":
        return tAchievements("categories.frontend");

      case "Mobile":
        return tAchievements("categories.mobile");

      case "Freelance":
        return tAchievements("categories.freelance");

      case "Course":
        return tAchievements("categories.course");

      default:
        return category;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-2xl overflow-hidden max-w-5xl w-full max-h-[92vh] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <div className="min-w-0">
            <h2 className="text-base md:text-lg font-semibold truncate">
              {achievement.title}
            </h2>

            <p className="text-xs md:text-sm text-muted-foreground truncate">
              {achievement.issuer}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label={t("close")}
            className="ml-4 shrink-0 text-muted-foreground hover:text-foreground rounded-full p-2 hover:bg-muted transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Certificate */}
        <div className="w-full bg-muted/30 flex items-center justify-center p-4 md:p-6">
          <div className="relative w-full aspect-[16/10] max-h-[55vh]">
            <Image
              src={achievement.image}
              alt={achievement.title}
              fill
              priority
              className="object-contain rounded-lg"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </div>

        {/* Details */}
        <div className="px-5 py-4 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Credential ID */}
            {achievement.credentialId && (
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1">
                  {t("credentialId")}
                </p>

                <p className="text-xs font-medium truncate">
                  {achievement.credentialId}
                </p>
              </div>
            )}

            {/* Type */}
            <div>
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1">
                {t("type")}
              </p>

              <p className="text-xs font-medium">
                {getTypeLabel(achievement.type)}
              </p>
            </div>

            {/* Category */}
            <div>
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1">
                {t("category")}
              </p>

              <p className="text-xs font-medium">
                {achievement.categories
                  .map(getCategoryLabel)
                  .join(", ")}
              </p>
            </div>

            {/* Issue Date */}
            <div>
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1">
                {t("issueDate")}
              </p>

              <p className="text-xs font-medium">
                {achievement.issueDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
