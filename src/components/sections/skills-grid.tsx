"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { skills, type SkillCategory } from "@/data/skills";
import { motion, AnimatePresence } from "framer-motion";

const tabValues: (SkillCategory | "Semua")[] = [
  "Semua",
  "Utama",
  "Frontend",
  "Backend",
  "Mobile",
  "Database",
  "Tools",
];

const tabLabelKeys: Record<SkillCategory | "Semua", string> = {
  Semua: "all",
  Utama: "main",
  Frontend: "frontend",
  Backend: "backend",
  Mobile: "mobile",
  Database: "database",
  Tools: "tools",
};

export function SkillsGrid() {
  const t = useTranslations("skills");
  const [active, setActive] = useState<SkillCategory | "Semua">("Semua");

  // ✅ PERUBAHAN 1: Cek apakah kategori yang aktif ada di dalam array categories
  const filtered =
    active === "Semua"
      ? skills
      : skills.filter((s) => s.categories.includes(active));

  // ✅ PERUBAHAN 2: Hitung jumlah item berdasarkan array categories
  const countByCategory = (cat: SkillCategory | "Semua") =>
    cat === "Semua"
      ? skills.length
      : skills.filter((s) => s.categories.includes(cat)).length;

  return (
    <section className="max-w-6xl mx-auto px-6 pb-16">
      <div className="mb-10">
        <span className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1 text-sm font-medium text-yellow-500">
          Tech Stack
        </span>

        <h2 className="mt-4 text-3xl font-bold tracking-tight">
          {"</> " + t("title")}
        </h2>

        <p className=" mt-4 max-w-2xl text-muted-foreground leading-7">
          {t("description")}
        </p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
          <span className="size-2 rounded-full bg-yellow-500 animate-pulse" />
          <span className="text-sm font-medium">
            {skills.length} Technologies
          </span>
        </div>
      </div>

      {/* ================= TAB ================= */}

      <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-2 sm:gap-3 mb-8">
        {tabValues.map((value) => {
          const isActive = active === value;

          return (
            <button
              key={value}
              onClick={() => setActive(value)}
              className="
                relative
                overflow-hidden
                rounded-full
                border
                border-white/15
                hover:border-white/30
                transition-colors
              "
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab"
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 35,
                  }}
                  className="absolute inset-0 rounded-full bg-yellow-400"
                />
              )}

              <span
                className={`relative z-10 flex items-center justify-center gap-1.5 sm:gap-2
                  px-3 py-2
                  sm:px-5 sm:py-2.5
                  text-xs sm:text-sm
                  font-semibold
                  transition-colors
                  duration-300
                  ${isActive
                    ? "text-black"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {t(`tabs.${tabLabelKeys[value]}`)}

                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] sm:text-xs ${isActive ? "bg-black/15" : "bg-muted"
                    }`}
                >
                  {countByCategory(value)}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* ================= SKILLS ================= */}

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="flex flex-wrap gap-2.5 sm:gap-3"
        >
          {filtered.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.025,
                  duration: 0.25,
                }}
                className="shrink-0"
              >
                <Badge
                  className="
                    inline-flex
                    items-center
                    gap-2

                    rounded-full

                    border
                    border-white/10

                    bg-zinc-900

                    px-5 py-4.5
                    sm:px-4 sm:py-2.5

                    text-[13px]
                    sm:text-[15px]

                    font-semibold
                    text-white

                    shadow-sm

                    transition-all
                    duration-300

                    hover:scale-105
                    hover:border-yellow-400
                    hover:bg-zinc-800
                  "
                >
                  <Icon
                    className="size-4 sm:size-5 shrink-0"
                    style={{
                      color: skill.iconColor,
                    }}
                  />

                  <span className="whitespace-nowrap">{skill.name}</span>
                </Badge>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}