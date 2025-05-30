import './globals.css';
import GoogleAnalytics from './components/GoogleAnalytics';
import { poppins } from './fonts';

export const metadata = {
    title: 'Listur | Agência de Turismo',
    description:
      'Descubra as praias mais incríveis do Ceará com a Listur, sua agência de turismo especializada em roteiros inesquecíveis pelo litoral nordestino.',
    keywords: ['turismo', 'praias do Ceará', 'Listur', 'viagem', 'roteiros', 'agência de turismo', 'fortaleza', 'passeio'],
    openGraph: {
      title: 'Listur | Agência de Turismo',
      description:
        'Descubra as praias mais incríveis do Ceará com a Listur, sua agência de turismo especializada em roteiros inesquecíveis pelo litoral nordestino.',
      url: 'https://www.listur.com', // substitua pela URL real
      siteName: 'Listur',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Praia paradisíaca do Ceará',
        },
      ],
      locale: 'pt_BR',
      type: 'website',
    },
    icons: {
      icon: '/listurlogo1.png',
    },
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
