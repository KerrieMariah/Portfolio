const SITE = "https://kerriemariah.com";

const routes = [
    { path: "/", priority: 1, changeFrequency: "monthly" },
    { path: "/seo-revamp", priority: 0.9, changeFrequency: "monthly" },
    { path: "/portfolio", priority: 0.7, changeFrequency: "monthly" },
    { path: "/links", priority: 0.4, changeFrequency: "yearly" },
    { path: "/donate", priority: 0.3, changeFrequency: "yearly" },
    { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms-of-service", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap() {
    const lastModified = new Date();
    return routes.map(({ path, priority, changeFrequency }) => ({
        url: `${SITE}${path === "/" ? "" : path}`,
        lastModified,
        changeFrequency,
        priority,
    }));
}
