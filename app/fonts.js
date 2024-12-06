import { Open_Sans } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";

/**
 * Google fonts
 */
export const cormorantGaramond = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "600", "700"],
    display: "swap",
    variable: "--font-cormorant-garamond",
});

export const openSans = Open_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "600", "700"],
    display: "swap",
    variable: "--font-open-sans",
});
