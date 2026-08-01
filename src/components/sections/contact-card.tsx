import { Mail, Send } from "lucide-react";
import { contactInfo } from "@/data/links";

export function ContactCard() {
  return (
    <div className="w-full rounded-2xl border border-border bg-card p-6 mt-4">
      <span className="inline-flex items-center justify-center size-11 rounded-xl bg-accent/20 mb-4">
        <Mail className="size-5 text-accent" />
      </span>

      <h3 className="font-semibold mb-1">{contactInfo.title}</h3>
      <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
        {contactInfo.description}
      </p>

      <a
        href={`mailto:${contactInfo.email}`}
        className="inline-flex items-center gap-2 bg-white text-black font-medium text-sm px-4 py-2.5 rounded-full mb-4 hover:bg-white/90 transition-colors"
      >
        <Send className="size-4" />
        Kirim Email
      </a>

      <div className="bg-muted rounded-xl px-4 py-3 text-sm text-muted-foreground">
        {contactInfo.email}
      </div>
    </div>
  );
}