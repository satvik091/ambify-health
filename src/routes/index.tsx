import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import {
  Trust, Problem, Solution, HowItWorks, DemoSim, Features,
  Specialties, DashboardSection, Integrations, Security,
  Testimonials, CaseStudies, FAQ, FinalCTA, SiteFooter,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clario — Ambient Clinical Intelligence for Healthcare" },
      { name: "description", content: "AI-powered ambient clinical intelligence that turns doctor-patient conversations into structured medical records — instantly." },
      { property: "og:title", content: "Clario — Ambient Clinical Intelligence" },
      { property: "og:description", content: "Turn clinical conversations into structured medical records with enterprise-grade AI." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-dvh bg-background">
      <SiteNav />
      <Hero />
      <Trust />
      <Problem />
      <Solution />
      <HowItWorks />
      <DemoSim />
      <Features />
      <Specialties />
      <DashboardSection />
      <Integrations />
      <Security />
      <Testimonials />
      <CaseStudies />
      <FAQ />
      <FinalCTA />
      <SiteFooter />
    </main>
  );
}
