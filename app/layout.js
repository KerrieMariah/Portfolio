import Preloader from "@/components/ui/preloader";
import { cormorantGaramond, openSans } from "./fonts";
import "./globals.css";
import Providers from "./providers";
import Script from "next/script";

export const metadata = {
    metadataBase: new URL("https://kerriemariah.com"),
    title: "Kerrie Mariah | Software Engineer in Naples, Florida",
    description:
        "Kerrie Mariah is a software engineer in Naples, Florida. She builds websites, custom software, and local SEO for small businesses.",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://kerriemariah.com",
        siteName: "Kerrie Mariah",
        title: "Kerrie Mariah | Software Engineer in Naples, Florida",
        description: "Websites, custom software, and local SEO for small businesses in Naples, Florida.",
        images: [{ url: "/images/about/about-img.jpg", alt: "Kerrie Mariah meeting with a business owner" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Kerrie Mariah | Software Engineer in Naples, Florida",
        description: "Websites, custom software, and local SEO for small businesses in Naples, Florida.",
        images: ["/images/about/about-img.jpg"],
    },
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
