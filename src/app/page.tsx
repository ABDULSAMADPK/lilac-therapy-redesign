import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Office from "@/components/Office";
import About from "@/components/About";
import Consultation from "@/components/Consultation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <About />
      <Office />
      <Consultation />
      <Footer />
    </main>
  );
}
