"use client";
import { useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FAQ = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index: any) => {
        setOpenFaq(openFaq === index ? null : index);
    };
    useGSAP(() => {
        gsap.to("#faq-section", {
            scrollTrigger: {
                trigger: "#faq-section",
                start: "top bottom",
                end: "bottom center",
                scrub: 1,
                // markers: true,
            },
            y: -50,
            // duration: 0.5,
        });
    }, []);

    return (
        <section
            className="relative px-4 pt-12 pb-24 sm:px-6 lg:px-8"
            id="faq-section"
        >
            <div className="mx-auto max-w-3xl">
                <h3 className="text-charcoal mb-6 text-2xl font-bold">
                    Common Questions
                </h3>
                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`overflow-hidden border-l-4 bg-white transition-all duration-200 ${
                                openFaq === index
                                    ? "border-brand shadow-md"
                                    : "border-transparent shadow-md"
                            }`}
                            style={{ borderRadius: "0 8px 8px 0" }}
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-gray-50"
                            >
                                <span className="text-charcoal text-base font-semibold md:text-base">
                                    {faq.question}
                                </span>
                                <div
                                    className={`ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                                        openFaq === index
                                            ? "bg-brand rotate-180"
                                            : "bg-gray-200"
                                    }`}
                                >
                                    <svg
                                        className={`h-4 w-4 transition-colors ${
                                            openFaq === index
                                                ? "text-white"
                                                : "text-gray-600"
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-200 ${
                                    openFaq === index ? "max-h-96" : "max-h-0"
                                }`}
                            >
                                <div className="text-charcoal/70 px-6 pb-4 text-sm leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
const faqs = [
    {
        question: "What's your typical delivery timeline?",
        answer: "We usually deliver the first version within 5–7 days. Final delivery depends on the scope, but most websites are completed within 2 weeks, including feedback and edits.",
    },
    {
        question: "How do we stay in touch during the project?",
        answer: "We use async communication through Slack, WhatsApp, or email — whatever you're most comfortable with. This helps us stay focused on building your website while keeping you in the loop at all times.",
    },
    {
        question: "What if I'm not happy with the design?",
        answer: "We'll work closely with you and iterate till you're 100% satisfied. Your feedback is the heart of the process, and we're super flexible when it comes to changes and refinements.",
    },
    {
        question: "What tech stack do you use?",
        answer: "We mostly work with Next.js and Tailwind CSS — because they're fast, modern, and SEO-friendly. But we're open to other stacks too if your project calls for it!",
    },
    {
        question: "What if I need updates after the site is live?",
        answer: "You'll get a short video guide to help you make basic changes. For anything advanced, we offer paid support or monthly retainers — so you're never stuck with a broken or outdated site.",
    },
];
