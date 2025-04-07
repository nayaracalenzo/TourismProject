import { Poppins, Bebas_Neue} from "next/font/google";
import "./globals.css";

export const poppins = Poppins ({
  weight: ['300', '400', '700'],
  subsets: ["latin"],
});

export const bebasneue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
