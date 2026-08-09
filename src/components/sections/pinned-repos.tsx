"use client";

import { useTranslations } from "next-intl";
import { Star, GitFork } from "lucide-react";

interface PinnedRepo {
  name: string;
  description: string | null;
  url: string;
  stars: number;
  forks: number;
  language: string | null;
  languageColor: string;
}

export function PinnedRepos({ repos }: { repos: PinnedRepo[] }) {
  const t = useTranslations("dashboard");

  if (repos.length === 0) return null;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{t("pinnedRepos")}</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {repos.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-border bg-card p-5 hover:border-accent transition-colors"
          >
            <h3 className="font-semibold mb-1">{repo.name}</h3>

            {repo.description && (
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {repo.description}
              </p>
            )}

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              {repo.language && (
                <span className="flex items-center gap-1.5">
                  <span
                    className="size-2.5 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  {repo.language}
                </span>
              )}

              <span className="flex items-center gap-1">
                <Star className="size-3.5" />
                {repo.stars}
              </span>

              <span className="flex items-center gap-1">
                <GitFork className="size-3.5" />
                {repo.forks}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}