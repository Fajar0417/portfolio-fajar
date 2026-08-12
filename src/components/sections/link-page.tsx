"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  MapPin,
  Globe,
  KeyboardIcon,
  Heart,
  ExternalLink,
  HelpCircle, // Icon cadangan jika icon tidak ditemukan
} from "lucide-react";

import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  TiktokIcon,
  ThreadsIcon,
} from "@/components/shared/social-icons";

import { ContactCard } from "@/components/sections/contact-card";
import { socialLinks, linkItems } from "@/data/links";

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  tiktok: TiktokIcon,
  threads: ThreadsIcon,
};

const linkIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  globe: Globe,
  keyboard: KeyboardIcon,
  heart: Heart,
};

export function LinkPage() {
  const t = useTranslations("links");

  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-6 py-16">
      {/* Profile Card */}
      <div className="w-full rounded-3xl border border-border bg-card/80 p-8 shadow-sm backdrop-blur">
        <div className="flex flex-col items-center">
          <div className="relative mb-6 size-32 overflow-hidden rounded-full border-4 border-yellow-500/20 shadow-lg">
            <Image
              src="/images/profile.jpeg"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="text-3xl font-bold">Fajar Ferdiansyah</h1>

          <p className="mt-2 font-medium text-yellow-500">{t("role")}</p>

          <p className="mt-2 flex items-center gap-2 text-muted-foreground">
            <MapPin className="size-4" />
            {t("location")}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((social) => {
              // Gunakan HelpCircle jika icon di data/links tidak ditemukan
              const Icon = socialIconMap[social.icon] || HelpCircle;

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500 hover:text-yellow-500"
                >
                  <Icon className="size-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="mt-8 w-full space-y-4">
        {linkItems.map((item) => {
          // Gunakan Globe jika icon di data/links tidak ditemukan
          const Icon = linkIconMap[item.icon] || Globe;

          return (
            <a
              key={item.id || item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card/80 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/40 hover:shadow-lg hover:shadow-yellow-500/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-500">
                <Icon className="size-5" />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold">
                  {item.id ? t(`items.${item.id}.title`) : ""}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {item.id ? t(`items.${item.id}.description`) : ""}
                </p>
              </div>

              <ExternalLink className="size-5 text-muted-foreground transition group-hover:text-yellow-500" />
            </a>
          );
        })}
      </div>

      <div className="mt-8 w-full">
        {/* <ContactCard /> */}
      </div>
    </section>
  );
}