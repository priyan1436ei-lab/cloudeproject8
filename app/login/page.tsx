import { CheckCircle2, Download, FileText, Lock, ShieldCheck, TimerReset } from 'lucide-react';
import { auditEntries, transfers } from '@/lib/mock-data';

export default function TransferDetailsPage({ params }: { params: { id: string } }) {
  const transfer = transfers[0];

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8">
        <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">Transfer details</div>
        <h1 className="mt-3 text-4xl font-black">{transfer.fileName}</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass-panel rounded-3xl p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <div className="flex items-center gap-2 text-cyan-300"><FileText className="h-4 w-4" /> File metadata</div>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <div>Type: PDF</div>
                <div>Size: 12.4 MB</div>
                <div>Created: 2026-10-08 10:00 UTC</div>
                <div>Expires: 2026-10-08 23:45 UTC</div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <div className="flex items-center gap-2 text-cyan-300"><ShieldCheck className="h-4 w-4" /> Security configuration</div>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <div>Encryption: AES-256-GCM</div>
                <div>Password: Enabled</div>
                <div>Download limit: 1</div>
                <div>Privacy score: 94/100</div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
            <div className="mb-4 flex items-center gap-2 text-cyan-300"><TimerReset className="h-4 w-4" /> Lifecycle timeline</div>
            <div className="space-y-4">
              {['Created', 'Encrypted', 'Uploaded', 'Link Generated', 'Link Accessed', 'Downloaded', 'Destroyed'].map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <div className={`flex h-7 w-7 items-center justify-center rounded-full ${index < 5 ? 'bg-emerald-500/15 text-emerald-300' : 'bg-slate-700 text-slate-400'}`}>
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-slate-200">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-3xl p-6">
          <h2 className="text-xl font-bold">Access history</h2>
          <div className="mt-6 space-y-4">
            {auditEntries.map((entry) => (
              <div key={`${entry.time}-${entry.event}`} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-cyan-300">{entry.event}</span>
                  <span className="text-xs text-slate-400">{entry.time}</span>
                </div>
                <p className="mt-2 text-sm text-slate-300">{entry.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
