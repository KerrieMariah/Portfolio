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
            I build websites and applications that solve real business problems. With a focus on clean code and user experience, I turn complex technical challenges into simple, effective solutions.
            </p>
            <p>
            From concept to deployment, I work closely with clients to create digital experiences that not only look great but drive results and grow their business.
            </p>
            <div className="about-info-wrapper pt-10">
                <div className="row">
                    <div className="col-xl-6  col-lg-12  col-md-6  col-sm-12 col-12">
                        <ul className="about-info">
                            <li className="d-inline-block pr-45">
                                <p className="primary-color f-700 mb-6">Name</p>
                                <p className="primary-color f-700 mb-6">
                                    Nationality
                                </p>
                            </li>
                            <li className="d-inline-block">
                                <p className="mb-6">Kerrie Mariah</p>
                                <p className="mb-6">United States</p>
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
                            </li>
                            <li className="d-inline-block">
                                <p className="mb-6">+1(352) 316-7889</p>
                                <p className="mb-6"><a href="mailto:kerriemariah@gmail.com">Email Me</a></p>
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
                        Software Engineer, Kerrie Mariah & Associates llc
                    </span>
                </div>
            </div>
            {/* /about-footer-content */}
            
            {/* Personal Website Link */}
            <div className="personal-site-link mt-30 text-center">
                <a 
                    href="https://the-traveling-coder.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="personal-site-btn"
                >
                    <i className="fas fa-globe mr-10"></i>
                    Read About My Adventures
                </a>
            </div>
        </div>
    );
}
