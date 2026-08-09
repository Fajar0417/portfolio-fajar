import { useTranslations } from "next-intl";
import { CreationTabs } from "@/components/sections/creation-tabs";

export default function CreationsPage() {
  const t = useTranslations("creations");

  return (
   <section className="max-w-6xl mx-auto px-8 py-12">
      <h1 className="text-2xl font-bold mb-2">{t("title")}</h1>
      <p className="text-muted-foreground mb-8">{t("description")}</p>

      <hr className="border-dashed border-border mb-8" />

      <CreationTabs />
    </section>
  );
}