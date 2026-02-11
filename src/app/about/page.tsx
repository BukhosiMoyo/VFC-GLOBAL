"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Target, Eye, Shield, Star, Clock, Heart, Users, Award } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-background">
                <div className="absolute inset-0 bg-dot-pattern opacity-[0.3]" />
                <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />

                <SectionContainer className="relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6 shadow-sm ring-1 ring-primary/20">
                            <Users className="h-8 w-8 text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                            Empowering <span className="text-primary">Global Mobility</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            We are your trusted partners in navigating the complexities of immigration. Whether you&apos;re an individual, a family, or a multinational corporation, we simplify the journey.
                        </p>
                    </motion.div>
                </SectionContainer>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 relative bg-muted/20">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.2]" />
                <SectionContainer className="relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-stretch">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 relative overflow-hidden glass-card flex flex-col justify-center"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Target className="h-48 w-48" />
                            </div>
                            <div className="relative z-10">
                                <div className="bg-blue-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                    <Target className="h-8 w-8 text-blue-600" />
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                                <p className="text-lg text-muted-foreground">
                                    To make visa applications stress-free by providing transparent, reliable, and efficient services. We exist to remove barriers and create opportunities for our clients.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 relative overflow-hidden glass-card flex flex-col justify-center"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Eye className="h-48 w-48" />
                            </div>
                            <div className="relative z-10">
                                <div className="bg-purple-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                    <Eye className="h-8 w-8 text-purple-600" />
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                                <p className="text-lg text-muted-foreground">
                                    To be the leading consultancy that bridges opportunities globally through simplified immigration solutions, setting the standard for excellence in the industry.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </SectionContainer>
            </section>

            {/* Why Choose Us / Experience */}
            <section className="py-24">
                <SectionContainer>
                    <div className="grid md:grid-cols-12 gap-12 items-center">
                        <div className="md:col-span-5 relative">
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-blue-600/20 absolute inset-0 rotate-3 -z-10 blur-2xl" />
                            <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center items-center text-center">
                                <div className="bg-primary/10 p-6 rounded-full mb-6">
                                    <Award className="h-12 w-12 text-primary" />
                                </div>
                                <h3 className="text-5xl font-bold text-foreground mb-2">10+</h3>
                                <p className="text-xl text-muted-foreground">Years Experience</p>
                            </div>
                        </div>
                        <div className="md:col-span-7 space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why VFC Global?</h2>
                                <p className="text-lg text-muted-foreground">
                                    With years of experience in immigration consulting, we have assisted clients from across Africa and beyond with visa applications, appeals, waivers, and compliance support.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { icon: Shield, title: "Integrity First", desc: "Honest, transparent guidance you can trust." },
                                    { icon: Star, title: "Excellence", desc: "Commitment to the highest standards of service." },
                                    { icon: Clock, title: "Efficiency", desc: "Streamlined processes to save you time." },
                                    { icon: Heart, title: "Client Focus", desc: "Your goals and needs are our top priority." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1 bg-primary/10 p-2 rounded-lg h-fit text-primary">
                                            <item.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">{item.title}</h4>
                                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </SectionContainer>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary/5 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern opacity-10" />
                <SectionContainer className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your journey?</h2>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto text-muted-foreground">
                        Let us handle the paperwork while you focus on your new beginning.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="xl" variant="gradient" className="shadow-lg" asChild>
                            <Link href="/contact">Get in Touch</Link>
                        </Button>
                        <Button size="xl" variant="outline" className="bg-background hover:bg-muted" asChild>
                            <Link href="/services">View Our Services</Link>
                        </Button>
                    </div>
                </SectionContainer>
            </section>
        </div>
    );
}
