"use client";

import { BookingForm } from "@/components/forms/BookingForm";
import { SectionContainer } from "@/components/ui/section-container";
import { CalendarCheck, ArrowRight, ClipboardCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function BookPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="relative py-20 md:py-28 overflow-hidden bg-background">
                <div className="absolute inset-0 bg-dot-pattern opacity-[0.3]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />

                <SectionContainer className="relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center justify-center p-3 bg-indigo-500/10 rounded-2xl mb-6 shadow-sm ring-1 ring-indigo-500/20">
                            <CalendarCheck className="h-8 w-8 text-indigo-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                            Book a <span className="text-indigo-600">Consultation</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Take the first step towards resolving your immigration matters. Provide your details below, and our experts will analyze your case.
                        </p>
                    </motion.div>
                </SectionContainer>
            </section>

            <section className="py-12 md:pb-24 relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.2]" />
                <SectionContainer className="relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Left Column: Process/Benefits */}
                        <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold">Why book with us?</h3>
                                {[
                                    { icon: ClipboardCheck, title: "In-depth Assessment", desc: "We review every detail of your case to identify the best legal pathway." },
                                    { icon: Sparkles, title: "Personalized Strategy", desc: "Receive a tailored roadmap designed for your specific situation." },
                                    { icon: ArrowRight, title: "Clear Next Steps", desc: "Walk away with a clear understanding of costs, timelines, and requirements." }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-4 p-4 rounded-xl border bg-card/50 hover:bg-muted/50 transition-colors"
                                    >
                                        <div className="mt-1 bg-indigo-500/10 p-2 rounded-lg h-fit text-indigo-600">
                                            <item.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">{item.title}</h4>
                                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="bg-indigo-500/5 p-6 rounded-2xl border border-indigo-500/10">
                                <p className="text-sm text-indigo-800 dark:text-indigo-200 font-medium">
                                    &quot;VFC Global made a complex process simple. Their initial assessment saved us months of wasted time.&quot;
                                </p>
                                <div className="mt-4 flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-indigo-500/20" />
                                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Verified Client</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="lg:col-span-7 order-1 lg:order-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-card border shadow-xl rounded-2xl overflow-hidden"
                            >
                                <div className="p-6 md:p-8 border-b bg-muted/20">
                                    <h2 className="text-xl font-bold">Consultation Request</h2>
                                    <p className="text-muted-foreground text-sm">Please fill in all required fields.</p>
                                </div>
                                <div className="p-6 md:p-8">
                                    <BookingForm />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </SectionContainer>
            </section>
        </div>
    );
}
