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
  category: SkillCategory;
  icon: IconType;
  iconColor: string;
}

export const skills: Skill[] = [
  // Frontend
  {
    name: "HTML",
    category: "Frontend",
    icon: FaHtml5,
    iconColor: "#E34F26",
  },
  {
    name: "CSS",
    category: "Frontend",
    icon: FaCss3Alt,
    iconColor: "#1572B6",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    icon: FaBootstrap,
    iconColor: "#7952B3",
  },
  {
    name: "TailwindCSS",
    category: "Frontend",
    icon: SiTailwindcss,
    iconColor: "#06B6D4",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: SiJavascript,
    iconColor: "#F7DF1E",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: SiTypescript,
    iconColor: "#3178C6",
  },
  {
    name: "React.js",
    category: "Frontend",
    icon: FaReact,
    iconColor: "#61DAFB",
  },
  {
    name: "Vite",
    category: "Frontend",
    icon: SiVite,
    iconColor: "#646CFF",
  },
  {
    name: "Astro.js",
    category: "Frontend",
    icon: SiAstro,
    iconColor: "#FF5D01",
  },
  {
    name: "Shadcn UI",
    category: "Frontend",
    icon: SiShadcnui,
    iconColor: "#FFFFFF",
  },
 {
  name: "NextAuth.js",
  category: "Frontend",
  icon: SiAuth0,
  iconColor: "#EB5424",
},
 {
  name: "TanStack",
  category: "Frontend",
  icon: SiTanstack,
  iconColor: "#FF4154",
},
  {
    name: "Axios",
    category: "Frontend",
    icon: SiAxios,
    iconColor: "#5A29E4",
  },
  {
    name: "Zod",
    category: "Frontend",
    icon: SiZod,
    iconColor: "#3E67B1",
  },
  {
    name: "Framer Motion",
    category: "Frontend",
    icon: SiFramer,
    iconColor: "#0055FF",
  },
  {
    name: "Redux",
    category: "Frontend",
    icon: SiRedux,
    iconColor: "#764ABC",
  },

  // Utama
  {
    name: "Next.js",
    category: "Utama",
    icon: SiNextdotjs,
    iconColor: "#FFFFFF",
  },

  // Backend
  {
    name: "Prisma",
    category: "Backend",
    icon: SiPrisma,
    iconColor: "#2D3748",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: FaNodeJs,
    iconColor: "#5FA04E",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: SiExpress,
    iconColor: "#FFFFFF",
  },
  {
    name: "Go",
    category: "Backend",
    icon: SiGo,
    iconColor: "#00ADD8",
  },
  {
    name: "Gin Gonic",
    category: "Backend",
    icon: SiGin,
    iconColor: "#00ADD8",
  },
  {
    name: "Swagger",
    category: "Backend",
    icon: SiSwagger,
    iconColor: "#85EA2D",
  },
  {
    name: "PHP",
    category: "Backend",
    icon: FaPhp,
    iconColor: "#777BB4",
  },
  {
    name: "Laravel",
    category: "Backend",
    icon: FaLaravel,
    iconColor: "#FF2D20",
  },

  // Mobile
  {
    name: "Kotlin",
    category: "Mobile",
    icon: SiKotlin,
    iconColor: "#7F52FF",
  },
  {
    name: "Jetpack Compose",
    category: "Mobile",
    icon: SiJetpackcompose,
    iconColor: "#3DDC84",
  },

  // Database
  {
    name: "PostgreSQL",
    category: "Database",
    icon: SiPostgresql,
    iconColor: "#4169E1",
  },
  {
    name: "MySQL",
    category: "Database",
    icon: SiMysql,
    iconColor: "#4479A1",
  },
  {
    name: "Firebase",
    category: "Database",
    icon: SiFirebase,
    iconColor: "#FFCA28",
  },
  {
    name: "Supabase",
    category: "Database",
    icon: SiSupabase,
    iconColor: "#3ECF8E",
  },

  // Tools
  {
    name: "Docker",
    category: "Tools",
    icon: FaDocker,
    iconColor: "#2496ED",
  },
  {
    name: "Npm",
    category: "Tools",
    icon: FaNpm,
    iconColor: "#CB3837",
  },
  {
    name: "Yarn",
    category: "Tools",
    icon: SiYarn,
    iconColor: "#2C8EBB",
  },
  {
    name: "Bun",
    category: "Tools",
    icon: SiBun,
    iconColor: "#FBF0DF",
  },
  {
    name: "Github",
    category: "Tools",
    icon: FaGithub,
    iconColor: "#FFFFFF",
  },
];