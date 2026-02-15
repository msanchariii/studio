"use client";
import { useState } from "react";

export default function OurProducts() {
    const [openFaq, setOpenFaq] = useState(null);

    const services = [
        {
            icon: (
                <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
            ),
            iconBg: "bg-green-100",
            iconColor: "text-green-600",
            title: "Local Shop Online Stores",
            description:
                "Custom e-commerce solutions that help local boutiques and shops sell 24/7 without the tech headache.",
        },
        {
            icon: (
                <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                </svg>
            ),
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
            title: "Hotel Booking Websites",
            description:
                "Seamless booking engines for boutique hotels and B&Bs. Drive direct reservations and save on commission fees.",
        },
        {
            icon: (
                <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                </svg>
            ),
            iconBg: "bg-purple-100",
            iconColor: "text-purple-600",
            title: "Custom Small Business Sites",
            description:
                "Unique, mobile-first designs crafted in Figma and coded to perfection to reflect your brand's personality.",
        },
    ];

    const faqs = [
        {
            question: "What's your typical delivery timeline?",
            answer: "Most projects are completed within 4-6 weeks, depending on complexity and scope. We'll provide a detailed timeline during our initial consultation.",
        },
        {
            question: "How do we stay in touch during the project?",
            answer: "We use a combination of weekly video calls, Slack for quick updates, and a shared project management board so you're always in the loop on progress.",
        },
        {
            question: "Do you offer refunds?",
            answer: "We offer a satisfaction guarantee for the first milestone. If you're not happy with the initial design concepts, we'll refund your deposit minus any work completed.",
        },
        {
            question: "What tech stack do you use?",
            answer: "We primarily work with Next.js, React, and Tailwind CSS for frontend, with Node.js and various databases on the backend. We choose the best tools for your specific needs.",
        },
    ];

    const toggleFaq = (index: any) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <section className="bg-gray-50 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-16">
                    <p className="mb-4 font-mono text-sm tracking-wider text-gray-500 uppercase">
                        [SERVICES]
                    </p>
                    <h2 className="text-4xl leading-tight font-bold text-gray-900 md:text-5xl lg:text-6xl">
                        Not just services — we create{" "}
                        <span className="text-teal-500">
                            digital experiences
                        </span>{" "}
                        that convert.
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="mb-24 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="rounded-2xl bg-white p-8 transition-shadow duration-300 hover:shadow-lg"
                        >
                            {/* Icon */}
                            <div
                                className={`h-14 w-14 ${service.iconBg} mb-6 flex items-center justify-center rounded-xl ${service.iconColor}`}
                            >
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="mb-4 text-xl font-bold text-gray-900">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="leading-relaxed text-gray-600">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="mx-auto max-w-3xl">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded-xl bg-white"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50"
                                >
                                    <span className="text-base font-medium text-gray-900 md:text-lg">
                                        {faq.question}
                                    </span>
                                    <svg
                                        className={`ml-4 h-5 w-5 flex-shrink-0 text-gray-500 transition-transform duration-200 ${
                                            openFaq === index
                                                ? "rotate-180 transform"
                                                : ""
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-200 ${
                                        openFaq === index
                                            ? "max-h-96"
                                            : "max-h-0"
                                    }`}
                                >
                                    <div className="px-6 pb-5 leading-relaxed text-gray-600">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
