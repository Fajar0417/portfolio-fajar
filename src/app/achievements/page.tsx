"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { AchievementCard } from "@/components/sections/achievement-card";
import { AchievementModal } from "@/components/sections/achievement-modal";
import {
  achievements,
  type Achievement,
  type AchievementType,
  type AchievementCategory,
} from "@/data/achievements";

export default function AchievementsPage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<AchievementType | "">("");
  const [categoryFilter, setCategoryFilter] = useState<AchievementCategory | "">("");
  const [selected, setSelected] = useState<Achievement | null>(null);

  const filtered = useMemo(() => {
    return achievements.filter((a) => {
      const matchSearch = a.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchType = !typeFilter || a.type === typeFilter;
      const matchCategory =
        !categoryFilter || a.categories.includes(categoryFilter);
      return matchSearch && matchType && matchCategory;
    });
  }, [search, typeFilter, categoryFilter]);

  const types: AchievementType[] = ["Profesional", "Akademik", "Kursus"];
  const categories: AchievementCategory[] = [
    "Backend",
    "Frontend",
    "Mobile",
    "Freelance",
    "Course",
  ];

  return (
     <section className="max-w-6xl mx-auto px-8 py-12">
      <h1 className="text-2xl font-bold mb-2">Pencapaian</h1>
      <p className="text-muted-foreground mb-8">
        Koleksi sertifikat dan lencana yang telah saya raih sepanjang
        perjalanan profesional dan akademik saya.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-card border border-border rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-accent"
          />
        </div>

        <select
          value={typeFilter}
          onChange={(e) =>
            setTypeFilter(e.target.value as AchievementType | "")
          }
          className="bg-card border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-accent"
        >
          <option value="">Filter by Type</option>
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <select
          value={categoryFilter}
          onChange={(e) =>
            setCategoryFilter(e.target.value as AchievementCategory | "")
          }
          className="bg-card border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-accent"
        >
          <option value="">Filter by Category</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <p className="text-muted-foreground text-sm mb-6">
        Total: {filtered.length}
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            achievement={achievement}
            onClick={() => setSelected(achievement)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-12">
          Tidak ada pencapaian yang cocok.
        </p>
      )}

      <AchievementModal
        achievement={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}