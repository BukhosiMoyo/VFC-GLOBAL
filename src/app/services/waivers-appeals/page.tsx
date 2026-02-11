"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldCheck, AlertTriangle, Scale, Ban, CheckCircle2 } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function WaiversAppealsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-background">
                <div className="absolute inset-0 bg-dot-pattern opacity-[0.3]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />

                <SectionContainer className="relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center justify-center p-3 bg-red-500/10 rounded-2xl mb-6 shadow-sm ring-1 ring-red-500/20">
                            <ShieldCheck className="h-8 w-8 text-red-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                            Waivers & <span className="text-red-600">Appeals</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Facing immigration challenges? We provide professional legal support to resolve complex issues, overturn rejections, and legalize your stay.
                        </p>
                    </motion.div>
                </SectionContainer>
            </section>

            <section className="py-20 relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.2]" />
                <SectionContainer className="relative z-10">
                    <div className="grid gap-16 max-w-5xl mx-auto">

                        {/* Appeals */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 relative overflow-hidden glass-card"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 hidden md:block">
                                <Scale className="h-32 w-32" />
                            </div>
                            <div className="relative z-10 space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="bg-red-500/10 p-3 rounded-xl">
                                        <AlertTriangle className="h-6 w-6 text-red-600" />
                                    </div>
                                    <h2 className="text-3xl font-bold">Appeal Rejected Visas</h2>
                                </div>
                                <p className="text-lg text-muted-foreground max-w-2xl">
                                    A visa rejection doesn&apos;t necessarily mean the end of your journey. Many rejections are due to administrative errors or incomplete documentation. We verify the reasons and draft comprehensive appeals to the Department of Home Affairs.
                                </p>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {["Administrative Review", "Error Rectification", "Missing Document Submission", "Legal Representation"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 font-medium">
                                            <CheckCircle2 className="h-5 w-5 text-red-500" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Waivers */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <Card className="h-full glass-card border-t-4 border-t-orange-500">
                                    <CardHeader>
                                        <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                            <ShieldCheck className="h-6 w-6 text-orange-600" />
                                        </div>
                                        <CardTitle className="text-2xl">Waiver Applications</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="text-muted-foreground">
                                            Apply for a waiver of specific regulatory requirements before submitting a visa application.
                                        </p>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li className="flex items-start gap-2">• Department of Labour certificate waivers</li>
                                            <li className="flex items-start gap-2">• Police clearance waivers</li>
                                            <li className="flex items-start gap-2">• Waiving &quot;undesirable&quot; status</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Regularization */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <Card className="h-full glass-card border-t-4 border-t-red-500">
                                    <CardHeader>
                                        <div className="bg-red-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                            <Ban className="h-6 w-6 text-red-600" />
                                        </div>
                                        <CardTitle className="text-2xl">Overstay Regularization</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="text-muted-foreground">
                                            Legal assistance for expired visas and &quot;undesirable&quot; declarations.
                                        </p>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li className="flex items-start gap-2">• Legalizing status (Good Cause)</li>
                                            <li className="flex items-start gap-2">• Appealing ban from South Africa</li>
                                            <li className="flex items-start gap-2">• Lifting travel restrictions</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>

                        {/* CTA */}
                        <div className="text-center pt-8">
                            <h3 className="text-2xl font-bold mb-4">Don&apos;t risk your legal status.</h3>
                            <p className="text-muted-foreground mb-8">Get expert advice before communicating with Home Affairs.</p>
                            <Button size="xl" variant="destructive" className="shadow-lg shadow-red-500/20" asChild>
                                <Link href="/book">Get Urgent Legal Advice</Link>
                            </Button>
                        </div>
                    </div>
                </SectionContainer>
            </section>
        </div>
    );
}
