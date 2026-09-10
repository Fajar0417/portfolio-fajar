"use client";

import { signIn } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { GithubIcon } from "@/components/shared/social-icons";
import Image from "next/image";

export function LoginButtons() {
  const t = useTranslations("guestbook");
  const pathname = usePathname();

  return (
    <div className="text-center py-6">
      <p className="text-muted-foreground text-sm mb-4">
        {t("loginPrompt")}
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          onClick={() => signIn("google", { callbackUrl: pathname })}
          className="flex w-full sm:w-auto items-center justify-center gap-2 bg-white text-black font-medium text-sm px-4 py-2.5 rounded-full hover:bg-white/90 transition-colors"
        >
          <Image src="/images/google-logo.svg" alt="" width={16} height={16} />
          {t("loginGoogle")}
        </button>
        <button
          onClick={() => signIn("github", { callbackUrl: pathname })}
          className="flex w-full sm:w-auto items-center justify-center gap-2 bg-neutral-900 border border-border text-white font-medium text-sm px-4 py-2.5 rounded-full hover:bg-neutral-800 transition-colors"
        >
          <GithubIcon className="size-4" />
          {t("loginGithub")}
        </button>
      </div>
    </div>
  );
}