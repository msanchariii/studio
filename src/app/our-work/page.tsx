import WorkCard from "@/components/WorkCard";
import { sectionDescriptions } from "@/data/globals";
import { workData } from "@/data/works";

import React from "react";

export const metadata = {
    title: "Our Work",
    description:
        "Explore our portfolio of fast, scalable websites and digital products crafted for startups, creators, and small teams.",
};

const WorkPage = () => {
    return (
        <section className="relative min-h-screen py-24">
            <div className="relative">
                {/* Header Section */}
                <div className="mb-20 border-b border-zinc-200 pt-8 pb-12">
                    <div className="mb-6 flex items-center gap-3">
                        <div className="bg-brand h-0.5 w-10"></div>
                        <p className="text-brand font-mono text-xs tracking-[0.3em] uppercase">
                            Our Work
                        </p>
                    </div>

                    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                        <h1 className="text-charcoal text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
                            Selected Projects
                        </h1>
                        <p className="text-charcoal/70 max-w-md text-sm leading-relaxed">
                            {sectionDescriptions.ourWork}
                        </p>
                    </div>
                </div>

                {/* Work Cards Grid */}
                <div className="pb-16">
                    {workData.map((work, index) => (
                        <React.Fragment key={work.id}>
                            <WorkCard work={work} index={index} />
                            {index < workData.length - 1 && (
                                <div className="my-16 border-t border-zinc-200"></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-20 border-t border-zinc-200 pt-16">
                    <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h2 className="text-charcoal mb-3 text-3xl font-bold">
                                Ready to start your project?
                            </h2>
                            <p className="text-charcoal/70 max-w-xl text-sm leading-relaxed">
                                Let&apos;s discuss how we can help bring your
                                vision to life.
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

export default WorkPage;
