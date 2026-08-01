import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Eye, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/shared/github-icon";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft className="size-4" />
        Kembali
      </Link>

      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>

      <p className="text-muted-foreground leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex items-center justify-between flex-wrap gap-4 pb-6 mb-6 border-b border-dashed border-border">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-muted-foreground text-sm">
            <Eye className="size-4" />
            {project.views} tayangan
          </span>

          <span className="text-sm text-muted-foreground">
            Teknologi :
          </span>

          <div className="flex gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech.name}
                title={tech.name}
                className={`size-7 rounded-md flex items-center justify-center text-white text-xs font-bold ${tech.color}`}
              >
                {tech.icon}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent hover:underline text-sm font-medium"
            >
              <GithubIcon className="size-4" />
              Kode Sumber
            </a>
          )}

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Buka live demo"
              className="text-muted-foreground hover:text-foreground"
            >
              <ExternalLink className="size-4" />
            </a>
          )}
        </div>
      </div>

      <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-muted mb-10">
        <Image
          src={project.previewImage}
          alt={`Preview ${project.name}`}
          fill
          className="object-cover"
        />
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Overview</h2>
        <p className="text-muted-foreground leading-relaxed">
          {project.longDescription}
        </p>
      </section>

      <hr className="border-border mb-10" />

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
        <ul className="space-y-3">
          {project.techStackDetailed.map((tech) => (
            <li key={tech.name} className="text-muted-foreground">
              <span className="font-semibold text-foreground">
                {tech.name}
              </span>{" "}
              — {tech.description}
            </li>
          ))}
        </ul>
      </section>

      <hr className="border-border mb-10" />

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-6">Features</h2>
        <div className="space-y-6">
          {project.features.map((feature) => (
            <div key={feature.title}>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {project.challenges && project.challenges.length > 0 && (
        <>
          <hr className="border-border mb-10" />

          <section>
            <h2 className="text-xl font-semibold mb-6">
              Challenges & Solutions
            </h2>

            <div className="space-y-6">
              {project.challenges.map((c) => (
                <div key={c.title}>
                  <h3 className="font-semibold mb-2">{c.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </article>
  );
}