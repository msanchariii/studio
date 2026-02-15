import React from "react";

const SectionHeadlines = ({
    sectionName = "Section Name",
    children,
}: {
    sectionName?: string;
    children?: React.ReactNode;
}) => {
    return (
        <>
            <h2 className="section-headline mb-6 font-semibold">
                [{sectionName}]
            </h2>
            <h1 className="mb-2 text-4xl leading-12 font-bold tracking-tight text-wrap md:text-5xl xl:max-w-4xl xl:leading-16">
                {children}
            </h1>
        </>
    );
};

export const WorkflowHeadline = () => {
    return (
        <SectionHeadlines sectionName="Workflow">
            No guesswork. Just a clear, proven{" "}
            <span className="text-cambridge">process</span> that works.
        </SectionHeadlines>
    );
};

export const TestimonialsHeadline = () => {
    return (
        <SectionHeadlines sectionName="Testimonials">
            Our clients talk results — here's what they're saying.
        </SectionHeadlines>
    );
};

export const FaqHeadline = () => {
    return (
        <SectionHeadlines sectionName="FAQ">
            Answers to real questions we get asked — no jargon.
        </SectionHeadlines>
    );
};

export default SectionHeadlines;
