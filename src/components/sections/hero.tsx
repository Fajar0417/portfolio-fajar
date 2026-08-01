import { MapPin, Building2 } from "lucide-react";

export function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="space-y-8">
        {/* Heading */}
        <div className="space-y-4">
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Halo, saya{" "}
            <span className="text-primary">Fajar Ferdiansyah</span>
          </h1>

          <ul className="flex flex-col gap-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0" />
              Berdomisili di Ciamis, Indonesia 🇮🇩
            </li>

            <li className="flex items-center gap-2">
              <Building2 className="size-4 shrink-0" />
              Terbuka untuk Onsite, Hybrid, maupun Remote
            </li>
          </ul>
        </div>

        {/* Description */}
        <div className="max-w-4xl space-y-5 text-[17px] leading-8 text-muted-foreground">
          <p>
            Saya adalah seorang <strong>Full Stack Web Developer</strong> yang
            berfokus pada pengembangan website modern, cepat, dan responsif.
            Saya memiliki ketertarikan besar dalam membangun aplikasi yang tidak
            hanya memiliki tampilan menarik, tetapi juga memiliki performa yang
            optimal dan mudah dikembangkan.
          </p>

          <p>
            Saat ini saya banyak menggunakan teknologi seperti{" "}
            <strong>Next.js</strong>, <strong>Laravel</strong>,{" "}
            <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, dan{" "}
            <strong>MySQL</strong>. Saya juga senang mempelajari teknologi baru
            untuk terus meningkatkan kualitas solusi yang saya bangun.
          </p>

          <p>
            Bagi saya, menulis kode bukan sekadar membuat aplikasi berjalan,
            tetapi juga menciptakan pengalaman pengguna yang nyaman, menjaga
            kualitas kode agar mudah dipelihara, dan menghasilkan produk yang
            benar-benar memberikan manfaat bagi penggunanya.
          </p>
        </div>
      </div>
    </section>
  );
}