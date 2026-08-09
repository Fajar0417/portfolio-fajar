import { useTranslations } from "next-intl";
import { ContactCardGrid } from "@/components/sections/contact-card-grid";
import { ContactForm } from "@/components/sections/contact-form";
import { SectionDivider } from "@/components/shared/section-divider";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <section className="max-w-6xl mx-auto px-8 py-12">
      <h1 className="text-2xl font-bold mb-2">{t("title")}</h1>
      <p className="text-muted-foreground mb-8">{t("description")}</p>

      <div className="border-t border-dashed border-border pt-8 mb-6">
        <h2 className="font-semibold mb-4">{t("socialTitle")}</h2>
        <ContactCardGrid />
      </div>

          <SectionDivider />

      <ContactForm />
    </section>
  );
}