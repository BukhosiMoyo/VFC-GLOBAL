"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Briefcase, Users, Building2 } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function VisaApplicationsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-background">
                <div className="absolute inset-0 bg-dot-pattern opacity-[0.3]" />
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/4" />

                <SectionContainer className="relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-2xl mb-6 shadow-sm ring-1 ring-blue-500/20">
                            <Briefcase className="h-8 w-8 text-blue-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                            Visa <span className="text-blue-600">Applications</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Comprehensive support for all major visa categories. We ensure your application is accurate, compliant, and submitted on time.
                        </p>
                    </motion.div>
                </SectionContainer>
            </section>

            <section className="py-20 bg-muted/20 relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.2]" />
                <SectionContainer className="relative z-10">
                    <div className="grid gap-16 max-w-5xl mx-auto">
                        {/* Work Permits */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 border-b border-border/50 pb-4">
                                <Building2 className="h-8 w-8 text-primary" />
                                <h2 className="text-3xl font-bold">Work Permits</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    { title: "General Work Visa", desc: "For foreign nationals with a specific job offer. Requires DOL certification." },
                                    { title: "Critical Skills Visa", desc: "For individuals with skills listed on the Critical Skills List. No job offer needed to apply." },
                                    { title: "Corporate Work Visa", desc: "For companies employing a large number of foreign workers." },
                                    { title: "Intra-Company Transfer", desc: "For transferring employees from a foreign branch to a South African branch." }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Card className="h-full glass-card hover:border-primary/30 transition-colors">
                                            <CardHeader>
                                                <CardTitle className="text-xl">{item.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-muted-foreground">{item.desc}</p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Other Visas */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 border-b border-border/50 pb-4">
                                <Users className="h-8 w-8 text-indigo-500" />
                                <h2 className="text-3xl font-bold">Other Categories</h2>
                            </div>

                            <div className="grid gap-6">
                                {[
                                    { title: "Study Visas", desc: "For primary, secondary, and tertiary education at recognized institutions." },
                                    { title: "Business Visas", desc: "For entrepreneurs looking to establish or invest in a business in South Africa." },
                                    { title: "Tourist / Visitor Visas", desc: "Short-term stays for tourism, visiting family, or medical treatment." },
                                    { title: "Spousal / Life Partner", desc: "For partners of South African citizens or permanent residents." },
                                    { title: "Permanent Residence", desc: "Direct residence or residence on other grounds." } // Corrected key/structure
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-4 p-4 rounded-lg bg-card border hover:bg-accent/50 transition-colors"
                                    >
                                        <div className="mt-1 bg-green-500/10 p-2 rounded-full text-green-600">
                                            <CheckCircle2 className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold">{item.title}</h3>
                                            <p className="text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-primary/5 border border-primary/20 p-8 md:p-12 rounded-2xl text-center space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold">Need help choosing the right visa?</h3>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Our consultants can assess your qualifications and goals to recommend the best path.
                            </p>
                            <Button size="xl" variant="gradient" className="shadow-lg" asChild>
                                <Link href="/book">Book an Assessment</Link>
                            </Button>
                        </div>
                    </div>
                </SectionContainer>
            </section>
        </div>
    );
}
