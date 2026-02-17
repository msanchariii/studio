import { title } from "process";
import React from "react";

const WhatYouGet = () => {
    return (
        <section className="bg-gray-50 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
            <div className="mx-auto max-w-5xl">
                {/* Header */}
                <div className="mb-16">
                    <p className="mb-4 font-mono text-sm tracking-wider text-gray-500 uppercase">
                        [What&apos;s Included]
                    </p>
                </div>

                {/* Services Grid */}
                <div className="mb-24 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                            Everything you need. Nothing you don&apos;t
                        </h3>
                        <p>
                            Most agencies hand you a website and disappear. We
                            don&apos;t. Every project we take on includes
                            design, development, hosting setup, and 3 months of
                            post-launch support — all under one roof, all for a
                            fixed price. No hidden costs, no chasing
                            freelancers, no technical headaches.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <ServiceItem
                            icon={<span className="text-lg">🎨</span>}
                            title="Custom Design"
                            description="Figma-crafted, mobile-first design that matches your brand personality — not a template."
                        />
                        <ServiceItem
                            icon={<span className="text-lg">💻</span>}
                            title="Development"
                            description="Built to be fast, secure, and scalable. We choose the right technology for your goals, not ours."
                        />
                        <ServiceItem
                            icon={<span className="text-lg">🚀</span>}
                            title="Hosting Setup"
                            description="We set up and configure your hosting so your site is live, secure, and loading fast from day one."
                        />
                        <ServiceItem
                            icon={<span className="text-lg">🔧</span>}
                            title="2 Months Free Support"
                            description="Bug fixes, content updates, and guidance — included free for 3 months after your site goes live."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ServiceItem = ({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) => {
    return (
        <div className="flex items-start space-x-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-500">
                {icon}
            </div>
            <div>
                <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
                <p className="mt-1 text-sm text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default WhatYouGet;
