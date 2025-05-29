"use client";
import CountUp from "react-countup";

export default function FunFact() {
    return (
        <div
            className="fun-fact-area fun-fact-bg over-hidden pt-60 pt-lg-105 pb-40 pb-lg-80"
            data-aos="fade-up"
            data-aos-duration={1800}
        >
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-sm-6 col-lg-4 mb-4 mb-lg-0">
                        <div className="single-fact d-block d-lg-flex align-items-center text-center text-lg-left mb-30">
                            <div className="mr-0 mr-lg-25 d-flex align-content-start justify-content-center mb-3 mb-lg-0">
                                <span className="theme-color f-700 d-inline-block counter" style={{fontSize: "36px"}}>
                                    <CountUp end={10} enableScrollSpy={true} />
                                </span>
                            </div>
                            <h3 className="text-white f-700 text-uppercase mb-0" style={{fontSize: "16px", lineHeight: "1.3"}}>
                                Years of <br /> Experience
                            </h3>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 mb-4 mb-lg-0">
                        <div className="single-fact d-block d-lg-flex align-items-center text-center text-lg-left mb-30">
                            <div className="mr-0 mr-lg-25 d-flex align-content-start justify-content-center mb-3 mb-lg-0">
                                <span className="theme-color f-700 d-inline-block counter" style={{fontSize: "36px"}}>
                                    <CountUp end={32} enableScrollSpy={true} />
                                </span>
                                <span className="per d-inline-block f-700 theme-color mt-1" style={{fontSize: "24px"}}>
                                    +
                                </span>
                            </div>
                            <h3 className="text-white f-700 text-uppercase mb-0" style={{fontSize: "16px", lineHeight: "1.3"}}>
                                Worldwide <br /> Clients
                            </h3>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 mb-4 mb-lg-0">
                        <div className="single-fact d-block d-lg-flex align-items-center text-center text-lg-left mb-30">
                            <div className="mr-0 mr-lg-25 d-flex align-content-start justify-content-center mb-3 mb-lg-0">
                                <span className="theme-color f-700 d-inline-block counter" style={{fontSize: "36px"}}>
                                    <CountUp end={150} enableScrollSpy={true} />
                                </span>
                                <span className="theme-color f-700 d-inline-block pr-1">
                                    
                                </span>
                                <span className="per d-inline-block f-700 theme-color mt-1" style={{fontSize: "24px"}}>
                                    +
                                </span>
                            </div>
                            <h3 className="text-white f-700 text-uppercase mb-0" style={{fontSize: "16px", lineHeight: "1.3"}}>
                                Total <br /> Projects
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
