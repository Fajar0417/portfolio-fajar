"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useTheme } from "next-themes";
import { signIn, signOut, useSession } from "next-auth/react";
import { CommandPalette } from "@/components/command-palette";
import {
  Home,
  User,
  Smartphone,
  Award,
  FolderKanban,
  LayoutGrid,
  MessageSquare,
  BookUser,
  Link2,
  BadgeCheck,
  ChevronRight,
  Sun,
  Moon,
  LogOut,
  Loader2,
  Command,
} from "lucide-react";

function GoogleIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.85A11 11 0 0 0 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.05H2.18a11 11 0 0 0 0 9.9l3.66-2.85z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1a11 11 0 0 0-9.82 6.05l3.66 2.85C6.71 7.31 9.14 5.38 12 5.38z"
      />
    </svg>
  );
}

function GithubIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

const menuIcons = [
  { key: "home", href: "/", icon: Home },
  { key: "about", href: "/about", icon: User },
  { key: "creations", href: "/creations", icon: Smartphone },
  { key: "achievements", href: "/achievements", icon: Award },
  { key: "projects", href: "/projects", icon: FolderKanban },
  { key: "dashboard", href: "/dashboard", icon: LayoutGrid },
  { key: "guestbook", href: "/guestbook", icon: MessageSquare },
  { key: "contact", href: "/contact", icon: BookUser },
  { key: "links", href: "/links", icon: Link2 },
];

export function DesktopSidebar() {
  const t = useTranslations("sidebar");
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const { theme, setTheme } = useTheme();
  const [openCommand, setOpenCommand] = useState(false);
  const { data: session, status } = useSession();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function switchLocale(newLocale: "id" | "en") {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <>
      <CommandPalette open={openCommand} onOpenChange={setOpenCommand} />
      <aside className="sticky top-0 h-screen overflow-y-auto border-r border-border [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border/60 hover:[&::-webkit-scrollbar-thumb]:bg-border">
        <div className="flex flex-col items-center pt-6 px-4">
          <div className="relative w-28 h-28 rounded-full overflow-hidden border">
            <Image
              src="/images/profile.jpeg"
              fill
              alt="Foto Profil"
              className="object-cover"
            />
          </div>

          <div className="mt-4 flex items-center gap-2">
            <h2 className="text-xl font-semibold">Fajar Ferdiansyah</h2>
            <BadgeCheck className="size-5 text-blue-500 fill-blue-500/20" />
          </div>

          <span className="mt-3 flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-400 text-sm font-medium px-4 py-1.5 rounded-full">
            <span className="size-1.5 rounded-full bg-amber-400" />
            {t("badge")}
          </span>

          <div className="flex items-center gap-2 mt-4">
            <div className="flex items-center bg-muted rounded-full p-1">
              <button
                type="button"
                onClick={() => switchLocale("en")}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  locale === "en"
                    ? "bg-amber-400 text-black"
                    : "text-muted-foreground"
                }`}
              >
                US
              </button>
              <button
                type="button"
                onClick={() => switchLocale("id")}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  locale === "id"
                    ? "bg-amber-400 text-black"
                    : "text-muted-foreground"
                }`}
              >
                ID
              </button>
            </div>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="size-8 rounded-full bg-muted flex items-center justify-center"
              aria-label="Ganti tema"
            >
              {!mounted ? (
                <span className="size-4" />
              ) : theme === "dark" ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
            </button>
          </div>
        </div>

        <nav className="mt-8 px-4 flex flex-col gap-1.5">
          {menuIcons.map((item) => {
            const Icon = item.icon;

            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-200 ${
                  isActive
                    ? "bg-muted text-foreground font-medium"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-yellow-400" />
                )}

                <span className="flex items-center gap-3">
                  <Icon
                    className={`size-5 transition-colors ${
                      isActive
                        ? "text-yellow-400"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  />
                  <span>{t(`menu.${item.key}`)}</span>
                </span>

                <ChevronRight
                  className={`size-4 transition-all duration-300 ${
                    isActive
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-2"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* ================= SECTION AUTH ================= */}
        <div className="shrink-0 border-t border-border p-5 mt-6">
          <div className="rounded-2xl border border-border bg-card p-4">
            {status === "loading" ? (
              <div className="flex items-center justify-center py-4 text-muted-foreground gap-2">
                <Loader2 className="size-4 animate-spin" />
                <span className="text-xs">{t("loading")}</span>
              </div>
            ) : session?.user ? (
              <div>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border shrink-0">
                    <Image
                      src={session.user.image || "/images/profile.jpeg"}
                      alt={session.user.name ?? "User"}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">
                      {session.user.name}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      {session.user.email}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => signOut()}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-muted px-4 py-2 text-xs font-medium text-foreground transition hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30"
                >
                  <LogOut className="size-3.5" />
                  {t("logout")}
                </button>
              </div>
            ) : (
              <div>
                <h3 className="font-semibold text-sm">{t("loginTitle")}</h3>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  {t("loginDescription")}
                </p>

                <div className="mt-4 space-y-2">
                  <button
                    type="button"
                    onClick={() => signIn("google")}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-neutral-100 border border-neutral-200"
                  >
                    <GoogleIcon className="size-4" />
                    <span>{t("continueGoogle")}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => signIn("github")}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
                  >
                    <GithubIcon className="size-4" />
                    <span>{t("continueGithub")}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ================= PALET PERINTAH BUTTON ================= */}
        <div className="shrink-0 px-5 my-4">
          <button
            type="button"
            onClick={() => setOpenCommand(true)}
            className="flex w-full items-center justify-between rounded-full border border-amber-400/80 bg-amber-500/10 px-4 py-2.5 text-sm font-medium text-amber-400 hover:bg-amber-500/20 transition-all duration-200 active:scale-[0.98]"
          >
            <span className="flex items-center gap-2.5">
              <Command className="size-4 text-amber-400" />
              <span>{t("commandPalette")}</span>
            </span>
            <span className="text-xs tracking-tight text-amber-400/80 font-normal">
              ⌘K
            </span>
          </button>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="shrink-0 border-t border-border p-5 text-center">
          <p className="text-xs text-muted-foreground">{t("copyright")}</p>
          <p className="mt-1 text-[11px] text-muted-foreground/70">
            {t("version")}
          </p>
        </div>
      </aside>
    </>
  );
}