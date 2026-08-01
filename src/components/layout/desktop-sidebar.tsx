"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
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
} from "lucide-react";

const menus = [
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

export function DesktopSidebar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <aside className="sticky top-0 h-screen border-r border-border p-8">
      <div className="flex flex-col items-center">
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

        <span className="mt-3 flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent text-sm font-medium px-4 py-1.5 rounded-full">
          <span className="size-1.5 rounded-full bg-accent" />
          Building Cool Stuff
        </span>

        <div className="flex items-center gap-2 mt-4">
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

      <nav className="mt-10 flex flex-col gap-2">
        {menus.map((item) => {
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
                <span>{item.label}</span>
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
    </aside>
  );
}