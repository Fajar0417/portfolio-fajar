export type AchievementType = "Profesional" | "Akademik" | "Kursus";
export type AchievementCategory =
  | "Backend"
  | "Frontend"
  | "Mobile"
  | "Freelance"
  | "Financial"
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
  description?: string;
}

export const achievements: Achievement[] = [
  {
  id: "dicoding-dasar-pemrograman-javascript",
  title: "Belajar Dasar Pemrograman JavaScript",
  issuer: "Dicoding Indonesia",
  credentialId: "JMZVL20GQXN9",
  image: "/images/achievements/sertifikat7.png",
  type: "Kursus",
  categories: ["Backend", "Frontend"],
  issueDate: "Agustus 2026",
  description:
    "Sertifikat kompetensi kelulusan dari Dicoding Indonesia setelah menyelesaikan kelas Belajar Dasar Pemrograman JavaScript. Membahas fundamental JavaScript mulai dari runtime environment, sintaksis & variabel, pengolahan fungsi & struktur data (Object, Array, Map, Set, Spread/Rest operator), pengatur alur & error handling, modularisasi ESM, paradigma Object-Oriented Programming (OOP) & Functional Programming (FP), pengelolaan Asynchronous Process (Callback, Promise, Async/Await), hingga Code Quality & testing menggunakan Node.js dan Bun.",
},
{
  id: "dicoding-financial-literacy",
  title: "Introduction to Financial Literacy",
  issuer: "Dicoding Indonesia",
  credentialId: "6RPNO8934X2M",
  image: "/images/achievements/sertifikat6.png",
  type: "Kursus",
  categories: ["Financial"],
  issueDate: "Agustus 2026",
  description:
    "Sertifikat kompetensi kelulusan dari Dicoding Indonesia setelah menyelesaikan kelas Introduction to Financial Literacy dalam program Coding Camp powered by DBS Foundation 2026, dengan fokus pada prinsip-prinsip dasar literasi finansial, pengambilan keputusan keuangan sehari-hari, investasi, dan manajemen pinjaman.",
},
{
  id: "revou-intro-software-engineering",
  title: "Coding Camp - Intro to Software Engineering",
  issuer: "RevoU",
  credentialId: "-",
  image: "/images/achievements/sertifikat2.png",
  type: "Kursus",
  categories: ["Frontend"],
  issueDate: "June 2026",
  description:
    "Sertifikat kehadiran atas partisipasi dalam Coding Camp RevoU, sebuah kursus online bersertifikat selama 1 minggu yang membahas pengenalan Software Engineering.",
},
 {
  id: "juara-vibe-coding",
  title: "#JuaraVibeCoding Participant",
  issuer: "Google Developer Groups",
  credentialId: "JVC2605-6PVT-2H2L",
  image: "/images/achievements/sertifikat3.png",
  type: "Kursus",
  categories: ["Backend", "Frontend"],
  issueDate: "May 2026",
  description:
    "Sertifikat partisipasi dalam #JuaraVibeCoding yang diselenggarakan oleh Google Developer Groups, sebagai pengalaman dalam mengeksplorasi ide, kreativitas, dan pengembangan solusi berbasis teknologi.",
},
{
  id: "pkl-web-development",
  title: "Pengembangan Perangkat Lunak PKL SMKN 1 Kawali Berbasis Web",
  issuer: "SMK Negeri 1 Kawali",
  credentialId: "292/PK.03.03.01/SMKN1KWL",
  image: "/images/achievements/sertifikat5.jpg",
  type: "Profesional",
  categories: ["Backend"],
  issueDate: "March 2025",
  description:
    "Sertifikat penghargaan atas partisipasi aktif dan dedikasi dalam pengembangan perangkat lunak PKL SMKN 1 Kawali berbasis web. Berperan sebagai Backend Developer dengan fokus pada pengembangan sistem, pengelolaan database, serta perancangan dan implementasi kebutuhan backend aplikasi.",
},
{
  id: "pkl-inovindo",
  title: "Praktik Kerja Lapangan (PKL)",
  issuer: "PT Inovindo Digital Media",
  credentialId: "076/IDM/PKLSERTIFIKAT/X/2024",
  image: "/images/achievements/sertifikat.png",
  type: "Profesional",
  categories: ["Backend"],
  issueDate: "November 2025",
  description:
    "Sertifikat sebagai bukti telah menyelesaikan kegiatan Praktik Kerja Lapangan (PKL) di PT Inovindo, dengan memperoleh pengalaman kerja profesional serta menerapkan keterampilan pemrograman dalam pengembangan aplikasi.",
},
 {
  id: "dicoding-programming-logic-101",
  title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
  issuer: "Dicoding Indonesia",
  credentialId: "98XWVGQ0WPM3",
  image: "/images/achievements/sertifikat4.png",
  type: "Kursus",
  categories: ["Course"],
  issueDate: "September 2023",
  description:
    "Sertifikat kompetensi kelulusan dari Dicoding Indonesia setelah menyelesaikan kelas Pengenalan ke Logika Pemrograman (Programming Logic 101), dengan fokus pada dasar-dasar logika dan pemecahan masalah dalam pemrograman.",
},
  // tambahkan sisanya (total 53 sesuai referensi) di sini
];