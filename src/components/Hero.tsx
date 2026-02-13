"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="hero" className="relative w-full min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-[var(--color-secondary)] border-t border-[var(--color-primary-light)]/20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.png"
                    alt="Calm Santa Monica Beach Landscape"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={100}
                />
                {/* Indigo-tinted overlay for theme cohesion */}
                <div className="absolute inset-0 bg-[var(--color-primary)]/20 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-black/5"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-[var(--color-primary-light)] w-fit"
                    >
                        <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
                        <span className="text-sm uppercase tracking-widest text-[var(--color-primary)] font-bold">
                            Clinical Psychologist | Santa Monica
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif text-[var(--color-primary)] leading-[1.1] tracking-tight"
                    >
                        Beyond <br /><span className="italic font-light">"Functional."</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-[var(--color-foreground)]/80 max-w-lg font-sans font-light leading-relaxed"
                    >
                        Specialized, evidence-based therapy for high-achieving adults navigating anxiety, trauma, and burnout. Find your resilience in a clinical sanctuary.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                    >
                        <Link
                            href="#contact"
                            className="group relative px-8 py-4 bg-[var(--color-primary)] text-white rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg"
                        >
                            <span className="relative z-10 flex items-center font-bold tracking-wide">
                                Start Your Journey
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </span>
                        </Link>
                        <Link
                            href="#services"
                            className="px-8 py-4 bg-white/50 backdrop-blur-sm border border-[var(--color-primary-light)]/20 text-[var(--color-primary)] rounded-full font-bold tracking-wide hover:bg-white transition-all shadow-sm"
                        >
                            Our Approach
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
