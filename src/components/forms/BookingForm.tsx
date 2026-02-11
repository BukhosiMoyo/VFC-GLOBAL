"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle, ArrowRight, ArrowLeft, ClipboardList, MapPin, User, CheckSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const bookingSchema = z.object({
    fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().min(10, { message: "Please enter a valid phone number." }),
    contactMethod: z.enum(["Email", "WhatsApp", "Phone Call"]),
    citizenship: z.string().min(2, { message: "Required." }),
    residence: z.string().min(2, { message: "Required." }),
    destination: z.string().min(1, { message: "Required." }),
    serviceCategory: z.string().min(1, { message: "Please select a category." }),
    specificService: z.string().min(1, { message: "Please select a specific service." }),
    urgency: z.enum(["ASAP", "1-2 Weeks", "1 Month", "3+ Months"]),
    description: z.string().min(10, { message: "Please provide a short description (min 10 chars)." }),
    consent: z.boolean().refine((val) => val === true, { message: "You must agree to the terms." }),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const serviceOptions: Record<string, string[]> = {
    "Visa Applications": [
        "General Work Visa",
        "Critical Skills Visa",
        "Corporate Work Visa",
        "Intra-Company Transfer Visa",
        "Study Visa",
        "Business Visa",
        "Tourist/Visitor Visa",
        "Spousal/Life Partner Visa",
        "Permanent Residence Permit",
        "Other Visa"
    ],
    "Waivers & Appeals": [
        "Waiver Application",
        "Appeal for Rejected Visa",
        "Regularization of Stay (Overstay)",
        " Legal Advice"
    ],
    "Corporate Immigration": [
        "Work Visa Facilitation (Group)",
        "Employer Compliance Audit",
        "Corporate Advisory",
        "Employee Relocation"
    ],
    "Special Services": [
        "Citizenship Application",
        "Visa Renewal / Extension",
        "Document Procurement",
        "Other Special Service"
    ],
};

const STEPS = [
    { id: 1, name: "Contact", icon: User, fields: ["fullName", "email", "phone", "contactMethod"] },
    { id: 2, name: "Location", icon: MapPin, fields: ["citizenship", "residence", "destination"] },
    { id: 3, name: "Service", icon: ClipboardList, fields: ["serviceCategory", "specificService", "urgency", "description"] },
    { id: 4, name: "Review", icon: CheckSquare, fields: ["consent"] },
];

