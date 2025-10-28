import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Features } from "@/components/sections/Features";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
