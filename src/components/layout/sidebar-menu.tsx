"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl"; // Import useLocale & useTranslations
import { Link, usePathname, useRouter } from "@/i18n/navigation"; // Import useRouter
import { signIn, signOut, useSession } from "next-auth/react";
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
  Menu,
  X,
  Sun,
  Moon,
  Command,
  ChevronRight,
  BadgeCheck,
  LogOut,
  Loader2,
} from "lucide-react";
import { useTheme } from "next-themes";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CommandPalette } from "@/components/command-palette";

// Component SVG Google
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

// Component SVG GitHub
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

// Definisikan key terjemahan untuk setiap item menu
const menuItems = [
  { labelKey: "menu.home", href: "/", icon: Home },
  { labelKey: "menu.about", href: "/about", icon: User },
  { labelKey: "menu.creations", href: "/creations", icon: Smartphone },
  { labelKey: "menu.achievements", href: "/achievements", icon: Award },
  { labelKey: "menu.projects", href: "/projects", icon: FolderKanban },
  { labelKey: "menu.dashboard", href: "/dashboard", icon: LayoutGrid },
  { labelKey: "menu.guestbook", href: "/guestbook", icon: MessageSquare },
  { labelKey: "menu.contact", href: "/contact", icon: BookUser },
  { labelKey: "menu.links", href: "/links", icon: Link2 },
];

export function SidebarMenu() {
  const t = useTranslations("sidebar"); // Namespace 'sidebar'
  const [open, setOpen] = useState(false);
  const [openCommand, setOpenCommand] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter(); // Pastikan router di-import
  const locale = useLocale();

  const { data: session, status } = useSession();

  // Fungsi untuk mengganti bahasa
  function switchLocale(newLocale: "id" | "en") {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <>
      {/* Modal Command Palette */}
      <CommandPalette open={openCommand} onOpenChange={setOpenCommand} />

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Buka menu"
            className="text-foreground"
          >
            <Menu className="size-6" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-full sm:max-w-md bg-background border-l border-border p-0 h-[100dvh]"
        >
          {/* Hidden Accessibility Title */}
          <SheetHeader className="sr-only">
            <SheetTitle>Navigasi Utama</SheetTitle>
          </SheetHeader>

          <div className="flex flex-col h-full p-6 overflow-y-auto">
            {/* Header: Profile Image */}
            <div className="flex items-start justify-between mb-6">
              <div className="relative size-20 rounded-full overflow-hidden border border-border">
                <Image
                  src="/images/profile.jpeg"
                  // Terjemahkan alt text gambar profil (asumsi ada key 'profileAlt' di json)
                  alt="Foto profil Fajar Ferdiansyah"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Name + badge + Theme/Locale Controls */}
           <div className="flex flex-col items-start gap-2 mb-6">
  <div className="flex items-center gap-2">
    <h2 className="text-xl font-semibold">Fajar Ferdiansyah</h2>
    <BadgeCheck className="size-5 text-blue-500 fill-blue-500/20" />
  </div>

  {/* Badge Status - Diterjemahkan menggunakan t("badge") */}
  <span className="flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-400 text-sm font-medium px-4 py-1.5 rounded-full">
    <span className="size-1.5 rounded-full bg-amber-400" />
    {t("badge")}
  </span>

  <div className="flex items-center gap-2 mt-1">
    {/* Switcher Bahasa (US / ID) */}
    <div className="flex items-center bg-muted rounded-full p-1">
      <button
        type="button"
        onClick={() => switchLocale("en")}
        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
          locale === "en"
            ? "bg-amber-400 text-black"
            : "text-muted-foreground hover:text-foreground"
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
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        ID
      </button>
    </div>

    {/* Tombol Theme Toggle */}
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="size-8 rounded-full bg-muted flex items-center justify-center transition-transform active:scale-95"
      aria-label="Ganti tema"
    >
      {theme === "dark" ? (
        <Sun className="size-4" />
      ) : (
        <Moon className="size-4" />
      )}
    </button>
  </div>
</div>

            <Separator className="mb-4" />

            {/* Menu Items */}
            <nav className="flex flex-col gap-1">
              {menuItems.map((item) => {
                const Icon = item.icon;

                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
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
                      {/* Terjemahkan label menu menggunakan labelKey */}
                      <span>{t(item.labelKey)}</span>
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

            <Separator className="my-4" />

            {/* AUTHENTICATION AREA */}
            {status === "loading" ? (
              <div className="flex items-center justify-center py-4 text-muted-foreground gap-2">
                <Loader2 className="size-4 animate-spin" />
                {/* Terjemahkan teks loading */}
                <span className="text-xs">{t("loading")}</span>
              </div>
            ) : session?.user ? (
              <div className="rounded-xl border border-border p-4 bg-card">
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
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-muted px-4 py-2 text-xs font-medium text-foreground transition hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30 active:scale-[0.99]"
                >
                  <LogOut className="size-3.5" />
                  {/* Terjemahkan teks tombol keluar */}
                  {t("logout")}
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                {/* Terjemahkan judul login Description */}
                <h3 className="font-semibold text-sm">{t("loginTitle")}</h3>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  {t("loginDescription")}
                </p>

                <button
                  type="button"
                  onClick={() => signIn("google")}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-neutral-100 border border-neutral-200 active:scale-[0.99]"
                >
                  <GoogleIcon className="size-4" />
                  {/* Terjemahkan teks tombol lanjutkan dengan Google */}
                  <span>{t("continueGoogle")}</span>
                </button>

                <button
                  type="button"
                  onClick={() => signIn("github")}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 active:scale-[0.99]"
                >
                  <GithubIcon className="size-4" />
                  {/* Terjemahkan teks tombol lanjutkan dengan GitHub */}
                  <span>{t("continueGithub")}</span>
                </button>
              </div>
            )}

            <Separator className="my-4" />

            {/* COMMAND PALETTE BUTTON */}
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-full border border-amber-400/80 bg-amber-500/10 px-4 py-3 text-sm font-medium text-amber-400 hover:bg-amber-500/20 transition-all duration-200 active:scale-[0.98]"
              onClick={() => {
                setOpen(false);
                setOpenCommand(true);
              }}
            >
              <span className="flex items-center gap-3">
                <Command className="size-5 text-amber-400" />
                {/* Terjemahkan teks Palet Perintah */}
                <span>{t("commandPalette")}</span>
              </span>
              <kbd className="text-xs text-amber-400/80 font-normal">⌘K</kbd>
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}