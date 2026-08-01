"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/sections/project-card";
import { FilterTabs } from "@/components/shared/filter-tabs";
import { projects, type ProjectType, type ProjectCategory } from "@/data/projects";

type TypeFilter = ProjectType | "Semua";
type CategoryFilter = ProjectCategory | "Semua";

export default function ProjectsPage() {
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("Semua");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("Semua");

  const filtered = projects.filter((p) => {
    const matchType = typeFilter === "Semua" || p.type === typeFilter;
    const matchCategory =
      categoryFilter === "Semua" || p.category === categoryFilter;
    return matchType && matchCategory;
  });

  return (
    <section className="max-w-6xl mx-auto px-8 py-12">
      <h1 className="text-2xl font-bold mb-2">Proyek</h1>
      <p className="text-muted-foreground mb-8">
        Etalase proyek pribadi maupun sumber terbuka (open-source) yang telah
        saya bangun atau kontribusikan.
      </p>

      <FilterTabs
        label="Tipe"
        active={typeFilter}
        onChange={setTypeFilter}
        options={[
          { label: "Semua", value: "Semua" },
          { label: "Web", value: "Web" },
          { label: "Mobile", value: "Mobile" },
        ]}
      />

      <FilterTabs
        label="Kategori"
        active={categoryFilter}
        onChange={setCategoryFilter}
        options={[
          { label: "Semua", value: "Semua" },
          { label: "Proyek Pribadi", value: "Proyek Pribadi" },
          { label: "Magang", value: "Magang" },
          { label: "Freelance", value: "Freelance" },
          { label: "Lomba", value: "Lomba" },
        ]}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-12">
          Tidak ada proyek yang cocok dengan filter ini.
        </p>
      )}
    </section>
  );
}