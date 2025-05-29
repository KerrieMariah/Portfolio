"use client";
import Image from "next/image";
import { Tilt } from "react-tilt";
import AboutInfo from "./ui/about-info";

const defaultOptions = {
    reverse: false,
    max: 20,
    perspective: 1000,
    scale: 1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
};

export default function AboutArea() {
    return (
        <div id="about" className="about-area mt-170 md:about-area mt-170 mb-105">
            {/* Desktop Layout */}
            <div className="about-content-wrapper position-relative d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 offset-md-0 col-sm-11 offset-sm-1 col-12">
                            <div className="about-img-wrapper position-relative mb-100">
                                <div
                                    className="about-img position-relative z-index11"
                                    data-aos="fade-right"
                                    data-aos-duration={2000}
                                    data-aos-delay={100}
                                >
                                    <div className="about-img-over over-hidden z-index11 pl-50 transition5 d-inline-block position-relative">
                                        <Tilt options={defaultOptions}>
                                            <Image
                                                height={600}
                                                width={488}
                                                className="img-grayscale border-radius12 position-relative z-index11 h-100 w-auto tilt"
                                                src="/images/about/about-section.png"
                                                alt="person"
                                            />
                                        </Tilt>
                                    </div>
                                </div>
                                <div
                                    className="about-color-shape-bg position-absolute z-index1"
                                    data-aos="fade-right"
                                    data-aos-duration={2000}
                                    data-aos-delay={800}
                                />
                                <div
                                    className="about-shape-dotted secondary-bg position-absolute z-index-1"
                                    data-aos="fade-right"
                                    data-aos-duration={2000}
                                    data-aos-delay={1000}
                                >
                                    <Image
                                        height={320}
                                        width={348}
                                        src="/images/about/about-dott.png"
                                        alt="dots"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6  col-md-12 col-sm-12 col-12">
                            {/* about info start */}
                            <AboutInfo />
                            {/* about info end */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Content */}
            <div className="about-content-wrapper position-relative d-block d-lg-none">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <AboutInfo />
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Parallax Image */}
            <div className="about-parallax-image-wrapper d-block d-lg-none">
                <div className="about-parallax-image" />
            </div>
        </div>
    );
}
