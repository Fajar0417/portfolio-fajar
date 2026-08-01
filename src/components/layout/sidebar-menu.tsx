"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
} from "lucide-react";
import { useTheme } from "next-themes";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const menuItems = [
  { label: "Beranda", href: "/", icon: Home },
  { label: "Tentang", href: "/about", icon: User },
  { label: "Kreasi", href: "/creations", icon: Smartphone },
  { label: "Pencapaian", href: "/achievements", icon: Award },
  { label: "Proyek", href: "/projects", icon: FolderKanban },
  { label: "Dasbor", href: "/dashboard", icon: LayoutGrid },
  { label: "Buku Tamu", href: "/guestbook", icon: MessageSquare },
  { label: "Kontak", href: "/contact", icon: BookUser },
  { label: "Links", href: "/links", icon: Link2 },
];


export function SidebarMenu() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  return (
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
        className="w-full sm:max-w-md bg-background border-l border-border p-0"
      >
        <div className="flex flex-col h-full p-6 overflow-y-auto">
          {/* Header: avatar + close button */}
          <div className="flex items-start justify-between mb-6">
            <div className="relative size-20 rounded-full overflow-hidden border border-border">
              <Image
                src="/images/profile.jpeg"
                alt="Foto profil Fajar Ferdiansyah"
                fill
                className="object-cover"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              aria-label="Tutup menu"
            >
              <X className="size-5" />
            </Button>
          </div>

          {/* Name + badge + toggles */}
          {/* Name + badge */}
          <div className="flex flex-col items-start gap-2 mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">Fajar Ferdiansyah</h2>
              <BadgeCheck className="size-5 text-blue-500 fill-blue-500/20" />
            </div>

            <span className="flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent text-sm font-medium px-4 py-1.5 rounded-full">
              <span className="size-1.5 rounded-full bg-accent" />
              Building Cool Stuff
            </span>

            <div className="flex items-center gap-2 mt-1">
              {/* Toggle bahasa — UI saja, belum ada logic switch */}
              <div className="flex items-center bg-muted rounded-full p-1">
                <button
                  type="button"
                  className="px-3 py-1.5 rounded-full text-xs font-semibold bg-accent text-accent-foreground"
                >
                  US
                </button>
                <button
                  type="button"
                  className="px-3 py-1.5 rounded-full text-xs font-semibold text-muted-foreground"
                >
                  ID
                </button>
              </div>

              {/* Toggle tema — sudah terhubung ke next-themes */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="size-8 rounded-full bg-muted flex items-center justify-center"
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

          {/* Menu list */}
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
                  className={`group relative flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-200 ${isActive
                      ? "bg-muted text-foreground font-medium"
                      : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                    }`}
                >
                  {/* Garis indikator di kiri */}
                  {isActive && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-yellow-400" />
                  )}

                  <span className="flex items-center gap-3">
                    <Icon
                      className={`size-5 transition-colors ${isActive
                          ? "text-yellow-400"
                          : "text-muted-foreground group-hover:text-foreground"
                        }`}
                    />
                    <span>{item.label}</span>
                  </span>

                  <ChevronRight
                    className={`size-4 transition-all duration-300 ${isActive
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2"
                      }`}
                  />
                </Link>
              );
            })}
          </nav>

          <Separator className="my-4" />

          {/* Google Login */}
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors">
            <GoogleIcon className="size-5" />
            Google Login
          </button>

          <Separator className="my-4" />

          {/* Command Palette trigger */}
          <button
            className="flex items-center justify-between px-4 py-3 rounded-xl border border-accent text-accent hover:bg-accent/10 transition-colors"
            onClick={() => {
              // trigger command palette di sini, misal via cmdk
            }}
          >
            <span className="flex items-center gap-3">
              <Command className="size-5" />
              Palet Perintah
            </span>
            <kbd className="text-xs opacity-70">⌘K</kbd>
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function GoogleIcon({ className }: { className?: string }) {
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