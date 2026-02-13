"use client";

import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer id="footer" className="bg-[var(--color-primary)] text-white py-24 rounded-t-[60px]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-16">
                    <div className="space-y-8 max-w-xl">
                        <h2 className="text-5xl md:text-6xl font-serif leading-[1.1]">
                            Begin your <br /><span className="italic font-light opacity-80">resilient</span> journey.
                        </h2>
                        <p className="text-white/80 text-lg font-light max-w-sm leading-relaxed">
                            Specialized evidence-based therapy for high-achieving adults in Santa Monica and across California.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[var(--color-primary)] transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[var(--color-primary)] transition-all">
                                <Linkedin size={18} />
                            </a>
                            <a href="mailto:hello@drmayareynolds.com" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[var(--color-primary)] transition-all">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 w-full md:w-auto">
                        <div className="space-y-6">
                            <span className="text-xs tracking-[0.2em] uppercase font-bold opacity-60">Navigate</span>
                            <nav className="flex flex-col space-y-3">
                                <Link href="#services" className="text-lg hover:opacity-70 transition-opacity">Services</Link>
                                <Link href="#about" className="text-lg hover:opacity-70 transition-opacity">About</Link>
                                <Link href="#office" className="text-lg hover:opacity-70 transition-opacity">Office</Link>
                                <Link href="#contact" className="text-lg hover:opacity-70 transition-opacity">Book Consultation</Link>
                            </nav>
                        </div>
                        <div className="space-y-6">
                            <span className="text-xs tracking-[0.2em] uppercase font-bold opacity-60">Contact</span>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <MapPin className="w-5 h-5 mt-1 opacity-80" />
                                    <p className="text-white/80 leading-relaxed">
                                        123th Street 45 W,<br />
                                        Santa Monica, CA 90401
                                    </p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Mail className="w-5 h-5 opacity-80" />
                                    <a href="mailto:hello@drmayareynolds.com" className="text-white/80 hover:text-white transition-colors">
                                        hello@drmayareynolds.com
                                    </a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Phone className="w-5 h-5 opacity-80" />
                                    <a href="tel:+15551234567" className="text-white/80 hover:text-white transition-colors">
                                        +1 (555) 123-4567
                                    </a>
                                </div>
                                <p className="text-white/80 pt-2">In-person & Telehealth</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-2xl font-serif font-bold">
                        Dr. Maya Reynolds, PsyD
                    </p>
                    <p className="text-white/40 text-xs tracking-widest uppercase">
                        &copy; {new Date().getFullYear()} All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
