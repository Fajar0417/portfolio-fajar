import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { creations } from "@/data/creations";

export function Creations() {
  const t = useTranslations("myCreations");

  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">
      {/* Header */}

      <div className="mb-12">
        <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1 text-sm font-medium text-yellow-500">
          {t("badge")}
        </span>

        <h1 className="mt-4 text-3xl font-bold tracking-tight">
          {t("title")}
        </h1>

        <p className="mt-4 max-w-2xl text-muted-foreground leading-7">
          {t("description")}
        </p>
      </div>

      {/* Grid */}

      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {creations.map((item) => (
          <article
            key={item.id}
            className="
              group
              overflow-hidden
              rounded-3xl
              border
              border-border
              bg-card/60
              backdrop-blur
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-yellow-500/40
              hover:shadow-2xl
              hover:shadow-yellow-500/10
            "
          >
            {/* Image */}

            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={item.image}
                alt={t(`items.${item.id}.title`)}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Category */}

              <span className="
                absolute
                left-4
                top-4
                rounded-full
                bg-black/50
                backdrop-blur
                px-3
                py-1
                text-xs
                font-medium
                text-white
              ">
                {t(`items.${item.id}.category`)}
              </span>

              {/* View Button */}

              <div className="
                absolute
                bottom-4
                right-4
                opacity-0
                translate-y-3
                transition-all
                duration-300
                group-hover:opacity-100
                group-hover:translate-y-0
              ">
                <button className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-black
                ">
                  {t("view")}
                  <ArrowUpRight className="size-4" />
                </button>
              </div>
            </div>

            {/* Content */}

            <div className="p-6">
              <h3 className="text-xl font-semibold">
                {t(`items.${item.id}.title`)}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-border
                      bg-muted/50
                      px-3
                      py-1
                      text-xs
                      font-medium
                      transition-colors
                      group-hover:border-yellow-500/30
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}