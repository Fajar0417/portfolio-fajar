import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionDivider } from "@/components/shared/section-divider";
import {
  ArrowLeft,
  Eye,
  ExternalLink,
  BookOpenText,
  Boxes,
  Sparkles,
  TriangleAlert,
  Globe,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

import { GithubIcon } from "@/components/shared/github-icon";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

const techTranslationKey: Record<string, string> = {
  Laravel: "laravel",
  PHP: "php",
  MySQL: "mysql",
  "Tailwind CSS": "tailwind",
};



// Sub-komponen tombol aksi untuk menghindari duplikasi kode (Atas & Bawah)
function ActionLinks({
  githubUrl,
  url,
  t,
}: {
  githubUrl?: string;
  url?: string;
  t: (key: string) => string;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm hover:bg-muted transition"
        >
          <GithubIcon className="size-4" />
          {t("sourceCode")}
        </a>
      )}

      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-accent text-accent-foreground px-4 py-2 text-sm hover:opacity-90 transition"
        >
          <Globe className="size-4" />
          Live Demo
          <ExternalLink className="size-4" />
        </a>
      )}
    </div>
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });

  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="max-w-6xl mx-auto px-8 py-12">
      {/* Back Button */}
      <Link
        href={`/${locale}/projects`}
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm"
      >
        <ArrowLeft className="size-4" />
        {t("back")}
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground">
            {project.type}
          </span>
          <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground">
            {project.category}
          </span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight mb-4">
          {t(`items.${project.id}.name`)}
        </h1>

        <p className="text-lg leading-8 text-muted-foreground max-w-3xl">
          {t(`items.${project.id}.description`)}
        </p>
      </header>

      {/* Information Card */}
      <section className="rounded-2xl border border-border bg-card p-6 mb-12">
        <div className="flex flex-wrap justify-between items-center gap-6">
          <div className="flex flex-wrap items-center gap-5">
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Eye className="size-4" />
              {project.views} {t("views")}
            </span>

            <div className="flex gap-3">
              {project.techStack.map((tech) => {
                const Icon = tech.icon;

                return (
                  <span
                    key={tech.name}
                    title={tech.name}
                    className="size-8 rounded-lg bg-muted flex items-center justify-center"
                  >
                    <Icon
                      className="size-5"
                      style={{ color: tech.iconColor }}
                    />
                  </span>
                );
              })}
            </div>
          </div>

          <ActionLinks githubUrl={project.githubUrl} url={project.url} t={t} />
        </div>
      </section>

      {/* Preview Image */}
      <section className="mb-16">
        <div className="relative aspect-video max-w-2xl mx-auto overflow-hidden rounded-2xl border border-border">
          <Image
            src={project.previewImage}
            alt={t(`items.${project.id}.name`)}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110"
          />
        </div>
      </section>
      {/* Overview */}
      <section className="mb-16">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-6">
          <BookOpenText className="size-6 text-accent" />
          {t("overview")}
        </h2>
        <p className="text-muted-foreground leading-8">
          {t(`items.${project.id}.longDescription`)}
        </p>
      </section>

      <SectionDivider />
      {/* Tech Stack */}
      <section className="mb-16">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-8">
          <Boxes className="size-6 text-accent" />
          {t("techStack")}
        </h2>

        <div className="grid gap-5">
          {project.techStackDetailed.map((tech) => {
            const key = techTranslationKey[tech.name];
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="size-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <Icon className="size-5" style={{ color: tech.iconColor }} />
                  </span>
                  <h3 className="font-semibold text-lg">{tech.name}</h3>
                </div>
                <p className="text-muted-foreground leading-7">
                  {t(`items.${project.id}.tech.${key}`)}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <SectionDivider />

      {/* Features */}
<div className="grid gap-6">
  <h2 className="flex items-center gap-3 text-2xl font-bold mb-8">
    <Sparkles className="size-6 text-accent" />
    {t("features")}
  </h2>

  {project.features.map((feature) => (
    <div
      key={feature.titleKey}
      className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-lg"
    >
      <div className="flex items-start gap-4">
        <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-green-500 bg-green-500/10">
          <span className="text-lg font-bold text-green-500">✓</span>
        </div>

        <div className="flex-1">
          <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-accent">
            {t(feature.titleKey)}
          </h3>

          <p className="leading-7 text-muted-foreground">
            {t(feature.descriptionKey)}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>
      <SectionDivider />
      {/* Challenges */}
{project.challenges && project.challenges.length > 0 && (
  <>
    <section className="mb-16">
      <h2 className="flex items-center gap-3 text-2xl font-bold mb-8">
        <TriangleAlert className="size-6 text-yellow-500" />
        {t("challenges")}
      </h2>

      <div className="grid gap-6">
        {project.challenges.map((challenge) => (
          <div
            key={challenge.titleKey}
            className="rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-6"
          >
            <div className="flex gap-4">
              <div className="mt-1 flex size-10 items-center justify-center rounded-xl bg-yellow-500/10 shrink-0">
                <TriangleAlert className="size-5 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {t(challenge.titleKey)}
                </h3>
                <p className="leading-7 text-muted-foreground">
                  {t(challenge.descriptionKey)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
)}

      {/* Bottom Footer */}
      <footer className="mt-20 border-t border-border pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-semibold">{t(`items.${project.id}.name`)}</p>
          <p className="text-sm text-muted-foreground mt-1">{t("thanks")}</p>
        </div>

        <ActionLinks githubUrl={project.githubUrl} url={project.url} t={t} />
      </footer>
    </article>
  );
}