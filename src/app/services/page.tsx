import {
    BadgeHelp,
    Bot,
    Database,
    Hammer,
    Instagram,
    LayoutGrid,
    MonitorSmartphone,
    ShoppingCart,
} from "lucide-react";
import React from "react";

const websiteServices = [
    {
        title: "Website Design and Development",
        description:
            "Create a stunning and functional website that represents your brand and engages your audience.",
        listItems: [
            "Custom designs tailored to your brand",
            "Responsive and mobile-friendly layouts",
            "SEO-optimized for better visibility",
            "Fast loading times",
            "User-friendly interfaces",
        ],
        icon: MonitorSmartphone,
    },
    {
        title: "E-commerce Development",
        description:
            "Build a powerful online store that drives sales and enhances customer experience.",
        listItems: [
            "Custom e-commerce solutions",
            "Shopping cart integration",
            "Payment gateway setup",
            "Inventory management",
            "User-friendly product catalogs",
        ],
        icon: ShoppingCart,
    },
    {
        title: "CMS Integration",
        description:
            "Implement a CMS that allows you to easily manage and update your website content.",
        listItems: [
            "User-friendly interfaces for content updates",
            "Integration with popular CMS platforms",
            "Customizable templates",
            "SEO-friendly content management",
            "Scalable solution.",
        ],
        icon: Database,
    },
];

const automationServices = [
    {
        title: "Whatsapp Support Automation",
        description:
            "Integrate WhatsApp with your customer support system to automate responses.",
        listItems: [
            "24/7 customer support",
            "No more waiting in line",
            "No more missed messages",
            "No more answering the same questions over and over",
            "Automated ticketing systems",
        ],
        icon: BadgeHelp,
    },
    {
        title: "Social Media Post Automation",
        // post to all the social media platforms at once
        description: "Post to all your social media platforms at once.",
        listItems: [
            "Schedule posts in advance",
            "Manage multiple accounts",
            "Track engagement metrics",
            "Automate content sharing",
            "Integration with content calendars",
        ],
        icon: Instagram,
    },
    {
        title: "Chatbot Automation",
        description:
            "Integrate chatbots into your website or app to provide instant responses and support.",
        listItems: [
            "24/7 availability",
            "Instant responses to common queries",
            "Lead generation and qualification",
            "Integration with CRM systems",
            "Personalized user experiences",
        ],
        icon: Bot,
    },
];

const mobileAppServices = [
    {
        title: "Mobile App Development",
        description:
            "Create high-quality mobile applications for iOS and Android platforms.",
        listItems: [
            "Custom app designs",
            "Cross-platform compatibility",
            "User-friendly interfaces",
            "Integration with backend systems",
            "App store submission support",
        ],
        icon: LayoutGrid,
    },
    {
        title: "App Maintenance and Support",
        description:
            "Ensure your mobile app runs smoothly with ongoing maintenance and support services.",
        listItems: [
            "Regular updates and bug fixes",
            "Performance optimization",
            "User feedback integration",
            "Security enhancements",
            "24/7 technical support",
        ],
        icon: Hammer,
    },
];

