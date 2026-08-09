import Image from "next/image";
import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section className="max-w-6xl mx-auto px-8 py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">{t("title")}</h1>

        <p className="text-muted-foreground mt-2">{t("description")}</p>
      </div>

      <hr className="border-border mb-10" />

      <div className="space-y-8 text-lg leading-9 text-muted-foreground">
        <p>
          {t.rich("paragraph1", {
            name: (chunks) => (
              <span className="text-foreground font-medium">{chunks}</span>
            ),
          })}
        </p>

        <p>{t("paragraph2")}</p>

        <p>{t("paragraph3")}</p>
      </div>

      <div className="mt-10">
        <p className="mb-3 text-lg">{t("signOff")}</p>

        <div className="relative h-20 w-52">
          <Image
            src="/images/signature.png"
            alt="Tanda tangan"
            fill
            className="object-contain object-left"
          />
        </div>
      </div>

    </section>
  );
}