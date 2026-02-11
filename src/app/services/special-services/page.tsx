"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle2, Star, Clock } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function SpecialServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-background">
                <div className="absolute inset-0 bg-dot-pattern opacity-[0.3]" />
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/4" />

                <SectionContainer className="relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center justify-center p-3 bg-teal-500/10 rounded-2xl mb-6 shadow-sm ring-1 ring-teal-500/20">
                            <Star className="h-8 w-8 text-teal-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                            Special <span className="text-teal-600">Services</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Beyond standard visas, we assist with long-term residency, citizenship application, and complex documentation tailored to your needs.
                        </p>
                    </motion.div>
                </SectionContainer>
            </section>

            <section className="py-20 relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.2]" />
                <SectionContainer className="relative z-10">
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full glass-card hover:border-teal-500/50 transition-colors">
                                <CardHeader>
                                    <div className="bg-teal-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-teal-600">
                                        <FileText className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-2xl">Citizenship Applications</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-muted-foreground">
                                        Becoming a South African citizen is a significant milestone. We assist with:
                                    </p>
                                    <ul className="space-y-2">
                                        {["Citizenship by Descent", "Citizenship by Naturalization", "Determination of Citizenship Status"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm font-medium">
                                                <CheckCircle2 className="h-4 w-4 text-teal-500" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Card className="h-full glass-card hover:border-teal-500/50 transition-colors">
                                <CardHeader>
                                    <div className="bg-teal-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-teal-600">
                                        <Clock className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-2xl">Visa Renewals & Extensions</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-muted-foreground">
                                        Avoid gaps in your legal status. We manage the timing and submission of your renewal applications well in advance.
                                    </p>
                                    <p className="text-muted-foreground">
                                        We also assist with <strong>Permanent Residence</strong> applications, helping you secure your long-term future in South Africa.
                                    </p>
                                    <div className="pt-2">
                                        <Button variant="link" className="p-0 text-teal-600" asChild>
                                            <Link href="/book">Enquire About Renewal &rarr;</Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-16 text-center"
                    >
                        <h2 className="text-2xl font-bold mb-4">Have a unique requirement?</h2>
                        <Button size="xl" variant="gradient" className="shadow-lg" asChild>
                            <Link href="/contact">Contact Our Specialists</Link>
                        </Button>
                    </motion.div>
                </SectionContainer>
            </section>
        </div>
    );
}
