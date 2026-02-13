"use client";

import Image from "next/image";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-2xl"
                >
                    <Image
                        src="/images/about-updated.jpg"
                        alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist"
                        fill
                        className="object-cover object-top"
                    />
                </motion.div>

                {/* Text Side */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col space-y-8"
                >
                    <div>
                        <span className="text-[var(--color-primary)] uppercase tracking-widest text-sm font-bold mb-2 block">
                            Dr. Maya Reynolds, PsyD
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-foreground)] leading-tight">
                            Warm, Collaborative, & <span className="italic text-[var(--color-primary)]">Grounded.</span>
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg text-[var(--color-foreground)]/80 font-light leading-relaxed">
                        <p>
                            I’m a licensed clinical psychologist in Santa Monica, offering specialized therapy for high-achieving adults who feel overwhelmed by anxiety, stress, or the lingering effects of trauma.
                        </p>
                        <p>
                            Many of the people I work with are thoughtful and self-aware—but feel internally exhausted, stuck in cycles of overthinking, or emotionally on edge despite being highly successful.
                        </p>
                        <p>
                            Taking a collaborative, evidence-based approach, I integrate methods such as EMDR, CBT, and mindfulness. My goal is to help you move from being strictly "functional" to truly feeling at ease in your life and work.
                        </p>
                    </div>

                    <div className="pt-4">
                        <Link
                            href="#contact"
                            className="inline-flex items-center text-[var(--color-foreground)] font-medium hover:text-[var(--color-primary)] transition-colors group text-lg"
                        >
                            Book a consultation
                            <MoveRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
