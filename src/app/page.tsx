"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Office from "@/components/Office";
import About from "@/components/About";
import Consultation from "@/components/Consultation";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Force scroll to top on refresh
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

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
