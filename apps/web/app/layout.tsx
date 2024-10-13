import type { Metadata } from 'next'
import './globals.css';
import '../../../packages/ui/src/globals.css';

export const metadata: Metadata = {
  title: 'Weby',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
