import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Chatbot } from '@/components/chatbot';

export const metadata: Metadata = {
  title: 'PortfolioPro',
  description: 'A professional portfolio created with Firebase Studio',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <body className="font-body antialiased bg-background text-foreground">
        <div className="relative flex min-h-dvh flex-col">
            <main className="flex-1">{children}</main>
        </div>
        <Toaster />
        <Chatbot />
      </body>
    </html>
  );
}
