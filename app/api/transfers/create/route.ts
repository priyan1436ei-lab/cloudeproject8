import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();

  const fileName = typeof body.fileName === 'string' ? body.fileName.trim() : '';
  const sizeMb = typeof body.sizeMb === 'number' ? body.sizeMb : 0;
  const expiresInMinutes = typeof body.expiresInMinutes === 'number' ? body.expiresInMinutes : 60;

  if (!fileName || sizeMb <= 0) {
    return NextResponse.json({ error: 'Invalid transfer payload.' }, { status: 400 });
  }

  const token = `cvz-${Math.random().toString(36).slice(2, 16)}`;
  const transferId = `TR-${Date.now().toString().slice(-6)}`;

  return NextResponse.json({
    ok: true,
    transferId,
    token,
    shareUrl: `/share/${token}`,
    message: 'Secure transfer created successfully.',
    expiresInMinutes,
  });
}
