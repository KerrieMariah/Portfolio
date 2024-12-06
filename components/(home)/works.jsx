"use client";
import { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import { works } from "@/data/site";
import WorkCard from "./ui/work-card";
import WorkModal from "./ui/work-modal";

const btns = [
    {
        filter: "*",
        name: "All",
    },
    {
        filter: ".design",
        name: "Web Design",
    },
    {
        filter: ".dev",
        name: "Development",
    },
    {
        filter: ".content",
        name: "Content",
    },
];

export default function Works() {
    const [getActive, setActive] = useState(0);

    const isotope = useRef(null);
    const grid = useRef(null);

    useEffect(() => {
        const initIsotope = () => {
            imagesLoaded(grid.current, () => {
                isotope.current = new Isotope(grid.current, {
                    itemSelector: ".grid-item",
                    percentPosition: true,
                    layoutMode: "masonry",
                    masonry: {
                        columnWidth: ".grid-item",
                    },
                });
            });
        };

        initIsotope();

        const filterButtons = document.querySelectorAll(
            ".portfolio-menu button"
        );
        filterButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const filterValue = button.getAttribute("data-filter");
                isotope.current.arrange({ filter: filterValue });
            });
        });
    }, []);

    return (
        <>
            <div
                id="works"
                className="portfolio-area over-hidden pt-155 pb-140"
            >
                <div className="portfolio-wrapper position-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12  col-md-12  col-sm-12 col-12">
                                <div className="title text-center mb-65">
                                    <span className="theme-color f-700 text-uppercase d-block mb-6">
                                        Portfolio
                                    </span>
                                    <h2 className=" text-uppercase">
                                        My Works
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
                                <div className="port-button mb-50 portfolio-menu">
                                    {/* filter btn start */}
                                    {btns?.map((item, i) => (
                                        <button
                                            key={i}
                                            data-filter={item.filter}
                                            className={
                                                getActive === i ? "active" : ""
                                            }
                                            onClick={() => setActive(i)}
                                        >
                                            {item.name}
                                        </button>
                                    ))}
                                    {/* filter btn end */}
                                </div>
                            </div>
                        </div>
                        <div className="row portfolio grid" ref={grid}>
                            {/* works card start */}
                            {works?.map((item, i) => (
                                <WorkCard key={i} data={item} />
                            ))}
                            {/* works card end */}
                        </div>
                    </div>
                </div>
            </div>

            {/* work modal start */}
            <WorkModal />
            {/* work modal end */}
        </>
    );
}
