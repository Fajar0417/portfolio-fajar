import { CreationTabs } from "@/components/sections/creation-tabs";

export default function CreationsPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-bold mb-2">Creations</h1>
      <p className="text-muted-foreground mb-8">
        A collection of my coding content and creative works.
      </p>

      <hr className="border-dashed border-border mb-8" />

      <CreationTabs />
    </section>
  );
}