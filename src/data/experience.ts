export interface Experience {
  id: string;
  role: string;
  company: string;
  logo: string;
  location: string;
  period: string;
  duration: string;
  type: string;
  workMode: string;
  tasks: string[];
  learnings: string[];
}

export const experiences: Experience[] = [
  {
    id: "parto",
    role: "Backend Golang Developer",
    company: "Pt. Affan Technology Indonesia (Parto.id)",
    logo: "/images/logos/parto.jpeg",
    location: "Jambi, Indonesia 🇮🇩",
    period: "Jul 2025 - Sep 2025",
    duration: "2 bulan",
    type: "Internship",
    workMode: "Hybrid",
    tasks: [
      "Developed and maintained backend services using Golang for Parto.id's internal attendance application.",
      "Implemented efficient data handling and secure API integrations to support daily attendance workflows.",
      "Collaborated with frontend and product teams to ensure smooth functionality and seamless user experience.",
    ],
    learnings: [
      "Deepened understanding of Go's concurrency model and Clean Architecture within a production environment.",
      "Gained hands-on experience in implementing Agile Scrum.",
    ],
  },
  {
    id: "himasi",
    role: "Head of Technology in the Research and Technology Division",
    company: "Himpunan Mahasiswa Sistem Informasi Universitas Jambi (HIMASI UNJA)",
    logo: "/images/logos/himasi.jpeg",
    location: "Jambi, Indonesia 🇮🇩",
    period: "Dec 2024 - Dec 2025",
    duration: "1 tahun",
    type: "Part-time",
    workMode: "Onsite",
    tasks: [],
    learnings: [],
  },
];