@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #020817;
  --panel: rgba(15, 23, 42, 0.86);
  --panel-alt: rgba(15, 23, 42, 0.7);
  --text: #f8fafc;
  --muted: #cbd5e1;
  --line: rgba(148, 163, 184, 0.2);
  --accent: #22d3ee;
  --good: #34d399;
}

html[data-theme='light'] {
  --bg: #f8fafc;
  --panel: rgba(255, 255, 255, 0.82);
  --panel-alt: rgba(243, 244, 246, 0.92);
  --text: #0f172a;
  --muted: #475569;
  --line: rgba(15, 23, 42, 0.12);
  --accent: #0ea5e9;
  --good: #10b981;
}

html, body {
  background: var(--bg);
  color: var(--text);
}

body {
  min-height: 100vh;
  background-image: radial-gradient(circle at top, rgba(34, 211, 238, 0.08), transparent 18%), linear-gradient(180deg, var(--bg) 0%, rgba(15, 23, 42, 0.96) 100%);
}

* {
  box-sizing: border-box;
}

::selection {
  background: rgba(34, 211, 238, 0.3);
}

.glass-panel {
  background: var(--panel);
  border: 1px solid var(--line);
  box-shadow: 0 10px 40px rgba(15, 23, 42, 0.18);
  backdrop-filter: blur(20px);
}

.security-tag {
  border: 1px solid rgba(34, 211, 238, 0.25);
  color: #7dd3fc;
  background: rgba(14, 165, 233, 0.08);
}

.status-badge {
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  padding: 0.35rem 0.7rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.status-active { background: rgba(16, 185, 129, 0.12); color: #6ee7b7; }
.status-accessed { background: rgba(250, 204, 21, 0.12); color: #fde68a; }
.status-downloaded { background: rgba(59, 130, 246, 0.12); color: #93c5fd; }
.status-expired { background: rgba(239, 68, 68, 0.12); color: #fca5a5; }
.status-revoked { background: rgba(168, 85, 247, 0.12); color: #d8b4fe; }
.status-destroyed { background: rgba(248, 113, 113, 0.12); color: #fca5a5; }
