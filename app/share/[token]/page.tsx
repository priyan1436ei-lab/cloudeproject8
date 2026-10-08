import { Activity, AlertTriangle, Database, ShieldAlert, Trash2 } from 'lucide-react';
import { systemStats } from '@/lib/mock-data';

const metrics = [
  { label: 'Active transfers', value: systemStats.activeTransfers, icon: Activity },
  { label: 'Storage used', value: `${systemStats.storageUsedGb} GB`, icon: Database },
  { label: 'Suspicious attempts', value: systemStats.suspiciousActivity, icon: ShieldAlert },
  { label: 'Cleanup failures', value: systemStats.cleanupFailures, icon: Trash2 },
];

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8">
        <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">Admin dashboard</div>
        <h1 className="mt-3 text-4xl font-black">System security overview</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map(({ label, value, icon: Icon }) => (
          <div key={label} className="glass-panel rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-300">{label}</div>
              <Icon className="h-4 w-4 text-cyan-300" />
            </div>
            <div className="mt-6 text-3xl font-black text-slate-50">{value}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass-panel rounded-3xl p-6">
          <h2 className="text-xl font-bold">Security monitoring</h2>
          <div className="mt-6 space-y-4">
            {[
              'Repeated token access detected on 3 transfer links',
              'Two password attempts exceeded safe threshold',
              'Cleanup queue shows 1 failed job requiring policy review',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4">
                <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-300" />
                <span className="text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-3xl p-6">
          <h2 className="text-xl font-bold">Policy controls</h2>
          <ul className="mt-6 space-y-3 text-sm text-slate-300">
            <li>• Max file size: 25 MB</li>
            <li>• Allowed file types: PDF, DOC, DOCX, JPG, PNG, TXT, ZIP</li>
            <li>• Default expiration: 15 minutes</li>
            <li>• Download limit: 1 or 3 by default</li>
            <li>• Admin role restricts metadata access without file contents</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
