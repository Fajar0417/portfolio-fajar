"use client";

import { useTranslations } from "next-intl";
import { Send } from "lucide-react";
import { contactInfo } from "@/data/links";

export function ContactCard() {
  const t = useTranslations("links");

  return (
    <div className="rounded-3xl border border-border bg-card p-6">
      <h3 className="mb-2 text-xl font-semibold">
        {t("contact.title")}
      </h3>

      <p className="mb-6 leading-relaxed text-sm text-muted-foreground">
        {t("contact.description")}
      </p>

      <a
        href={`mailto:${contactInfo.email}`}
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-yellow-500
          px-5
          py-3
          text-sm
          font-semibold
          text-black
          transition-all
          duration-300
          hover:scale-105
          hover:bg-yellow-400
        "
      >
        <Send className="size-4" />
        {t("contact.button")}
      </a>

      <div className="mt-5 rounded-2xl border border-border bg-muted/40 px-4 py-3">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          Email
        </p>

        <p className="mt-1 break-all font-medium">
          {contactInfo.email}
        </p>
      </div>
    </div>
  );
}