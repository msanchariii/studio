import PageHeading from "@/components/PageHeading";
import { Bot, Hotel, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const services = [
    {
        title: "D2C E-commerce Store",
        description:
            "Launch a beautiful, high-converting Shopify store built for D2C brands from day one.",
        image: "/images/services/shopify-store-development.jpg",
        listItems: [
            "Custom storefront design",
            "Complete Shopify setup",
            "Theme customization",
            "Product & collection setup",
            "Payment gateway integration",
            "Shipping & tax configuration",
            "Mobile & SEO optimization",
            "Launch support",
        ],
        icon: ShoppingCart,
    },
    {
        title: "Hotel & Resort Booking Websites",
        description:
            "Modern booking websites that help hotels, resorts, and travel businesses accept direct online reservations.",
        image: "/images/services/hotel-resort-booking-websites.jpg",
        listItems: [
            "Room & package management",
            "Online booking engine",
            "Availability calendar",
            "Secure online payments",
            "Guest management",
            "Admin dashboard",
            "Email booking confirmations",
            "Responsive design",
        ],
        icon: Hotel,
    },
    {
        title: "AI Customer Support Automation",
        description:
            "Automate customer conversations across your website and WhatsApp so you never miss a lead.",
        image: "/images/services/shopify-store-development.jpg",

        listItems: [
            "AI website chatbot",
            "WhatsApp automation",
            "Instant FAQ responses",
            "Lead qualification",
            "Appointment booking",
            "Order status assistance",
            "CRM integration",
            "24/7 customer support",
        ],
        icon: Bot,
    },
];

const ServicesPage = () => {
    return (
        <section className="min-h-screen py-32">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                {/* Header Section */}
                <PageHeading
                    title="Services"
                    subtitle="Everything Your Brand Needs to Grow"
                    description="From high-converting Shopify stores to custom web applications, we build digital experiences that help businesses launch, scale, and sell."
                />

                <div className="space-y-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            item={service}
                            // color="brand"
                            index={index}
                        />
                    ))}
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

interface Service {
    title: string;
    description: string;
    listItems: string[];
    icon: React.ElementType;
}

const ServiceCard = ({
    item,
    index,
}: {
    item: Service & { image: string };
    index: number;
}) => {
    const reversed = index % 2 !== 0;

    return (
        <article className="rounded-3xl border border-zinc-200 bg-white p-8">
            <div
                className={`grid items-center gap-6 lg:grid-cols-2 ${
                    reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
            >
                {/* Image */}
                <div className="overflow-hidden rounded-2xl border border-zinc-200">
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={800}
                        height={600}
                        className="aspect-5/3 h-full w-full object-cover transition duration-500"
                    />
                </div>

                {/* Content */}
                <div>
                    <h3 className="text-charcoal mb-2 text-2xl font-bold">
                        {item.title}
                    </h3>

                    <p className="text-charcoal/70 mb-4 leading-7">
                        {item.description}
                    </p>

                    <ul className="mb-5 space-y-2">
                        {item.listItems.map((feature) => (
                            <li
                                key={feature}
                                className="text-charcoal/80 flex items-center gap-3"
                            >
                                <div className="bg-brand h-2 w-2 rounded-full" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/work"
                            className="bg-brand rounded-full px-6 py-3 font-medium text-white transition hover:opacity-90"
                        >
                            View Work
                        </Link>

                        <Link
                            href="/contact"
                            className="border-brand text-brand hover:bg-brand rounded-full border px-6 py-3 font-medium transition hover:text-white"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
};
