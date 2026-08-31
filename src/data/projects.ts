import { IconType } from "react-icons";
import { FaLaravel, FaPhp, FaDatabase } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiMysql,
  SiSupabase,
} from "react-icons/si";

export type ProjectType = "Web" | "Mobile";

export type ProjectCategory =
  | "Personal"
  | "Internship"
  | "Freelance"
  | "Competition";

export interface TechStackItem {
  name: string;
  icon: IconType;
  iconColor: string;
  descriptionKey: string;
}

export interface Feature {
  titleKey: string;
  descriptionKey: string;
}

export interface Challenge {
  titleKey: string;
  descriptionKey: string;
}

export interface Project {
  id: string;
  slug: string;

  nameKey: string;
  descriptionKey: string;
  longDescriptionKey: string;

  image: string;
  previewImage: string;

  url?: string;
  githubUrl?: string;

  views: number;

  type: ProjectType;
  category: ProjectCategory;

  featured?: boolean;

  techStack: {
    name: string;
    icon: IconType;
    iconColor: string;
  }[];

  techStackDetailed: TechStackItem[];

  features: Feature[];

  challenges?: Challenge[];
}

export const projects: Project[] = [
  

  {
  id: "studentnotehub",

  slug: "studentnotehub",

  nameKey: "items.studentnotehub.name",

  descriptionKey: "items.studentnotehub.description",

  longDescriptionKey: "items.studentnotehub.longDescription",

  image: "/images/projects/studentnotehub.png",

  previewImage: "/images/projects/studentnotehub.png",

  url: "https://studentnotehub.web.id",

  githubUrl: "https://github.com/Fajar0417/studentnotehub.git",

  views: 267,

  type: "Web",

  category: "Personal",

  featured: true,

  techStack: [
    {
      name: "Next.js",
      icon: SiNextdotjs,
      iconColor: "#000000",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      iconColor: "#3178C6",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      iconColor: "#06B6D4",
    },
    {
      name: "Supabase",
      icon: SiSupabase,
      iconColor: "#3ECF8E",
    },
  ],

  techStackDetailed: [
    {
      name: "Next.js",
      icon: SiNextdotjs,
      iconColor: "#000000",
      descriptionKey: "items.studentnotehub.tech.nextjs",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      iconColor: "#3178C6",
      descriptionKey: "items.studentnotehub.tech.typescript",
    },
    {
      name: "Supabase",
      icon: SiSupabase,
      iconColor: "#3ECF8E",
      descriptionKey: "items.studentnotehub.tech.supabase",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      iconColor: "#06B6D4",
      descriptionKey: "items.studentnotehub.tech.tailwind",
    },
  ],

  features: [
    {
      titleKey: "items.studentnotehub.features.editor.title",
      descriptionKey: "items.studentnotehub.features.editor.description",
    },
    {
      titleKey: "items.studentnotehub.features.planner.title",
      descriptionKey: "items.studentnotehub.features.planner.description",
    },
    {
      titleKey: "items.studentnotehub.features.flashcard.title",
      descriptionKey: "items.studentnotehub.features.flashcard.description",
    },
    {
      titleKey: "items.studentnotehub.features.search.title",
      descriptionKey: "items.studentnotehub.features.search.description",
    },
  ],

  challenges: [
    {
      titleKey: "items.studentnotehub.challenges.autosave.title",
      descriptionKey: "items.studentnotehub.challenges.autosave.description",
    },
    {
      titleKey: "items.studentnotehub.challenges.rls.title",
      descriptionKey: "items.studentnotehub.challenges.rls.description",
    },
  ],
},

   {
    id: "pkl",

    slug: "sistem-pkl",

    nameKey: "items.pkl.name",

    descriptionKey: "items.pkl.description",

    longDescriptionKey: "items.pkl.longDescription",

    image: "/images/projects/pkl.png",

    previewImage: "/images/projects/pkl.png",

    url: "https://pkl.smkn1kawali.sch.id/PKL%20SMKN%201%20Kawali",

    views: 385,

    type: "Web",

    category: "Internship",

    featured: true,

    techStack: [
      {
        name: "Laravel",
        icon: FaLaravel,
        iconColor: "#FF2D20",
      },
      {
        name: "PHP",
        icon: FaPhp,
        iconColor: "#777BB4",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        iconColor: "#06B6D4",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        iconColor: "#4479A1",
      },
    ],

    techStackDetailed: [
      {
        name: "Laravel",
        icon: FaLaravel,
        iconColor: "#FF2D20",
        descriptionKey: "items.pkl.tech.laravel",
      },
      {
        name: "PHP",
        icon: FaPhp,
        iconColor: "#777BB4",
        descriptionKey: "items.pkl.tech.php",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        iconColor: "#4479A1",
        descriptionKey: "items.pkl.tech.mysql",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        iconColor: "#06B6D4",
        descriptionKey: "items.pkl.tech.tailwind",
      },
    ],

    features: [
      {
        titleKey: "items.pkl.features.attendance.title",
        descriptionKey: "items.pkl.features.attendance.description",
      },
      {
        titleKey: "items.pkl.features.journal.title",
        descriptionKey: "items.pkl.features.journal.description",
      },
      {
        titleKey: "items.pkl.features.letters.title",
        descriptionKey: "items.pkl.features.letters.description",
      },
      {
        titleKey: "items.pkl.features.progress.title",
        descriptionKey: "items.pkl.features.progress.description",
      },
      {
        titleKey: "items.pkl.features.access.title",
        descriptionKey: "items.pkl.features.access.description",
      },
      {
        titleKey: "items.pkl.features.responsive.title",
        descriptionKey: "items.pkl.features.responsive.description",
      },
    ],
   challenges: [
  {
    titleKey: "items.pkl.challenges.approvalFlow.title",
    descriptionKey: "items.pkl.challenges.approvalFlow.description",
  },
],
  },

   {
    id: "portfolio",
    slug: "portfolio-website",
    nameKey: "items.portfolio.name",
    descriptionKey: "items.portfolio.description",
    longDescriptionKey: "items.portfolio.longDescription",
    image: "/images/projects/portfolio.png",
    previewImage: "/images/projects/portfolio.png",
    url: "https://fajarportfolio.my.id",
    githubUrl: "https://github.com/Fajar0417/portfolio-fajar",
    views: 2563,
    type: "Web",
    category: "Personal",
    featured: true,
    techStack: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
        iconColor: "#000000",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        iconColor: "#3178C6",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        iconColor: "#06B6D4",
      },
      {
        name: "Prisma",
        icon: SiPrisma,
        iconColor: "#2D3748",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        iconColor: "#4169E1",
      },
    ],

    techStackDetailed: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
        iconColor: "#000000",
        descriptionKey: "items.portfolio.tech.nextjs",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        iconColor: "#3178C6",
        descriptionKey: "items.portfolio.tech.typescript",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        iconColor: "#06B6D4",
        descriptionKey: "items.portfolio.tech.tailwind",
      },
      {
        name: "Prisma",
        icon: SiPrisma,
        iconColor: "#2D3748",
        descriptionKey: "items.portfolio.tech.prisma",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        iconColor: "#4169E1",
        descriptionKey: "items.portfolio.tech.postgresql",
      },
    ],

    features: [
      {
        titleKey: "items.portfolio.features.i18n.title",
        descriptionKey: "items.portfolio.features.i18n.description",
      },
      {
        titleKey: "items.portfolio.features.guestbook.title",
        descriptionKey: "items.portfolio.features.guestbook.description",
      },
      {
        titleKey: "items.portfolio.features.dashboard.title",
        descriptionKey: "items.portfolio.features.dashboard.description",
      },
      {
        titleKey: "items.portfolio.features.creations.title",
        descriptionKey: "items.portfolio.features.creations.description",
      },
    ],

    challenges: [
      {
        titleKey: "items.portfolio.challenges.i18nMigration.title",
        descriptionKey: "items.portfolio.challenges.i18nMigration.description",
      },
    ],
  },
   {
    id: "pos",

    slug: "point-of-sale",

    nameKey: "items.pos.name",

    descriptionKey: "items.pos.description",

    longDescriptionKey: "items.pos.longDescription",

    image: "/images/projects/pm.png",

    previewImage: "/images/projects/pm.png",

    url: "https://kasir-kawali.inovindoacademy.com",

    githubUrl: "https://github.com/Fajar0417/KasirAja-.git",

    views: 165,

    type: "Web",

    category: "Internship",

    featured: true,

    techStack: [
      {
        name: "Laravel",
        icon: FaLaravel,
        iconColor: "#FF2D20",
      },
      {
        name: "PHP",
        icon: FaPhp,
        iconColor: "#777BB4",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        iconColor: "#06B6D4",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        iconColor: "#4479A1",
      },
    ],

    techStackDetailed: [
      {
        name: "Laravel",
        icon: FaLaravel,
        iconColor: "#FF2D20",
        descriptionKey: "items.pos.tech.laravel",
      },
      {
        name: "PHP",
        icon: FaPhp,
        iconColor: "#777BB4",
        descriptionKey: "items.pos.tech.php",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        iconColor: "#4479A1",
        descriptionKey: "items.pos.tech.mysql",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        iconColor: "#06B6D4",
        descriptionKey: "items.pos.tech.tailwind",
      },
    ],

    features: [
      {
        titleKey: "items.pos.features.product.title",
        descriptionKey: "items.pos.features.product.description",
      },
      {
        titleKey: "items.pos.features.transaction.title",
        descriptionKey: "items.pos.features.transaction.description",
      },
      {
        titleKey: "items.pos.features.customer.title",
        descriptionKey: "items.pos.features.customer.description",
      },
      {
        titleKey: "items.pos.features.report.title",
        descriptionKey: "items.pos.features.report.description",
      },
    ],

    challenges: [
      {
        titleKey: "items.pos.challenges.stock.title",
        descriptionKey: "items.pos.challenges.stock.description",
      },
      {
        titleKey: "items.pos.challenges.dashboard.title",
        descriptionKey: "items.pos.challenges.dashboard.description",
      },
    ],
  },
];