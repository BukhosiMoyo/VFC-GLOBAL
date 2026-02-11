"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

// Define the schema for validation
const leadSchema = z.object({
    fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().min(10, { message: "Please enter a valid phone number." }),
    country: z.string().min(2, { message: "Please enter your country of residence." }),
    serviceCategory: z.enum([
        "Visa Applications",
        "Waivers & Appeals",
        "Corporate Immigration",
        "Special Services",
        "Not sure",
    ]),
    message: z.string().optional(),
});

type LeadFormValues = z.infer<typeof leadSchema>;

export function LeadForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<LeadFormValues>({
        resolver: zodResolver(leadSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            country: "",
            serviceCategory: "Visa Applications",
            message: "",
        },
    });

    async function onSubmit(data: LeadFormValues) {
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch("/api/lead", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Something went wrong. Please try again.");
            }

            setIsSuccess(true);
            reset();
        } catch {
            setError("Failed to submit form. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    }

    if (isSuccess) {
        return (
            <div className="rounded-lg border bg-card p-8 text-center shadow-sm">
                <h3 className="mb-2 text-2xl font-bold text-primary">Request Received!</h3>
                <p className="mb-6 text-muted-foreground">
                    Thank you for reaching out. Our team will review your request and get back to you shortly.
                </p>
                <Button onClick={() => setIsSuccess(false)} variant="outline">
                    Send another request
                </Button>
            </div>
        );
    }

    return (
        <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-6 text-xl font-bold">Get a Quick Consultation</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid gap-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input id="fullName" {...register("fullName")} placeholder="John Doe" />
                    {errors.fullName && (
                        <p className="text-sm text-destructive">{errors.fullName.message}</p>
                    )}
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" {...register("email")} placeholder="john@example.com" />
                    {errors.email && (
                        <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="phone">Phone / WhatsApp *</Label>
                    <Input id="phone" {...register("phone")} placeholder="+27 12 345 6789" />
                    {errors.phone && (
                        <p className="text-sm text-destructive">{errors.phone.message}</p>
                    )}
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="country">Country of Residence *</Label>
                    <Input id="country" {...register("country")} placeholder="South Africa" />
                    {errors.country && (
                        <p className="text-sm text-destructive">{errors.country.message}</p>
                    )}
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="serviceCategory">Service Category *</Label>
                    <select
                        id="serviceCategory"
                        {...register("serviceCategory")}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <option value="Visa Applications">Visa Applications</option>
                        <option value="Waivers & Appeals">Waivers & Appeals</option>
                        <option value="Corporate Immigration">Corporate Immigration</option>
                        <option value="Special Services">Special Services</option>
                        <option value="Not sure">Not sure</option>
                    </select>
                    {errors.serviceCategory && (
                        <p className="text-sm text-destructive">{errors.serviceCategory.message}</p>
                    )}
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="Tell us a bit about your situation..."
                    />
                </div>

                {error && <p className="text-sm text-destructive">{error}</p>}

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        "Submit Request"
                    )}
                </Button>
            </form>
        </div>
    );
}
