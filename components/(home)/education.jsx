import Image from "next/image";
import EducationList from "./ui/education-list";
import { education } from "@/data/site";

export default function Education() {
    return (
        <div className="education-area">
            <div className="container">
                <div className="row position-relative">
                    <div className="col-xl-6 col-lg-6  col-md-12 col-sm-12 col-12">
                        <div className="position-relative">
                            <div className="title">
                                <span className="theme-color text-uppercase d-block mb-1">
                                    Education
                                </span>
                                <h2 className="f-700 text-uppercase mb-20">
                                    My Education
                                </h2>
                                <p>
                                    From competitive fencing, working as an EMT, to teaching myself software engineering after an education heavy on set-theory, I've learned a lot about what it means to be a good team player.
                                </p>
                            </div>
                        </div>
                        <div className="education-wrapper mr-20 pt-25 mb-50">
                            <ul className="education-content">
                                {/* education list start */}
                                {education?.slice(0, 3).map((item, i) => (
                                    <EducationList key={i} data={item} />
                                ))}
                                {/* education list end */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-12 col-sm-12 col-12 d-lg-blok d-flex align-items-center justify-content-center">
                        <div
                            className="education-img position-relative text-center aos-init aos-animate"
                            data-aos="fade-left"
                            data-aos-duration={2000}
                        >
                            <Image
                                height={648}
                                width={479}
                                className="img-grayscale border-radius12"
                                src="/images/education/education-img.jpg"
                                alt="education image"
                            />
                        </div>
                    </div>
                </div>
                <div className="theme-border-bottom pt-145"></div>
            </div>
        </div>
    );
}
