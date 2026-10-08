import Link from 'next/link';
import { Download, FileText, Lock, ShieldCheck, TimerReset } from 'lucide-react';

export default function SharePage({ params }: { params: { token: string } }) {
  const token = params?.token ?? '8dK92xLmP7Q';

  return (
    <main className="mx-auto flex min-h-screen max-w-xl items-center justify-center px-6 py-12">
      <div className="glass-panel w-full rounded-3xl p-8">
        <div className="mb-6 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-cyan-300">CloudVault Zero</div>
          <h1 className="mt-4 text-3xl font-black">Secure transfer access</h1>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-300">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-slate-50">project-report.pdf</div>
                <div className="text-sm text-slate-400">12.4 MB • PDF</div>
              </div>
            </div>
            <div className="security-tag rounded-full px-2 py-1 text-[10px] uppercase tracking-[0.2em]">Encrypted</div>
          </div>

          <div className="mt-6 grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
              <div className="mb-2 flex items-center gap-2 text-cyan-300"><TimerReset className="h-4 w-4" /> Available until</div>
              <div>23:45</div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
              <div className="mb-2 flex items-center gap-2 text-cyan-300"><ShieldCheck className="h-4 w-4" /> Downloads remaining</div>
              <div>1</div>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-200"><Lock className="h-4 w-4 text-cyan-300" /> Password protection</div>
            <input className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-slate-50 outline-none ring-0 placeholder:text-slate-500" placeholder="Enter password" />
          </div>

          <div className="flex gap-3">
            <button type="button" className="flex-1 rounded-full bg-cyan-500 px-5 py-3 font-semibold text-slate-950">Download Securely</button>
            <Link href="/" className="rounded-full border border-slate-700 px-5 py-3 font-semibold text-slate-200">Back</Link>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-slate-400">Secure token: <span className="font-mono text-slate-300">{token}</span></div>
      </div>
    </main>
  );
}
