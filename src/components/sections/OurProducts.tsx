"use client";
import { useState } from "react";
import PointyPattern from "@/components/PointyPattern";
import PointyWave from "@/components/PointyWave";

export default function WhoWeServe() {
    const [openFaq, setOpenFaq] = useState(null);

    const services = [
        {
            color: "teal",
            colorHex: "#14b8a6",
            accentColor: "bg-teal",
            textColor: "text-teal",
            borderColor: "border-teal/30",
            title: "Instagram & Local Sellers",
            subtitle: "Selling on Instagram or WhatsApp?",
            description:
                "Turn your DMs into a real checkout experience. We build you a store that takes orders, payments, and runs 24/7 — without you lifting a finger.",
        },
        {
            color: "indigo",
            colorHex: "#6366f1",
            accentColor: "bg-indigo",
            textColor: "text-indigo",
            borderColor: "border-indigo/30",
            title: "Hotel & Stays",
            subtitle: "Running a Hotel or B&B?",
            description:
                "Stop losing bookings to OTAs. We build direct booking websites that save you commission and give guests a seamless reservation experience.",
        },
        {
            color: "coral",
            colorHex: "#f97066",
            accentColor: "bg-coral",
            textColor: "text-coral",
            borderColor: "border-coral/30",
            title: "Small Businesses & Creators",
            subtitle: "Need a Web Presence?",
            description:
                "From portfolio sites to business landing pages — if you need something that looks great and works perfectly, we build it right.",
        },
        {
            color: "lavender",
            colorHex: "#ba9ad3",
            accentColor: "bg-lavender",
            textColor: "text-lavender",
            borderColor: "border-lavender/30",
            title: "Restaurants & Cafés",
            subtitle: "Want online orders without fees?",
            description:
                "Stop paying commissions to delivery apps. We build custom ordering systems that put profit back in your pocket and give you full control.",
        },
        {
            color: "brand",
            colorHex: "#306c4d",
            accentColor: "bg-brand",
            textColor: "text-brand",
            borderColor: "border-brand/30",
            title: "Service Providers",
            subtitle: "Consultants, Coaches & Agencies?",
            description:
                "Book meetings, showcase your work, and capture leads without the hassle. We build sites that turn visitors into clients.",
        },
        {
            color: "cambridge",
            colorHex: "#77ba99",
            accentColor: "bg-cambridge",
            textColor: "text-cambridge",
            borderColor: "border-cambridge/30",
            title: "Event & Workshop Hosts",
            subtitle: "Hosting events or workshops?",
            description:
                "Sell tickets, manage registrations, and promote your events — all in one place. No middleman, no confusion, just streamlined bookings.",
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
        <section className="relative px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            {/* Subtle background with pointy pattern */}
            <div className="bg-beige/20 absolute inset-0">
                <PointyPattern />
            </div>

            <div className="relative mx-auto max-w-5xl">
                {/* Header */}
                <div className="mb-12">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="bg-brand h-0.5 w-10"></div>
                        <p className="text-brand font-mono text-xs tracking-[0.3em] uppercase">
                            Who We Serve
                        </p>
                    </div>
                    <h2 className="text-charcoal mb-4 text-3xl leading-tight font-bold md:text-4xl">
                        Built for businesses&nbsp;
                        <span className="text-brand">ready to grow</span> beyond
                        Instagram.
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="mb-20 grid grid-cols-1 gap-5 md:grid-cols-3">
                    {services.map((service, index) => {
                        const isElevated = index === 1 || index === 4;
                        return (
                            <div
                                key={index}
                                className={`group relative overflow-hidden border-t-4 bg-white p-6 transition-all duration-300 ${
                                    isElevated
                                        ? "-translate-y-2 shadow-md hover:-translate-y-3 hover:shadow-md"
                                        : "shadow-md hover:-translate-y-2 hover:shadow-md"
                                } ${service.borderColor}`}
                                style={{ borderRadius: "0 0 12px 12px" }}
                            >
                                {/* Decorative pointy wave background */}
                                <div
                                    className={`absolute -right-4 -bottom-4 transition-transform duration-500 ${
                                        isElevated
                                            ? "scale-110 group-hover:scale-125"
                                            : "scale-100 group-hover:scale-110"
                                    }`}
                                >
                                    <PointyWave color={service.colorHex} />
                                </div>

                                {/* Number badge */}
                                <div className="relative mb-4 flex items-center justify-between">
                                    <div
                                        className={`flex h-10 w-10 items-center justify-center rounded-full ${service.accentColor} shadow-md`}
                                    >
                                        <span className="text-lg font-bold text-white">
                                            {(index + 1)
                                                .toString()
                                                .padStart(2, "0")}
                                        </span>
                                    </div>
                                    <div
                                        className={`h-0.5 rounded-full ${service.accentColor} opacity-40 transition-all duration-300 ${
                                            isElevated
                                                ? "w-16 group-hover:w-20"
                                                : "w-12 group-hover:w-16"
                                        }`}
                                    ></div>
                                </div>

                                {/* Subtitle */}
                                <p
                                    className={`mb-2 text-xs font-semibold tracking-wide ${service.textColor} uppercase`}
                                >
                                    {service.subtitle}
                                </p>

                                {/* Title */}
                                <h3 className="text-charcoal relative z-10 mb-3 text-xl leading-tight font-bold">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-charcoal/70 relative z-10 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* FAQ Section */}
                <div className="mx-auto max-w-3xl">
                    <h3 className="text-charcoal mb-6 text-2xl font-bold">
                        Common Questions
                    </h3>
                    <div className="space-y-3">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`overflow-hidden border-l-4 bg-white transition-all duration-200 ${
                                    openFaq === index
                                        ? "border-brand shadow-md"
                                        : "border-transparent shadow-md"
                                }`}
                                style={{ borderRadius: "0 8px 8px 0" }}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-gray-50"
                                >
                                    <span className="text-charcoal text-base font-semibold md:text-base">
                                        {faq.question}
                                    </span>
                                    <div
                                        className={`ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                                            openFaq === index
                                                ? "bg-brand rotate-180"
                                                : "bg-gray-200"
                                        }`}
                                    >
                                        <svg
                                            className={`h-4 w-4 transition-colors ${
                                                openFaq === index
                                                    ? "text-white"
                                                    : "text-gray-600"
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
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-200 ${
                                        openFaq === index
                                            ? "max-h-96"
                                            : "max-h-0"
                                    }`}
                                >
                                    <div className="text-charcoal/70 px-6 pb-4 text-sm leading-relaxed">
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
