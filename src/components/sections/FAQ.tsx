"use client";

import { useState } from "react";

const faqCategories = [
  {
    category: "General",
    faqs: [
      {
        question: "What's your typical delivery timeline?",
        answer:
          "We usually deliver the first version within 25–45 days. Final delivery depends on the scope, but most websites are completed within 2–6 weeks.",
      },
      {
        question: "How do we stay in touch during the project?",
        answer:
          "We use WhatsApp, Email, or Notion depending on your preference. You'll always know what stage we're in.",
      },
    ],
  },
  {
    category: "Design",
    faqs: [
      {
        question: "What if I'm not happy with the design?",
        answer:
          "We'll iterate until you're happy. Your feedback drives every design decision.",
      },
    ],
  },
  {
    category: "Development",
    faqs: [
      {
        question: "What tech stack do you use?",
        answer:
          "Next.js, React, Tailwind CSS, Shopify and other modern technologies depending on the project.",
      },
    ],
  },
  {
    category: "Support",
    faqs: [
      {
        question: "What if I need updates after the site is live?",
        answer:
          "You'll receive documentation and videos for basic edits. We also offer maintenance plans.",
      },
    ],
  },
];

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const currentFaqs = faqCategories[selectedCategory].faqs;

  return (
    <section className="relative my-12 bg-vintage-grape px-4 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[260px_1fr]">

        {/* Left */}
        <div className="md:sticky md:top-24 h-fit">
          <div className="space-y-2">
            {faqCategories.map((item, index) => (
              <button
                key={item.category}
                onClick={() => {
                  setSelectedCategory(index);
                  setOpenFaq(null);
                }}
                className={`w-full rounded-lg px-5 py-3 text-left transition ${
                  selectedCategory === index
                    ? "bg-white text-vintage-grape font-semibold"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.category}
              </button>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="space-y-4">
          {currentFaqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`overflow-hidden rounded-lg border-l-4 bg-white shadow transition ${
                openFaq === index
                  ? "border-brand"
                  : "border-transparent"
              }`}
            >
              <button
                onClick={() =>
                  setOpenFaq(openFaq === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-charcoal">
                  {faq.question}
                </span>

                <svg
                  className={`h-5 w-5 transition-transform ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === index ? "max-h-60" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-charcoal/70">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}