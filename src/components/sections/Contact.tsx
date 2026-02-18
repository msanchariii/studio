"use client";
import React, { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        description: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your form submission logic here
    };

    return (
        <div className="min-h-screen py-32">
            <div className="mx-auto max-w-5xl px-4">
                {/* Header Section */}
                <div className="mb-16 border-b border-zinc-200 pb-12">
                    <div className="mb-6 flex items-center gap-3">
                        <div className="bg-brand h-0.5 w-10"></div>
                        <p className="text-brand font-mono text-xs tracking-[0.3em] uppercase">
                            Get In Touch
                        </p>
                    </div>
                    <h1 className="text-charcoal text-5xl leading-tight font-bold sm:text-6xl md:text-7xl">
                        Let&apos;s Work Together
                    </h1>
                </div>

                <div className="grid gap-16 lg:grid-cols-5 lg:gap-20">
                    {/* Contact Information - Left Side */}
                    <div className="lg:col-span-2">
                        <div className="space-y-12">
                            <div>
                                <p className="text-charcoal/70 mb-8 text-sm leading-relaxed">
                                    Have a project in mind? We&apos;d love to
                                    hear about it. Fill out the form or reach
                                    out directly.
                                </p>
                            </div>

                            {/* Contact Details */}
                            <div className="space-y-8">
                                <div className="border-brand border-l-2 pl-4">
                                    <h3 className="text-charcoal/50 mb-2 font-mono text-xs tracking-wider uppercase">
                                        Email
                                    </h3>
                                    <a
                                        href="mailto:hello@steadfaststudio.in"
                                        className="text-charcoal hover:text-brand text-lg font-medium transition-colors"
                                    >
                                        hello@steadfaststudio.in
                                    </a>
                                </div>

                                <div className="border-teal border-l-2 pl-4">
                                    <h3 className="text-charcoal/50 mb-2 font-mono text-xs tracking-wider uppercase">
                                        Phone
                                    </h3>
                                    <a
                                        href="tel:+919239505770"
                                        className="text-charcoal hover:text-teal text-lg font-medium transition-colors"
                                    >
                                        +91 9239505770
                                    </a>
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="border-t border-zinc-200 pt-8">
                                <h3 className="text-charcoal mb-4 text-sm font-semibold">
                                    Response Time
                                </h3>
                                <p className="text-charcoal/70 text-sm leading-relaxed">
                                    We typically respond within 24 hours on
                                    business days. For urgent inquiries, please
                                    call us directly.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form - Right Side */}
                    <div className="lg:col-span-3">
                        <div className="border-coral border-l-4 bg-white p-8 md:p-12">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Field */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="text-charcoal mb-2 block text-sm font-semibold"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="text-charcoal focus:border-brand w-full border-b-2 border-zinc-200 bg-transparent px-0 py-3 transition-colors outline-none"
                                        required
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="text-charcoal mb-2 block text-sm font-semibold"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="text-charcoal focus:border-brand w-full border-b-2 border-zinc-200 bg-transparent px-0 py-3 transition-colors outline-none"
                                        required
                                    />
                                </div>

                                {/* Phone Field */}
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="text-charcoal mb-2 block text-sm font-semibold"
                                    >
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 9876543210"
                                        className="text-charcoal focus:border-brand w-full border-b-2 border-zinc-200 bg-transparent px-0 py-3 transition-colors outline-none"
                                        required
                                    />
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label
                                        htmlFor="description"
                                        className="text-charcoal mb-2 block text-sm font-semibold"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project..."
                                        rows={6}
                                        className="text-charcoal focus:border-brand w-full resize-none border-b-2 border-zinc-200 bg-transparent px-0 py-3 transition-colors outline-none"
                                        required
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="border-coral bg-coral hover:text-coral/80 border-2 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-transparent"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
