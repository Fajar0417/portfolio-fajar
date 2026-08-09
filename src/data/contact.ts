export interface ContactCard {
  id: "gmail" | "instagram" | "linkedin" | "tiktok" | "github";
  url: string;
  icon: "mail" | "instagram" | "linkedin" | "tiktok" | "github";
  gradient: string;
}

export const contactCards: ContactCard[] = [
  {
    id: "gmail",
    url: "mailto:fajarferdiansyah3009@gmail.com",
    icon: "mail",
    gradient: "from-red-600 to-red-800",
  },
  {
    id: "instagram",
    url: "https://instagram.com/fajar_jay17",
    icon: "instagram",
    gradient: "from-purple-600 via-pink-600 to-orange-500",
  },
  {
    id: "linkedin",
    url: "https://linkedin.com/in/fajar-aja",
    icon: "linkedin",
    gradient: "from-sky-600 to-blue-700",
  },
  {
    id: "tiktok",
    url: "https://tiktok.com/@jayajahhh",
    icon: "tiktok",
    gradient: "from-neutral-700 to-neutral-900",
  },
  {
    id: "github",
    url: "https://github.com/Fajar0417",
    icon: "github",
    gradient: "from-slate-800 to-slate-950",
  },
];

export const contactEmail = "fajarferdiansyah3009@gmail.com";