"use client";

import { pricingPlans } from "@/data/pricing";
import { Check } from "lucide-react";
import Link from "next/link";
import PointyPattern from "@/components/PointyPattern";

const Pricing = () => {
    return (
        <div className="min-h-screen py-24">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-20 border-b border-zinc-200 pb-12">
                    <div className="mb-6 flex items-center gap-3">
                        <div className="bg-brand h-0.5 w-10"></div>
                        <p className="text-brand font-mono text-xs tracking-[0.3em] uppercase">
                            Transparent Pricing
                        </p>
                    </div>
                    <h1 className="text-charcoal mb-6 text-5xl leading-tight font-bold sm:text-6xl md:text-7xl">
                        Clear & Honest Pricing
                    </h1>
                    <p className="text-charcoal/70 max-w-2xl text-sm leading-relaxed">
                        No hidden fees, no surprises. Choose the package that
                        fits your needs or contact us for a custom solution.
                    </p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {pricingPlans.map((plan, index) => (
                        <PricingCard key={plan.id} plan={plan} index={index} />
                    ))}
                </div>

                {/* Additional Info Section */}
                <div className="mt-20 border-t border-zinc-200 pt-16">
                    <div className="grid gap-12 md:grid-cols-2">
                        <div>
                            <h3 className="text-charcoal mb-4 text-2xl font-bold">
                                What&apos;s Included in Every Package
                            </h3>
                            <ul className="space-y-3">
                                <li className="text-charcoal/70 flex items-start gap-3 text-sm">
                                    <Check className="text-brand mt-0.5 h-5 w-5 shrink-0" />
                                    <span>Source code ownership</span>
                                </li>
                                <li className="text-charcoal/70 flex items-start gap-3 text-sm">
                                    <Check className="text-brand mt-0.5 h-5 w-5 shrink-0" />
                                    <span>Post-launch support period</span>
                                </li>
                                <li className="text-charcoal/70 flex items-start gap-3 text-sm">
                                    <Check className="text-brand mt-0.5 h-5 w-5 shrink-0" />
                                    <span>
                                        Training on how to use your site
                                    </span>
                                </li>
                                <li className="text-charcoal/70 flex items-start gap-3 text-sm">
                                    <Check className="text-brand mt-0.5 h-5 w-5 shrink-0" />
                                    <span>Security best practices</span>
                                </li>
                                <li className="text-charcoal/70 flex items-start gap-3 text-sm">
                                    <Check className="text-brand mt-0.5 h-5 w-5 shrink-0" />
                                    <span>Google Analytics setup</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-charcoal mb-4 text-2xl font-bold">
                                Have Questions?
                            </h3>
                            <p className="text-charcoal/70 mb-6 text-sm leading-relaxed">
                                Not sure which package is right for you? Want to
                                add custom features? We&apos;re here to help you
                                find the perfect solution.
                            </p>
                            <Link
                                href="/contact"
                                className="border-brand text-brand hover:bg-brand inline-block border-2 px-6 py-3 font-semibold transition-all duration-300 hover:text-white"
                            >
                                Schedule a Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;

const PricingCard = ({
    plan,
    index,
}: {
    plan: {
        id: number;
        name: string;
        price: number | null;
        priceUnit?: string;
        description: string;
        features: string[];
        cta: string;
        ctaLink: string;
        popular: boolean;
        color: string;
    };
    index: number;
}) => {
    const colorSchemes = {
        teal: {
            accent: "border-teal",
            bg: "bg-teal",
            text: "text-teal",
            bgLight: "bg-teal/10",
            button: "border-2 border-teal text-teal hover:bg-teal hover:text-white",
        },
        indigo: {
            accent: "border-indigo",
            bg: "bg-indigo",
            text: "text-indigo",
            bgLight: "bg-indigo/10",
            button: "border-2 border-indigo text-indigo hover:bg-indigo hover:text-white",
        },
        coral: {
            accent: "border-coral",
            bg: "bg-coral",
            text: "text-coral",
            bgLight: "bg-coral/10",
            button: "border-2 border-coral text-coral hover:bg-coral hover:text-white",
        },
        lavender: {
            accent: "border-lavender",
            bg: "bg-lavender",
            text: "text-lavender",
            bgLight: "bg-lavender/10",
            button: "border-2 border-lavender text-lavender hover:bg-lavender hover:text-white",
        },
        brand: {
            accent: "border-brand",
            bg: "bg-brand",
            text: "text-brand",
            bgLight: "bg-brand/10",
            button: "border-2 border-brand text-brand hover:bg-brand hover:text-white",
        },
    };

    const scheme = colorSchemes[plan.color as keyof typeof colorSchemes];

    return (
        <article className={`group relative flex flex-col`}>
            {plan.popular && (
                <div
                    className={`absolute -top-4 left-1/2 -translate-x-1/2 ${scheme.bg} px-4 py-1 text-xs font-semibold tracking-wider text-white uppercase`}
                >
                    Most Popular
                </div>
            )}

            <div
                className={`relative flex h-full flex-col overflow-hidden border-t-4 border-l-4 ${scheme.accent} bg-white p-6 shadow-md transition-all duration-300 ${plan.popular ? "shadow-lg" : ""}`}
            >
                {/* Dotted Background Pattern */}
                <div className="pointer-events-none absolute inset-0 opacity-5">
                    <PointyPattern />
                </div>

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col">
                    {/* Header */}
                    <div className="mb-6">
                        <div className="mb-4 flex items-start justify-between">
                            <h3 className="text-charcoal text-2xl font-bold">
                                {plan.name}
                            </h3>
                            <div
                                className={`font-mono text-sm font-bold ${scheme.text}`}
                            >
                                {String(index + 1).padStart(2, "0")}
                            </div>
                        </div>

                        <p className="text-charcoal/70 mb-6 text-sm leading-relaxed">
                            {plan.description}
                        </p>

                        {/* Price */}
                        <div className="mb-6">
                            {plan.price ? (
                                <div className="flex items-baseline gap-2">
                                    <span className="text-charcoal text-4xl font-bold">
                                        ₹{plan.price.toLocaleString()}
                                    </span>
                                    {plan.priceUnit && (
                                        <span className="text-charcoal/60 text-sm">
                                            /{plan.priceUnit}
                                        </span>
                                    )}
                                </div>
                            ) : (
                                <span className="text-charcoal text-4xl font-bold">
                                    Custom
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Features List */}
                    <ul className="mb-8 grow space-y-3">
                        {plan.features.map((feature, idx) => (
                            <li
                                key={idx}
                                className="text-charcoal/70 flex items-start gap-3 text-sm"
                            >
                                <Check
                                    className={`mt-0.5 h-5 w-5 shrink-0 ${scheme.text}`}
                                />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                        href={plan.ctaLink}
                        className={`block py-3 text-center font-semibold transition-all duration-300 ${scheme.button}`}
                    >
                        {plan.cta}
                    </Link>
                </div>
            </div>
        </article>
    );
};
