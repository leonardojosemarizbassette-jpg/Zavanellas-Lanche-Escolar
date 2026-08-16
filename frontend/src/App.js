import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { HealthySection } from "@/components/HealthySection";
import { MenuSection } from "@/components/MenuSection";
import { ZeroMenuSection } from "@/components/ZeroMenuSection";
import { ForParents } from "@/components/ForParents";
import { SchoolsSection } from "@/components/SchoolsSection";
import { DeliverySection } from "@/components/DeliverySection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#FFFDF7]">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <HealthySection />
        <MenuSection />
        <ZeroMenuSection />
        <ForParents />
        <SchoolsSection />
        <DeliverySection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
