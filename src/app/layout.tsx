import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import './globals.css';
import { TRPCReactProvider } from '@/trpc/client';

const BricolageGrotesque = Bricolage_Grotesque({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rapid AI',
  description: 'No code AI website builder',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TRPCReactProvider>
      <html lang="en">
        <body className={`${BricolageGrotesque.className}  antialiased`}>
          {children}
        </body>
      </html>
    </TRPCReactProvider>
  );
}
