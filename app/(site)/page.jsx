import AboutArea from "@/components/(home)/about-area";
import AwardArea from "@/components/(home)/award-area";
import BlogArea from "@/components/(home)/blog-area";
import Branding from "@/components/(home)/branding";
import Contact from "@/components/(home)/contact";
import Education from "@/components/(home)/education";
import Experience from "@/components/(home)/experience";
import FunFact from "@/components/(home)/fun-fact";
import Hero from "@/components/(home)/hero";
import Pricing from "@/components/(home)/pricing";
import ServiceArea from "@/components/(home)/service-area";
import Skills from "@/components/(home)/skills";
import Testimonial from "@/components/(home)/testimonial";
import Works from "@/components/(home)/works";
import Footer from "@/components/footer/footer";
import Header1 from "@/components/header/header-1";

export default function Home() {
    return (
        <>
            <main className="over-hidden">
                <Header1 />
                <Hero />
                <AboutArea />
                <FunFact />
                <Works />
                <AwardArea />
                <Experience />
                <Education />
                <Skills />
                <Pricing />
                <ServiceArea />
                <Testimonial />
                {/* <Branding /> */}
                <Contact />
                <BlogArea />
                <Footer />
            </main>
        </>
    );
}
