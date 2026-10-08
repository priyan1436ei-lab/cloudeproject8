import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const token = typeof body.token === 'string' ? body.token : '';

  if (!token) {
    return NextResponse.json({ error: 'Missing token.' }, { status: 400 });
  }

  if (token.includes('expired')) {
    return NextResponse.json({ error: 'Sorry, this transfer has expired and the file is no longer available.' }, { status: 410 });
  }

  return NextResponse.json({
    ok: true,
    file: {
      fileName: 'project-report.pdf',
      contentType: 'application/pdf',
      sizeMb: 12.4,
      downloadUrl: '/api/transfers/download',
      expiresAt: '2026-10-08T23:45:00Z',
      downloadsRemaining: 1,
    },
  });
}
