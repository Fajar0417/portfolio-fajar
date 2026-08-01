export interface ContactCard {
  title: string;
  description: string;
  buttonLabel: string;
  url: string;
  icon: "mail" | "instagram" | "linkedin" | "tiktok" | "github";
  gradient: string;
}

export const contactCards: ContactCard[] = [
  {
    title: "Tetap Terhubung",
    description: "Hubungi saya melalui email untuk pertanyaan atau kolaborasi.",
    buttonLabel: "Pergi ke Gmail",
    url: "mailto:fajarferdiansyah3009@gmail.com",
    icon: "mail",
    gradient: "from-red-600 to-red-800",
  },
  {
    title: "Ikuti Perjalanan Saya",
    description: "Ikuti perjalanan kreatif saya.",
    buttonLabel: "Pergi ke Instagram",
    url: "https://instagram.com/fajar_jay17",
    icon: "instagram",
    gradient: "from-purple-600 via-pink-600 to-orange-500",
  },
  {
    title: "Mari Terhubung",
    description: "Terhubung dengan saya secara profesional.",
    buttonLabel: "Pergi ke Linkedin",
    url: "https://linkedin.com/in/fajar-aja",
    icon: "linkedin",
    gradient: "from-sky-600 to-blue-700",
  },
  {
    title: "Bergabung dalam Keseruan",
    description: "Tonton konten yang menarik dan menyenangkan.",
    buttonLabel: "Pergi ke Tiktok",
    url: "https://tiktok.com/@jayajahhh",
    icon: "tiktok",
    gradient: "from-neutral-700 to-neutral-900",
  },
  {
    title: "Jelajahi Kode",
    description: "Jelajahi karya sumber terbuka saya.",
    buttonLabel: "Pergi ke Github",
    url: "https://github.com/Fajar0417",
    icon: "github",
    gradient: "from-slate-800 to-slate-950",
  },
];

export const contactEmail = "fajarferdiansyah3009@gmail.com";