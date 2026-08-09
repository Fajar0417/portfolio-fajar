import tiktokData from "@/data/tiktok.json";

export const creations = [
  {
    id: "webdev",
    image: "/images/creations/webdev.png",
    tech: ["Next.js", "TypeScript", "Supabase"],
    href: "#",
  },
  {
    id: "photography",
    image: "/images/creations/fotograpi.jpeg",
    tech: ["Lightroom"],
    href: "#",
  },
  {
    id: "design",
    image: "/images/creations/design.jpeg",
    tech: ["Premiere Pro", "After Effects", "Canva"],
    href: "#",
  },
];

export interface CreationVideo {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  video?: string;
  createdAt: string;
  duration?: number;

  views: number;
  likes: number;
  comments: number;
  shares: number;
}

export interface CreationProfile {
  platform: "TikTok";
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

const first = tiktokData[0];

const totalViews = tiktokData.reduce((a, b) => a + (b.views || 0), 0);
const totalLikes = tiktokData.reduce((a, b) => a + (b.likes || 0), 0);
const totalComments = tiktokData.reduce((a, b) => a + (b.comments || 0), 0);
const totalShares = tiktokData.reduce((a, b) => a + (b.shares || 0), 0);

const format = (n: number) => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return n.toString();
};

export const tiktokProfile: CreationProfile = {
  platform: "TikTok",

  username: first?.profile.username ?? "jayajahhh",

  displayName: "jay",

  avatar:
    first?.profile.avatar ??
    "/images/profile-tiktok.jpeg",

  stats: {
    followers: format(first?.profile.followers ?? 0),

    following: "-",

    likes: format(totalLikes),

    totalViews: format(totalViews),

    totalComments: format(totalComments),

    totalShares: format(totalShares),
  },

  bio: first?.profile.bio ?? "",

  email: "fajarferdiansyah3009@gmail.com",

  profileUrl: "https://www.tiktok.com/@jayajahhh",

  totalVideos: tiktokData.length,
};

export const tiktokVideos: CreationVideo[] = tiktokData;