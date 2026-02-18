"use client";
import { WorkflowHeadline } from "@/data/SectionHeadlines";
import React from "react";
const cards = [
    {
        id: "01",
        title: "Discovery & Research",
        desc: "We start with a deep dive into your brand, understanding your goals, audience, and market landscape to inform our strategy.",
        color: "teal",
    },
    {
        id: "02",
        title: "Strategy & Planning",
        desc: "Crafting a tailored strategy that aligns with your vision, ensuring every step is purposeful and impactful.",
        color: "cambridge",
    },
    {
        id: "03",
        title: "Execution & Delivery",
        desc: "We bring the plan to life with precision and creativity, ensuring timely delivery and measurable results.",
        color: "coral",
    },
    {
        id: "04",
        title: "Feedback & Iteration",
        desc: "Gathering insights and feedback to refine our approach, ensuring continuous improvement and alignment with your goals.",
        color: "lavender",
    },
    {
        id: "05",
        title: "Ongoing Support",
        desc: "Our partnership doesn't end with delivery. We provide 3 months of support to ensure your continued success and growth.",
        color: "brand",
    },
    {
        id: "contact",
        title: "Contact Us",
        desc: "Ready to start? Get in touch with us to discuss your project and how we can help you achieve your goals.",
        color: "brand",
    },
];
const Workflow = () => {
    return (
        <section className="relative min-h-dvh">
            <WorkflowHeadline />
            <div
                className={
                    "relative container mx-auto mt-16 flex flex-col items-start justify-between rounded-lg pt-10 xl:flex-row"
                }
                id="workflow-section"
            >
                <div
                    className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                    id="workflow-cards"
                >
                    {cards.map((card, i: number) => (
                        <WorkflowCard
                            key={i}
                            title={card.title}
                            desc={card.desc}
                            id={card.id}
                            color={card.color}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

type WorkflowCardProps = {
    id?: string;
    title?: string;
    desc?: string;
    color?: string;
    ref?: React.Ref<HTMLDivElement>;
};

const WorkflowCard = ({
    id = "01",
    title = "Title",
    desc = "Desc",
    color = "brand",
    ref,
}: WorkflowCardProps) => {
    const colorMap: Record<
        string,
        {
            gradient: string;
            numberBg: string;
            numberText: string;
            border: string;
        }
    > = {
        brand: {
            gradient: "from-brand/10 via-white to-white",
            numberBg: "bg-brand",
            numberText: "text-brand",
            border: "hover:border-brand",
        },
        cambridge: {
            gradient: "from-cambridge/10 via-white to-white",
            numberBg: "bg-cambridge",
            numberText: "text-cambridge",
            border: "hover:border-cambridge",
        },
        teal: {
            gradient: "from-teal/10 via-white to-white",
            numberBg: "bg-teal",
            numberText: "text-teal",
            border: "hover:border-teal",
        },
        coral: {
            gradient: "from-coral/10 via-white to-white",
            numberBg: "bg-coral",
            numberText: "text-coral",
            border: "hover:border-coral",
        },
        lavender: {
            gradient: "from-lavender/10 via-white to-white",
            numberBg: "bg-lavender",
            numberText: "text-lavender",
            border: "hover:border-lavender",
        },
    };

    const colors = colorMap[color] || colorMap.brand;

    return (
        <div
            ref={ref}
            className={`workflow-card group relative container mx-auto grid h-44 w-full grid-cols-2 grid-rows-2 overflow-hidden rounded-xl transition-all duration-300 lg:grid-cols-3 xl:grid-cols-4 ${
                id === "contact"
                    ? "from-brand to-brand/80 hover:from-brand/90 hover:to-brand/70 items-center justify-center bg-linear-to-br shadow-lg hover:shadow-2xl"
                    : `bg-linear-to-br ${colors.gradient} border-2 border-transparent p-8 ${colors.border} shadow-md hover:-translate-y-1 hover:shadow-xl`
            }`}
        >
            {id === "contact" ? (
                <a
                    href="/contact"
                    className="relative inset-0 col-span-full row-span-2 flex items-center justify-center text-center text-3xl font-semibold text-white"
                >
                    <span>{title}</span>
                </a>
            ) : (
                <>
                    {/* Number badge with color */}
                    <div className="relative z-10">
                        <div
                            className={`inline-flex h-14 w-14 items-center justify-center rounded-full ${colors.numberBg} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                        >
                            <p className="text-xl font-bold text-white">{id}</p>
                        </div>
                    </div>

                    {/* Decorative circle in background */}
                    <div
                        className={`absolute -top-8 -right-8 h-32 w-32 ${colors.numberBg} rounded-full opacity-5 transition-transform duration-500 group-hover:scale-125`}
                    ></div>

                    <h3
                        className={`mb-4 w-full text-left text-xl font-bold tracking-tight lg:col-span-2 xl:col-span-3 xl:max-w-lg ${colors.numberText} relative z-10`}
                    >
                        {title}
                    </h3>
                    <p className="text-charcoal/70 relative z-10 col-span-full mt-2 h-8 text-xs font-medium xl:max-w-md">
                        {desc}
                    </p>
                </>
            )}
        </div>
    );
};

export default Workflow;
