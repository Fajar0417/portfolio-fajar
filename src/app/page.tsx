import { Hero } from "@/components/sections/hero";
import { SkillsGrid } from "@/components/sections/skills-grid";
import { Creations } from "@/components/sections/creations";
export default function Home() {
  return (
    <>
      <Hero />
      <SkillsGrid />
      <Creations />
    </>
  );
}