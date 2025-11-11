import navigation from "@/data/navigation";
import NextLink from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <nav className="d-none d-lg-block">
            <ul className="d-block">
                {/* navigation start */}
                {navigation?.map((item, i) => (
                    <li key={i}>
                        {item.path === "portfolio" ? (
                            <NextLink href="/portfolio">{item.name}</NextLink>
                        ) : isHome ? (
                            <ScrollLink
                                href="#"
                                to={item.path}
                                spy={true}
                                smooth={true}
                                offset={-75}
                                duration={500}
                                activeClass="ui-nav-active"
                            >
                                {item.name}
                            </ScrollLink>
                        ) : (
                            <NextLink href={`/#${item.path}`}>{item.name}</NextLink>
                        )}
                    </li>
                ))}
                {/* navigation end */}
            </ul>
        </nav>
    );
}
