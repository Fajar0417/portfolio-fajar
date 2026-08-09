"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { PlayCircle } from "lucide-react";

import { CreationProfileCard } from "./creation-profile-card";
import { CreationVideoGrid } from "./creation-video-grid";

import { tiktokProfile } from "@/data/creations";
import tiktokData from "@/data/tiktok.json";

import {
  TiktokIcon,
  InstagramIcon,
} from "@/components/shared/social-icons";

type Platform = "TikTok" | "Instagram";

export function CreationTabs() {
  const t = useTranslations("creations");

  const [activeTab, setActiveTab] =
    useState<Platform>("TikTok");

  const tabs = [
    {
      value: "TikTok" as const,
      label: t("tiktok"),
      icon: TiktokIcon,
    },
    {
      value: "Instagram" as const,
      label: t("instagram"),
      icon: InstagramIcon,
    },
  ];

  return (
    <div className="space-y-8">
      {/* ================= TAB ================= */}

      <div className="inline-flex rounded-2xl border border-border bg-card/80 p-1 backdrop-blur">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.value;

          return (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className="relative px-5 py-3"
            >
              {isActive && (
                <motion.div
                  layoutId="creation-tab"
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 35,
                  }}
                  className="absolute inset-0 rounded-xl bg-yellow-400"
                />
              )}

              <span
                className={`relative z-10 flex items-center gap-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-black"
                    : "text-muted-foreground"
                }`}
              >
                <Icon className="size-4" />

                {tab.label}

                {tab.value === "TikTok" && (
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] ${
                      isActive
                        ? "bg-black/15"
                        : "bg-muted"
                    }`}
                  >
                    {tiktokData.length}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      {/* ================= CONTENT ================= */}

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          {activeTab === "TikTok" ? (
            <>
              <CreationProfileCard
                profile={tiktokProfile}
              />

              <div className="mt-6 mb-8 flex items-center justify-between rounded-3xl border border-border bg-card/70 p-5 backdrop-blur">
                <div>
                  <h3 className="font-semibold text-lg">
                    {t("tiktok")}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {t("showingCount", {
                      count: tiktokData.length,
                    })}
                  </p>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 px-5 py-3">
                  <PlayCircle className="size-5 text-yellow-500" />

                  <div>
                    <p className="text-xl font-bold text-yellow-500">
                      {tiktokData.length}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      Videos
                    </p>
                  </div>
                </div>
              </div>

              <CreationVideoGrid />
            </>
          ) : (
            <div className="rounded-3xl border border-dashed border-border bg-card/30 py-24 text-center">
              <div className="mx-auto mb-5 flex size-20 items-center justify-center rounded-full border border-border bg-background">
                <InstagramIcon className="size-10 text-muted-foreground" />
              </div>

              <h3 className="text-2xl font-semibold">
                Instagram
              </h3>

              <p className="mx-auto mt-3 max-w-md text-muted-foreground leading-7">
                {t("instagramEmpty")}
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}