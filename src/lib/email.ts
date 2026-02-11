import { Resend } from 'resend';
import { getAdminNotificationTemplate, getCustomerConfirmationTemplate } from './email-templates';

const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789'); // Valid-ish default to prevent crash on init, but sending will fail if not real

// Configuration
const TEAM_EMAILS = ['info@vfcglobal.co.za', 'consult@vfcglobal.co.za'];
const SENDER_EMAIL = 'VFC Global <noreply@vfcglobal.co.za>'; // Must be verified domain in Resend
// fallback for development if domain not verified:
const DEV_SENDER = 'onboarding@resend.dev';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function sendLeadEmails(data: any) {
    const isDev = process.env.NODE_ENV === 'development';
    const from = isDev ? DEV_SENDER : SENDER_EMAIL;

    // 1. Send Admin Notification
    try {
        if (process.env.RESEND_API_KEY) {
            await resend.emails.send({
                from,
                to: isDev ? ['delivered@resend.dev'] : TEAM_EMAILS, // Safety for dev
                subject: `NEW LEAD: ${data.serviceCategory} - ${data.fullName}`,
                html: getAdminNotificationTemplate(data, 'Lead Inquiry'),
            });
        } else {
            console.log("RESEND_API_KEY missing. Logging Admin Email:", JSON.stringify(data, null, 2));
        }
    } catch (error: unknown) {
        console.error("Failed to send admin lead email", error);
        // Don't throw, try to send customer email or at least return success to user so they don't retry
    }

    // 2. Send Customer Confirmation
    try {
        if (process.env.RESEND_API_KEY) {
            await resend.emails.send({
                from,
                to: isDev ? 'delivered@resend.dev' : data.email,
                subject: 'We have received your inquiry - VFC Global',
                html: getCustomerConfirmationTemplate(data.fullName, 'Lead'),
            });
        } else {
            console.log("RESEND_API_KEY missing. Logging Customer Email:", data.email);
        }
    } catch (error: unknown) {
        console.error("Failed to send customer lead email", error);
    }

    return { success: true };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function sendBookingEmails(data: any) {
    const isDev = process.env.NODE_ENV === 'development';
    const from = isDev ? DEV_SENDER : SENDER_EMAIL;

    // 1. Send Admin Notification
    try {
        if (process.env.RESEND_API_KEY) {
            await resend.emails.send({
                from,
                to: isDev ? ['delivered@resend.dev'] : TEAM_EMAILS,
                subject: `NEW BOOKING: ${data.serviceCategory} - ${data.fullName}`,
                html: getAdminNotificationTemplate(data, 'Consultation Booking'),
            });
        } else {
            console.log("RESEND_API_KEY missing. Logging Admin Booking:", JSON.stringify(data, null, 2));
        }
    } catch (error: unknown) {
        console.error("Failed to send admin booking email", error);
    }

    // 2. Send Customer Confirmation
    try {
        if (process.env.RESEND_API_KEY) {
            await resend.emails.send({
                from,
                to: isDev ? 'delivered@resend.dev' : data.email,
                subject: 'Consultation Request Received - VFC Global',
                html: getCustomerConfirmationTemplate(data.fullName, 'Booking'),
            });
        } else {
            console.log("RESEND_API_KEY missing. Logging Customer Booking:", data.email);
        }
    } catch (error: unknown) {
        console.error("Failed to send customer booking email", error);
    }

    return { success: true };
}
