import Image from "next/image";
import Link from "next/link";
import { Pin } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block rounded-2xl border border-border bg-card overflow-hidden hover:border-accent transition-colors"
    >
      <div className="relative">
        {project.featured && (
          <span className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
            <Pin className="size-3.5" />
            Featured
          </span>
        )}
        <div className="relative aspect-video bg-muted">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-semibold mb-1">{project.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-3">
          {project.techStack.slice(0, 6).map((tech) => (
            <span
              key={tech.name}
              title={tech.name}
              className={`size-8 rounded-lg flex items-center justify-center text-white text-xs font-bold ${tech.color}`}
            >
              {tech.icon}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full">
            🌐 {project.type}
          </span>
          <span className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full">
            {project.category}
          </span>
        </div>
      </div>
    </Link>
  );
}