export type ProjectType = "Web" | "Mobile";
export type ProjectCategory =
  | "Proyek Pribadi"
  | "Magang"
  | "Freelance"
  | "Lomba";

export interface TechStackItem {
  name: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  previewImage: string;
  url?: string;
  githubUrl?: string;
  views: number;
  type: ProjectType;
  category: ProjectCategory;
  featured?: boolean;
  techStack: { name: string; icon: string; color: string }[];
  techStackDetailed: TechStackItem[];
  features: Feature[];
  challenges?: { title: string; description: string }[];
}

export const projects: Project[] = [
  {
    id: "POS",
    slug: "pos",
    name: "POINT OF SALE (POS)",
    description:
      "Robust Fitness is a platform designed to help users achieve their fitness goals effectively and measurably.",
    longDescription:
      "Robust Fitness is a web platform designed to help users plan and track their fitness journey. It provides workout resources, progress tracking, and motivational tools in a clean, accessible interface. The platform is built on Laravel with a MySQL backend, serving a diverse user base ranging from beginners setting initial fitness goals to regular gym-goers tracking measurable progress over time.",
    image: "/images/projects/pm.png",
    previewImage: "/images/projects/pm.png",
    url: "https://kasir-kawali.inovindoacademy.com",
    githubUrl: "https://github.com/Fajar0417/KasirAja-.git",
    views: 165,
    type: "Web",
    category: "Magang",
    techStack: [
      { name: "PHP", icon: "php", color: "bg-indigo-700" },
      { name: "Tailwind", icon: "~", color: "bg-teal-600" },
      { name: "Laravel", icon: "L", color: "bg-red-700" },
      { name: "MySQL", icon: "M", color: "bg-orange-700" },
    ],
    techStackDetailed: [
      { name: "PHP", description: "Server-side application logic" },
      {
        name: "Laravel",
        description:
          "Full-featured MVC framework for routing, ORM, validation, and authentication",
      },
      {
        name: "MySQL",
        description:
          "Relational database storing user profiles, workout plans, and progress records",
      },
      { name: "Tailwind CSS", description: "Responsive utility-first styling" },
    ],
    features: [
      {
        title: "Workout Library",
        description:
          "A structured library of exercises and workout routines categorized by muscle group, difficulty, and equipment required, making it easy for users to find and plan sessions.",
      },
      {
        title: "Progress Tracking",
        description:
          "Users log completed workouts and track metrics over time, with visual summaries showing consistency and improvement trends.",
      },
      {
        title: "User Authentication",
        description:
          "Registration, login, and profile management with secure password hashing and session handling via Laravel's built-in auth scaffolding.",
      },
      {
        title: "Responsive Interface",
        description:
          "Optimized for use on mobile devices where users are most likely to access the app during or after a workout session.",
      },
    ],
    challenges: [
      // isi kalau ada
    ],
  },
];