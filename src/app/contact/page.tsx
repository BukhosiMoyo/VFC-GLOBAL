"use client";

import { LeadForm } from "@/components/forms/LeadForm";
import { Mail, Phone, MapPin, MessageSquare, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionContainer } from "@/components/ui/section-container";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="relative py-20 md:py-28 overflow-hidden bg-background">
                <div className="absolute inset-0 bg-dot-pattern opacity-[0.3]" />
                <div className="absolute top-0 right-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

                <SectionContainer className="relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                            Get in <span className="text-primary">Touch</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Have questions about your visa application? Our team is ready to provide the answers and support you need.
                        </p>
                    </motion.div>
                </SectionContainer>
            </section>

            <section className="pb-20 relative">
                <SectionContainer>
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div className="bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 rounded-2xl p-8">
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <MessageSquare className="h-6 w-6 text-primary" /> Contact Channels
                                </h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 group">
                                        <div className="bg-background p-3 rounded-xl border group-hover:border-primary/50 transition-colors shadow-sm">
                                            <Phone className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1">Phone & WhatsApp</h3>
                                            <p className="text-muted-foreground">Call: {siteConfig.contact.phone.join(" / ")}</p>
                                            <p className="text-muted-foreground">WhatsApp: {siteConfig.contact.whatsapp.join(" / ")}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="bg-background p-3 rounded-xl border group-hover:border-primary/50 transition-colors shadow-sm">
                                            <Mail className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1">Email</h3>
                                            {siteConfig.contact.email.map((email) => (
                                                <p key={email} className="text-muted-foreground hover:text-primary transition-colors">
                                                    <a href={`mailto:${email}`}>{email}</a>
                                                </p>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="bg-background p-3 rounded-xl border group-hover:border-primary/50 transition-colors shadow-sm">
                                            <MapPin className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1">Office</h3>
                                            <p className="text-muted-foreground whitespace-pre-line">{siteConfig.contact.address}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="bg-background p-3 rounded-xl border group-hover:border-primary/50 transition-colors shadow-sm">
                                            <Clock className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1">Hours</h3>
                                            <p className="text-muted-foreground">Mon - Fri: 08:00 - 17:00</p>
                                            <p className="text-muted-foreground">Sat - Sun: Closed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Card className="border-muted shadow-lg bg-card/50 backdrop-blur-sm">
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-6">
                                        <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
                                        <p className="text-muted-foreground">Fill out the form below and we will get back to you shortly.</p>
                                    </div>
                                    <LeadForm />
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </SectionContainer>
            </section>
        </div>
    );
}
