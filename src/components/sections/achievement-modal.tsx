"use client";

import Image from "next/image";
import { X } from "lucide-react";
import type { Achievement } from "@/data/achievements";

interface AchievementModalProps {
  achievement: Achievement | null;
  onClose: () => void;
}

export function AchievementModal({ achievement, onClose }: AchievementModalProps) {
  if (!achievement) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex-1 bg-white aspect-video md:aspect-auto">
          <Image
            src={achievement.image}
            alt={achievement.title}
            fill
            className="object-contain"
          />
        </div>

        <div className="w-full md:w-80 p-6 flex-shrink-0 overflow-y-auto">
          <div className="flex items-start justify-between mb-6">
            <h2 className="text-lg font-semibold pr-4">{achievement.title}</h2>
            <button
              onClick={onClose}
              aria-label="Tutup"
              className="text-muted-foreground hover:text-foreground shrink-0"
            >
              <X className="size-5" />
            </button>
          </div>

          <p className="text-muted-foreground mb-6">{achievement.issuer}</p>

          {achievement.credentialId && (
            <div className="mb-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                Credential ID
              </p>
              <p className="font-medium">{achievement.credentialId}</p>
            </div>
          )}

          <div className="mb-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
              Type
            </p>
            <p className="font-medium">{achievement.type}</p>
          </div>

          <div className="mb-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
              Category
            </p>
            <p className="font-medium">{achievement.categories.join(", ")}</p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
              Issue Date
            </p>
            <p className="font-medium">{achievement.issueDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}