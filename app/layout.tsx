'use client';
import './globals.css';
import GoogleAnalytics from './components/GoogleAnalytics';
import { poppins } from './fonts';

export const metadata = {
    title: 'Lis Tur',
    description: 'Descubra as praias mais incríveis do Ceará com a Listur, sua agência de turismo especializada em roteiros inesquecíveis pelo litoral nordestino.',
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
        <body className={poppins.className}>
            <GoogleAnalytics gaId="G-PBLY4FYN3P" />
            {children}
        </body>
    </html>
  );
}
