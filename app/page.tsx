import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SpecialtiesSection } from "@/components/specialties-section";
import { BigNumbers } from "@/components/big-numbers";
import { AboutDoctor } from "@/components/about-doctor";
import { Testimonials } from "@/components/testimonials";
import { CallToAction } from "@/components/call-to-action";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SpecialtiesSection />
      <BigNumbers />
      <AboutDoctor />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
