import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center justify-center px-6 py-12">
      <div className="glass-panel w-full rounded-3xl p-8">
        <div className="mb-6 text-center">
          <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">Authenticate</div>
          <h1 className="mt-4 text-3xl font-black">Sign in</h1>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <input className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-slate-50 outline-none" placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Password</label>
            <input type="password" className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-slate-50 outline-none" placeholder="••••••••" />
          </div>
          <button type="button" className="w-full rounded-full bg-cyan-500 px-5 py-3 font-semibold text-slate-950">Login</button>
        </div>

        <div className="mt-6 text-center text-sm text-slate-400">
          Need an account? <Link href="/register" className="text-cyan-300">Create one</Link>
        </div>
      </div>
    </main>
  );
}
