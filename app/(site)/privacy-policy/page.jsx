"use client";
import React from "react";
import Header from "@/components/header/pages-header";
import Footer from "@/components/footer/footer";

export default function PrivacyPolicy() {
    return (
        <>
            <Header />
            <main>
                <div className="container py-80">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10">
                            <div className="privacy-content">
                                <h1 className="mb-40 text-center" style={{fontSize: "2.5rem", fontWeight: "700", color: "#333"}}>
                                    Privacy Policy
                                </h1>
                                
                                <div className="content-section mb-40">
                                    <p className="mb-30" style={{fontSize: "16px", lineHeight: "1.6", color: "#666"}}>
                                        <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                                    </p>
                                    
                                    <p className="mb-30" style={{fontSize: "16px", lineHeight: "1.6", color: "#666"}}>
                                        This Privacy Policy describes how Kerrie Mariah ("we," "our," or "us") collects, uses, and protects your personal information when you visit our website at kerriemariah.com ("Service").
                                    </p>
                                </div>

                                <div className="content-section mb-40">
                                    <h2 className="mb-20" style={{fontSize: "1.8rem", fontWeight: "600", color: "#333"}}>
                                        Information We Collect
                                    </h2>
                                    <p className="mb-20" style={{fontSize: "16px", lineHeight: "1.6", color: "#666"}}>
                                        We collect minimal personal information only when you voluntarily provide it through our contact form, including:
                                    </p>
                                    <ul className="mb-30" style={{fontSize: "16px", lineHeight: "1.6", color: "#666", paddingLeft: "20px"}}>
                                        <li>Name</li>
                                        <li>Email address</li>
                                        <li>Phone number (optional)</li>
                                        <li>Message content</li>
                                    </ul>
                                    <p className="mb-30" style={{fontSize: "16px", lineHeight: "1.6", color: "#666"}}>
                                        We may also automatically collect basic technical information such as:
                                    </p>
                                    <ul className="mb-30" style={{fontSize: "16px", lineHeight: "1.6", color: "#666", paddingLeft: "20px"}}>
                                        <li>IP address</li>
                                        <li>Browser type and version</li>
                                        <li>Device information</li>
                                        <li>Pages visited and time spent on our site</li>
                                    </ul>
                                </div>

                                <div className="content-section mb-40">
                                    <h2 className="mb-20" style={{fontSize: "1.8rem", fontWeight: "600", color: "#333"}}>
                                        How We Use Your Information
                                    </h2>
                                    <p className="mb-20" style={{fontSize: "16px", lineHeight: "1.6", color: "#666"}}>
                                        We use the information you provide solely to:
                                    </p>
                                    <ul className="mb-30" style={{fontSize: "16px", lineHeight: "1.6", color: "#666", paddingLeft: "20px"}}>
                                        <li>Respond to your inquiries and messages</li>
                                        <li>Provide customer support</li>
                                        <li>Improve our website and services</li>
                                        <li>Comply with legal obligations</li>
                                    </ul>
                                </div>

                                <div className="content-section mb-40">
                                    <h2 className="mb-20" style={{fontSize: "1.8rem", fontWeight: "600", color: "#333"}}>
                                        Information Sharing
                                    </h2>
                                    <p className="mb-30" style={{fontSize: "16px", lineHeight: "1.6", color: "#666"}}>
                                        We do not sell, trade, or distribute your personal information to third parties. Your information may only be shared if:
                                    </p>
                                    <ul className="mb-30" style={{fontSize: "16px", lineHeight: "1.6", color: "#666", paddingLeft: "20px"}}>
                                        <li>Required by law or legal process</li>
                                        <li>Necessary to protect our rights or safety</li>
                                        <li>With your explicit consent</li>
                                    </ul>
                                </div>

                                <div className="content-section mb-40">
                                    <h2 className="mb-20" style={{fontSize: "1.8rem", fontWeight: "600", color: "#333"}}>
                                        Data Security
                                    </h2>
                                    <p className="mb-30" style={{fontSize: "16px", lineHeight: "1.6", color: "#666"}}>
                                        We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                                    </p>
                                </div>

                                <div className="content-section mb-40">
                                    <h2 className="mb-20" style={{fontSize: "1.8rem", fontWeight: "600", color: "#333"}}>
                                        Your Rights
                                    </h2>
                                    <p className="mb-30" style={{fontSize: "16px", lineHeight: "1.6", color: "#666"}}>
                                        You have the right to:
                                    </p>
                                    <ul className="mb-30" style={{fontSize: "16px", lineHeight: "1.6", color: "#666", paddingLeft: "20px"}}>
                                        <li>Request access to your personal information</li>
                                        <li>Request correction of inaccurate information</li>
                                        <li>Request deletion of your information</li>
                                        <li>Withdraw consent for data processing</li>
                                    </ul>
                                </div>

                                <div className="content-section mb-40">
                                    <h2 className="mb-20" style={{fontSize: "1.8rem", fontWeight: "600", color: "#333"}}>
                                        Contact Us
                                    </h2>
                                    <p className="mb-30" style={{fontSize: "16px", lineHeight: "1.6", color: "#666"}}>
                                        If you have questions about this Privacy Policy or want to exercise your rights regarding your personal information, please contact us at:
                                    </p>
                                    <div className="contact-info" style={{backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "8px"}}>
                                        <p className="mb-2" style={{fontSize: "16px", lineHeight: "1.6", color: "#333"}}>
                                            <strong>Email:</strong> kerrie@kerriemariah.com
                                        </p>
                                        <p className="mb-0" style={{fontSize: "16px", lineHeight: "1.6", color: "#333"}}>
                                            <strong>Phone:</strong> +1 (352) 316-7889
                                        </p>
                                    </div>
                                </div>

                                <div className="content-section">
                                    <h2 className="mb-20" style={{fontSize: "1.8rem", fontWeight: "600", color: "#333"}}>
                                        Changes to This Policy
                                    </h2>
                                    <p className="mb-30" style={{fontSize: "16px", lineHeight: "1.6", color: "#666"}}>
                                        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this Privacy Policy periodically.
                                    </p>
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