"use client";

import { SectionContainer } from "@/components/ui/section-container";
import { FileText } from "lucide-react";

export default function TermsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="relative py-20 bg-background overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern opacity-[0.3]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
                <SectionContainer className="relative z-10 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6 shadow-sm ring-1 ring-primary/20">
                        <FileText className="h-8 w-8 text-primary" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
                    <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
                </SectionContainer>
            </section>

            <section className="pb-20">
                <SectionContainer className="max-w-4xl">
                    <div className="prose prose-gray dark:prose-invert max-w-none bg-card border rounded-2xl p-8 md:p-12 shadow-sm">
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                        </p>

                        <h2>2. Service Description</h2>
                        <p>
                            VFC Global is an independent consultancy that provides advice and facilitation services for immigration and visa applications. We are not a government agency and we do not issue visas. The final decision on all visa applications rests with the Department of Home Affairs.
                        </p>

                        <h2>3. No Guarantees</h2>
                        <p>
                            While we strive to ensure the highest chance of success for your application, we cannot guarantee the outcome of any visa application, appeal, or waiver. Fees paid for our services are for professional advice and administrative work, not for the outcome itself.
                        </p>

                        <h2>4. Limitation of Liability</h2>
                        <p>
                            In no event shall VFC Global be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on VFC Global&apos;s website.
                        </p>

                        <h2>5. Governing Law</h2>
                        <p>
                            Any claim relating to VFC Global&apos;s website shall be governed by the laws of South Africa without regard to its conflict of law provisions.
                        </p>
                    </div>
                </SectionContainer>
            </section>
        </div>
    );
}
