import { NextResponse } from "next/server";
import { sendBookingEmails } from "@/lib/email";
import { z } from "zod";

// Create loose schema just for API validation, real validation happens on client too
// but good to be safe.
const bookingSchema = z.object({
    fullName: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(10),
    contactMethod: z.string(),
    citizenship: z.string(),
    residence: z.string(),
    destination: z.string(),
    serviceCategory: z.string(),
    specificService: z.string(),
    urgency: z.string(),
    description: z.string(),
    consent: z.boolean(),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Validate data
        const validatedData = bookingSchema.parse(body);

        // Send emails
        await sendBookingEmails(validatedData);

        return NextResponse.json({ success: true, message: "Booking submitted successfully" });
    } catch (error) {
        console.error("Booking API Error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to process booking" },
            { status: 500 }
        );
    }
}
