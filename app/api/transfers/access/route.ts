import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();

  const token = typeof body.token === 'string' ? body.token : '';
  const password = typeof body.password === 'string' ? body.password : '';

  if (!token) {
    return NextResponse.json({ error: 'Invalid or expired transfer token.' }, { status: 400 });
  }

  const passwordCorrect = !password || password === 'demo123';

  if (!passwordCorrect) {
    return NextResponse.json({ error: 'Incorrect password.' }, { status: 401 });
  }

  return NextResponse.json({
    ok: true,
    transfer: {
      id: 'TR-1204',
      fileName: 'project-report.pdf',
      sizeMb: 12.4,
      expiresAt: '2026-10-08T23:45:00Z',
      downloadsRemaining: 1,
      status: 'ACTIVE',
    },
  });
}
