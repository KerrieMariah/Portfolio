"use client";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import navigation from "@/data/navigation";
import NextLink from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/redux/features/toggle/toggleSlice";
import { usePathname } from "next/navigation";

const social = [
    {
        name: "Linkedin",
        icon: "fab fa-linkedin-in",
        color: "linkedin-bg",
        href: "https://www.linkedin.com/in/kerriemariah/",
    },
    {
        name: "Instagram",
        icon: "fab fa-instagram",
        color: "instagram-bg",
        href: "https://www.instagram.com/kerrie_mariah/",
    },
];

export default function SidebarNavigation() {
    const isSidebarActive = useSelector(
        (state) => state.toggle.isSidebarActive
    );

    const dispatch = useDispatch();
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <div className={`ui-sidebar ${isSidebarActive ? "active" : ""}`} style={{background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", backdropFilter: "blur(10px)"}}>
            <Sidebar style={{background: "transparent", border: "none"}}>
                <button
                    onClick={() => dispatch(toggleSidebar())}
                    className="ui-sidebar-close"
                    style={{
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                        background: "rgba(255, 255, 255, 0.2)",
                        border: "none",
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "18px",
                        cursor: "pointer",
                        transition: "all 0.3s ease"
                    }}
                >
                    <i className="fa fa-times"></i>
                </button>
                
                <div style={{padding: "60px 30px 30px"}}>
                    <Menu style={{background: "transparent", border: "none"}}>
                        {navigation?.map((item, i) => (
                            <MenuItem
                                key={i}
                                component={
                                    item.path === "portfolio" ? (
                                        <NextLink
                                            href="/portfolio"
                                            style={{
                                                color: "white",
                                                textDecoration: "none",
                                                fontSize: "18px",
                                                fontWeight: "500",
                                                padding: "15px 20px",
                                                display: "block",
                                                borderRadius: "8px",
                                                transition: "all 0.3s ease",
                                                marginBottom: "8px"
                                            }}
                                        />
                                    ) : (
                                        isHome ? (
                                            <ScrollLink
                                                href="#"
                                                to={item.path}
                                                spy={true}
                                                smooth={true}
                                                offset={-75}
                                                duration={500}
                                                activeClass="ui-sidebar-active"
                                                style={{
                                                    color: "white",
                                                    textDecoration: "none",
                                                    fontSize: "18px",
                                                    fontWeight: "500",
                                                    padding: "15px 20px",
                                                    display: "block",
                                                    borderRadius: "8px",
                                                    transition: "all 0.3s ease",
                                                    marginBottom: "8px"
                                                }}
                                            />
                                        ) : (
                                            <NextLink
                                                href={`/#${item.path}`}
                                                style={{
                                                    color: "white",
                                                    textDecoration: "none",
                                                    fontSize: "18px",
                                                    fontWeight: "500",
                                                    padding: "15px 20px",
                                                    display: "block",
                                                    borderRadius: "8px",
                                                    transition: "all 0.3s ease",
                                                    marginBottom: "8px"
                                                }}
                                            />
                                        )
                                    )
                                }
                                onClick={() => dispatch(toggleSidebar())}
                                style={{
                                    background: "rgba(255, 255, 255, 0.1)",
                                    border: "none",
                                    borderRadius: "8px",
                                    marginBottom: "8px",
                                    transition: "all 0.3s ease"
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.background = "rgba(255, 255, 255, 0.2)";
                                    e.target.style.transform = "translateX(10px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = "rgba(255, 255, 255, 0.1)";
                                    e.target.style.transform = "translateX(0)";
                                }}
                            >
                                {item.name}
                            </MenuItem>
                        ))}
                    </Menu>

                    {/* social link start */}
                    <div style={{marginTop: "40px", textAlign: "center"}}>
                        <h5 className="text-white text-center mb-3" style={{fontSize: "16px", fontWeight: "600"}}>
                            Follow Me
                        </h5>

                        <ul className="social text-center d-flex justify-content-center" style={{listStyle: "none", padding: 0, margin: 0}}>
                            {social?.map((item, i) => (
                                <li key={i} className="mx-2">
                                    <NextLink
                                        className="text-white d-flex align-items-center justify-content-center"
                                        href={item.href}
                                        style={{
                                            width: "45px",
                                            height: "45px",
                                            background: "rgba(255, 255, 255, 0.2)",
                                            borderRadius: "50%",
                                            transition: "all 0.3s ease",
                                            textDecoration: "none"
                                        }}
                                    >
                                        <i className={item.icon} style={{fontSize: "18px"}} />
                                    </NextLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* social link end */}
                </div>
            </Sidebar>
        </div>
    );
}
