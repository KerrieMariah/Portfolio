'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Donate() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        
        // Load Stripe script
        const script = document.createElement('script');
        script.src = 'https://js.stripe.com/v3/buy-button.js';
        script.async = true;
        document.head.appendChild(script);

        return () => {
            // Cleanup script when component unmounts
            const existingScript = document.querySelector('script[src="https://js.stripe.com/v3/buy-button.js"]');
            if (existingScript) {
                document.head.removeChild(existingScript);
            }
        };
    }, []);

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

    if (!mounted) return null;

    return (
        <div className="donate-page">
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
                    className="donate-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Header Section */}
                    <motion.div
                        className="donate-header"
                        variants={itemVariants}
                    >
                        <div className="donate-icon">☕</div>
                        <h1 className="donate-title">Buy Me a Coffee!</h1>
                        <p className="donate-subtitle">
                            Help fuel my coding adventures ✨
                        </p>
                        <div className="donate-description">
                            <p>
                                Every cup of coffee helps me stay awake for those late-night coding sessions! 
                                Your support means the world to me and keeps the creative juices flowing. 🌟
                            </p>
                        </div>
                    </motion.div>

                    {/* Stripe Buy Button */}
                    <motion.div
                        className="stripe-container"
                        variants={itemVariants}
                    >
                        <stripe-buy-button
                            buy-button-id="buy_btn_1Ra1Xd06cFmEmGuRTenKKrNn"
                            publishable-key="pk_live_51RUarK06cFmEmGuR86rhPSUGC1uEvKZhEJp01x8x7UeDpP6aAzFT01BELlUtdolnn3lRFTHhdKKD9G2uWT2JNSiP00GURiITlf"
                        />
                    </motion.div>

                    {/* Thank You Section */}
                    <motion.div
                        className="donate-thanks"
                        variants={itemVariants}
                    >
                        <p>
                            🙏 Thank you for considering a donation! <br />
                            Every contribution helps me create better content and tools.
                        </p>
                    </motion.div>

                    {/* Back Link */}
                    <motion.div
                        className="donate-back"
                        variants={itemVariants}
                    >
                        <Link href="/links" className="back-link">
                            ← Back to Links
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}