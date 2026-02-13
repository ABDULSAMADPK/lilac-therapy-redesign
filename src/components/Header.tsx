"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Services", href: "#services" },
        { name: "About", href: "#about" },
        { name: "The Office", href: "#office" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-background)]/90 backdrop-blur-md border-b border-[var(--color-primary-light)]/20 shadow-sm">
            <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
                <a
                    href="/"
                    onClick={() => {
                        window.location.href = "/";
                    }}
                    className="text-2xl font-serif font-bold tracking-tight text-[var(--color-primary)] hover:opacity-80 transition-opacity"
                >
                    Dr. Maya Reynolds<span className="text-[var(--color-foreground)]/40">, PsyD</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-10 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[var(--color-foreground)]/70 hover:text-[var(--color-primary)] transition-all font-sans text-sm tracking-wide font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="bg-[var(--color-primary)] text-white px-8 py-2.5 rounded-full font-sans text-sm font-medium hover:bg-[var(--color-foreground)] transition-all transform hover:scale-105 shadow-md shadow-[var(--color-primary)]/20"
                    >
                        Book Consultation
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-[var(--color-foreground)]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-[var(--color-background)] px-6 py-8 space-y-6 h-screen border-t border-[var(--color-primary-light)]/10 absolute w-full top-full left-0 font-sans">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="block text-[var(--color-foreground)]/80 hover:text-[var(--color-primary)] transition-colors font-serif text-3xl"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="pt-8 space-y-4 border-t border-[var(--color-foreground)]/5">
                        <a href="mailto:hello@drmayareynolds.com" className="block text-lg text-[var(--color-foreground)]/70">
                            hello@drmayareynolds.com
                        </a>
                        <a href="tel:+15551234567" className="block text-lg text-[var(--color-foreground)]/70">
                            +1 (555) 123-4567
                        </a>
                    </div>

                    <Link
                        href="#contact"
                        className="block bg-[var(--color-primary)] text-white px-6 py-5 rounded-full font-sans text-center font-bold tracking-wide mt-4"
                        onClick={() => setIsOpen(false)}
                    >
                        Book Consultation
                    </Link>
                </div>
            )}
        </header>
    );
}
