"use client";

import { useTranslations } from "next-intl";
import { ExternalLink } from "lucide-react";

import {
  GmailIcon,
  InstagramIcon,
  LinkedinIcon,
  TiktokIcon,
  GithubIcon,
} from "@/components/shared/social-icons";

import {
  contactCards,
  type ContactCard,
} from "@/data/contact";

const iconMap = {
  mail: GmailIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  tiktok: TiktokIcon,
  github: GithubIcon,
};

function Card({
  card,
  large,
}: {
  card: ContactCard;
  large?: boolean;
}) {
  const t = useTranslations("contact.cards");

  const Icon = iconMap[card.icon];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${card.gradient} p-6 ${
        large ? "sm:p-8" : ""
      }`}
    >
      <div className="relative z-10">
        <h3 className="mb-1 text-lg font-semibold text-white">
          {t(`${card.id}.title`)}
        </h3>

        <p className="mb-5 max-w-xs text-sm text-white/80">
          {t(`${card.id}.description`)}
        </p>

        <a
          href={card.url}
          target={
            card.url.startsWith("mailto:")
              ? undefined
              : "_blank"
          }
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/30"
        >
          {t(`${card.id}.button`)}
          <ExternalLink className="size-3.5" />
        </a>
      </div>

      <div className="absolute top-1/2 right-4 flex size-14 -translate-y-1/2 items-center justify-center rounded-2xl border-2 border-white/40 bg-white/10 backdrop-blur-sm">
        <Icon className="size-7 text-white" />
      </div>
    </div>
  );
}

export function ContactCardGrid() {
  const [gmail, ...rest] = contactCards;

  return (
    <div className="flex flex-col gap-4">
      <Card card={gmail} large />

      <div className="grid gap-4 sm:grid-cols-2">
        {rest.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}