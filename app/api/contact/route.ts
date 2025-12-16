import { NextResponse } from 'next/server';
import { z } from 'zod';

// Schema for input validation
const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

// Rate limiting map (simple in-memory for demonstration, use Redis in production)
const rateLimit = new Map<string, number>();

export async function POST(request: Request) {
    try {
        // 1. Rate Limiting Check
        const ip = request.headers.get('x-forwarded-for') || 'unknown';
        const now = Date.now();
        const lastRequest = rateLimit.get(ip) || 0;

        // Allow 1 request per 60 seconds
        if (now - lastRequest < 60000) {
            return NextResponse.json(
                { error: "Too many requests. Please wait a minute." },
                { status: 429 }
            );
        }

        rateLimit.set(ip, now);

        // 2. Input Validation
        const body = await request.json();
        const result = contactSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { error: "Invalid input", details: result.error.errors },
                { status: 400 }
            );
        }

        const { name, email, message } = result.data;

        // 3. Secure Email Sending via EmailJS REST API
        // strictly using server-side keys
        const SERVICE_ID = process.env.EMAILJS_SERVICE_ID || 'service_0i2abk7';
        const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID || 'template_jbwlvlv';
        const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY || 'STHfOFB5LJzn3I9Jn';
        const PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY; // Optional but recommended

        // Construct payload
        const emailData = {
            service_id: SERVICE_ID,
            template_id: TEMPLATE_ID,
            user_id: PUBLIC_KEY,
            accessToken: PRIVATE_KEY,
            template_params: {
                from_name: name, // User's name
                from_email: email, // User's email (for Reply-To in template)
                message: message,
                // CRITICAL: We do not allow 'to_email' or 'subject' to be passed from client
            }
        };

        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailData),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('EmailJS Error:', errorText);
            return NextResponse.json(
                { error: "Failed to send email" },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, message: "Email sent successfully" });

    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
