"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Globe2, Briefcase, FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { motion } from "framer-motion";

const services = [
    {
        title: "Visa Applications",
        description: "Expert assistance with Work, Study, Business, and Spousal visas.",
        icon: Briefcase,
        href: "/services/visa-applications",
        features: ["General Work Visa", "Critical Skills Visa", "Study Visas", "Spousal/Life Partner"],
        color: "text-blue-500",
        gradient: "from-blue-500/20 to-blue-500/5",
    },
    {
        title: "Waivers & Appeals",
        description: "Legal recourse for rejected visas and regularization of stay.",
        icon: ShieldCheck,
        href: "/services/waivers-appeals",
        features: ["Waiver Applications", "Appeal Support", "Overstay Regularization", "Legal Representation"],
        color: "text-indigo-500",
        gradient: "from-indigo-500/20 to-indigo-500/5",
    },
    {
        title: "Corporate Immigration",
        description: "End-to-end visa facilitation for companies and their employees.",
        icon: Globe2,
        href: "/services/corporate-immigration",
        features: ["Work Visa Facilitation", "Employer Compliance", "Employee Relocation", "Advisory Services"],
        color: "text-sky-500",
        gradient: "from-sky-500/20 to-sky-500/5",
    },
    {
        title: "Special Services",
        description: "Assistance with citizenship, PR, and document procurement.",
        icon: FileText,
        href: "/services/special-services",
        features: ["Citizenship Applications", "Visa Renewals", "Permanent Residence", "Extensions"],
        color: "text-teal-500",
        gradient: "from-teal-500/20 to-teal-500/5",
    },
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-background">
                <div className="absolute inset-0 bg-dot-pattern opacity-[0.3]" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

                <SectionContainer className="relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                            <Globe2 className="h-4 w-4" /> Global Mobility Experts
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                            Comprehensive <span className="text-gradient-primary">Immigration Services</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            From individual visa applications to complex corporate immigration strategies, we provide the expertise you need to succeed.
                        </p>
                    </motion.div>
                </SectionContainer>
            </section>

            {/* Services Grid */}
            <section className="py-20 relative">
                <SectionContainer>
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full flex flex-col hover:shadow-2xl transition-all duration-300 border-t-4 border-t-transparent hover:border-t-primary glass-card group overflow-hidden relative">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                                    <CardHeader className="relative z-10">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={`p-3 rounded-xl bg-background shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                                <service.icon className={`h-8 w-8 ${service.color}`} />
                                            </div>
                                            <CardTitle className="text-2xl pt-2">{service.title}</CardTitle>
                                        </div>
                                        <CardDescription className="text-base">{service.description}</CardDescription>
                                    </CardHeader>

                                    <CardContent className="flex-1 flex flex-col relative z-10">
                                        <ul className="space-y-3 mb-8 flex-1">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                                                    <CheckCircle2 className={`h-4 w-4 ${service.color}`} />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <Button asChild variant="outline" className="w-full sm:w-auto self-start group/btn hover:border-primary hover:bg-primary/5">
                                            <Link href={service.href} className="flex items-center justify-between w-full">
                                                View Details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </SectionContainer>
            </section>

            {/* CTA */}
            <section className="py-24 bg-muted/30 border-t border-border/50 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.2]" />
                <SectionContainer className="relative z-10">
                    <div className="max-w-2xl mx-auto space-y-8">
                        <h2 className="text-3xl font-bold">Not sure what you need?</h2>
                        <p className="text-muted-foreground text-lg">
                            Every case is unique. Book a consultation with our immigration specialists to discuss your specific situation and find the best path forward.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button size="xl" variant="gradient" className="shadow-lg" asChild>
                                <Link href="/book">Book Consultation</Link>
                            </Button>
                            <Button size="xl" variant="outline" className="bg-background" asChild>
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                </SectionContainer>
            </section>
        </div>
    );
}
