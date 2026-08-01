"use client";

import { useState } from "react";
import { Sun, Moon, QrCode } from "lucide-react";
import { useTheme } from "next-themes";

export function LinkHeader() {
  const { theme, setTheme } = useTheme();
  const [lang, setLang] = useState<"US" | "ID">("ID");

  return (
    <div className="w-full flex items-center justify-between mb-8">
      <div className="flex items-center gap-2">
        {/* Toggle tema */}
        <div className="flex items-center bg-muted rounded-full p-1">
          <button
            onClick={() => setTheme("light")}
            className={`size-8 rounded-full flex items-center justify-center transition-colors ${
              theme === "light" ? "bg-card" : ""
            }`}
            aria-label="Mode terang"
          >
            <Sun className="size-4" />
          </button>
          <button
            onClick={() => setTheme("dark")}
            className={`size-8 rounded-full flex items-center justify-center transition-colors ${
              theme === "dark" ? "bg-card" : ""
            }`}
            aria-label="Mode gelap"
          >
            <Moon className="size-4" />
          </button>
        </div>

        {/* Toggle bahasa */}
        <div className="flex items-center bg-muted rounded-full p-1 text-xs font-semibold">
          <button
            onClick={() => setLang("US")}
            className={`px-3 py-1.5 rounded-full transition-colors ${
              lang === "US" ? "bg-card" : "text-muted-foreground"
            }`}
          >
            US
          </button>
          <button
            onClick={() => setLang("ID")}
            className={`px-3 py-1.5 rounded-full transition-colors ${
              lang === "ID" ? "bg-accent text-accent-foreground" : "text-muted-foreground"
            }`}
          >
            ID
          </button>
        </div>
      </div>

      <button
        className="size-9 rounded-full bg-muted flex items-center justify-center"
        aria-label="Tampilkan QR Code"
      >
        <QrCode className="size-4" />
      </button>
    </div>
  );
}