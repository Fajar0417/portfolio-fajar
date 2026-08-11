import { IconType } from "react-icons";

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaDocker,
  FaGithub,
  FaNpm,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiAstro,
  SiShadcnui,
  SiNextdotjs,
  SiTanstack,
  SiAuth0,
  SiAxios,
  SiZod,
  SiFramer,
  SiRedux,
  SiPrisma,
  SiExpress,
  SiGo,
  SiGin,
  SiSwagger,
  SiKotlin,
  SiJetpackcompose,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiSupabase,
  SiYarn,
  SiBun,
} from "react-icons/si";

export type SkillCategory =
  | "Utama"
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "Database"
  | "Tools";

export interface Skill {
  name: string;
  categories: SkillCategory[];
  icon: IconType;
  iconColor: string;
}

export const skills: Skill[] = [
  // --- UTAMA (Sesuai Revisi) ---
  {
    name: "Next.js",
    categories: ["Utama", "Frontend"],
    icon: SiNextdotjs,
    iconColor: "#FFFFFF",
  },
  {
    name: "React.js",
    categories: ["Utama", "Frontend"],
    icon: FaReact,
    iconColor: "#61DAFB",
  },
  {
    name: "JavaScript",
    categories: ["Utama", "Frontend"],
    icon: SiJavascript,
    iconColor: "#F7DF1E",
  },
  {
    name: "TypeScript",
    categories: ["Utama", "Frontend"],
    icon: SiTypescript,
    iconColor: "#3178C6",
  },
  {
    name: "TailwindCSS",
    categories: ["Utama", "Frontend"],
    icon: SiTailwindcss,
    iconColor: "#06B6D4",
  },
  {
    name: "Shadcn UI",
    categories: ["Utama", "Frontend"],
    icon: SiShadcnui,
    iconColor: "#FFFFFF",
  },
  {
    name: "PHP",
    categories: ["Utama", "Backend"],
    icon: FaPhp,
    iconColor: "#777BB4",
  },
  {
    name: "Laravel",
    categories: ["Utama", "Backend"],
    icon: FaLaravel,
    iconColor: "#FF2D20",
  },
  {
    name: "Supabase",
    categories: ["Utama", "Database"],
    icon: SiSupabase,
    iconColor: "#3ECF8E",
  },
  {
    name: "MySQL",
    categories: ["Utama", "Database"],
    icon: SiMysql,
    iconColor: "#4479A1",
  },

  // --- FRONTEND (Pindahan dari Utama & Data Lama) ---
  {
    name: "HTML",
    categories: ["Frontend"],
    icon: FaHtml5,
    iconColor: "#E34F26",
  },
  {
    name: "CSS",
    categories: ["Frontend"],
    icon: FaCss3Alt,
    iconColor: "#1572B6",
  },
  {
    name: "Bootstrap",
    categories: ["Frontend"],
    icon: FaBootstrap,
    iconColor: "#7952B3",
  },
  {
    name: "Vite",
    categories: ["Frontend"],
    icon: SiVite,
    iconColor: "#646CFF",
  },
  // {
  //   name: "Astro.js",
  //   categories: ["Frontend"],
  //   icon: SiAstro,
  //   iconColor: "#FF5D01",
  // },
  {
    name: "NextAuth.js",
    categories: ["Frontend"],
    icon: SiAuth0,
    iconColor: "#EB5424",
  },
  // {
  //   name: "TanStack",
  //   categories: ["Frontend"],
  //   icon: SiTanstack,
  //   iconColor: "#FF4154",
  // },
  {
    name: "Axios",
    categories: ["Frontend"],
    icon: SiAxios,
    iconColor: "#5A29E4",
  },
  // {
  //   name: "Zod",
  //   categories: ["Frontend"],
  //   icon: SiZod,
  //   iconColor: "#3E67B1",
  // },
  {
    name: "Framer Motion",
    categories: ["Frontend"],
    icon: SiFramer,
    iconColor: "#0055FF",
  },
  {
    name: "Redux",
    categories: ["Frontend"],
    icon: SiRedux,
    iconColor: "#764ABC",
  },

  // --- BACKEND (Data Lama) ---
  {
    name: "Prisma",
    categories: ["Backend"],
    icon: SiPrisma,
    iconColor: "#2D3748",
  },
  {
    name: "Node.js",
    categories: ["Backend"],
    icon: FaNodeJs,
    iconColor: "#5FA04E",
  },
  // {
  //   name: "Express.js",
  //   categories: ["Backend"],
  //   icon: SiExpress,
  //   iconColor: "#FFFFFF",
  // },
  // {
  //   name: "Go",
  //   categories: ["Backend"],
  //   icon: SiGo,
  //   iconColor: "#00ADD8",
  // },
  // {
  //   name: "Gin Gonic",
  //   categories: ["Backend"],
  //   icon: SiGin,
  //   iconColor: "#00ADD8",
  // },
  // {
  //   name: "Swagger",
  //   categories: ["Backend"],
  //   icon: SiSwagger,
  //   iconColor: "#85EA2D",
  // },

  // --- MOBILE (Data Lama) ---
  {
    name: "Kotlin",
    categories: ["Mobile"],
    icon: SiKotlin,
    iconColor: "#7F52FF",
  },
  {
    name: "Jetpack Compose",
    categories: ["Mobile"],
    icon: SiJetpackcompose,
    iconColor: "#3DDC84",
  },

  // --- DATABASE (Pindahan dari Utama & Data Lama) ---
  {
    name: "PostgreSQL",
    categories: ["Database"],
    icon: SiPostgresql,
    iconColor: "#4169E1",
  },
  {
    name: "Firebase",
    categories: ["Database"],
    icon: SiFirebase,
    iconColor: "#FFCA28",
  },

  // --- TOOLS (Pindahan dari Utama & Data Lama) ---
  {
    name: "Github",
    categories: ["Tools"],
    icon: FaGithub,
    iconColor: "#FFFFFF",
  },
  {
    name: "Npm",
    categories: ["Tools"],
    icon: FaNpm,
    iconColor: "#CB3837",
  },
  {
    name: "Docker",
    categories: ["Tools"],
    icon: FaDocker,
    iconColor: "#2496ED",
  },
  {
    name: "Yarn",
    categories: ["Tools"],
    icon: SiYarn,
    iconColor: "#2C8EBB",
  },
  {
    name: "Bun",
    categories: ["Tools"],
    icon: SiBun,
    iconColor: "#FBF0DF",
  },
];