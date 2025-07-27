"use client";
import { useForm } from "react-hook-form";

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    // submit form data
    const onSubmit = async (data) => {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                reset(); // Reset the form
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="contact-wrapper">
            <div className="contact-form mt-45" style={{boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)", borderRadius: "8px", padding: "30px", backgroundColor: "#fff"}}>
                <div className="form-header text-center mb-4">
                    <h3 className="mb-2" style={{fontSize: "24px", fontWeight: "600", color: "#333"}}>
                        Get In Touch
                    </h3>
                    <p className="text-muted mb-0" style={{fontSize: "16px", lineHeight: "1.5"}}>
                        I'll get back to you as soon as possible
                    </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="contact-info pt-20">
                        <div className="row">
                            <div
                                className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 pr6 mb-12"
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom"
                                data-aos-duration={800}
                            >
                                <input
                                    className="name w-100 theme-border pl-20 pt-15 pb-15 pr-10 form-color border-radius5 openS-font-family"
                                    type="text"
                                    name="name"
                                    id="inputName"
                                    placeholder="Your Name"
                                    {...register("name", {
                                        required: "Name is required",
                                    })}
                                />
                                {errors.name && (
                                    <span className="ui-error">
                                        {errors.name.message}
                                    </span>
                                )}
                            </div>

                            <div
                                className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 pl6 pr-12 mb-12"
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom"
                                data-aos-duration={900}
                            >
                                <input
                                    className="email w-100 theme-border pl-20 pt-15 pb-15 pr-10 form-color border-radius5 openS-font-family"
                                    type="email"
                                    name="email"
                                    id="inputEmail"
                                    placeholder="Your Email"
                                    {...register("email", {
                                        required: "Email is required",
                                        validate: () => {
                                            const email = watch("email");
                                            return (
                                                email.includes("@") ||
                                                "Invalid email"
                                            );
                                        },
                                    })}
                                />{" "}
                                {errors.email && (
                                    <span className="ui-error">
                                        {errors.email.message}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="row ">
                            <div
                                className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 pl-12 pr-12 mb-12"
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom"
                                data-aos-duration={800}
                            >
                                <textarea
                                    className="massage w-100 theme-border pl-20 pt-15 pr-10 primary-color border-radius5 openS-font-family"
                                    name="inputMessage"
                                    id="msg"
                                    placeholder="Start writing message here"
                                    {...register("msg", {
                                        required: "Message is required",
                                        minLength: {
                                            message: "Minimum length is 10",
                                            value: 10,
                                        },
                                    })}
                                />
                                {errors.msg && (
                                    <span className="ui-error">
                                        {errors.msg.message}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="privacy-notice mb-20" style={{fontSize: "14px", color: "#666", lineHeight: "1.5"}}>
                            <p className="mb-0">
                                By submitting this form, you agree to our{" "}
                                <a href="/privacy-policy" target="_blank" style={{color: "#c75142", textDecoration: "underline"}}>
                                    Privacy Policy
                                </a>. We only use your information to respond to your inquiry and do not share, sell, or distribute your personal information to third parties.
                            </p>
                        </div>
                        
                        <button
                            className="btn position-relative over-hidden text-white d-inline-block theme-bg white-text text-uppercase"
                            type="submit"
                            name="submit"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration={900}
                        >
                            Submit Now
                        </button>
                    </div>
                </form>
                <p className="form-message mt-20" />
            </div>
        </div>
    );
}
