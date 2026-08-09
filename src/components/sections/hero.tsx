import { useTranslations } from "next-intl";
import { MapPin, Building2 } from "lucide-react";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="space-y-8">
        {/* Heading */}
        <div className="space-y-4">
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            {t("greeting")} <span className="text-primary">{t("name")}</span>
          </h1>

          <ul className="flex flex-col gap-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0" />
              {t("location")}
            </li>

            <li className="flex items-center gap-2">
              <Building2 className="size-4 shrink-0" />
              {t("workMode")}
            </li>
          </ul>
        </div>

        {/* Description */}
        <div className="max-w-4xl space-y-5 text-[17px] leading-8 text-muted-foreground">
          <p>{t.rich("paragraph1", { strong: (chunks) => <strong>{chunks}</strong> })}</p>
          <p>{t.rich("paragraph2", { strong: (chunks) => <strong>{chunks}</strong> })}</p>
          <p>{t.rich("paragraph3", { strong: (chunks) => <strong>{chunks}</strong> })}</p>
        </div>
      </div>
    </section>
  );
}