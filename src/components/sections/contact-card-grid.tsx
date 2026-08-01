import { ExternalLink } from "lucide-react";
import {
  GmailIcon,
  InstagramIcon,
  LinkedinIcon,
  TiktokIcon,
  GithubIcon,
} from "@/components/shared/social-icons";
import { contactCards, type ContactCard } from "@/data/contact";

const iconMap = {
  mail: GmailIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  tiktok: TiktokIcon,
  github: GithubIcon,
};

function Card({ card, large }: { card: ContactCard; large?: boolean }) {
  const Icon = iconMap[card.icon];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${card.gradient} p-6 ${
        large ? "sm:p-8" : ""
      }`}
    >
      <div className="relative z-10">
        <h3 className="text-white font-semibold text-lg mb-1">
          {card.title}
        </h3>
        <p className="text-white/80 text-sm mb-5 max-w-xs">
          {card.description}
        </p>
        <a
          href={card.url}
          target={card.url.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-white/20 hover:bg-white/30 transition-colors text-white text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm"
        >
          {card.buttonLabel}
          <ExternalLink className="size-3.5" />
        </a>
      </div>

      <div className="absolute top-1/2 right-4 -translate-y-1/2 size-14 rounded-2xl border-2 border-white/40 bg-white/10 flex items-center justify-center backdrop-blur-sm">
        <Icon className="size-7 text-white" />
      </div>
    </div>
  );
}

export function ContactCardGrid() {
  const [gmail, ...rest] = contactCards;

  return (
    <div className="flex flex-col gap-4">
      <Card card={gmail} large />
      <div className="grid sm:grid-cols-2 gap-4">
        {rest.map((card) => (
          <Card key={card.title} card={card} />
        ))}
      </div>
    </div>
  );
}