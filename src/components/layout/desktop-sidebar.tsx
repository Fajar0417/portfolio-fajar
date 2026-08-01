"use client";

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
  BadgeCheck,
  ChevronRight,
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
          <h2 className="text-xl font-semibold">
            Fajar Ferdiansyah
          </h2>

          <BadgeCheck className="size-5 text-blue-500 fill-blue-500/20" />
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
              {/* Garis indikator */}
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