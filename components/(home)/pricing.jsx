import { pricing } from "@/data/site";
import PricingCard from "./ui/pricing-card";

export default function Pricing() {
    return (
        <div className="pricing-area over-hidden secondary-bg pt-155 pb-140">
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-xl-12 col-lg-12  col-md-12  col-sm-12 col-12">
                        <div className="title text-center">
                            <span className="theme-color text-uppercase d-block mb-6">
                                Let's Start Working
                            </span>
                            <h2 className="text-uppercase">Pricing Plans</h2>
                            <p className="mt-20 mb-0">
                                Website pricing varies based on features and individual client needs. 
                                <br />
                                <a 
                                    href="https://tidycal.com/kerriemariah" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="theme-color font-weight-bold"
                                >
                                    Book a 15-minute call
                                </a> to discuss your specific project requirements.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row price-wrapper justify-content-center mt-80">
                    {/* pricing card start */}
                    {pricing?.slice(0, 3).map((item, i) => (
                        <PricingCard key={i} data={item} index={i} />
                    ))}
                    {/* pricing card end */}
                </div>
            </div>
        </div>
    );
}
