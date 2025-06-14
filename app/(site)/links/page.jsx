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
            description: "My travel & tech blog adventures",
            url: "https://the-traveling-coder.com",
            icon: "✈️",
            gradient: "blue-purple",
            hoverGradient: "blue-purple-hover"
        },
        {
            title: "Portfolio",
            description: "Check out my work & projects",
            url: "https://kerriemariah.com",
            icon: "💼",
            gradient: "pink-rose",
            hoverGradient: "pink-rose-hover"
        },
        {
            title: "Book a Call",
            description: "Let's chat about your next project",
            url: "#", // Replace with actual tidycal link
            icon: "📞",
            gradient: "green-emerald",
            hoverGradient: "green-emerald-hover"
        },
        {
            title: "Buy Me a Bubble Tea",
            description: "Fuel my coding adventures! 🧋",
            url: "#", // Replace with actual coffee/donation link
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
                staggerChildren: 0.2,
                duration: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 0.6
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

    if (!mounted) return null;

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
                    className="links-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Profile Section */}
                    <motion.div
                        className="profile-section"
                        variants={profileVariants}
                    >
                        <div className="profile-image">
                            <div className="profile-ring"></div>
                            <div className="profile-avatar">KM</div>
                        </div>
                        <h1 className="profile-title">Kerrie Mariah</h1>
                        <p className="profile-subtitle">Software Engineer & Digital Nomad</p>
                        <div className="profile-sparkles">
                            <span className="sparkle">✨</span>
                            <span className="sparkle">💫</span>
                            <span className="sparkle">⭐</span>
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
                        <p>Made with 💜 and lots of ☕</p>
                        <div className="social-links">
                            <a href="#" aria-label="Twitter">🐦</a>
                            <a href="#" aria-label="LinkedIn">💼</a>
                            <a href="#" aria-label="GitHub">🐱</a>
                            <a href="#" aria-label="Instagram">📸</a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
} 