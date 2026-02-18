import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] overflow-x-hidden custom-scrollbar">
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
