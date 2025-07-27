"use client";
import React from "react";
import Header from "@/components/header/pages-header";
import Footer from "@/components/footer/footer";

export default function TermsOfService() {
    return (
        <>
            <Header />
            <main>
                <div className="container py-80">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10">
                            <div className="terms-content">
                                <h1 className="mb-40 text-center" style={{fontSize: "2.5rem", fontWeight: "700", color: "#333"}}>
                                    Terms of Service
                                </h1>
                                
                                <div className="content-section mb-40">
                                    <p className="mb-30" style={{fontSize: "16px", lineHeight: "1.6", color: "#666"}}>
                                        <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                                    </p>
                                    
                                    <p className="mb-30" style={{fontSize: "16px", lineHeight: "1.6", color: "#666"}}>
                                        These Terms of Service ("Terms") govern your use of the website operated by Kerrie Mariah ("we," "our," or "us") located at kerriemariah.com ("Service").
                                    </p>
                                </div>

                                <div className="content-section mb-40">
                                    <h2 className="mb-20" style={{fontSize: "1.8rem", fontWeight: "600", color: "#333"}}>
                                        Acceptance of Terms
                                    </h2>
                                    <p className="mb-30" style={{fontSize: "16px", lineHeight: "1.6", color: "#666"}}>
                                        By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                                    </p>
                                </div>

                                <div className="content-section mb-40">
                                    <h2 className="mb-20" style={{fontSize: "1.8rem", fontWeight: "600", color: "#333"}}>
                                        Services Provided
                                    </h2>
                                    <p className="mb-20" style={{fontSize: "16px", lineHeight: "1.6", color: "#666"}}>
                                        Kerrie Mariah provides web development, programming, and consulting services including but not limited to:
                                    </p>
                                    <ul className="mb-30" style={{fontSize: "16px", lineHeight: "1.6", color: "#666", paddingLeft: "20px"}}>
                                        <li>Web development and design</li>
                                        <li>Software development</li>
                                        <li>Technical consulting</li>
                                        <li>Programming services</li>
                                        <li>Digital solutions</li>
                                    </ul>
                                </div>

                                <div className="content-section mb-40">
                                    <h2 className="mb-20" style={{fontSize: "1.8rem", fontWeight: "600", color: "#333"}}>
                                        Service Availability
                                    </h2>
                                    <p className="mb-30" style={{fontSize: "16px", lineHeight: "1.6", color: "#666"}}>
                                        Our services are provided "as-is" and "as available." We do not guarantee that our services will be uninterrupted, timely, secure, or error-free. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
                                    </p>
                                </div>

                                <div className="content-section mb-40">
                                    <h2 className="mb-20" style={{fontSize: "1.8rem", fontWeight: "600", color: "#333"}}>
                                        Payment Terms
                                    </h2>
                                    <p className="mb-20" style={{fontSize: "16px", lineHeight: "1.6", color: "#666"}}>
                                        For consulting and development services:
                                    </p>
                                    <ul className="mb-30" style={{fontSize: "16px", lineHeight: "1.6", color: "#666", paddingLeft: "20px"}}>
                                        <li>Payment terms will be specified in individual project agreements</li>
                                        <li>All fees are due according to the agreed schedule</li>
                                        <li>Late payments may incur additional charges</li>
                                        <li>Refunds are handled on a case-by-case basis</li>
                                    </ul>
                                </div>

                                <div className="content-section mb-40">
                                    <h2 className="mb-20" style={{fontSize: "1.8rem", fontWeight: "600", color: "#333"}}>
                                        Intellectual Property
                                    </h2>
                                    <p className="mb-30" style={{fontSize: "16px", lineHeight: "1.6", color: "#666"}}>
                                        The content, features, and functionality of this website are and will remain the exclusive property of Kerrie Mariah and its licensors. The website is protected by copyright, trademark, and other laws. You may not reproduce, distribute, or create derivative works without express written permission.
                                    </p>
                                </div>

                                <div className="content-section mb-40">
                                    <h2 className="mb-20" style={{fontSize: "1.8rem", fontWeight: "600", color: "#333"}}>
                                        User Conduct
                                    </h2>
                                    <p className="mb-20" style={{fontSize: "16px", lineHeight: "1.6", color: "#666"}}>
                                        You agree not to:
                                    </p>
                                    <ul className="mb-30" style={{fontSize: "16px", lineHeight: "1.6", color: "#666", paddingLeft: "20px"}}>
                                        <li>Use the service for any unlawful purpose</li>
                                        <li>Attempt to gain unauthorized access to any part of the website</li>
                                        <li>Transmit viruses, malware, or other harmful code</li>
                                        <li>Interfere with or disrupt the service or servers</li>
                                        <li>Collect or harvest any personally identifiable information</li>
                                    </ul>
                                </div>

                                <div className="content-section mb-40">
                                    <h2 className="mb-20" style={{fontSize: "1.8rem", fontWeight: "600", color: "#333"}}>
                                        Limitation of Liability
                                    </h2>
                                    <p className="mb-30" style={{fontSize: "16px", lineHeight: "1.6", color: "#666"}}>
                                        In no event shall Kerrie Mariah be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
                                    </p>
                                </div>

                                <div className="content-section mb-40">
                                    <h2 className="mb-20" style={{fontSize: "1.8rem", fontWeight: "600", color: "#333"}}>
                                        Disclaimer
                                    </h2>
                                    <p className="mb-30" style={{fontSize: "16px", lineHeight: "1.6", color: "#666"}}>
                                        The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this company excludes all representations, warranties, conditions and terms express or implied by statute, common law or otherwise.
                                    </p>
                                </div>

                                <div className="content-section mb-40">
                                    <h2 className="mb-20" style={{fontSize: "1.8rem", fontWeight: "600", color: "#333"}}>
                                        Governing Law
                                    </h2>
                                    <p className="mb-30" style={{fontSize: "16px", lineHeight: "1.6", color: "#666"}}>
                                        These Terms shall be interpreted and governed in accordance with the laws of the United States and the state of Florida, without regard to its conflict of law provisions.
                                    </p>
                                </div>

                                <div className="content-section mb-40">
                                    <h2 className="mb-20" style={{fontSize: "1.8rem", fontWeight: "600", color: "#333"}}>
                                        Contact Information
                                    </h2>
                                    <p className="mb-30" style={{fontSize: "16px", lineHeight: "1.6", color: "#666"}}>
                                        If you have any questions about these Terms of Service, please contact us:
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
                                        Changes to Terms
                                    </h2>
                                    <p className="mb-30" style={{fontSize: "16px", lineHeight: "1.6", color: "#666"}}>
                                        We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
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