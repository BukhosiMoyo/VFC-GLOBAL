"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe2, Users, Building2, Briefcase } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function CorporateImmigrationPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-background">
                <div className="absolute inset-0 bg-dot-pattern opacity-[0.3]" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

                <SectionContainer className="relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center justify-center p-3 bg-sky-500/10 rounded-2xl mb-6 shadow-sm ring-1 ring-sky-500/20">
                            <Globe2 className="h-8 w-8 text-sky-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                            Corporate <span className="text-sky-600">Immigration</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Streamlined visa solutions for companies hiring international talent. We ensure compliance, efficiency, and a smooth relocation experience for your workforce.
                        </p>
                    </motion.div>
                </SectionContainer>
            </section>

            <section className="py-20 relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.2]" />
                <SectionContainer className="relative z-10">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                icon: Building2,
                                title: "Work Visa Facilitation",
                                desc: "End-to-end management of visa applications for new hires and transfers, ensuring minimal disruption to business operations."
                            },
                            {
                                icon: Users,
                                title: "Employee Relocation",
                                desc: "Holistic support for employees and their families, including spousal visas, study visas for children, and settling-in advice."
                            },
                            {
                                icon: Briefcase,
                                title: "Employer Compliance",
                                desc: "Advisory services to ensure your company meets all Department of Home Affairs and Department of Labour regulations."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="h-full glass-card hover:border-sky-500/50 transition-colors">
                                    <CardHeader>
                                        <div className="bg-sky-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-sky-600">
                                            <item.icon className="h-6 w-6" />
                                        </div>
                                        <CardTitle className="text-xl">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{item.desc}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-sky-500/5 border border-sky-500/10 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-50" />
                        <h2 className="text-3xl font-bold mb-6">Partner with VFC</h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            We act as your external immigration department, handling all the paperwork so you can focus on your business goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="xl" variant="gradient" className="shadow-lg shadow-sky-500/20" asChild>
                                <Link href="/book">Schedule Corporate Consultation</Link>
                            </Button>
                            <Button size="xl" variant="outline" className="bg-background" asChild>
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </motion.div>
                </SectionContainer>
            </section>
        </div>
    );
}
