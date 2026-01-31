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

        const isKVEnabled = process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN;
        const isVercel = process.env.VERCEL === '1';

        console.log(`Lead submission attempt: ${email}. isKVEnabled: ${!!isKVEnabled}, isVercel: ${isVercel}`);

        if (isKVEnabled) {
            console.log('Attempting to save to Vercel KV...');
            await kv.lpush('leads', JSON.stringify(newLead));
            console.log('Successfully saved to Vercel KV');
        } else if (isVercel) {
            console.error('CRITICAL: Running on Vercel but KV environment variables are missing!');
            return NextResponse.json({ error: 'Storage not configured. Please connect Vercel KV.' }, { status: 500 });
        } else {
            console.log('Running locally, saving to leads.json...');
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
            console.log('Successfully saved to leads.json');
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Error saving lead:', error);
        return NextResponse.json({ error: 'Failed to save lead', details: error.message }, { status: 500 });
    }
}
