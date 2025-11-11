"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems, categories } from "@/data/portfolio";
import PagesHeader from "@/components/header/pages-header";
import Footer from "@/components/footer/footer";

export default function PortfolioPage() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [isLoading, setIsLoading] = useState(false);
    
    const filteredItems = activeFilter === "All" 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === activeFilter);

    const handleFilterChange = (category) => {
        if (category === activeFilter) return;
        
        setIsLoading(true);
        setActiveFilter(category);
        
        setTimeout(() => {
            setIsLoading(false);
        }, 300);
    };

    return (
        <>
            <PagesHeader />
            <main className="over-hidden">
                {/* Page Header */}
                <div className="portfolio-page-header pt-70 pb-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="page-header-content text-center">
                                    <span 
                                        className="subtitle theme-color f-700 text-uppercase d-block mb-15"
                                        data-aos="fade-up"
                                        data-aos-duration={1000}
                                    >
                                        Sample of my Work
                                    </span>
                                    <h1 
                                        className="page-title text-uppercase mb-20"
                                        data-aos="fade-up"
                                        data-aos-duration={1200}
                                        data-aos-delay={100}
                                    >
                                        Portfolio
                                    </h1>
                                    <p 
                                        className="page-desc mx-auto"
                                        data-aos="fade-up"
                                        data-aos-duration={1400}
                                        data-aos-delay={200}
                                    >
                                        A curated selection of websites, applications, and content I've created 
                                        for clients around the world. Each project represents a unique challenge 
                                        solved with creativity and technical expertise.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Portfolio Section */}
                <div className="portfolio-full-area pb-155">
                    <div className="container">
                        {/* Filter Buttons */}
                        <div className="row">
                            <div className="col-12">
                                <div 
                                    className="filter-tabs text-center mb-60"
                                    data-aos="fade-up"
                                    data-aos-duration={1000}
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

                        {/* Portfolio Count */}
                        <div className="row">
                            <div className="col-12">
                                <div className="portfolio-count text-center mb-40">
                                    <p className="count-text">
                                        Showing <span className="theme-color font-weight-bold">{filteredItems.length}</span> 
                                        {activeFilter === "All" ? " projects" : ` ${activeFilter.toLowerCase()} projects`}
                                    </p>
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
                                        className="col-lg-4 col-md-6 col-12 grid-item mb-40 d-flex"
                                        data-aos="fade-up"
                                        data-aos-duration={550}
                                        data-aos-delay={index * 25}
                                    >
                                        <div className="work-card full-portfolio-card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
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

                        {/* CTA Section */}
                        <div className="row mt-80">
                            <div className="col-12">
                                <div className="portfolio-cta text-center">
                                    <h3 className="cta-title mb-20">Ready to Start Your Project?</h3>
                                    <p className="cta-desc mb-30">
                                        Let's work together to bring your vision to life with clean code, 
                                        modern design, and exceptional user experience.
                                    </p>
                                    <Link 
                                        href="/#contact" 
                                        className="cta-btn"
                                    >
                                        <span>Get In Touch</span>
                                        <i className="fas fa-arrow-right ml-10"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
} 