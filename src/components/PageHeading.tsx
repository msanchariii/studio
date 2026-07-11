import React from "react";

const PageHeading = ({
    title,
    subtitle,
    description,
}: {
    title: string;
    subtitle: string;
    description: string;
}) => {
    return (
        <div className="mb-20 mt-8 border-b border-zinc-200 pb-12 text-center">
            <p className="text-brand mb-4 font-mono font-medium text-xs tracking-[0.3em] uppercase">
                {title}
            </p>

            <h2 className="text-charcoal mb-4 text-3xl font-bold sm:text-4xl">
                {subtitle}
            </h2>

            <p className="text-charcoal/70 mx-auto max-w-2xl text-base leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default PageHeading;
