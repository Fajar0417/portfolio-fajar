import Image from "next/image";
import { MapPin, Globe, KeyboardIcon, Heart, ExternalLink } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  TiktokIcon,
  ThreadsIcon,
} from "@/components/shared/social-icons";
import { LinkHeader } from "@/components/sections/link-header";
import { ContactCard } from "@/components/sections/contact-card";
import { socialLinks, linkItems } from "@/data/links";

const socialIconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  tiktok: TiktokIcon,
  threads: ThreadsIcon,
};

const linkIconMap = {
  globe: Globe,
  keyboard: KeyboardIcon,
  heart: Heart,
};

export function LinkPage() {
  return (
    <section className="max-w-md mx-auto px-6 py-10 flex flex-col items-center">
      <LinkHeader />

      <div className="relative size-32 rounded-full overflow-hidden border-2 border-border mb-6">
        <Image
          src="/images/profile.jpeg"
          alt="Foto profil Fajar Ferdiansyah"
          fill
          className="object-cover"
          priority
        />
      </div>

      <h1 className="text-2xl font-bold mb-1">Fajar Ferdiansyah</h1>
      <p className="text-accent font-semibold mb-2">Insinyur Perangkat Lunak</p>
      <p className="flex items-center gap-1.5 text-muted-foreground mb-6">
        <MapPin className="size-4" />
        Ciamis, Indonesia
      </p>

      <div className="flex items-center gap-3 mb-10">
        {socialLinks.map((social) => {
          const Icon = socialIconMap[social.icon];
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="size-11 rounded-full bg-muted flex items-center justify-center hover:bg-muted/70 transition-colors"
            >
              <Icon className="size-5" />
            </a>
          );
        })}
      </div>

      <div className="w-full flex flex-col gap-4">
        {linkItems.map((item) => {
          const Icon = linkIconMap[item.icon];
          return (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 hover:border-accent transition-colors"
            >
              <span className="size-11 rounded-xl bg-muted flex items-center justify-center shrink-0">
                <Icon className="size-5" />
              </span>
              <span className="flex-1">
                <span className="block font-semibold">{item.title}</span>
                <span className="block text-sm text-muted-foreground">
                  {item.description}
                </span>
              </span>
              <ExternalLink className="size-4 text-muted-foreground shrink-0" />
            </a>
          );
        })}
      </div>

      <ContactCard />
    </section>
  );
}