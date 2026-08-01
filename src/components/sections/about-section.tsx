import Image from "next/image";

export function AboutSection() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-12">

      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Tentang
        </h1>

        <p className="text-muted-foreground mt-2">
          Pengenalan singkat mengenai siapa saya.
        </p>
      </div>

      <hr className="border-border mb-10" />

      <div className="space-y-8 text-lg leading-9 text-muted-foreground">

        <p>
          Saya <span className="text-foreground font-medium">Fajar Ferdiansyah</span>,
          seorang Software Engineer yang berbasis di Jambi, berdedikasi untuk
          membangun solusi digital yang berdampak. Saya spesialis dalam
          pengembangan platform web dan aplikasi mobile menggunakan tech stack
          modern, termasuk Next.js, TypeScript, dan pengembangan Android native
          dengan Kotlin.
        </p>

        <p>
          Fokus utama saya adalah merancang arsitektur perangkat lunak yang
          tidak hanya berfungsi tetapi juga terstruktur dengan baik, mudah
          dipelihara, dan skalabel untuk memenuhi kebutuhan bisnis. Saya percaya
          bahwa kode berkualitas tinggi harus berjalan beriringan dengan
          efisiensi sistem dan kejelasan logika.
        </p>

        <p>
          Saya memadukan keahlian teknis dengan komunikasi proaktif, berpikir
          kritis, dan manajemen waktu yang efektif. Saya berkembang dalam
          lingkungan kolaboratif dan memanfaatkan keterampilan kepemimpinan
          untuk memastikan setiap proyek memberikan hasil optimal dan dampak
          nyata.
        </p>

      </div>

      <div className="mt-10">

        <p className="text-lg mb-3">
          Salam hangat,
        </p>

        <Image
          src="/images/signature.png"
          alt="Tanda tangan"
          width={170}
          height={70}
          className="object-contain"
        />

      </div>

      <hr className="border-border mt-10" />

    </section>
  );
}