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
        name: "All Work",
    },
    {
        filter: ".design",
        name: "Design",
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
    const [isLoading, setIsLoading] = useState(true);

    const isotope = useRef(null);
    const grid = useRef(null);

    useEffect(() => {
        // Wait for all images to load before initializing Isotope
        const images = grid.current.getElementsByTagName('img');
        const loadedImages = [];

        const initIsotope = () => {
            isotope.current = new Isotope(grid.current, {
                itemSelector: ".grid-item",
                percentPosition: true,
                masonry: {
                    columnWidth: ".grid-item",
                    gutter: 30
                },
                transitionDuration: '0.6s'
            });
            isotope.current.layout();
            setIsLoading(false);
        };

        // Track each image load
        Array.from(images).forEach(img => {
            if (img.complete) {
                loadedImages.push(img);
            } else {
                img.onload = () => {
                    loadedImages.push(img);
                    // Initialize Isotope once all images are loaded
                    if (loadedImages.length === images.length) {
                        initIsotope();
                    }
                };
            }
        });

        // If all images were already loaded
        if (loadedImages.length === images.length) {
            initIsotope();
        }

        return () => {
            if (isotope.current) {
                isotope.current.destroy();
            }
        };
    }, []);

    const handleFilter = (filterValue, index) => {
        setActive(index);
        if (isotope.current) {
            isotope.current.arrange({ filter: filterValue });
        }
    };

    return (
        <>
            <div id="works" className="portfolio-area pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header text-center mb-50">
                                <span className="subtitle mb-2">My Work</span>
                                <h2 className="section-title mb-3">Recent Projects</h2>
                                <p className="section-desc">
                                    Here are some projects I've worked on recently
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="filter-tabs text-center mb-40">
                                {btns?.map((item, i) => (
                                    <button
                                        key={i}
                                        data-filter={item.filter}
                                        className={`filter-btn ${
                                            getActive === i ? "active" : ""
                                        }`}
                                        onClick={() => handleFilter(item.filter, i)}
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* <div className="row portfolio-grid" ref={grid}>
                        {isLoading && (
                            <div className="portfolio-loading text-center py-5">
                                <div className="loading-spinner"></div>
                                <p className="mt-3">Loading portfolio...</p>
                            </div>
                        )}
                        {works?.map((item, i) => (
                            <WorkCard key={i} data={item} />
                        ))}
                    </div> */}
                </div>
            </div>

            <WorkModal />
        </>
    );
}
