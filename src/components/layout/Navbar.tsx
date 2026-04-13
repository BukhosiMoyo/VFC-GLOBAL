"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe, Shield, Briefcase, Star, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    // Services is handled separately for Mega Menu
    { href: "/contact", label: "Contact" },
];

const serviceCategories = [
    {
        title: "Visa Applications",
        icon: Globe,
        description: "Comprehensive visa solutions for individuals and families.",
        href: "/services/visa-applications",
        items: ["Work Visas", "Study Visas", "Spousal & Relative Visas", "Tourist & Visitor Visas"]
    },
    {
        title: "Waivers & Appeals",
        icon: Shield,
        description: "Expert legal assistance for complex immigration cases.",
        href: "/services/waivers-appeals",
        items: ["Overstay Appeals", "V-List Removal", "Status Rectification", "Good Cause Letters"]
    },
    {
        title: "Corporate Immigration",
        icon: Briefcase,
        description: "Streamlined compliance and visa processing for businesses.",
        href: "/services/corporate-immigration",
        items: ["Corporate Accounts", "Compliance Audits", "Transfer of Skills", "General Work Visas"]
    },
    {
        title: "Special Services",
        icon: Star,
        description: "Tailored solutions for unique immigration needs.",
        href: "/services/special-services",
        items: ["Permanent Residence", "Citizenship", "Document Procurement", "Police Clearance"]
    }
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [hoveredService, setHoveredService] = React.useState<string | null>(null);
    const [isServicesOpen, setIsServicesOpen] = React.useState(false); // For mobile

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
            <SectionContainer className="flex h-20 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                        V
                    </div>
                    <span className="font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
                        VFC Global
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center h-full">
                    {navLinks.slice(0, 2).map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary relative group py-2"
                        >
                            {link.label}
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </Link>
                    ))}

                    {/* Mega Menu Trigger */}
                    <div
                        className="relative h-full flex items-center group"
                        onMouseEnter={() => setHoveredService("open")}
                        onMouseLeave={() => setHoveredService(null)}
                    >
                        <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary group-hover:text-primary">
                            Services
                            <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                        </button>

                        <AnimatePresence>
                            {hoveredService && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 15 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-14 left-1/2 -translate-x-1/2 w-[800px] bg-card/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-6 overflow-hidden"
                                >
                                    {serviceCategories.map((category) => (
                                        <Link
                                            key={category.title}
                                            href={category.href}
                                            className="group/item flex gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                                        >
                                            <div className="mt-1 h-10 w-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors">
                                                <category.icon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-foreground flex items-center gap-2">
                                                    {category.title}
                                                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                                                </div>
                                                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                                                    {category.description}
                                                </p>
                                                <ul className="mt-2 space-y-1">
                                                    {category.items.slice(0, 2).map(item => (
                                                        <li key={item} className="text-xs text-muted-foreground/80 flex items-center gap-1">
                                                            <div className="h-1 w-1 rounded-full bg-primary/50" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </Link>
                                    ))}
                                    <div className="col-span-2 bg-muted/30 -mx-6 -mb-6 p-4 flex justify-between items-center border-t border-border/50">
                                        <p className="text-sm text-muted-foreground pl-6">Need help choosing?</p>
                                        <Link href="/services" className="text-sm font-medium text-primary hover:underline pr-6 flex items-center gap-1">
                                            View all services <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link
                        href="/contact"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary relative group py-2"
                    >
                        Contact
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </Link>

                    <div className="ml-4 pl-4 border-l border-border/50">
                        <Button asChild variant="gradient" size="sm" className="shadow-lg shadow-blue-500/20">
                            <Link href="/book">Book Consultation</Link>
                        </Button>
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SectionContainer>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-border/50 bg-background/95 backdrop-blur-xl overflow-hidden"
                    >
                        <nav className="flex flex-col p-6 space-y-4">
                            {navLinks.slice(0, 2).map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-lg font-medium text-foreground/80 hover:text-primary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            {/* Mobile Services Accordion */}
                            <div>
                                <button
                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                    className="flex items-center justify-between w-full text-lg font-medium text-foreground/80 hover:text-primary"
                                >
                                    Services
                                    <ChevronDown className={cn("h-5 w-5 transition-transform", isServicesOpen && "rotate-180")} />
                                </button>
                                <AnimatePresence>
                                    {isServicesOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="flex flex-col pl-4 mt-2 space-y-3 border-l-2 border-border/50 ml-1">
                                                {serviceCategories.map((cat) => (
                                                    <Link
                                                        key={cat.title}
                                                        href={cat.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className="text-sm text-muted-foreground hover:text-primary py-1"
                                                    >
                                                        {cat.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link
                                href="/contact"
                                className="text-lg font-medium text-foreground/80 hover:text-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>

                            <div className="pt-4 mt-4 border-t border-border/50">
                                <Button asChild className="w-full" size="lg" variant="gradient">
                                    <Link href="/book" onClick={() => setIsOpen(false)}>Book Consultation</Link>
                                </Button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
