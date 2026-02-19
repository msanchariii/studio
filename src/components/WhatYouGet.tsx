import React from "react";

const WhatYouGet = () => {
    return (
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            {/* Background with subtle pattern */}
            <div className="from-beige to-cambridge-lightest/20 absolute inset-0 bg-linear-to-br via-white"></div>
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                    backgroundSize: "32px 32px",
                }}
            ></div>

            <div className="relative mx-auto max-w-5xl">
                {/* Header with accent line */}
                <div className="mb-12">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="bg-brand h-0.5 w-10"></div>
                        <p className="text-brand font-mono text-xs tracking-[0.3em] uppercase">
                            What&apos;s Included
                        </p>
                    </div>
                    <h2 className="text-charcoal mb-4 text-3xl leading-tight font-bold md:text-4xl">
                        Everything you need.
                        <br />
                        <span className="text-teal">
                            Nothing you don&apos;t.
                        </span>
                    </h2>
                    <p className="text-charcoal/70 max-w-2xl text-base leading-relaxed">
                        Most agencies hand you a website and disappear. We
                        don&apos;t. Every project we take on includes design,
                        development, hosting setup, and 2 months of post-launch
                        support — all under one roof, all for a fixed price. No
                        hidden costs, no chasing freelancers, no technical
                        headaches.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <ServiceItem
                        title="Custom Design"
                        description="Figma-crafted, mobile-first design that matches your brand personality — not a template."
                        accentColor="brand"
                        delay="0"
                    />
                    <ServiceItem
                        title="Development"
                        description="Built to be fast, secure, and scalable. We choose the right technology for your goals, not ours."
                        accentColor="coral"
                        delay="100"
                    />
                    <ServiceItem
                        title="Hosting Setup"
                        description="We set up and configure your hosting so your site is live, secure, and loading fast from day one."
                        accentColor="indigo"
                        delay="200"
                    />
                    <ServiceItem
                        title="2 Months Free Support"
                        description="Bug fixes, content updates, and guidance — included free for 3 months after your site goes live."
                        accentColor="lavender"
                        delay="300"
                    />
                </div>
            </div>
        </section>
    );
};

const ServiceItem = ({
    title,
    description,
    accentColor,
    delay = "0",
    className = "",
}: {
    title: string;
    description: string;
    accentColor: string;
    delay?: string;
    className?: string;
}) => {
    const colorMap: Record<
        string,
        { border: string; bg: string; accent: string }
    > = {
        brand: {
            border: "border-brand",
            bg: "bg-brand/5",
            accent: "bg-brand",
        },
        cambridge: {
            border: "border-cambridge",
            bg: "bg-cambridge/5",
            accent: "bg-cambridge",
        },
        "cambridge-darker": {
            border: "border-cambridge-darker",
            bg: "bg-cambridge-darker/5",
            accent: "bg-cambridge-darker",
        },
        lavender: {
            border: "border-lavender",
            bg: "bg-lavender/5",
            accent: "bg-lavender",
        },
        coral: {
            border: "border-coral",
            bg: "bg-coral/5",
            accent: "bg-coral",
        },
        indigo: {
            border: "border-indigo",
            bg: "bg-indigo/5",
            accent: "bg-indigo",
        },
    };

    const colors = colorMap[accentColor] || colorMap.brand;

    return (
        <div
            className={`group relative border-l-4 bg-white p-6 shadow-md ${colors.border} transition-all duration-300 hover:-translate-y-1 ${className}`}
            style={{
                animationDelay: `${delay}ms`,
                borderRadius: "0 10px 10px 0",
            }}
        >
            {/* Decorative corner element */}
            <div
                className={`absolute top-0 right-0 h-16 w-16 ${colors.bg} rounded-bl-full transition-all duration-300 group-hover:h-20 group-hover:w-20`}
            ></div>

            <div className="relative">
                <div className="mb-4 flex justify-end">
                    <div
                        className={`h-1 w-10 ${colors.accent} rounded-full transition-all duration-300 group-hover:w-14`}
                    ></div>
                </div>
                <h4 className="text-charcoal mb-2 text-xl leading-tight font-bold">
                    {title}
                </h4>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default WhatYouGet;
