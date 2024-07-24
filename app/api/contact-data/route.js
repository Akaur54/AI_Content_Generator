import { NextResponse } from 'next/server';
import { ContactForm } from '@/utils/schema'; // Adjust the import path accordingly
import { db } from '@/utils/db'; // Adjust the import path for your Drizzle DB connection

export async function POST(req) {
    try {
        const data = await req.json();
        const { name, email, message } = data;

        // Validate input if needed

        // Save data to the database
        await db.insert(ContactForm).values({
            name,
            email,
            message,
            createdAt: new Date().toISOString(), // Current timestamp
        });

        return NextResponse.json({ message: 'Message sent successfully!' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
    }
}
