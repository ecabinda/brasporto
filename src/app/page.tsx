import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { RealWorksGallery } from "@/components/RealWorksGallery";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { ContactSection } from "@/components/ContactSection";
import { FloatingContactButton } from "@/components/FloatingContactButton";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#101211] text-white overflow-x-hidden">
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <TrustStrip />
        <AboutSection />
        <ServicesSection />
        <RealWorksGallery />
        <ProjectsGallery />
        <BeforeAfterSlider />
        <ProcessTimeline />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <FloatingContactButton />
    </div>
  );
}
