import type { Metadata } from 'next';

import RootStyleRegistry from '@/app/emotion';
import ClientQueryProvider from '@/config/ClientQueryProvider';
import localFont from 'next/font/local';
import './globals.css';

const pretendard = localFont({
  src: '../app/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'Festy',
  description: '당신의 놀라운 축제를 위해, 새로운 소식부터 내 주변 파티까지 빠르게 Festy에서 확인하세요!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body>
        <ClientQueryProvider>
          <RootStyleRegistry>
            <main>{children}</main>
          </RootStyleRegistry>
        </ClientQueryProvider>
      </body>
    </html>
  );
}
