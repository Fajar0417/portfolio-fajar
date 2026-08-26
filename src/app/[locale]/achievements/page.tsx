"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("achievements");

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<AchievementType | "">("");
  const [categoryFilter, setCategoryFilter] =
    useState<AchievementCategory | "">("");
  const [selected, setSelected] = useState<Achievement | null>(null);

  const filtered = useMemo(() => {
    return achievements.filter((achievement) => {
      const matchSearch = achievement.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchType =
        !typeFilter || achievement.type === typeFilter;

      const matchCategory =
        !categoryFilter ||
        achievement.categories.includes(categoryFilter);

      return matchSearch && matchType && matchCategory;
    });
  }, [search, typeFilter, categoryFilter]);

  const types: AchievementType[] = [
    "Profesional",
    "Akademik",
    "Kursus",
  ];

  const categories: AchievementCategory[] = [
    "Backend",
    "Frontend",
    "Mobile",
    "Freelance",
    "Course",
    "Financial",
  ];

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
        return t("categories.backend");
      case "Frontend":
        return t("categories.frontend");
      case "Mobile":
        return t("categories.mobile");
      case "Freelance":
        return t("categories.freelance");
      case "Course":
        return t("categories.course");
         case "Financial":
        return t("categories.financial");
      default:
        return category;
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-8 py-12">
      <h1 className="text-2xl font-bold mb-2">
        {t("title")}
      </h1>

      <p className="text-muted-foreground mb-8">
        {t("description")}
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />

          <input
            type="text"
            placeholder={t("search")}
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
          <option value="">
            {t("allTypes")}
          </option>

          {types.map((type) => (
            <option
              key={type}
              value={type}
            >
              {getTypeLabel(type)}
            </option>
          ))}
        </select>

        <select
          value={categoryFilter}
          onChange={(e) =>
            setCategoryFilter(
              e.target.value as AchievementCategory | ""
            )
          }
          className="bg-card border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-accent"
        >
          <option value="">
            {t("allCategories")}
          </option>

          {categories.map((category) => (
            <option
              key={category}
              value={category}
            >
              {getCategoryLabel(category)}
            </option>
          ))}
        </select>
      </div>

      <p className="text-muted-foreground text-sm mb-6">
        {t("total", { count: filtered.length })}
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
          {t("empty")}
        </p>
      )}

      <AchievementModal
        achievement={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}