export interface Experience {
  id: string;
  role: string;
  company: string;
  logo: string;
  location: string;
  period: string;
  durationKey: string;
  typeKey: string;
  workModeKey: string;
  tasksKey: string;
  learningsKey: string;
  taskCount: number;
  learningCount: number;
}

export const experiences: Experience[] = [
  {
    id: "inovindo",
    role: "Backend Developer Intern",
    company: "PT Inovindo Digital Media",
    logo: "/images/logos/idm.jpeg",
    location: "Bandung, West Java, Indonesia 🇮🇩",
    period: "Jul 2024 - Nov 2024",
    durationKey: "items.inovindo.duration",
    typeKey: "items.inovindo.type",
    workModeKey: "items.inovindo.workMode",
    tasksKey: "items.inovindo.tasks",
    learningsKey: "items.inovindo.learnings",
    taskCount: 5,
    learningCount: 4,
  },
  {
    id: "freelance",
    role: "Freelance Full Stack Web Developer",
    company: "Self-Employed",
    logo: "/images/logos/up.png",
    location: "Ciamis, West Java, Indonesia 🇮🇩",
    period: "Jan 2025 - Present",
    durationKey: "items.freelance.duration",
    typeKey: "items.freelance.type",
    workModeKey: "items.freelance.workMode",
    tasksKey: "items.freelance.tasks",
    learningsKey: "items.freelance.learnings",
    taskCount: 5,
    learningCount: 4,
  },
];