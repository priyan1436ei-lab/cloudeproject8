import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const token = typeof body.token === 'string' ? body.token : '';

  if (!token || token.includes('expired')) {
    return NextResponse.json({ error: 'This transfer is no longer available.' }, { status: 410 });
  }

  return NextResponse.json({
    ok: true,
    blob: {
      filename: 'project-report.pdf',
      contentType: 'application/pdf',
      bytes: 'mock-file-content',
    },
    message: 'Secure download authorized.',
  });
}
