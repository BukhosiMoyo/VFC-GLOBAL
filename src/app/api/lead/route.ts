import { NextResponse } from "next/server";
import { sendLeadEmails } from "@/lib/email";
import { z } from "zod";

const leadSchema = z.object({
    fullName: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(10),
    country: z.string().min(2),
    serviceCategory: z.string(),
    message: z.string().optional(),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Validate data
        const validatedData = leadSchema.parse(body);

        // Send emails
        await sendLeadEmails(validatedData);

        return NextResponse.json({ success: true, message: "Lead submitted successfully" });
    } catch (error) {
        console.error("Lead API Error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to process request" },
            { status: 500 }
        );
    }
}
