import Link from "next/link";

export default function PricingCard({ data, index }) {
    return (
        <div
            className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration={1200 + index * 200}
        >
            <div className={`single-price white-bg shadow-hover transition3 border-radius12 pl-45 pr-45 pt-45 pb-50 mb-30 ${data.popular ? 'popular-price' : ''}`}>
                <h3 className="theme-border-bottom pb-25">{data.title}</h3>
                <p className="mt-20 mb-10 primary-color f-600">
                    <span className="theme-color rate pr-12">
                        {data.price}
                    </span>
                    {data.duration}
                </p>
                <p className="mb-25">
                    {data.title === "Basic Website" && "Perfect for small businesses and personal brands looking to establish their online presence."}
                    {data.title === "E-commerce Site" && "Complete online store solution with payment processing and inventory management."}
                    {data.title === "Hourly Consulting" && "Flexible technical support and development services billed by the hour."}
                </p>
                <ul className="price-list">
                    {data.features.map((feature, i) => (
                        <li key={i} className="d-flex align-items-center">
                            <span className="theme-color d-inline-block text-center">
                                <i className="far fa-check" />
                            </span>
                            <p className="mb-0 ml-20">{feature}</p>
                        </li>
                    ))}
                </ul>
                <Link
                    href={data.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn position-relative over-hidden theme-bg text-uppercase mt-25"
                >
                    {data.ctaText}
                </Link>
                {data.popular && (
                    <div className="popular-badge position-absolute">
                        <span>Most Popular</span>
                    </div>
                )}
            </div>
        </div>
    );
}
