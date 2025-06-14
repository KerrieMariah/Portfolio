'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Links() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const links = [
        {
            title: "The Traveling Coder",
            description: "Read about my experiments, travel, and tech",
            url: "https://the-traveling-coder.com",
            icon: "✈️",
            gradient: "blue-purple",
            hoverGradient: "blue-purple-hover"
        },
        {
            title: "Portfolio",
            description: "Check out my work & portfolio",
            url: "https://kerriemariah.com",
            icon: "💼",
            gradient: "pink-rose",
            hoverGradient: "pink-rose-hover"
        },
        {
            title: "Book a Call",
            description: "Let's chat about your next project",
            url: "https://tidycal.com/kerriemariah/15-minute-meeting",
            icon: "📞",
            gradient: "green-emerald",
            hoverGradient: "green-emerald-hover"
        },
        {
            title: "Buy Me a Coffee",
            description: "Like my content? Every penny counts to keep me fed 😭",
            url: "/donate",
            icon: "🧋",
            gradient: "amber-orange",
            hoverGradient: "amber-orange-hover"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 30,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 15,
                duration: 0.4
            }
        }
    };

    const profileVariants = {
        hidden: { 
            opacity: 0, 
            scale: 0.8,
            rotate: -10
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.8
            }
        }
    };



    return (
        <div className="links-page">
            {/* Animated Background */}
            <div className="links-bg">
                <div className="floating-shapes">
                    {[...Array(6)].map((_, i) => (
                        <div 
                            key={i} 
                            className={`floating-shape shape-${i + 1}`}
                        />
                    ))}
                </div>
            </div>

            <div className="links-container">
                <motion.div
                    className={`links-content ${mounted ? 'mounted' : ''}`}
                    variants={containerVariants}
                    initial="hidden"
                    animate={mounted ? "visible" : "hidden"}
                >
                    {/* Profile Section */}
                    <motion.div
                        className="profile-section"
                        variants={profileVariants}
                    >
                        <div className="profile-image">
                            <div className="profile-ring"></div>
                            <div className="profile-avatar">
                                <img src="/images/links/prof.JPEG" alt="Kerrie Mariah" />
                            </div>
                        </div>
                        <h1 className="profile-title">Kerrie Mariah</h1>
                        <p className="profile-subtitle">Software Engineer & Digital Nomad</p>
                        <p className="profile-tagline">Hand-coded by yours truly. I can create one for you too — just ask!</p>
                        <div className="profile-sparkles">
                            <span className="sparkle">🌿</span>
                            <span className="sparkle">🍃</span>
                            <span className="sparkle">🌱</span>
                        </div>
                    </motion.div>

                    {/* Links Section */}
                    <motion.div className="links-grid">
                        {links.map((link, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ 
                                    scale: 1.05,
                                    y: -5
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="link-card"
                            >
                                <Link href={link.url} target="_blank" rel="noopener noreferrer">
                                    <div className="link-content">
                                        <div className="link-icon">{link.icon}</div>
                                        <div className="link-text">
                                            <h3 className="link-title">{link.title}</h3>
                                            <p className="link-description">{link.description}</p>
                                        </div>
                                        <div className="link-arrow">→</div>
                                    </div>
                                    <div className={`link-gradient gradient-${link.gradient}`}></div>
                                    <div className={`link-hover-gradient gradient-${link.hoverGradient}`}></div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Footer */}
                    <motion.div
                        className="links-footer"
                        variants={itemVariants}
                    >
                        <p>Made with 💚 and lots of ☕</p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/kerriemariah" aria-label="LinkedIn">💼</a>
                            <a href="https://github.com/KerrieMariah" aria-label="GitHub">🐱</a>
                            <a href="https://www.instagram.com/kerrie_mariah" aria-label="Instagram">📸</a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
} 