export function BookingForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [previousStep, setPreviousStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        control,
        setValue,
        reset,
        trigger,
        getValues,
        formState: { errors },
    } = useForm<BookingFormValues>({
        resolver: zodResolver(bookingSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            contactMethod: "Email",
            citizenship: "",
            residence: "",
            destination: "South Africa",
            serviceCategory: "",
            specificService: "",
            urgency: "ASAP",
            description: "",
            consent: false,
        },
    });

    const selectedCategory = useWatch({ control, name: "serviceCategory" });


    const delta = currentStep - previousStep;

    const nextStep = async () => {
        const fields = STEPS[currentStep - 1].fields;
        const output = await trigger(fields as unknown as (keyof BookingFormValues)[]);

        if (!output) return;

        if (currentStep < STEPS.length) {
            setPreviousStep(currentStep);
            setCurrentStep((step) => step + 1);
        } else {
            handleSubmit(onSubmit)();
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setPreviousStep(currentStep);
            setCurrentStep((step) => step - 1);
        }
    };

    async function onSubmit(data: BookingFormValues) {
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch("/api/book", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to submit booking.");
            }

            setIsSuccess(true);
            reset();
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    if (isSuccess) {
        return (
            <div className="glass-card rounded-2xl p-12 text-center max-w-2xl mx-auto">
                <div className="mx-auto w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 ring-1 ring-green-500/20">
                    <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">Request Received!</h2>
                <p className="text-xl text-muted-foreground mb-8">
                    Thank you for booking a consultation. Our team has received your details and will be in touch shortly via your preferred contact method.
                </p>
                <Button onClick={() => { setIsSuccess(false); setCurrentStep(1); }} variant="outline" className="min-w-[200px]">
                    Submit Another Request
                </Button>
            </div>
        );
    }

    return (
        <div className="w-full max-w-3xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-8">
                <div className="flex justify-between items-center relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-secondary rounded-full -z-10" />
                    <div
                        className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full -z-10 transition-all duration-500 ease-in-out"
                        style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
                    />

                    {STEPS.map((step) => {
                        const StepIcon = step.icon;
                        const isActive = currentStep >= step.id;

                        return (
                            <div key={step.id} className="flex flex-col items-center gap-2 bg-background p-2 rounded-xl">
                                <div
                                    className={cn(
                                        "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                                        isActive
                                            ? "bg-primary border-primary text-primary-foreground"
                                            : "bg-background border-muted-foreground/30 text-muted-foreground"
                                    )}
                                >
                                    <StepIcon className="w-5 h-5" />
                                </div>
                                <span className={cn(
                                    "text-xs font-medium transition-colors duration-300 hidden md:block",
                                    isActive ? "text-primary" : "text-muted-foreground"
                                )}>
                                    {step.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="glass-card rounded-2xl p-6 md:p-8 shadow-2xl shadow-primary/5 border border-primary/10">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <AnimatePresence mode="wait" custom={delta}>
                        {currentStep === 1 && (
                            <motion.div
                                key="step1"
                                custom={delta}
                                initial={{ x: delta >= 0 ? 20 : -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: delta >= 0 ? -20 : 20, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-4"
                            >
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-semibold">Personal Details</h3>
                                    <p className="text-muted-foreground">Let us know how to contact you.</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="fullName" className="text-foreground/80">Full Name *</Label>
                                        <Input id="fullName" {...register("fullName")} placeholder="Jane Doe" className="bg-background/50" />
                                        {errors.fullName && <p className="text-sm text-destructive">{errors.fullName.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-foreground/80">Email *</Label>
                                        <Input id="email" type="email" {...register("email")} placeholder="jane@example.com" className="bg-background/50" />
                                        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-foreground/80">Phone / WhatsApp *</Label>
                                        <Input id="phone" {...register("phone")} placeholder="+27 ..." className="bg-background/50" />
                                        {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="contactMethod" className="text-foreground/80">Preferred Contact *</Label>
                                        <select
                                            id="contactMethod"
                                            {...register("contactMethod")}
                                            className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            <option value="Email">Email</option>
                                            <option value="WhatsApp">WhatsApp</option>
                                            <option value="Phone Call">Phone Call</option>
                                        </select>
                                        {errors.contactMethod && <p className="text-sm text-destructive">{errors.contactMethod.message}</p>}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {currentStep === 2 && (
                            <motion.div
                                key="step2"
                                custom={delta}
                                initial={{ x: delta >= 0 ? 20 : -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: delta >= 0 ? -20 : 20, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-4"
                            >
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-semibold">Location Information</h3>
                                    <p className="text-muted-foreground">Help us understand your immigration context.</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="citizenship" className="text-foreground/80">Country of Citizenship *</Label>
                                        <Input id="citizenship" {...register("citizenship")} placeholder="e.g. United Kingdom" className="bg-background/50" />
                                        {errors.citizenship && <p className="text-sm text-destructive">{errors.citizenship.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="residence" className="text-foreground/80">Current Residence *</Label>
                                        <Input id="residence" {...register("residence")} placeholder="e.g. Dubai, UAE" className="bg-background/50" />
                                        {errors.residence && <p className="text-sm text-destructive">{errors.residence.message}</p>}
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <Label htmlFor="destination" className="text-foreground/80">Destination Country *</Label>
                                        <Input id="destination" {...register("destination")} defaultValue="South Africa" className="bg-background/50" />
                                        {errors.destination && <p className="text-sm text-destructive">{errors.destination.message}</p>}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {currentStep === 3 && (
                            <motion.div
                                key="step3"
                                custom={delta}
                                initial={{ x: delta >= 0 ? 20 : -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: delta >= 0 ? -20 : 20, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-4"
                            >
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-semibold">Service Request</h3>
                                    <p className="text-muted-foreground">What do you need help with?</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="serviceCategory" className="text-foreground/80">Service Category *</Label>
                                        <select
                                            id="serviceCategory"
                                            {...register("serviceCategory")}
                                            onChange={(e) => {
                                                register("serviceCategory").onChange(e);
                                                setValue("specificService", "");
                                            }}
                                            className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            <option value="">Select a category</option>
                                            {Object.keys(serviceOptions).map(cat => (
                                                <option key={cat} value={cat}>{cat}</option>
                                            ))}
                                        </select>
                                        {errors.serviceCategory && <p className="text-sm text-destructive">{errors.serviceCategory.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="specificService" className="text-foreground/80">Specific Service *</Label>
                                        <select
                                            id="specificService"
                                            {...register("specificService")}
                                            disabled={!selectedCategory}
                                            className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted"
                                        >
                                            <option value="">Select a service</option>
                                            {selectedCategory && serviceOptions[selectedCategory]?.map(svc => (
                                                <option key={svc} value={svc}>{svc}</option>
                                            ))}
                                        </select>
                                        {errors.specificService && <p className="text-sm text-destructive">{errors.specificService.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="urgency" className="text-foreground/80">Urgency *</Label>
                                        <select
                                            id="urgency"
                                            {...register("urgency")}
                                            className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            <option value="ASAP">ASAP (Immediate)</option>
                                            <option value="1-2 Weeks">1-2 Weeks</option>
                                            <option value="1 Month">1 Month</option>
                                            <option value="3+ Months">3+ Months</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="description" className="text-foreground/80">Situation Description *</Label>
                                    <Textarea
                                        id="description"
                                        {...register("description")}
                                        placeholder="Please briefly describe your current situation, including any refusals or specific concerns..."
                                        className="min-h-[120px] bg-background/50"
                                    />
                                    {errors.description && <p className="text-sm text-destructive">{errors.description.message}</p>}
                                </div>
                            </motion.div>
                        )}

                        {currentStep === 4 && (
                            <motion.div
                                key="step4"
                                custom={delta}
                                initial={{ x: delta >= 0 ? 20 : -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: delta >= 0 ? -20 : 20, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-6"
                            >
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-semibold">Review & Submit</h3>
                                    <p className="text-muted-foreground">Please ensure all details are correct.</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 bg-secondary/20 p-6 rounded-xl border border-secondary">
                                    <div>
                                        <h4 className="font-semibold text-primary mb-2">Contact</h4>
                                        <p className="text-sm text-muted-foreground"><span className="font-medium text-foreground">Name:</span> {getValues("fullName")}</p>
                                        <p className="text-sm text-muted-foreground"><span className="font-medium text-foreground">Email:</span> {getValues("email")}</p>
                                        <p className="text-sm text-muted-foreground"><span className="font-medium text-foreground">Phone:</span> {getValues("phone")}</p>
                                        <p className="text-sm text-muted-foreground"><span className="font-medium text-foreground">Method:</span> {getValues("contactMethod")}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary mb-2">Location</h4>
                                        <p className="text-sm text-muted-foreground"><span className="font-medium text-foreground">From:</span> {getValues("citizenship")} / {getValues("residence")}</p>
                                        <p className="text-sm text-muted-foreground"><span className="font-medium text-foreground">To:</span> {getValues("destination")}</p>
                                    </div>
                                    <div className="md:col-span-2">
                                        <h4 className="font-semibold text-primary mb-2">Service</h4>
                                        <p className="text-sm text-muted-foreground"><span className="font-medium text-foreground">Type:</span> {getValues("serviceCategory")} - {getValues("specificService")}</p>
                                        <p className="text-sm text-muted-foreground"><span className="font-medium text-foreground">Urgency:</span> {getValues("urgency")}</p>
                                        <div className="mt-2 text-sm text-muted-foreground p-3 bg-background rounded-md border text-wrap break-words">
                                            {getValues("description")}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-start gap-2 pt-2">
                                        <input
                                            type="checkbox"
                                            id="consent"
                                            {...register("consent")}
                                            className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary accent-primary"
                                        />
                                        <Label htmlFor="consent" className="text-sm font-normal leading-tight text-muted-foreground cursor-pointer">
                                            I consent to VFC Global processing my personal data for the purpose of this consultation request. I understand that VFC is an independent consultancy.
                                        </Label>
                                    </div>
                                    {errors.consent && <p className="text-sm text-destructive">{errors.consent.message}</p>}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="flex justify-between pt-8 border-t">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={prevStep}
                            disabled={currentStep === 1 || isSubmitting}
                            className={cn(currentStep === 1 && "invisible")}
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back
                        </Button>

                        <div className="flex gap-2">
                            {currentStep < STEPS.length ? (
                                <Button type="button" onClick={nextStep}>
                                    Next Step <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            ) : (
                                <Button type="button" onClick={nextStep} disabled={isSubmitting} className="min-w-[140px]">
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting
                                        </>
                                    ) : (
                                        <>Submit Request <CheckCircle className="ml-2 h-4 w-4" /></>
                                    )}
                                </Button>
                            )}
                        </div>
                    </div>
                    {error && <p className="text-center text-destructive mt-4">{error}</p>}
                </form>
            </div>
        </div>
    );
}
