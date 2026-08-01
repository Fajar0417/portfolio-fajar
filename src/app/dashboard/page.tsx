"use client";

import { useEffect, useState } from "react";
import { GitBranch } from "lucide-react";
import { StatsGrid } from "@/components/sections/stats-card";
import { ContributionHeatmap } from "@/components/sections/contribution-heatmap";
import { PinnedRepos } from "@/components/sections/pinned-repos";

interface GithubData {
  followers: number;
  following: number;
  repos: number;
  contributions: number;
  days: { date: string; count: number }[];
  pinnedRepos: {
    name: string;
    description: string | null;
    url: string;
    stars: number;
    forks: number;
    language: string | null;
    languageColor: string;
  }[];
}

const GITHUB_USERNAME = "satriabahari"; // ganti sesuai username kamu

export default function DashboardPage() {
  const [data, setData] = useState<GithubData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((json) => {
        if (json.error) setError(true);
        else setData(json);
      })
      .catch(() => setError(true));
  }, []);

  return (
   <section className="max-w-6xl mx-auto px-8 py-12">
      <h1 className="text-2xl font-bold mb-2">Dasbor</h1>
      <p className="text-muted-foreground mb-10">
        Dasbor pribadi saya yang dibangun dengan rute API Next.js,
        memvisualisasikan statistik pengembangan dan kontribusi secara
        real-time.
      </p>

      <div className="flex items-center gap-2 mb-2">
        <GitBranch className="size-5" />
        <h2 className="text-xl font-semibold">Aktivitas GitHub</h2>
      </div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground">
          Kontribusi open source, repositori, dan aktivitas coding selama
          setahun terakhir.
        </p>
        <span className="text-muted-foreground text-sm shrink-0 ml-4">
          @{GITHUB_USERNAME}
        </span>
      </div>

      {error && (
        <p className="text-muted-foreground text-center py-8">
          😔 Terjadi kesalahan pada server.
        </p>
      )}

      {!error && !data && (
        <p className="text-muted-foreground text-center py-8">
          Memuat data...
        </p>
      )}

      {data && (
        <>
          <StatsGrid
            stats={{
              followers: data.followers,
              following: data.following,
              repos: data.repos,
              contributions: data.contributions,
              thisWeek: 0,
              bestDay: Math.max(...data.days.map((d) => d.count)),
              dailyAvg: Math.round(data.contributions / data.days.length),
            }}
          />

          <div className="mb-10">
            <ContributionHeatmap data={data.days} />
          </div>

          <PinnedRepos repos={data.pinnedRepos} />
        </>
      )}
    </section>
  );
}