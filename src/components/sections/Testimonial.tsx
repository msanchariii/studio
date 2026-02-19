"use client";
import React from "react";
import { testimonialData } from "@/data/testimonial";

const Testimonial: React.FC = () => {
    const colors = ["teal", "indigo", "coral", "lavender"];
    const colorClasses = {
        teal: "border-teal",
        indigo: "border-indigo",
        coral: "border-coral",
        lavender: "border-lavender",
    };

    return (
        <section className="bg-white py-32">
            <div className="mx-auto max-w-7xl px-4">
                {/* Header Section */}
                <div className="mb-16">
                    <div className="mb-6 flex items-center gap-3">
                        <div className="bg-brand h-0.5 w-10"></div>
                        <p className="text-brand font-mono text-xs tracking-[0.3em] uppercase">
                            Testimonials
                        </p>
                    </div>
                    <h2 className="text-charcoal mb-4 text-4xl leading-tight font-bold md:text-5xl">
                        What Our Clients Say
                    </h2>
                    <p className="text-charcoal/70 max-w-2xl text-sm leading-relaxed">
                        Real feedback from businesses we&apos;ve helped grow
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid gap-6 md:grid-cols-2">
                    {testimonialData.map((testimonial, index) => {
                        const colorKey = colors[
                            index % colors.length
                        ] as keyof typeof colorClasses;
                        const borderClass = colorClasses[colorKey];

                        return (
                            <article
                                key={`${testimonial.name}-${index}`}
                                className={`flex flex-col border-t-4 border-l-4 ${borderClass} bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg`}
                            >
                                <div className="mb-4 grow">
                                    <p className="text-charcoal/80 mb-4 text-sm leading-relaxed">
                                        &quot;{testimonial.testimonial}&quot;
                                    </p>
                                </div>
                                <div className="flex items-start justify-between border-t border-zinc-200 pt-4">
                                    <div>
                                        <p className="text-charcoal font-semibold">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-charcoal/60 text-xs">
                                            {testimonial.position}
                                        </p>
                                        <p className="text-charcoal/70 text-xs font-medium">
                                            {testimonial.company}
                                        </p>
                                    </div>
                                    {testimonial.via && (
                                        <div className="text-right">
                                            <p className="text-charcoal/50 text-xs">
                                                via
                                            </p>
                                            <p className="text-charcoal/70 text-xs font-medium">
                                                {testimonial.via}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
