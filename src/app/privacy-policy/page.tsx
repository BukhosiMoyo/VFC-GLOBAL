"use client";

import { SectionContainer } from "@/components/ui/section-container";
import { Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="relative py-20 bg-background overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern opacity-[0.3]" />
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/4" />
                <SectionContainer className="relative z-10 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6 shadow-sm ring-1 ring-primary/20">
                        <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
                    <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
                </SectionContainer>
            </section>

            <section className="pb-20">
                <SectionContainer className="max-w-4xl">
                    <div className="prose prose-gray dark:prose-invert max-w-none bg-card border rounded-2xl p-8 md:p-12 shadow-sm">
                        <h2>1. Introduction</h2>
                        <p>
                            VFC Global (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                        </p>

                        <h2>2. Data We Collect</h2>
                        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
                        <ul>
                            <li><strong>Identity Data:</strong> includes first name, maiden name, last name, username or similar identifier, marital status, title, date of birth and gender.</li>
                            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
                        </ul>

                        <h2>3. How We Use Your Data</h2>
                        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                        <ul>
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., providing visa consultation services).</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                        </ul>

                        <h2>4. Data Security</h2>
                        <p>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                        </p>

                        <h2>5. Contact Us</h2>
                        <p>
                            If you have any questions about this privacy policy, please contact us at info@vfcglobal.co.za.
                        </p>
                    </div>
                </SectionContainer>
            </section>
        </div>
    );
}
