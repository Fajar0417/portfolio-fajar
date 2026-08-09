"use client";

import { useMemo, useState } from "react";
import {
  FolderGit2,
  Globe,
  Smartphone,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { ProjectCard } from "@/components/sections/project-card";
import { FilterTabs } from "@/components/shared/filter-tabs";

import {
  projects,
  type ProjectType,
  type ProjectCategory,
} from "@/data/projects";

type TypeFilter = ProjectType | "All";
type CategoryFilter = ProjectCategory | "All";

export default function ProjectsPage() {
  const t = useTranslations("projects");

  const [typeFilter, setTypeFilter] = useState<TypeFilter>("All");
  const [categoryFilter, setCategoryFilter] =
    useState<CategoryFilter>("All");

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const matchType =
        typeFilter === "All" || project.type === typeFilter;

      const matchCategory =
        categoryFilter === "All" ||
        project.category === categoryFilter;

      return matchType && matchCategory;
    });
  }, [typeFilter, categoryFilter]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-14">

      {/* Hero */}

      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-background via-background to-accent/5 p-10 mb-12">

        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.15)_1px,transparent_1px)] bg-[size:36px_36px] opacity-30" />

        {/* Glow */}
        <div className="absolute -top-28 -right-24 h-72 w-72 rounded-full bg-amber-500/15 blur-3xl" />

        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative z-10">

          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-500 backdrop-blur-sm">

            <FolderGit2 className="size-4" />
{t("projectsCount", { count: projects.length })}

          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            {t("title")}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            {t("description")}
          </p>

          {/* Optional */}
          {/* <div className="mt-8 flex flex-wrap gap-3">

      <span className="rounded-full border border-border bg-card px-4 py-2 text-sm">
        🌐 Web
      </span>

      <span className="rounded-full border border-border bg-card px-4 py-2 text-sm">
        📱 Mobile
      </span>

      <span className="rounded-full border border-border bg-card px-4 py-2 text-sm">
        🚀 Open Source
      </span>

    </div> */}

        </div>

      </div>

      {/* Stats */}

      <div className="grid gap-5 md:grid-cols-3 mb-10">
        {/* Total Projects */}
        <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40">

          <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-amber-500/10 blur-2xl transition-all group-hover:bg-amber-500/20" />

          <div className="relative flex items-start justify-between">
            <div>
              <p className="text-3xl font-bold">
                {projects.length}
              </p>

            <p className="mt-2 text-sm text-muted-foreground">
  {t("totalProjects")}
</p>
            </div>

            <div className="rounded-xl bg-amber-500/10 p-3 text-amber-500">
              <FolderGit2 className="size-5" />
            </div>
          </div>

        </div>

        {/* Web */}
        <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40">

          <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-all duration-300 group-hover:bg-blue-500/20" />

          <div className="relative flex items-start justify-between">
            <div>
              <p className="text-3xl font-bold">
                {projects.filter((p) => p.type === "Web").length}
              </p>

             <p className="mt-2 text-sm text-muted-foreground">
  {t("webProjects")}
</p>
            </div>

            <div className="rounded-xl bg-blue-500/10 p-3 text-blue-500 transition-colors duration-300 group-hover:bg-blue-500/20">
              <Globe className="size-5" />
            </div>
          </div>

        </div>

        {/* Mobile */}
        <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/40">

          <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-green-500/10 blur-2xl transition-all duration-300 group-hover:bg-green-500/20" />

          <div className="relative flex items-start justify-between">
            <div>
              <p className="text-3xl font-bold">
                {projects.filter((p) => p.type === "Mobile").length}
              </p>

             <p className="mt-2 text-sm text-muted-foreground">
  {t("mobileProjects")}
</p>
            </div>

            <div className="rounded-xl bg-green-500/10 p-3 text-green-500 transition-colors duration-300 group-hover:bg-green-500/20">
              <Smartphone className="size-5" />
            </div>
          </div>

        </div>
      </div>

      {/* Filters */}
      <div className="rounded-3xl border border-border bg-card p-6 mb-10">

        {/* Type */}
        <div className="mb-6">
          <p className="mb-3 text-sm font-semibold text-muted-foreground">
            {t("type")}
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              { label: t("all"), value: "All" },
              { label: t("web"), value: "Web" },
              { label: t("mobile"), value: "Mobile" },
            ].map((item) => {
              const active = typeFilter === item.value;

              return (
                <button
                  key={item.value}
                  onClick={() => setTypeFilter(item.value as TypeFilter)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300
            ${active
                      ? "border-amber-500 bg-amber-500 text-white shadow-lg shadow-amber-500/30"
                      : "border-border bg-background hover:border-amber-500/40 hover:bg-amber-500/5"
                    }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category */}
        <div>
          <p className="mb-3 text-sm font-semibold text-muted-foreground">
            {t("category")}
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              { label: t("all"), value: "All" },
              { label: t("personal"), value: "Personal" },
              { label: t("internship"), value: "Internship" },
              { label: t("freelance"), value: "Freelance" },
              { label: t("competition"), value: "Competition" },
            ].map((item) => {
              const active = categoryFilter === item.value;

              return (
                <button
                  key={item.value}
                  onClick={() =>
                    setCategoryFilter(item.value as CategoryFilter)
                  }
                  className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300
            ${active
                      ? "border-amber-500 bg-amber-500 text-white shadow-lg shadow-amber-500/30"
                      : "border-border bg-background hover:border-amber-500/40 hover:bg-amber-500/5"
                    }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

      </div>

     

      {/* Projects */}

<div className="mb-6 flex items-center justify-between">
  <h2 className="text-xl font-semibold">
  {filtered.length}{" "}
  {filtered.length > 1 ? t("projectPlural") : t("projectSingular")}
</h2>

  <span className="rounded-full border border-border bg-muted/40 px-4 py-2 text-sm text-muted-foreground">
    {typeFilter !== "All" && `${typeFilter} • `}
    {categoryFilter !== "All"
      ? t(categoryFilter.toLowerCase())
      : t("all")}
  </span>
</div>

{filtered.length > 0 ? (
  <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
    {filtered.map((project) => (
      <div
        key={project.id}
        className="transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
      >
        <ProjectCard project={project} />
      </div>
    ))}
  </div>
) : (
  <div className="relative overflow-hidden rounded-3xl border border-dashed border-amber-500/30 bg-gradient-to-br from-amber-500/5 via-background to-background py-20 text-center">

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.08),transparent_60%)]" />

    <div className="relative">

      <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
        <FolderGit2 className="size-10" />
      </div>

      <h3 className="text-2xl font-semibold">
        {t("empty")}
      </h3>

      <p className="mt-3 text-muted-foreground max-w-md mx-auto leading-7">
        {t("emptyDescription")}
      </p>

      <button
        onClick={() => {
          setTypeFilter("All");
          setCategoryFilter("All");
        }}
        className="mt-8 rounded-xl bg-amber-500 px-6 py-3 font-medium text-white transition hover:bg-amber-600"
      >
        {t("resetFilter")}
      </button>

    </div>
  </div>
)}

    </section>
  );
}