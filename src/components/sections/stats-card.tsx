"use client";

import { useTranslations } from "next-intl";

interface StatCardProps {
  label: string;
  value: string | number;
  suffix?: string;
}

export function StatCard({ label, value, suffix }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 text-center">
      <p className="text-foreground/80 mb-2">{label}</p>
      <p className="text-3xl font-bold text-yellow-400">
        {value}
        {suffix && (
          <span className="text-lg text-foreground ml-1">{suffix}</span>
        )}
      </p>
    </div>
  );
}

interface StatsGridProps {
  stats: {
    followers: number;
    following: number;
    repos: number;
    contributions: number;
    thisWeek: number;
    bestDay: number;
    dailyAvg: number;
  };
}

export function StatsGrid({ stats }: StatsGridProps) {
  const t = useTranslations("dashboard.stats");

  return (
    <div className="space-y-4 mb-8">
      <div className="grid grid-cols-3 gap-4 ">
        <StatCard label={t("followers")} value={stats.followers} />
        <StatCard label={t("following")} value={stats.following} />
        <StatCard label={t("repos")} value={stats.repos} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label={t("contributions")} value={stats.contributions} />
        <StatCard label={t("thisWeek")} value={stats.thisWeek} />
        <StatCard label={t("bestDay")} value={stats.bestDay} />
        <StatCard
          label={t("dailyAvg")}
          value={stats.dailyAvg}
          suffix={t("perDay")}
        />
      </div>
    </div>
  );
}