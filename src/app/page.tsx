"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LeadForm } from "@/components/forms/LeadForm";
import { CheckCircle2, Globe2, ShieldCheck, ArrowRight, Briefcase, FileText, Star, Users, Clock } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-32 overflow-hidden bg-background">
        {/* Animated Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] animate-blob" />
          <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-slate-500/10 rounded-full blur-[100px] animate-blob animation-delay-4000" />
          <div className="absolute inset-0 bg-dot-pattern opacity-[0.4]" />
        </div>

        <SectionContainer className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-4 py-1.5 text-sm font-medium text-primary shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Premium Immigration Services
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
                Global Travel <br />
                <span className="text-gradient-primary">Simplified.</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto lg:mx-0 leading-relaxed">
                Expert guidance for visas, waivers, and corporate immigration. We navigate the complexity so you don&apos;t have to.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="xl" variant="gradient" className="shadow-lg shadow-blue-500/25" asChild>
                  <Link href="/book">Start Application</Link>
                </Button>
                <Button size="xl" variant="outline" className="bg-background/50 backdrop-blur-sm hover:bg-background/80" asChild>
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 text-sm text-foreground/80">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <div className="p-1 rounded-full bg-green-500/10 text-green-600"><CheckCircle2 className="h-4 w-4" /></div>
                  <span className="font-medium">98% Success Rate</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <div className="p-1 rounded-full bg-blue-500/10 text-blue-600"><Clock className="h-4 w-4" /></div>
                  <span className="font-medium">Fast Turnaround</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start col-span-2 sm:col-span-1">
                  <div className="p-1 rounded-full bg-indigo-500/10 text-indigo-600"><Users className="h-4 w-4" /></div>
                  <span className="font-medium">Expert Team</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto w-full max-w-[500px]"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 animate-pulse" />
              <div className="relative glass-card rounded-xl overflow-hidden p-1">
                {/* Lead Form Wrapper to override some styles if needed, but LeadForm styles are decent */}
                <div className="bg-card/40 p-2">
                  <LeadForm />
                </div>
              </div>
            </motion.div>
          </div>
        </SectionContainer>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background relative" id="services">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.3] pointer-events-none" />
        <SectionContainer>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">World-Class Services</h2>
            <p className="text-muted-foreground text-lg max-w-[700px] mx-auto">
              Tailored solutions for individuals, families, and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Visa Applications",
                desc: "Work, Study, & Visitor Visas handled with precision.",
                icon: Briefcase,
                color: "text-blue-500",
                href: "/services/visa-applications"
              },
              {
                title: "Waivers & Appeals",
                desc: "Overturn rejections and legalize your stay.",
                icon: ShieldCheck,
                color: "text-indigo-500",
                href: "/services/waivers-appeals"
              },
              {
                title: "Corporate",
                desc: "Complete compliance for multinational teams.",
                icon: Globe2,
                color: "text-sky-500",
                href: "/services/corporate-immigration"
              },
              {
                title: "Special Services",
                desc: "Citizenship, fast-tracking & document procurement.",
                icon: Star,
                color: "text-teal-500",
                href: "/services/special-services"
              }
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full glass-card hover:border-primary/50 transition-all border-t-4 border-t-transparent hover:border-t-primary group cursor-pointer">
                  <CardHeader>
                    <div className={`h-12 w-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors`}>
                      <service.icon className={`h-6 w-6 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" className="p-0 h-auto font-semibold text-primary group-hover:translate-x-1 transition-transform" asChild>
                      <Link href={service.href} className="flex items-center gap-1">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* Why VFC / Benefits */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <SectionContainer>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Choose VFC?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We combine legal expertise with modern technology to provide a seamless immigration experience. No hidden fees, no confusing jargon—just results.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: ShieldCheck, title: "Legally Compliant", desc: "Fully up-to-date with immigration laws." },
                  { icon: Clock, title: "Fast Processing", desc: "Optimized workflows to save you time." },
                  { icon: Users, title: "Dedicated Support", desc: "Personal case managers for every client." },
                  { icon: FileText, title: "Transparent Pricing", desc: "Clear quotes with no surprise costs." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual / Image Placeholder */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-10 blur-2xl" />
              <div className="relative aspect-video rounded-xl bg-card border border-border/50 shadow-2xl p-8 flex flex-col justify-center items-center text-center space-y-4">
                <div className="h-20 w-20 rounded-full bg-green-500/10 flex items-center justify-center animate-pulse">
                  <CheckCircle2 className="h-10 w-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold">Approved</h3>
                <p className="text-muted-foreground">Join 10,000+ satisfied clients who have successfully relocated.</p>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <SectionContainer className="max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Common questions about our services and process.</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "How long does a consultation take?", a: "Our standard consultation lasts about 45 minutes, where we assess your eligibility and provide a roadmap." },
              { q: "Do you guarantee a visa approval?", a: "No reputable agency can guarantee approval as the final decision lies with the government. However, we have a 98% success rate due to our thorough vetting process." },
              { q: "Are your fees refundable?", a: "Consultation fees are non-refundable but are deducted from your final service fee if you proceed with us." },
              { q: "Can you help with appeals?", a: "Yes, we specialize in complex appeals and waiver applications for rejected visas." },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/50">
                <AccordionTrigger className="text-lg font-medium hover:text-primary hover:no-underline">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </SectionContainer>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <SectionContainer className="relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Start Your Journey?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-[600px] mx-auto">
            Book a consultation with our experts today and handle your immigration matters with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="gradient" className="shadow-xl" asChild>
              <Link href="/book">Book Now</Link>
            </Button>
            <Button size="xl" variant="outline" className="bg-background" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}