const ServicesPage = () => {
    return (
        <section className="min-h-screen py-24">
            <div className="mx-auto max-w-7xl px-4">
                {/* Header Section */}
                <div className="mb-20 border-b border-zinc-200 pb-12">
                    <div className="mb-6 flex items-center gap-3">
                        <div className="bg-brand h-0.5 w-10"></div>
                        <p className="text-brand font-mono text-xs tracking-[0.3em] uppercase">
                            What We Offer
                        </p>
                    </div>
                    <h1 className="text-charcoal mb-6 text-5xl leading-tight font-bold sm:text-6xl md:text-7xl">
                        Our Services
                    </h1>
                    <p className="text-charcoal/70 max-w-2xl text-sm leading-relaxed">
                        Comprehensive solutions designed to transform your
                        digital presence and streamline your operations.
                    </p>
                </div>

                {/* Website Services */}
                <div className="mb-24">
                    <div className="mb-12 flex items-center gap-3">
                        <div className="bg-teal h-0.5 w-8"></div>
                        <h2 className="text-charcoal/50 font-mono text-xs tracking-[0.2em] uppercase">
                            Website Development
                        </h2>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {websiteServices.map((service, index) => (
                            <ServiceCard
                                key={index}
                                item={service}
                                color="teal"
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                {/* Automation Services */}
                <div className="mb-24">
                    <div className="mb-12 flex items-center gap-3">
                        <div className="bg-indigo h-0.5 w-8"></div>
                        <h2 className="text-charcoal/50 font-mono text-xs tracking-[0.2em] uppercase">
                            Automation Solutions
                        </h2>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {automationServices.map((service, index) => (
                            <ServiceCard
                                key={index}
                                item={service}
                                color="indigo"
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                {/* Mobile App Services */}
                <div className="mb-24">
                    <div className="mb-12 flex items-center gap-3">
                        <div className="bg-coral h-0.5 w-8"></div>
                        <h2 className="text-charcoal/50 font-mono text-xs tracking-[0.2em] uppercase">
                            Mobile Applications
                        </h2>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {mobileAppServices.map((service, index) => (
                            <ServiceCard
                                key={index}
                                item={service}
                                color="coral"
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="border-t border-zinc-200 pt-16">
                    <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h2 className="text-charcoal mb-3 text-3xl font-bold">
                                Need a custom solution?
                            </h2>
                            <p className="text-charcoal/70 max-w-xl text-sm leading-relaxed">
                                We can tailor our services to meet your specific
                                needs. Let&apos;s discuss your project.
                            </p>
                        </div>
                        <a
                            href="/contact"
                            className="border-brand text-brand hover:bg-brand inline-block border-2 px-8 py-4 font-semibold transition-all duration-300 hover:text-white"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesPage;

const ServiceCard = ({
    item,
    color,
    index,
}: {
    item: {
        title: string;
        description: string;
        listItems: string[];
        icon: React.ElementType;
    };
    color: string;
    index: number;
}) => {
    const { icon: IconComponent } = item;

    const colorSchemes = {
        teal: {
            accent: "border-teal",
            bg: "bg-teal",
            text: "text-teal",
            bgLight: "bg-teal/10",
            dot: "bg-teal/30",
        },
        indigo: {
            accent: "border-indigo",
            bg: "bg-indigo",
            text: "text-indigo",
            bgLight: "bg-indigo/10",
            dot: "bg-indigo/30",
        },
        coral: {
            accent: "border-coral",
            bg: "bg-coral",
            text: "text-coral",
            bgLight: "bg-coral/10",
            dot: "bg-coral/30",
        },
        lavender: {
            accent: "border-lavender",
            bg: "bg-lavender",
            text: "text-lavender",
            bgLight: "bg-lavender/10",
            dot: "bg-lavender/30",
        },
        brand: {
            accent: "border-brand",
            bg: "bg-brand",
            text: "text-brand",
            bgLight: "bg-brand/10",
            dot: "bg-brand/30",
        },
    };

    const scheme = colorSchemes[color as keyof typeof colorSchemes];

    return (
        <article className="group relative">
            <div
                className={`h-full border-l-4 ${scheme.accent} bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg`}
            >
                {/* Number Badge */}
                <div className="mb-6 flex items-start justify-between">
                    <div
                        className={`${scheme.bg} flex h-12 w-12 items-center justify-center text-white shadow-md`}
                    >
                        <IconComponent className="h-6 w-6" />
                    </div>
                    <div
                        className={`font-mono text-sm font-bold ${scheme.text}`}
                    >
                        {String(index + 1).padStart(2, "0")}
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-charcoal mb-3 text-xl leading-tight font-bold">
                    {item.title}
                </h3>

                {/* Description */}
                <p className="text-charcoal/70 mb-6 text-sm leading-relaxed">
                    {item.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                    {item.listItems.map((listItem, idx) => (
                        <li
                            key={idx}
                            className="text-charcoal/60 flex items-start gap-2 text-sm"
                        >
                            <div
                                className={`mt-1.5 h-1.5 w-1.5 shrink-0 ${scheme.dot}`}
                            ></div>
                            <span>{listItem}</span>
                        </li>
                    ))}
                </ul>

                {/* Decorative corner element */}
                <div
                    className={`absolute right-0 bottom-0 h-20 w-20 ${scheme.bgLight} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                >
                    <div
                        className={`absolute right-0 bottom-0 h-1 w-10 ${scheme.bg}`}
                    ></div>
                    <div
                        className={`absolute right-0 bottom-0 h-10 w-1 ${scheme.bg}`}
                    ></div>
                </div>
            </div>
        </article>
    );
};
