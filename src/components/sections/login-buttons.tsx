"use client";

import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { GithubIcon } from "@/components/shared/social-icons";
import Image from "next/image";

export function LoginButtons() {
  const t = useTranslations("guestbook");

  return (
    <div className="text-center py-6">
      <p className="text-muted-foreground text-sm mb-4">
        {t("loginPrompt")}
      </p>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => signIn("google")}
          className="flex items-center gap-2 bg-white text-black font-medium text-sm px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors"
        >
          <Image src="/images/google-logo.svg" alt="" width={18} height={18} />
          {t("loginGoogle")}
        </button>
        <button
          onClick={() => signIn("github")}
          className="flex items-center gap-2 bg-neutral-900 border border-border text-white font-medium text-sm px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors"
        >
          <GithubIcon className="size-4" />
          {t("loginGithub")}
        </button>
      </div>
    </div>
  );
}