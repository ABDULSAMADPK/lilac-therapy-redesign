"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
    {
        title: "Trauma & EMDR",
        description:
            "Evidence-based healing from past experiences. Specialized EMDR therapy to help you process trauma and restore a sense of safety and calm.",
        image: "/images/service-trauma.png",
    },
    {
        title: "Holistic Anxiety Treatment",
        description:
            "Move beyond overthinking. A grounded approach to understanding both the emotional and physiological sides of your anxiety.",
        image: "/images/service-anxiety.png",
    },
    {
        title: "High-Achiever Burnout",
        description:
            "Sustainable strategies for entrepreneurs and professionals. Reconnect with yourself after years of pushing through at the cost of your health.",
        image: "/images/service-burnout.png",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-[var(--color-neutral-soft)]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-foreground)] mb-4">
                        Areas of Focus
                    </h2>
                    <p className="max-w-xl mx-auto text-[var(--color-foreground)]/80 text-lg font-light">
                        A grounded approach to helping you understand both the emotional and physiological sides of your experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-serif text-[var(--color-foreground)] mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-[var(--color-foreground)]/70 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
