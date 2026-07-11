"use client";

import React from "react";
import { testimonialData } from "@/data/testimonial";
import Image from "next/image";

const Testimonial: React.FC = () => {
    return (
        <section
            className="relative mt-12 w-full max-w-none overflow-hidden py-14"
            id="testimonials"
        >
            <div className="mx-auto max-w-5xl px-4">
                {/* Header */}
                <div className="mb-8 text-center">
                    <div className="mb-3 flex items-center justify-center gap-3">
                        <div className="bg-brand h-0.5 w-7" />
                        <p className="text-green-200 font-mono text-[11px] tracking-[0.3em] uppercase">
                            Testimonials
                        </p>
                        <div className="bg-brand h-0.5 w-7" />
                    </div>

                    <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">
                        What Our Partners Say
                    </h2>

                    <p className="mx-auto max-w-md text-xs text-white/60 md:text-sm">
                        Real feedback from businesses we&apos;ve helped build
                        and grow.
                    </p>
                </div>

                {/* Testimonials */}
                <div className="grid gap-4 md:grid-cols-2">
                    {testimonialData.map((testimonial, index) => (
                        <article
                            key={`${testimonial.name}-${index}`}
                            className="flex flex-col rounded-xl border border-white/10 bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1"
                        >
                            <p className="mb-4 text-sm leading-relaxed text-zinc-700">
                                {testimonial.testimonial}
                            </p>

                            <div className="mt-auto flex items-center gap-3 border-t border-zinc-200 pt-3">
                                <Image
                                    src={testimonial.image || ""}
                                    alt={testimonial.name}
                                    width={36}
                                    height={36}
                                    className="h-9 w-9 rounded-full bg-gray-500 object-cover"
                                />

                                <div>
                                    <p className="text-xs font-semibold text-zinc-900">
                                        {testimonial.name}
                                    </p>

                                    <p className="text-[11px] text-zinc-500">
                                        {testimonial.position}
                                    </p>

                                    <p className="text-[11px] font-medium text-zinc-600">
                                        {testimonial.company}
                                    </p>
                                </div>

                                {testimonial.via && (
                                    <p className="ml-auto text-[11px] text-zinc-400">
                                        via {testimonial.via}
                                    </p>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
