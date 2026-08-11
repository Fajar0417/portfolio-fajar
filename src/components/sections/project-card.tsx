import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Pin,
} from "lucide-react";
import { useTranslations } from "next-intl";

import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
}: {
  project: Project;
}) {
  const t = useTranslations("projects");

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="
        group
        block
        overflow-hidden
        rounded-3xl
        border
        border-border
        bg-card/80
        backdrop-blur
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-yellow-500/40
        hover:shadow-2xl
        hover:shadow-yellow-500/10
      "
    >
      {/* ================= IMAGE ================= */}

      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={t(project.nameKey)}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Featured */}

        {project.featured && (
          <div className="absolute left-4 top-4">
            <span
              className="
                inline-flex
                items-center
                gap-1
                rounded-full
                border
                border-yellow-500/30
                bg-yellow-500/15
                px-3
                py-1
                text-xs
                font-semibold
                text-yellow-400
                backdrop-blur
              "
            >
              <Pin className="size-3.5 fill-current" />
              Featured
            </span>
          </div>
        )}

        {/* Project Type */}

        <div className="absolute bottom-4 left-4">
          <span
            className="
              rounded-full
              border
              border-white/10
              bg-black/40
              px-3
              py-1
              text-xs
              font-medium
              text-white
              backdrop-blur
            "
          >
            🌐 {project.type}
          </span>
        </div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="p-6">
        {/* Title */}

        <h3
          className="
            text-xl
            font-semibold
            transition-colors
            duration-300
            group-hover:text-yellow-500
          "
        >
          {t(project.nameKey)}
        </h3>

        {/* Description */}

        <p
          className="
            mt-3
            line-clamp-2
            leading-7
            text-muted-foreground
          "
        >
          {t(project.descriptionKey)}
        </p>

        {/* ================= TECH STACK ================= */}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.slice(0, 6).map((tech) => (
            <div
              key={tech.name}
              title={tech.name}
              className="
                flex
                size-10
                items-center
                justify-center
                rounded-xl
                border
                border-border
                bg-muted/50
                shadow-sm
                transition-all
                duration-300
                group-hover:border-yellow-500/20
                group-hover:bg-muted
              "
            >
              <tech.icon
                className="
                  size-5
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
                style={{
                  color: tech.iconColor,
                }}
              />
            </div>
          ))}
        </div>

        {/* ================= FOOTER ================= */}

        <div
          className="
            mt-6
            flex
            items-center
            justify-between
            border-t
            border-border
            pt-5
          "
        >
          {/* Category */}

          <span
            className="
              rounded-full
              border
              border-yellow-500/20
              bg-yellow-500/10
              px-3
              py-1
              text-xs
              font-medium
              text-yellow-500
            "
          >
            {t(project.category.toLowerCase())}
          </span>

          {/* View Project */}

          <span
            className="
              flex
              items-center
              gap-2
              text-sm
              font-medium
              text-yellow-500
            "
          >
            View Project

            <ArrowRight
              className="
                size-4
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </span>
        </div>
      </div>
    </Link>
  );
}