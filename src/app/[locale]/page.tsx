import { Hero } from "@/components/sections/hero";
import { SkillsGrid } from "@/components/sections/skills-grid";
import { Creations } from "@/components/sections/creations";
import { SectionDivider } from "@/components/shared/section-divider";

export default function Home() {
  return (
    <>
      <Hero />

      <SectionDivider />

      <SkillsGrid />

      <SectionDivider />

      <Creations />
    </>
  );
}