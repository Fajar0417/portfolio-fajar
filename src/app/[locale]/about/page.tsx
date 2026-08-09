import { AboutSection } from "@/components/sections/about-section";
import { CareerTimeline } from "@/components/sections/career-timeline";
import { EducationTimeline } from "@/components/sections/EducationTimeline";
import { SectionDivider } from "@/components/shared/section-divider";

export default function AboutPage() {
  return (
    <>
       <AboutSection />
         <SectionDivider />
      <CareerTimeline />
      <EducationTimeline />
    </>
  );
}