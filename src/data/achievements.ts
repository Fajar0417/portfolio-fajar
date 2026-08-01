export type AchievementType = "Profesional" | "Akademik" | "Kursus";
export type AchievementCategory =
  | "Backend"
  | "Frontend"
  | "Mobile"
  | "Freelance"
  | "Course";

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  credentialId: string;
  image: string;
  type: AchievementType;
  categories: AchievementCategory[];
  issueDate: string;
  url?: string;
}

export const achievements: Achievement[] = [
  {
    id: "parto-backend",
    title: "Backend Developer Internship - Parto.id",
    issuer: "Affan Technology Indonesia",
    credentialId: "196/EKS/HCLGA/ATI/VIII/2025",
    image: "/images/achievements/sertifikat.png",
    type: "Profesional",
    categories: ["Backend"],
    issueDate: "July 2025",
  },
  {
    id: "buildwithangga-ebook",
    title: "E-book Petunjuk Pro: Freelance Web Developer & Kerja Remote",
    issuer: "Build With Angga",
    credentialId: "",
    image: "/images/achievements/sertifikat2.png",
    type: "Kursus",
    categories: ["Course", "Freelance"],
    issueDate: "September 2025",
  },
  {
    id: "dicoding-jetpack",
    title: "Belajar Membuat Aplikasi Android dengan Jetpack Compose",
    issuer: "Dicoding Indonesia",
    credentialId: "81P2LGL38ZOY",
    image: "/images/achievements/sertifikat3.png",
    type: "Kursus",
    categories: ["Course", "Mobile"],
    issueDate: "January 2025",
  },
  {
    id: "dicoding-jetpack",
    title: "Belajar Membuat Aplikasi Android dengan Jetpack Compose",
    issuer: "Dicoding Indonesia",
    credentialId: "81P2LGL38ZOY",
    image: "/images/achievements/sertifikat4.png",
    type: "Kursus",
    categories: ["Course", "Mobile"],
    issueDate: "January 2025",
  },
  // tambahkan sisanya (total 53 sesuai referensi) di sini
];