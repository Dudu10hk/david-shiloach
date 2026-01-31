import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
        }

        const leadsFilePath = path.join(process.cwd(), 'leads.json');

        let leads = [];
        if (fs.existsSync(leadsFilePath)) {
            const fileContent = fs.readFileSync(leadsFilePath, 'utf8');
            leads = JSON.parse(fileContent);
        }

        const newLead = {
            email,
            timestamp: new Date().toISOString(),
        };

        leads.push(newLead);
        fs.writeFileSync(leadsFilePath, JSON.stringify(leads, null, 2));

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error saving lead:', error);
        return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 });
    }
}
