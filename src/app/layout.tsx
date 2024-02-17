import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AuthSession from '@/components/AuthSession';
import ScrollButton from '@/components/ui/ScrollButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '코하루 마켓',
  description: 'Generated by create next app',
  icons: {
    icon: '/favicon.png',
  },
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <AuthSession>{children}</AuthSession>
        <ScrollButton />
      </body>
    </html>
  );
}
