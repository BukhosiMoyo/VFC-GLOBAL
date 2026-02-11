"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FAQPage() {
    const faqs = [
        {
            question: "How long does a general work visa application take?",
            answer: "Processing times vary, but generally it takes 8-10 weeks after submission. However, delays at the Department of Home Affairs (DHA) can occur. We track your application and keep you updated."
        },
        {
            question: "Do I need a job offer to apply for a Critical Skills Visa?",
            answer: "No, you do not need a job offer to apply for a Critical Skills Visa, but you must secure employment within 12 months of the visa being issued to renew or continue your stay."
        },
        {
            question: "Can I appeal a rejected visa?",
            answer: "Yes, you have 10 working days to submit an appeal after receiving a rejection outcome. We assist with drafting comprehensive appeals to overturn the decision."
        },
        {
            question: "What is a 'Good Cause' letter?",
            answer: "A Good Cause letter is required when submitting a visa renewal application late (after the visa has expired) or obtaining a regularization of stay. It explains why you were unable to renew on time."
        },
        {
            question: "Can VFC guarantee my visa will be approved?",
            answer: "No consultancy can guarantee an outcome, as the final decision lies with the Department of Home Affairs. However, our expertise ensures your application is compliant, error-free, and has the highest possible chance of success."
        },
        {
            question: "How much do your services cost?",
            answer: "Our fees vary depending on the complexity of the service. We provide a transparent quote after your initial consultation."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-secondary py-16 text-center">
                <div className="container px-4 md:px-6">
                    <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Common questions about immigration and our services.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container px-4 md:px-6 max-w-3xl mx-auto">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>

                    <div className="mt-12 text-center bg-muted/50 rounded-xl p-8">
                        <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
                        <p className="text-muted-foreground mb-6">We re here to help you navigate your specific situation.</p>
                        <Button asChild>
                            <Link href="/contact">Contact Support</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded-lg bg-card overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full p-6 text-left font-medium transition-colors hover:bg-muted/50"
            >
                <span>{question}</span>
                {isOpen ? <Minus className="h-4 w-4 shrink-0 text-primary" /> : <Plus className="h-4 w-4 shrink-0 text-muted-foreground" />}
            </button>
            {isOpen && (
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed animate-in slide-in-from-top-2 duration-200">
                    {answer}
                </div>
            )}
        </div>
    );
}
