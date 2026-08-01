export interface TikTokVideo {
  id: string;
  url: string;

  title: string;

  thumbnail: string;

  createdAt: string;

  duration?: number;

  views: number;

  likes: number;

  comments: number;

  shares: number;

  postType: "video" | "images";
}