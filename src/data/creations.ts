export const creations = [
  {
    title: "SakuHijau",
    category: "Web Development",
    image: "/images/creations/sakuhijau.jpg",
    tech: ["Next.js", "Laravel", "Tailwind"],
    href: "#",
  },
  {
    title: "Visual Nexora",
    category: "Photography",
    image: "/images/creations/photo.jpg",
    tech: ["Lightroom"],
    href: "#",
  },
  {
    title: "Company Profile",
    category: "Videography",
    image: "/images/creations/video.jpg",
    tech: ["Premiere Pro", "After Effects"],
    href: "#",
  },
];

export interface CreationVideo {
  id: string;
  title: string;
  thumbnail: string;
  views: number;
  url: string;
}

export interface CreationProfile {
  platform: "TikTok" | "Instagram";
  username: string;
  displayName: string;
  avatar: string;
  stats: {
    followers: string;
    following: string;
    likes: string;
    totalViews: string;
    totalComments: string;
    totalShares: string;
  };
  bio: string;
  email: string;
  profileUrl: string;
  totalVideos: number;
}

export const tiktokProfile: CreationProfile = {
  platform: "TikTok",
  username: "jayajahhh",
  displayName: "jay",
  avatar: "/images/profile-tiktok.jpeg",
  stats: {
    followers: "3.4K",
    following: "81",
    likes: "135.1K",
    totalViews: "1.9M",
    totalComments: "2.1K",
    totalShares: "9.9K",
  },
  bio: "155 cm - Random Ig: fajar_jay17 lynk.id/nexoraincodeon",
  email: "fajarferdiansyah3009@gmail.com",
  profileUrl: "https://www.tiktok.com/@jayajahhh?_r=1&_t=ZS-98WTS8Zga4j",
  totalVideos: 115,
};
export interface CreationItem {
  url: string;
  manualThumbnail?: string; // isi ini kalau oEmbed gagal (biasanya untuk photo post)
  manualTitle?: string;
}
// Cukup isi URL video di sini — thumbnail & judul diambil otomatis via oEmbed
export const tiktokVideoUrls: CreationItem[] = [
  {
    url: "https://www.tiktok.com/@jayajahhh/photo/7630415031426911508",
    manualThumbnail: "/images/creations/photo-2.jpeg",
    manualTitle: "Judul photo post 1",
  },
  {
    url: "https://www.tiktok.com/@jayajahhh/photo/7630720334622412052",
    manualThumbnail: "/images/creations/photo-3.jpeg",
    manualTitle: "Judul photo post 2",
  },
  {
    url: "https://www.tiktok.com/@jayajahhh/photo/7630732231572507925",
    manualThumbnail: "/images/creations/photo-4.jpeg",
    manualTitle: "Judul photo post 3",
  },
  { url: "https://www.tiktok.com/@jayajahhh/video/7667456135212862728" },
  { url: "https://www.tiktok.com/@jayajahhh/video/7667347586491223314" },
  { url: "https://www.tiktok.com/@jayajahhh/video/7658085348517399815" },
  {
    url: "https://www.tiktok.com/@jayajahhh/photo/7657024520061979911",
    manualThumbnail: "/images/creations/photo-5.jpeg",
    manualTitle: "Judul photo post 4",
  },
  { url: "https://www.tiktok.com/@jayajahhh/video/7655607092350340370" },
  { url: "https://www.tiktok.com/@jayajahhh/video/7650538072207117588" },
  { url: "https://www.tiktok.com/@jayajahhh/video/7641955685730766101" },
  {
    url: "https://www.tiktok.com/@jayajahhh/photo/7637219576891247892",
    manualThumbnail: "/images/creations/photo-6.jpeg",
    manualTitle: "Judul photo post 5",
  },
  { url: "https://www.tiktok.com/@jayajahhh/video/7635997838492699925" },
  {
    url: "https://www.tiktok.com/@jayajahhh/photo/7634473192643497236",
    manualThumbnail: "/images/creations/photo-7.jpeg",
    manualTitle: "Judul photo post 6",
  },
  { url: "https://www.tiktok.com/@jayajahhh/video/7632279064262348052" },
  { url: "https://www.tiktok.com/@jayajahhh/video/7631165515746053397" },
  { url: "https://www.tiktok.com/@jayajahhh/video/7631081661785984276" },
  { url: "https://www.tiktok.com/@jayajahhh/video/7630797757837626645" },
  { url: "https://www.tiktok.com/@jayajahhh/video/7630052164261481748" },
  {
    url: "https://www.tiktok.com/@jayajahhh/photo/7629297467791559957",
    manualThumbnail: "/images/creations/photo-8.jpeg",
    manualTitle: "Judul photo post 7",
  },
  { url: "https://www.tiktok.com/@jayajahhh/video/7627724918242839829" },
  { url: "https://www.tiktok.com/@jayajahhh/video/7627663644125383956" },
  {
    url: "https://www.tiktok.com/@jayajahhh/photo/7616706095465205013",
    manualThumbnail: "/images/creations/photo-9.jpeg",
    manualTitle: "Judul photo post 8",
  },
  { url: "https://www.tiktok.com/@jayajahhh/video/7615549763676556565" },
  { url: "https://www.tiktok.com/@jayajahhh/video/7612985169926016276" },
  { url: "https://www.tiktok.com/@jayajahhh/video/7595919971876719890" },
  { url: "https://www.tiktok.com/@jayajahhh/video/7579603357749349640" },
  {
    url: "https://www.tiktok.com/@jayajahhh/photo/7514663246499040530",
    manualThumbnail: "/images/creations/photo-10.jpeg",
    manualTitle: "Judul photo post 9",
  },
  {
    url: "https://www.tiktok.com/@jayajahhh/photo/7514297346608385288",
    manualThumbnail: "/images/creations/photo-11.jpeg",
    manualTitle: "Judul photo post 10",
  },
  { url: "https://www.tiktok.com/@jayajahhh/video/7494602701494373650" },
  { url: "https://www.tiktok.com/@jayajahhh/video/7494241298224827655" },
  { url: "https://www.tiktok.com/@jayajahhh/video/7493498677915405575" },
  { url: "https://www.tiktok.com/@jayajahhh/video/7493133910109588743" },
];
export const tiktokVideos: CreationVideo[] = [
  {
    id: "1",
    title: "SHADCN UI LIBRARY DESIGN NOMOR 1 BUAT VIBE CODING",
    thumbnail: "/images/creations/shadcn-ui.png",
    views: 362,
    url: "https://tiktok.com/@satriaabaharii/video/1",
  },
  {
    id: "2",
    title: "OBSIDIAN OTAK TAMBAHAN UNTUK AI AGENTS",
    thumbnail: "/images/creations/obsidian.png",
    views: 2220,
    url: "https://tiktok.com/@satriaabaharii/video/2",
  },
  {
    id: "3",
    title: "INI FULL BREAKDOWN 9ROUTER",
    thumbnail: "/images/creations/9router.png",
    views: 44300,
    url: "https://tiktok.com/@satriaabaharii/video/3",
  },
  {
    id: "4",
    title: "6 TOOLS YANG AKU PAKAI BUAT VIBE CODING",
    thumbnail: "/images/creations/vibe-coding-tools.png",
    views: 52600,
    url: "https://tiktok.com/@satriaabaharii/video/4",
  },
  // tambahkan sisanya sampai total 115 sesuai referensi
];