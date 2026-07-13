import Preloader from "@/components/ui/preloader";
import { cormorantGaramond, openSans } from "./fonts";
import "./globals.css";
import Providers from "./providers";
import Script from "next/script";

export const metadata = {
    title: "Kerrie Mariah - Software Engineer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${cormorantGaramond.variable} ${openSans.className}`}
            >
                {/* Google Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-8Q9NNP995G"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-8Q9NNP995G');
                    `}
                </Script>

                <Preloader />
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
