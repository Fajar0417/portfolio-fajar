import Image from "next/image";
import { creations } from "@/data/creations";

export function Creations() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-16">
      <h2 className="text-2xl font-bold mb-2">🎨 Kreasi</h2>
      <p className="text-muted-foreground mb-8">
        Beberapa karya yang pernah saya buat.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {creations.map((item) => (
          <div
            key={item.title}
            className="group overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-300"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground mt-1">
                {item.category}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-muted px-3 py-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}