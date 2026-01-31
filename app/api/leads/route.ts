import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { kv } from '@vercel/kv';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
        }

        const newLead = {
            email,
            timestamp: new Date().toISOString(),
        };

        // Check if we are in production (Vercel) by checking for KV environment variables
        const isKVEnabled = process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN;

        if (isKVEnabled) {
            // Store in Vercel KV (Redis)
            // We use an LPUSH or similar to keep a list of leads
            await kv.lpush('leads', JSON.stringify(newLead));
        } else {
            // Local fallback to filesystem
            const leadsFilePath = path.join(process.cwd(), 'leads.json');

            let leads = [];
            if (fs.existsSync(leadsFilePath)) {
                try {
                    const fileContent = fs.readFileSync(leadsFilePath, 'utf8');
                    leads = JSON.parse(fileContent);
                } catch (e) {
                    console.error('Error reading/parsing leads.json', e);
                }
            }

            leads.push(newLead);
            fs.writeFileSync(leadsFilePath, JSON.stringify(leads, null, 2));
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error saving lead:', error);
        return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 });
    }
}
