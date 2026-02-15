"use client";
import { WorkflowHeadline } from "@/data/SectionHeadlines";
import React from "react";
const cards = [
    {
        id: "01",
        title: "Discovery & Research",
        desc: "We start with a deep dive into your brand, understanding your goals, audience, and market landscape to inform our strategy.",
    },
    {
        id: "02",
        title: "Strategy & Planning",
        desc: "Crafting a tailored strategy that aligns with your vision, ensuring every step is purposeful and impactful.",
    },
    {
        id: "03",
        title: "Execution & Delivery",
        desc: "We bring the plan to life with precision and creativity, ensuring timely delivery and measurable results.",
    },
    {
        id: "04",
        title: "Feedback & Iteration",
        desc: "Gathering insights and feedback to refine our approach, ensuring continuous improvement and alignment with your goals.",
    },
    {
        id: "05",
        title: "Ongoing Support",
        desc: "Our partnership doesn't end with delivery. We provide 3 months of support to ensure your continued success and growth.",
    },
    {
        id: "contact",
        title: "Contact Us",
        desc: "Ready to start? Get in touch with us to discuss your project and how we can help you achieve your goals.",
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
    ref?: React.Ref<HTMLDivElement>;
};

const WorkflowCard = ({
    id = "01",
    title = "Title",
    desc = "Desc",
    ref,
}: WorkflowCardProps) => {
    return (
        <div
            ref={ref}
            className={`workflow-card relative container mx-auto grid w-full grid-cols-2 grid-rows-2 lg:grid-cols-3 xl:grid-cols-4 ${
                id === "contact"
                    ? "items-center justify-center bg-black"
                    : "bg-white p-8"
            } h-44 rounded-lg border border-zinc-100 shadow`}
        >
            {id === "contact" ? (
                <a
                    href="/contact"
                    className="relative inset-0 col-span-full row-span-2 text-center text-3xl font-semibold text-white"
                >
                    {title}
                </a>
            ) : (
                <>
                    <p className="text-2xl font-bold text-zinc-600">{id}</p>
                    <h3 className="mb-4 w-full text-left text-xl font-bold tracking-tight lg:col-span-2 xl:col-span-3 xl:max-w-lg">
                        {title}
                    </h3>
                    <p className="col-span-full mt-2 h-8 text-xs font-medium text-zinc-600 xl:max-w-md">
                        {desc}
                    </p>
                </>
            )}
        </div>
    );
};

export default Workflow;
