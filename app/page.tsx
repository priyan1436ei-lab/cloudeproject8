import './globals.css';
import type { Metadata } from 'next';
import { ThemeToggle } from '@/components/theme-toggle';

export const metadata: Metadata = {
  title: 'CloudVault Zero',
  description: 'Zero-Retention Secure Cloud File Exchange',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-950 text-slate-100 antialiased">
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
