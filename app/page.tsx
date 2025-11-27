"use client"

import { LanguageProvider } from "@/lib/i18n"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { KeyFeaturesSection } from "@/components/key-features-section"
import { HowSignHelpsSection } from "@/components/how-sign-helps-section"
import { DemoSection } from "@/components/demo-section"
import { WhyNoExistingToolsSection } from "@/components/why-no-existing-tools-section"
import { CompetitorsSection } from "@/components/competitors-section"
import { BusinessModelSection } from "@/components/business-model-section"
import { TeamSection } from "@/components/team-section"
import { RisksSection } from "@/components/risks-section"
import { ImpactSection } from "@/components/impact-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { TechSection } from "@/components/tech-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowSignHelpsSection />
        <KeyFeaturesSection />
        <DemoSection />
        <WhyNoExistingToolsSection />
        <CompetitorsSection />
        <BusinessModelSection />
        <TeamSection />
        <RisksSection />
        <ImpactSection />
        <RoadmapSection />
        <TechSection />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
