import { ContactCardGrid } from "@/components/sections/contact-card-grid";
import { ContactForm } from "@/components/sections/contact-form";

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-bold mb-2">Kontak</h1>
      <p className="text-muted-foreground mb-8">Mari saling terhubung.</p>

      <div className="border-t border-dashed border-border pt-8 mb-6">
        <h2 className="font-semibold mb-4">Temukan saya di media sosial</h2>
        <ContactCardGrid />
      </div>

      <hr className="border-border" />

      <ContactForm />
    </section>
  );
}