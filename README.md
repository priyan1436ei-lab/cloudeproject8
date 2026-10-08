import { CalendarRange, CheckCircle2, CloudUpload, FileText, XCircle } from 'lucide-react';

export default function UploadPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-8">
        <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">Secure upload</div>
        <h1 className="mt-3 text-4xl font-black">Create a zero-retention transfer</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel rounded-3xl p-6">
          <div className="rounded-3xl border-2 border-dashed border-cyan-500/30 bg-slate-950/50 p-10 text-center">
            <CloudUpload className="mx-auto h-12 w-12 text-cyan-300" />
            <div className="mt-5 text-2xl font-bold">DROP FILE HERE</div>
            <div className="mt-2 text-slate-400">or</div>
            <button type="button" className="mt-4 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-2 font-semibold text-cyan-200">Browse Files</button>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-cyan-500/10 p-2 text-cyan-300"><FileText className="h-4 w-4" /></div>
                <div>
                  <div className="font-semibold text-slate-50">project-report.pdf</div>
                  <div className="text-xs text-slate-400">12.4 MB • PDF</div>
                </div>
              </div>
              <button type="button" className="rounded-full border border-slate-700 p-2 text-slate-300">Remove</button>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-3xl p-6">
          <h2 className="text-xl font-bold">Transfer settings</h2>

          <div className="mt-6 space-y-6">
            <div>
              <div className="mb-3 text-sm font-medium text-slate-300">Expiration</div>
              <div className="grid gap-2 sm:grid-cols-2">
                {['5 min', '15 min', '1 hour', '6 hours', '24 hours', '7 days'].map((value) => (
                  <label key={value} className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 p-2 text-sm text-slate-200">
                    <input type="radio" name="expiration" defaultChecked={value === '15 min'} />
                    <span>{value}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-3 text-sm font-medium text-slate-300">Download limit</div>
              <div className="grid gap-2 sm:grid-cols-2">
                {['1', '3', '5', '10', 'Unlimited'].map((value) => (
                  <label key={value} className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 p-2 text-sm text-slate-200">
                    <input type="radio" name="limit" defaultChecked={value === '1'} />
                    <span>{value}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-3 text-sm font-medium text-slate-300">Password protection</div>
              <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                <span>OFF</span>
                <button type="button" className="rounded-full bg-slate-700 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-200">Toggle</button>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <div className="mb-2 flex items-center gap-2 text-cyan-300"><CheckCircle2 className="h-4 w-4" /> Validation</div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>Max file size: 25 MB</li>
                <li>Allowed types: PDF, DOCX, TXT, ZIP, PNG, JPG</li>
                <li>Executable files blocked by default</li>
              </ul>
            </div>

            <button type="button" className="w-full rounded-full bg-cyan-500 px-5 py-3 font-semibold text-slate-950">Generate Secure Link</button>
          </div>
        </div>
      </div>
    </main>
  );
}
