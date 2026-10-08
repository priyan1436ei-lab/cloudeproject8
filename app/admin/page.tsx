import Link from 'next/link';
import { Activity, ArrowUpRight, Clock3, FileText, Lock, ShieldCheck } from 'lucide-react';
import { systemStats, transfers } from '@/lib/mock-data';

export default function DashboardPage() {
  const activeTransfers = transfers.filter((transfer) => transfer.status === 'ACTIVE' || transfer.status === 'ACCESSED');

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">User dashboard</div>
          <h1 className="mt-3 text-4xl font-black">Transfer overview</h1>
        </div>
        <Link href="/upload" className="rounded-full bg-cyan-500 px-4 py-2 font-medium text-slate-950">New transfer</Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: 'Active transfers', value: systemStats.activeTransfers, icon: Activity },
          { label: 'Expiring soon', value: systemStats.expiringSoon, icon: Clock3 },
          { label: 'Destroyed files', value: systemStats.destroyed, icon: ShieldCheck },
          { label: 'Total data sent', value: `${systemStats.dataSentGb} GB`, icon: FileText },
        ].map(({ label, value, icon: Icon }) => (
          <div key={label} className="glass-panel rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-300">{label}</div>
              <Icon className="h-4 w-4 text-cyan-300" />
            </div>
            <div className="mt-6 text-3xl font-black text-slate-50">{value}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="glass-panel rounded-3xl p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-bold">Active transfers</h2>
            <Link href="/transfers/TR-1204" className="text-sm text-cyan-300">View all</Link>
          </div>

          <div className="space-y-4">
            {activeTransfers.map((transfer) => (
              <div key={transfer.id} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
                <div>
                  <div className="font-semibold text-slate-50">{transfer.fileName}</div>
                  <div className="mt-1 text-xs text-slate-400">{transfer.sizeMb} MB • Expires {transfer.expiresAt}</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`status-badge ${transfer.status === 'ACTIVE' ? 'status-active' : 'status-accessed'}`}>{transfer.status}</span>
                  <Link href={`/transfers/${transfer.id}`} className="rounded-full border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-200">View</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-3xl p-6">
          <h2 className="text-xl font-bold">Privacy score</h2>
          <div className="mt-6 text-5xl font-black text-cyan-300">94</div>
          <div className="mt-4 h-3 rounded-full bg-slate-800">
            <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
          </div>
          <ul className="mt-6 space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-2"><Lock className="h-4 w-4 text-emerald-400" /> Password protection enabled</li>
            <li className="flex items-center gap-2"><ArrowUpRight className="h-4 w-4 text-emerald-400" /> Secure tokenized links</li>
            <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-400" /> Automatic deletion after expiry</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
