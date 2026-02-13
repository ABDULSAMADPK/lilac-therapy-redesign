"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Office() {
    return (
        <section id="office" className="py-24 bg-[var(--color-secondary)]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-[var(--color-primary)] uppercase tracking-widest text-sm font-bold mb-2 block">
                        The Environment
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-foreground)] mb-6">
                        A Calm Space for <span className="italic font-light text-[var(--color-primary)]">Healing</span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-[var(--color-foreground)]/80 text-lg font-light leading-relaxed">
                        Located in the heart of Santa Monica, our office is a sanctuary designed for safety, comfort, and absolute privacy.
                        From the grounding natural light to the soft textures of our counseling space, every detail is intended to help
                        you feel at ease. Whether you join us in-person or via secure telehealth, our practice offers a professional
                        yet warm environment for your journey toward resilience.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch min-h-[500px]">
                    {/* Primary Office Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] lg:h-auto rounded-[30px] overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/images/office-1-real.jpg"
                            alt="Therapy Office Wide Shot Santa Monica"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-1000"
                        />
                    </motion.div>

                    <div className="flex flex-col gap-8">
                        {/* Secondary Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative h-[250px] rounded-[30px] overflow-hidden shadow-xl"
                        >
                            <Image
                                src="/images/office-2-real.jpg"
                                alt="Therapy Office Details"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-1000"
                            />
                        </motion.div>

                        {/* Redesigned Location Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white p-10 rounded-[30px] shadow-sm border border-[var(--color-primary-light)]/20 flex-grow flex flex-col justify-center relative overflow-hidden group hover:border-[var(--color-primary)]/30 transition-colors"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-[var(--color-primary)]/10 transition-colors"></div>

                            <div className="space-y-6 relative z-10">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                                        <MapPin size={24} />
                                    </div>
                                    <h3 className="text-2xl font-serif text-[var(--color-foreground)] font-bold">The Practice</h3>
                                </div>

                                <div className="space-y-4">
                                    <div className="pl-1 space-y-2">
                                        <p className="text-lg text-[var(--color-foreground)]/80 leading-relaxed font-sans font-light">
                                            123th Street 45 W,<br />
                                            Santa Monica, CA 90401
                                        </p>
                                        <p className="text-sm text-[var(--color-primary)] font-medium tracking-wide uppercase">
                                            Downtown Santa Monica
                                        </p>
                                    </div>

                                    <div className="pt-6 border-t border-[var(--color-foreground)]/5">
                                        <p className="text-sm text-[var(--color-foreground)]/60 italic font-sans">
                                            *In-person & Telehealth sessions available across California.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
