import AboutArea from "@/components/(home)/about-area";
import AwardArea from "@/components/(home)/award-area";
// import BlogArea from "@/components/(home)/blog-area";
// import Branding from "@/components/(home)/branding";
import Contact from "@/components/(home)/contact";
// import Education from "@/components/(home)/education";
// import Experience from "@/components/(home)/experience";
import FunFact from "@/components/(home)/fun-fact";
import Hero from "@/components/(home)/hero";
import MyPortfolio from "@/components/(home)/my-portfolio";
import Pricing from "@/components/(home)/pricing";
import ServiceArea from "@/components/(home)/service-area";
// import Skills from "@/components/(home)/skills";
// import Testimonial from "@/components/(home)/testimonial";
import Footer from "@/components/footer/footer";
import Header1 from "@/components/header/homepage-header";

const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kerrie Mariah",
    jobTitle: "Software Engineer",
    url: "https://kerriemariah.com",
    email: "mailto:kerrie@kerriemariah.com",
    image: "https://kerriemariah.com/images/about/about-img.jpg",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Naples",
        addressRegion: "FL",
        addressCountry: "US",
    },
    sameAs: [
        "https://www.linkedin.com/in/kerriemariah/",
        "https://www.instagram.com/kerrie_mariah/",
        "https://www.facebook.com/kerrie.x.mariah/",
    ],
};

export const metadata = {
    alternates: { canonical: "/" },
};

export default function Home() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
            <main className="over-hidden">
                <Header1 />
                <Hero />
                <AboutArea />
                <FunFact />
                <MyPortfolio />

                {/* <Experience />
                <Education /> */}
                {/* <Skills /> */}
                <Pricing />
                <ServiceArea />
                <AwardArea />
                {/* <Testimonial /> */}
                {/* <Branding /> */}
                <Contact />
                {/* <BlogArea /> */}
                <Footer />
            </main>
        </>
    );
}
