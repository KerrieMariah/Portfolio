import Image from "next/image";

export default function AboutInfo() {
    return (
        <div className="about-content position-relative mb-50">
            <div className="position-relative">
                <div className="title">
                    <span className="theme-color f-700 text-uppercase d-block mb-6 mt--5">
                        About Me
                    </span>
                    <h2 className="f-700 text-uppercase mb-30">
                        I Develop Systems that Work
                    </h2>
                </div>
            </div>
            <p className="mb-25">
            Bridging the ever-changing world of technology with clear, effective communication, I offer a unique blend of technical expertise and human connection. 
            </p>
            <p>
            Whether it's translating complex systems into actionable strategies or delivering innovative solutions, I help businesses thrive in a tech-driven landscape with clarity and confidence.
            </p>
            <div className="about-info-wrapper pt-10">
                <div className="row">
                    <div className="col-xl-6  col-lg-12  col-md-6  col-sm-12 col-12">
                        <ul className="about-info">
                            <li className="d-inline-block pr-45">
                                <p className="primary-color f-700 mb-6">Name</p>
                                <p className="primary-color f-700 mb-6">
                                    Occupation
                                </p>
                                <p className="primary-color f-700 mb-6">
                                    Education
                                </p>
                            </li>
                            <li className="d-inline-block">
                                <p className="mb-6">Kerrie Mariah</p>
                                <p className="mb-6">Software Engineer</p>
                                <p className="mb-6">Two Bachelors</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-6  col-lg-12  col-md-6  col-sm-12 col-12">
                        <ul className="about-info">
                            <li className="d-inline-block pr-45">
                                <p className="primary-color f-700 mb-6">
                                    Phone
                                </p>
                                <p className="primary-color f-700 mb-6">
                                    Email
                                </p>
                                <p className="primary-color f-700 mb-6">
                                    Nationality
                                </p>
                            </li>
                            <li className="d-inline-block">
                                <p className="mb-6">+1(352) 316-7889</p>
                                <p className="mb-6"><a href="mailto:kerriemariah@gmail.com">Email Me</a></p>
                                <p className="mb-6">United States</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* /about-info-wrapper */}
            <div className="about-footer-content d-sm-flex align-items-center">
                <div className="signature mt-20 pr-45">
                    <Image
                        height={99}
                        width={178}
                        src="/images/about/signature.png"
                        alt="signeture"
                    />
                </div>
                <div className="about-footer-content-right mt-20 text-left">
                    <h6 className="d-xl-inline-block text-uppercase pr5 mb-0">
                        Kerrie Mariah
                    </h6>
                    <span className=" secondary-color2">
                        Software Engineer, Byte Breakdown llc.
                    </span>
                </div>
            </div>
            {/* /about-footer-content */}
        </div>
    );
}
