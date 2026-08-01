"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { skills, type SkillCategory } from "@/data/skills";
import { motion, AnimatePresence } from "framer-motion";

const tabs: { label: string; value: SkillCategory | "Semua" }[] = [
  { label: "Semua", value: "Semua" },
  { label: "Utama", value: "Utama" },
  { label: "Frontend", value: "Frontend" },
  { label: "Backend", value: "Backend" },
  { label: "Mobile", value: "Mobile" },
  { label: "Database", value: "Database" },
  { label: "Tools", value: "Tools" },
];

export function SkillsGrid() {
  const [active, setActive] =
    useState<SkillCategory | "Semua">("Semua");

  const filtered =
    active === "Semua"
      ? skills
      : skills.filter((s) => s.category === active);

  const countByCategory = (cat: SkillCategory | "Semua") =>
    cat === "Semua"
      ? skills.length
      : skills.filter((s) => s.category === cat).length;

  return (
    <section className="max-w-6xl mx-auto px-6 pb-16">
      <h2 className="text-2xl font-bold mb-2">
        {"</> Keahlian"}
      </h2>

      <p className="text-muted-foreground mb-6">
        Keahlian profesional saya.
      </p>

      {/* ================= TAB ================= */}

      <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-2 sm:gap-3 mb-8">
        {tabs.map((tab) => {
          const isActive = active === tab.value;

          return (
            <button
              key={tab.value}
              onClick={() => setActive(tab.value)}
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
                  ${
                    isActive
                      ? "text-black"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {tab.label}

                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] sm:text-xs ${
                    isActive
                      ? "bg-black/15"
                      : "bg-muted"
                  }`}
                >
                  {countByCategory(tab.value)}
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

                  <span className="whitespace-nowrap">
                    {skill.name}
                  </span>
                </Badge>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}