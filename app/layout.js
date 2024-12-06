import Preloader from "@/components/ui/preloader";
import { cormorantGaramond, openSans } from "./fonts";
import "./globals.css";
import Providers from "./providers";

export const metadata = {
    title: "Thames - Software Engineer Personal Portfolio Next.js 14 template",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${cormorantGaramond.variable} ${openSans.className}`}
            >
                <Preloader />
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
