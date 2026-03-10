import { Resend } from 'resend';
import { getAdminNotificationTemplate, getCustomerConfirmationTemplate } from './email-templates';

const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789');
const DEV_SENDER = 'onboarding@resend.dev';

function getTeamEmails() {
    const configured = process.env.RESEND_TEAM_EMAILS
        ?.split(',')
        .map((email) => email.trim())
        .filter(Boolean);

    return configured?.length ? configured : ['info@vfcglobal.co.za', 'consult@vfcglobal.co.za'];
}

function getSenderEmail() {
    return process.env.RESEND_FROM_EMAIL || 'VFC Global <noreply@vfcglobal.co.za>';
}

function requireResendApiKey() {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        throw new Error('RESEND_API_KEY is not configured');
    }

    return apiKey;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function sendLeadEmails(data: any) {
    const isDev = process.env.NODE_ENV === 'development';
    const from = isDev ? DEV_SENDER : getSenderEmail();
    const teamEmails = isDev ? ['delivered@resend.dev'] : getTeamEmails();

    requireResendApiKey();

    // 1. Send Admin Notification
    try {
        await resend.emails.send({
            from,
            to: teamEmails,
            replyTo: data.email,
            subject: `NEW LEAD: ${data.serviceCategory} - ${data.fullName}`,
            html: getAdminNotificationTemplate(data, 'Lead Inquiry'),
        });
    } catch (error: unknown) {
        console.error("Failed to send admin lead email", error);
        throw error;
    }

    // 2. Send Customer Confirmation
    try {
        await resend.emails.send({
            from,
            to: isDev ? 'delivered@resend.dev' : data.email,
            subject: 'We have received your inquiry - VFC Global',
            html: getCustomerConfirmationTemplate(data.fullName, 'Lead'),
        });
    } catch (error: unknown) {
        console.error("Failed to send customer lead email", error);
    }

    return { success: true };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function sendBookingEmails(data: any) {
    const isDev = process.env.NODE_ENV === 'development';
    const from = isDev ? DEV_SENDER : getSenderEmail();
    const teamEmails = isDev ? ['delivered@resend.dev'] : getTeamEmails();

    requireResendApiKey();

    // 1. Send Admin Notification
    try {
        await resend.emails.send({
            from,
            to: teamEmails,
            replyTo: data.email,
            subject: `NEW BOOKING: ${data.serviceCategory} - ${data.fullName}`,
            html: getAdminNotificationTemplate(data, 'Consultation Booking'),
        });
    } catch (error: unknown) {
        console.error("Failed to send admin booking email", error);
        throw error;
    }

    // 2. Send Customer Confirmation
    try {
        await resend.emails.send({
            from,
            to: isDev ? 'delivered@resend.dev' : data.email,
            subject: 'Consultation Request Received - VFC Global',
            html: getCustomerConfirmationTemplate(data.fullName, 'Booking'),
        });
    } catch (error: unknown) {
        console.error("Failed to send customer booking email", error);
    }

    return { success: true };
}
