"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Calendar, Clock } from "lucide-react";

export default function Consultation() {
    return (
        <section id="contact" className="py-16 lg:py-32 bg-[var(--color-neutral-soft)] relative overflow-hidden">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="space-y-6 lg:space-y-12 lg:sticky lg:top-32"
                >
                    <div className="space-y-4 lg:space-y-6">
                        <span className="text-[var(--color-primary)] font-sans text-xs tracking-[0.4em] uppercase font-black px-4 py-2 bg-[var(--color-primary)]/5 rounded-full inline-block">
                            Get Started
                        </span>
                        <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-foreground)] leading-[1.1]">
                            Your Path Toward <br /> <span className="italic font-light text-[var(--color-primary)]">Resilience</span>
                        </h2>
                        <p className="text-lg md:text-xl text-[var(--color-foreground)]/60 font-sans font-light leading-relaxed max-w-md">
                            Ready to move beyond "functional"? Schedule a brief introductory call to see how specialized therapy can help you find balance.
                        </p>
                    </div>

                    <div className="space-y-4 lg:space-y-8 pt-4 lg:pt-8 border-t border-[var(--color-primary-light)]/20">
                        <div className="flex items-start space-x-6">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-[var(--color-primary)]">
                                <Clock size={20} />
                            </div>
                            <div>
                                <h4 className="font-serif text-lg font-bold text-[var(--color-foreground)]">Response Time</h4>
                                <p className="text-[var(--color-foreground)]/70">I generally respond to new inquiries within 24-48 business hours.</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-6">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-[var(--color-primary)]">
                                <Calendar size={20} />
                            </div>
                            <div>
                                <h4 className="font-serif text-lg font-bold text-[var(--color-foreground)]">Availability</h4>
                                <p className="text-[var(--color-foreground)]/70">Currently accepting new clients for daytime sessions (In-person & Telehealth).</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row lg:flex-row items-start sm:items-center gap-4 sm:gap-8 pt-4">
                        <div className="flex items-center space-x-3 text-[var(--color-foreground)]/70 bg-white/50 px-4 py-2.5 rounded-xl border border-[var(--color-primary)]/10 w-full sm:w-auto">
                            <Mail size={16} className="text-[var(--color-primary)]" />
                            <a href="mailto:hello@drmayareynolds.com" className="text-sm tracking-wide hover:text-[var(--color-primary)] transition-colors font-medium">hello@drmayareynolds.com</a>
                        </div>
                        <div className="flex items-center space-x-3 text-[var(--color-foreground)]/70 bg-white/50 px-4 py-2.5 rounded-xl border border-[var(--color-primary)]/10 w-full sm:w-auto">
                            <Phone size={16} className="text-[var(--color-primary)]" />
                            <a href="tel:+15551234567" className="text-sm tracking-wide hover:text-[var(--color-primary)] transition-colors font-medium">+1 (555) 123-4567</a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white p-8 md:p-12 rounded-[30px] shadow-xl border border-[var(--color-primary-light)]/20 relative z-10"
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[11px] uppercase tracking-widest font-bold text-[var(--color-foreground)]/40 ml-4">First Name</label>
                                <input type="text" className="w-full bg-[var(--color-neutral-soft)] border-transparent focus:bg-white border focus:border-[var(--color-primary)] rounded-2xl px-6 py-4 outline-none transition-all" placeholder="Jane" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[11px] uppercase tracking-widest font-bold text-[var(--color-foreground)]/40 ml-4">Last Name</label>
                                <input type="text" className="w-full bg-[var(--color-neutral-soft)] border-transparent focus:bg-white border focus:border-[var(--color-primary)] rounded-2xl px-6 py-4 outline-none transition-all" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[11px] uppercase tracking-widest font-bold text-[var(--color-foreground)]/40 ml-4">Email Address</label>
                            <input type="email" className="w-full bg-[var(--color-neutral-soft)] border-transparent focus:bg-white border focus:border-[var(--color-primary)] rounded-2xl px-6 py-4 outline-none transition-all" placeholder="jane@example.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[11px] uppercase tracking-widest font-bold text-[var(--color-foreground)]/40 ml-4">Phone Number</label>
                            <input type="tel" className="w-full bg-[var(--color-neutral-soft)] border-transparent focus:bg-white border focus:border-[var(--color-primary)] rounded-2xl px-6 py-4 outline-none transition-all" placeholder="(555) 555-5555" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[11px] uppercase tracking-widest font-bold text-[var(--color-foreground)]/40 ml-4">What brings you here?</label>
                            <div className="relative">
                                <select className="w-full bg-[var(--color-neutral-soft)] border-transparent focus:bg-white border focus:border-[var(--color-primary)] rounded-2xl px-6 py-4 outline-none transition-all appearance-none text-[var(--color-foreground)]/70">
                                    <option>I'm interested in...</option>
                                    <option>Anxiety & Stress Management</option>
                                    <option>Trauma & EMDR Therapy</option>
                                    <option>Professional Burnout</option>
                                    <option>General Therapy / Other</option>
                                </select>
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[11px] uppercase tracking-widest font-bold text-[var(--color-foreground)]/40 ml-4">Message (Optional)</label>
                            <textarea className="w-full bg-[var(--color-neutral-soft)] border-transparent focus:bg-white border focus:border-[var(--color-primary)] rounded-2xl px-6 py-6 outline-none transition-all h-32 resize-none" placeholder="Briefly describe what you're looking for support with..."></textarea>
                        </div>

                        <button className="w-full bg-[var(--color-primary)] text-white py-5 rounded-2xl font-serif text-xl font-medium hover:bg-[var(--color-foreground)] transition-all shadow-lg shadow-[var(--color-primary)]/20 mt-4">
                            Request Consultation
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
