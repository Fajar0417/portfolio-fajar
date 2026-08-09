export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "instagram" | "tiktok" | "threads";
}

export interface LinkItem {
  id: "portfolio" | "monkeytype" | "saweria";
  title: string;
  description: string;
  url: string;
  icon: "globe" | "keyboard" | "heart";
}

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/Fajar0417", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/fajar-aja", icon: "linkedin" },
  { name: "Instagram", url: "https://instagram.com/fajar_jay17", icon: "instagram" },
  { name: "TikTok", url: "https://tiktok.com/@jayajahhh", icon: "tiktok" },
  { name: "Threads", url: "https://threads.net/@#", icon: "threads" },
];

export const linkItems: LinkItem[] = [
  {
    id: "portfolio",
    title: "Portofolio",
    description: "Website pribadi & portofolio",
    url: "https://satriabahari.my.id",
    icon: "globe",
  },
  {
    id: "monkeytype",
    title: "Monkeytype",
    description: "Profil kecepatan mengetik",
    url: "https://monkeytype.com",
    icon: "keyboard",
  },
  {
    id: "saweria",
    title: "Saweria",
    description: "Platform donasi Indonesia",
    url: "https://saweria.co/fajarferdiansyah",
    icon: "heart",
  },
];
export const contactInfo = {
  email: "fajarferdiansyah3009@gmail.com",
};