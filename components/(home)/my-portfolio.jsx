"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems, categories } from "@/data/portfolio";

export default function MyPortfolio() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [isLoading, setIsLoading] = useState(false);

    // Show 6 featured items for "All", or top 4 from selected category
    const homePortfolioItems = activeFilter === "All" 
        ? portfolioItems.filter(item => item.featured).slice(0, 6)
        : portfolioItems.filter(item => item.category === activeFilter).slice(0, 4);
    
    const filteredItems = homePortfolioItems;

    const handleFilterChange = (category) => {
        if (category === activeFilter) return;
        
        setIsLoading(true);
        setActiveFilter(category);
        
        setTimeout(() => {
            setIsLoading(false);
        }, 300);
    };

    return (
        <div id="portfolio" className="portfolio-area pt-155 pb-105 over-hidden">
            <div className="container">
                {/* Section Header */}
                <div className="row">
                    <div className="col-12">
                        <div className="section-header text-center mb-60">
                            <span 
                                className="subtitle theme-color f-700 text-uppercase d-block mb-10"
                                data-aos="fade-up"
                                data-aos-duration={6000}
                            >
                                My Work
                            </span>
                            <h2 
                                className="section-title text-uppercase mb-20"
                                data-aos="fade-up"
                                data-aos-duration={6000}
                                data-aos-delay={100}
                            >
                                Featured Projects
                            </h2>
                            <p 
                                className="section-desc mx-auto"
                                data-aos="fade-up"
                                data-aos-duration={600}
                                data-aos-delay={200}
                            >
                                A showcase of websites and applications I've built, focusing on clean design, 
                                optimal performance, and exceptional user experience.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Filter Buttons */}
                <div className="row">
                    <div className="col-12">
                        <div 
                            className="filter-tabs text-center mb-50"
                            data-aos="fade-up"
                            data-aos-duration={7000}
                            data-aos-delay={300}
                        >
                            <div className="portfolio-filter-container d-inline-block">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        className={`portfolio-filter-btn ${activeFilter === category ? 'active' : ''}`}
                                        onClick={() => handleFilterChange(category)}
                                    >
                                        <span>{category}</span>
                                        <div className="btn-hover-effect"></div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Portfolio Grid */}
                <div className="portfolio-grid-wrapper">
                    {isLoading && (
                        <div className="portfolio-loading">
                            <div className="loading-spinner"></div>
                        </div>
                    )}
                    
                    <div className={`row portfolio-grid ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                        {filteredItems.map((item, index) => (
                            <div 
                            key={item.id}
                            className="col-lg-4 col-md-6 col-12 grid-item d-flex"
                            data-aos="fade-up"
                            data-aos-duration={1000}
                            data-aos-delay={index * 100}
                        >
                            <div className="work-card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                                <div className="work-card-image" style={{ height: "320px", overflow: "hidden" }}>
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={600}
                                            height={400}
                                            className="w-100 h-100 object-cover"
                                        />
                                        
                                        <div className="work-card-overlay">
                                            <div className="overlay-content">
                                                {item.liveUrl && (
                                                    <Link 
                                                        href={item.liveUrl}
                                                        target="_blank"
                                                        className="overlay-btn live-btn"
                                                    >
                                                        <i className="fas fa-external-link-alt"></i>
                                                        View Live Site
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="work-card-content" style={{ flexGrow: 1 }}>
                                        <div className="work-card-category">
                                            {item.category}
                                        </div>
                                        <h4 className="work-card-title">
                                            {item.title}
                                        </h4>
                                        <p className="work-card-desc">
                                            {item.description}
                                        </p>
                                        <div className="work-card-tech">
                                            {item.technologies.map((tech, techIndex) => (
                                                <span key={techIndex} className="tech-tag">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View More Button */}
                <div className="row">
                    <div className="col-12 text-center mt-50">
                        <Link 
                            href="/portfolio" 
                            className="view-more-btn"
                            data-aos="fade-up"
                            data-aos-duration={1000}
                        >
                            <span>View All Projects</span>
                            <i className="fas fa-arrow-right ml-10"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
} 