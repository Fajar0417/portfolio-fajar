"use client";

import { useEffect } from "react";
import { useRouter } from "@/i18n/navigation";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
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
} from "lucide-react";

const navigationItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Creations", href: "/creations", icon: Smartphone },
  { label: "Achievements", href: "/achievements", icon: Award },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "Dashboard", href: "/dashboard", icon: LayoutGrid },
  { label: "Guestbook", href: "/guestbook", icon: MessageSquare },
  { label: "Contact", href: "/contact", icon: BookUser },
  { label: "Links", href: "/links", icon: Link2 },
];

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter();

  // Handle shortcut global CMD+K / CTRL+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  const handleSelect = (href: string) => {
    onOpenChange(false);
    router.push(href);
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      {/* ⚠️ Tambahkan <Command> di sini sebagai pembungkus Context cmdk */}
      <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium">
        <CommandInput placeholder="Search commands..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="NAVIGATION">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <CommandItem
                  key={item.href}
                  onSelect={() => handleSelect(item.href)}
                  className="cursor-pointer flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm"
                >
                  <Icon className="size-4 text-muted-foreground" />
                  <span>{item.label}</span>
                </CommandItem>
              );
            })}
          </CommandGroup>
        </CommandList>

        {/* Footer panduan tombol */}
        <div className="flex items-center gap-4 border-t border-border px-4 py-2.5 text-[11px] text-muted-foreground bg-muted/20">
          <span className="flex items-center gap-1">
            <kbd className="rounded bg-muted px-1.5 py-0.5 border border-border">
              ↑↓
            </kbd>{" "}
            navigate
          </span>
          <span className="flex items-center gap-1">
            <kbd className="rounded bg-muted px-1.5 py-0.5 border border-border">
              ↵
            </kbd>{" "}
            select
          </span>
          <span className="flex items-center gap-1">
            <kbd className="rounded bg-muted px-1.5 py-0.5 border border-border">
              Esc
            </kbd>{" "}
            close
          </span>
        </div>
      </Command>
    </CommandDialog>
  );
}