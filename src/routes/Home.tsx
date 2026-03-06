import { MainLayout } from "@/components/layout/MainLayout";
import { HeroSection } from "@/components/home/HeroSection";
import { WhySection } from "@/components/home/WhySection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { StructureSection } from "@/components/home/StructureSection";
import { OpenResearchSection } from "@/components/home/OpenResearchSection";
import { MethodologySection } from "@/components/home/MethodologySection";
import { CollaborationSection } from "@/components/home/CollaborationSection";
import { homeContent } from "@/content/home";

export default function Home() {
  return (
    <main>
      <MainLayout>
        <HeroSection {...homeContent.hero} />
        <WhySection {...homeContent.why} />
        <WhatWeDoSection {...homeContent.whatWeDo} />
        <StructureSection {...homeContent.structure} />
        <OpenResearchSection {...homeContent.openResearch} />
        <MethodologySection {...homeContent.methodology} />
        <CollaborationSection {...homeContent.collaboration} />
      </MainLayout>
    </main>
  );
}