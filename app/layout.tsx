import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const body = await request.json().catch(() => ({}));

  if (authHeader !== 'Bearer demo-cleanup-token' && body.secret !== 'demo-secret') {
    return NextResponse.json({ error: 'Unauthorized cleanup request.' }, { status: 401 });
  }

  return NextResponse.json({
    ok: true,
    deletedTransfers: 2,
    remaining: 10,
    message: 'Cleanup job executed idempotently.',
  });
}
