import { Poppins, Bebas_Neue } from "next/font/google";

export const poppins = Poppins({
    weight: ['300', '400', '700'],
    subsets: ["latin"],
});

export const bebasneue = Bebas_Neue({
    weight: ['400'],
    subsets: ['latin'],
});