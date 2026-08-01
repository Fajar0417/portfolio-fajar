import Image from "next/image";
import type { CreationProfile } from "@/data/creations";

function formatCount(n: number) {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return n.toString();
}

export function CreationProfileCard({ profile }: { profile: CreationProfile }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 mb-10">
      <div className="flex gap-4 flex-1">
        <div className="relative size-20 rounded-full overflow-hidden border border-border shrink-0">
          <Image
            src={profile.avatar}
            alt={profile.displayName}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="mb-1">
            <span className="text-accent font-bold">{profile.username}</span>{" "}
            <span className="text-muted-foreground">{profile.displayName}</span>
          </p>

          <div className="grid grid-cols-3 gap-x-8 gap-y-2 mb-3">
            <div>
              <p className="font-bold">{profile.stats.followers}</p>
              <p className="text-xs text-muted-foreground">Followers</p>
            </div>
            <div>
              <p className="font-bold">{profile.stats.following}</p>
              <p className="text-xs text-muted-foreground">Following</p>
            </div>
            <div>
              <p className="font-bold">{profile.stats.likes}</p>
              <p className="text-xs text-muted-foreground">Likes</p>
            </div>
            <div>
              <p className="font-bold">{profile.stats.totalViews}</p>
              <p className="text-xs text-muted-foreground">Total Views</p>
            </div>
            <div>
              <p className="font-bold">{profile.stats.totalComments}</p>
              <p className="text-xs text-muted-foreground">Total Comments</p>
            </div>
            <div>
              <p className="font-bold">{profile.stats.totalShares}</p>
              <p className="text-xs text-muted-foreground">Total Shares</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {profile.bio}
            <br />
            {profile.email}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 shrink-0">
        <div className="bg-black text-white rounded-xl px-4 py-2 flex items-center gap-2 font-semibold text-sm">
          {profile.platform === "TikTok" ? "🎵" : "📷"} {profile.platform}
        </div>
        <a
          href={profile.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-accent-foreground font-semibold text-sm px-6 py-2 rounded-xl hover:opacity-90 transition-opacity"
        >
          Open {profile.platform}
        </a>
        <a
          href="#"
          className="text-xs text-muted-foreground underline hover:text-foreground"
        >
          View Privacy Policy
        </a>
      </div>
    </div>
  );
}

export { formatCount };