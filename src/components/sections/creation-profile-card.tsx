import Image from "next/image";
import type { CreationProfile } from "@/data/creations";

export function CreationProfileCard({
  profile,
}: {
  profile: CreationProfile;
}) {
  return (
    <div className="mb-10 rounded-3xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="flex gap-5">
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-yellow-400 shrink-0">
            <Image
              src={profile.avatar}
              alt={profile.displayName}
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-bold">
                @{profile.username}
              </h2>

              <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-black">
                🎵 TikTok
              </span>
            </div>

            <p className="mb-4 text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
              {profile.bio}
            </p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              <Stat
                label="Followers"
                value={profile.stats.followers}
              />

              <Stat
                label="Videos"
                value={profile.totalVideos}
              />

              <Stat
                label="Likes"
                value={profile.stats.likes}
              />

              <Stat
                label="Views"
                value={profile.stats.totalViews}
              />

              <Stat
                label="Comments"
                value={profile.stats.totalComments}
              />

              <Stat
                label="Shares"
                value={profile.stats.totalShares}
              />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-3">
          <a
            href={profile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-xl
              bg-yellow-400
              px-6
              py-3
              text-center
              font-semibold
              text-black
              transition
              hover:scale-105
            "
          >
            Open TikTok
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="
              rounded-xl
              border
              border-white/10
              px-6
              py-3
              text-center
              text-sm
              text-muted-foreground
              transition
              hover:border-yellow-400
              hover:text-white
            "
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-center">
      <p className="text-lg font-bold text-white">
        {value}
      </p>

      <p className="mt-1 text-xs text-muted-foreground">
        {label}
      </p>
    </div>
  );
}