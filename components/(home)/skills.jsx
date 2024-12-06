"use client";
import { skills } from "@/data/site";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Skills() {
    return (
        <div className="skill-area over-hidden pt-155 pb-105">
            <div className="container">
                <div className="row align-items-start justify-content-center">
                    <div className="col-xl-6 col-lg-5  col-md-12  col-sm-12 col-12">
                        <div className="position-relative">
                            <div className="title mb-50">
                                <span className="theme-color f-700 text-uppercase d-block mb-6">
                                    My Skills
                                </span>
                                <h2 className="text-uppercase mb-20">
                                    Growing Over Time
                                </h2>
                                <p>Please download my resume for a more detailed list.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-xl-6 col-lg-7  col-md-12  col-sm-12 col-12"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration={1400}
                    >
                        <div className="row justify-content-center mt-10">
                            {/* skill circle start */}
                            {skills?.map((item, i) => (
                                <div
                                    key={i}
                                    className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-9 mb-30"
                                >
                                    <div className="single-skill mb-15 text-center text-lg-left">
                                        <div className="progress-circular over-hidden">
                                            <div
                                                style={{
                                                    width: "190px",
                                                    height: "190px",
                                                    marginInline: "auto",
                                                }}
                                            >
                                                <CircularProgressbar
                                                    value={item.percentage}
                                                    text={`${item.percentage}%`}
                                                    strokeWidth={3}
                                                    styles={buildStyles({
                                                        textColor: "#2e2e37",
                                                        pathColor: "#c75142",
                                                        pathTransition:
                                                            item.percentage ===
                                                            0
                                                                ? "none"
                                                                : "stroke-dashoffset 0.5s ease 0s",
                                                    })}
                                                />
                                            </div>

                                            <h4 className="mt-15 text-center">
                                                {item.title}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
