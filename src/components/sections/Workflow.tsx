"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const steps = [
    {
        title: "Understand Your Vision",
        image: "/assets/fashion-store.avif",
        description:
            "We start by understanding your business goals, audience and expectations.",
    },
    {
        title: "Plan & Strategize",
        image: "/assets/fashion-store.avif",
        description:
            "We prepare the sitemap, user journey and development roadmap.",
    },
    {
        title: "Design & Develop",
        image: "/assets/fashion-store.avif",
        description: "Beautiful UI combined with clean, scalable development.",
    },
    {
        title: "Test & Refine",
        image: "/assets/fashion-store.avif",
        description: "Every feature is tested and refined before launch.",
    },
    {
        title: "Launch & Support",
        image: "/assets/fashion-store.avif",
        description: "Deployment, monitoring and ongoing support after launch.",
    },
];

const Workflow = () => {
    const [activeStep, setActiveStep] = useState(0);

    const next = () =>
        setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));

    const prev = () => setActiveStep((prev) => Math.max(prev - 1, 0));

    return (
        <section className="relative min-h-dvh p-4 sm:p-6 lg:p-8">
            <div className="grid gap-16 lg:grid-cols-[450px_1fr]">
                {/* LEFT */}
                <div>
                    <h2 className="mb-8 text-5xl font-semibold">
                        Our Workflow
                    </h2>
                    <div className="flex flex-col items-start">
                        {steps.map((step, index) => (
                            <div
                                key={step.title}
                                className="flex flex-col items-start"
                                style={{ marginLeft: `${index * 40}px` }}
                            >
                                <button
                                    onClick={() => setActiveStep(index)}
                                    className={`cursor-pointer text-left text-sm transition ${
                                        activeStep >= index 
                                            ? "font-medium text-[#0B6B57]"
                                            : "text-gray-500 hover:text-black"
                                    }`}
                                >
                                    {index + 1}. {step.title}
                                </button>

                                {index !== steps.length - 1 && (
                                    <svg
                                        width="110"
                                        height="52"
                                        viewBox="0 0 110 52"
                                        className="-mt-1 ml-10"
                                        fill="none"
                                    >
                                        <path
                                            d="M4 6
                                        C18 6,18 26,32 26
                                        C46 26,46 46,60 46
                                        C74 46,74 26,90 26"
                                            stroke={
                                                activeStep >=  index+1
                                                    ? "#0B6B57"
                                                    : "#D6D6D6"
                                            }
                                            strokeWidth="2"
                                            strokeDasharray="2 5"
                                            strokeLinecap="round"
                                        />

                                        <path
                                            d="M86 22L90 26L86 30"
                                            stroke={
                                                activeStep >= index + 1
                                                    ? "#0B6B57"
                                                    : "#D6D6D6"
                                            }
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 flex gap-4">
                        <button
                            onClick={prev}
                            disabled={activeStep === 0}
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>

                        <button
                            onClick={next}
                            disabled={activeStep === steps.length - 1}
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col justify-center">
                    <div className="relative aspect-3/4 w-full overflow-hidden rounded-2xl">
                        <Image
                            src={steps[activeStep].image}
                            alt={steps[activeStep].title}
                            fill
                            className="object-cover"
                        />

                        {/* Black Overlay */}
                        <div className="absolute inset-0 bg-black/50" />

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                            <h2 className="text-3xl font-bold">
                                {steps[activeStep].title}
                            </h2>

                            <p className="mt-3 max-w-md text-white/90">
                                {steps[activeStep].description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workflow;
