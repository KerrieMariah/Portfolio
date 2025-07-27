"use client";
import Image from "next/image";
import { Link } from "react-scroll";

const social = [
    {
        icon: "fab fa-facebook-f",
        color: "facebook-bg",
        link: "https://www.facebook.com/kerrie.x.mariah/",
    },
    {
        icon: "fab fa-instagram",
        color: "instagram-bg",
        link: "https://www.instagram.com/kerrie_mariah/",
    },
    {
        icon: "fab fa-linkedin-in",
        color: "linkedin-bg",
        link: "https://www.linkedin.com/in/kerriemariah/",
    },
];

export default function Footer() {
    return (
        <footer>
            <div className="footer-area over-hidden pt-80 pb-40">
                <div className="footer-top">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="footer-widget footer-logo pb-40">
                                    <div className="foot-logo mb-30 text-center text-lg-left">
                                        <Image
                                            height={40}
                                            width={220}
                                            src="/images/logo/logo.png"
                                            alt="Kerrie Mariah"
                                        />
                                    </div>
                                    <div className="copyright-text text-center text-lg-left">
                                        <p className="mb-2" style={{fontSize: "15px", lineHeight: "1.6"}}>
                                            All rights reserved{" "}
                                            <Link
                                                href="/"
                                                className="c-theme primary-color f-600"
                                            >
                                                Kerrie Mariah
                                            </Link>{" "}
                                            © {new Date().getFullYear()}
                                        </p>
                                        <div className="legal-links" style={{fontSize: "13px"}}>
                                            <a href="/privacy-policy" style={{color: "#666", textDecoration: "none", marginRight: "15px"}}>
                                                Privacy Policy
                                            </a>
                                            <a href="/terms-of-service" style={{color: "#666", textDecoration: "none"}}>
                                                Terms of Service
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="footer-widget pb-40 text-center">
                                    <h4 className="mb-30 mt-2" style={{fontSize: "20px", fontWeight: "600"}}>Follow Me</h4>
                                    <ul className="social social-bg text-center d-flex justify-content-center">
                                        {/* footer social start */}
                                        {social?.map((item, i) => (
                                            <li
                                                key={i}
                                                className="mx-2 rotate-hover"
                                            >
                                                <Link
                                                    className={`${item.color} text-center pr-0 text-white d-block transition-3 rotate`}
                                                    href={item.link}
                                                    style={{width: "45px", height: "45px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%"}}
                                                >
                                                    <i className={item.icon} style={{fontSize: "18px"}} />
                                                </Link>
                                            </li>
                                        ))}
                                        {/* footer social end */}
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="footer-widget pb-40 text-center text-lg-right">
                                    <h4 className="mb-30 mt-2" style={{fontSize: "20px", fontWeight: "600"}}>Get In Touch</h4>
                                    <div className="contact-info">
                                        <p className="mb-2" style={{fontSize: "15px", lineHeight: "1.6"}}>
                                            <i className="fas fa-envelope mr-2 theme-color"></i>
                                            kerrie@kerriemariah.com
                                        </p>
                                        <p className="mb-0" style={{fontSize: "15px", lineHeight: "1.6"}}>
                                            <i className="fas fa-phone mr-2 theme-color"></i>
                                            +1 (352) 316-7889
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
