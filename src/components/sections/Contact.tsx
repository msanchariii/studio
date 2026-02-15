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
        <div className="m-4 flex min-h-screen max-w-7xl flex-col overflow-hidden rounded-2xl md:flex-row">
            {/* Left Side - Branding & Contact Info */}
            <div className="flex w-full flex-col justify-between bg-black p-8 text-white md:w-1/2 md:p-16">
                <div>
                    {/* Logo */}
                    <div className="mb-16 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500">
                        <svg
                            className="h-8 w-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M14.5 4.5c-1.5 0-2.7 1-3.2 2.4-.5-1.4-1.7-2.4-3.2-2.4-1.9 0-3.4 1.5-3.4 3.4 0 2.5 2.5 4.5 6.6 8.3 4.1-3.8 6.6-5.8 6.6-8.3 0-1.9-1.5-3.4-3.4-3.4z" />
                        </svg>
                    </div>

                    {/* Main Heading */}
                    <h1 className="mb-6 text-5xl leading-tight font-bold md:text-6xl">
                        Get In Touch
                    </h1>
                    <p className="mb-16 max-w-md text-lg text-gray-300 md:text-xl">
                        Have questions or ready to start your journey? We'd love
                        to hear from you.
                    </p>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="mb-2 text-sm font-semibold text-gray-400">
                                EMAIL
                            </h3>
                            <a
                                href="mailto:hello@steadfaststudio.in"
                                className="text-xl transition-colors hover:text-orange-500"
                            >
                                hello@steadfaststudio.in
                            </a>
                        </div>
                        <div>
                            <h3 className="mb-2 text-sm font-semibold text-gray-400">
                                PHONE
                            </h3>
                            <a
                                href="tel:+919239505770"
                                className="text-xl transition-colors hover:text-orange-500"
                            >
                                +91 9239505770
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-16">
                    <p className="text-sm text-gray-500">
                        © 2025 Steadfast. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="flex w-full items-center justify-center bg-gray-50 p-8 md:w-1/2 md:p-16">
                <div className="w-full max-w-md">
                    <div className="mb-8">
                        <h2 className="mb-2 text-3xl font-bold text-gray-900">
                            Send us a message
                        </h2>
                        <p className="text-gray-600">
                            Fill out the form below and we'll get back to you
                            soon
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-semibold text-gray-900"
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
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-orange-500"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-semibold text-gray-900"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="johndoe@gmail.com"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-orange-500"
                                required
                            />
                        </div>

                        {/* Phone Field */}
                        <div>
                            <label
                                htmlFor="phone"
                                className="mb-2 block text-sm font-semibold text-gray-900"
                            >
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+1 (123) 456-7890"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-orange-500"
                                required
                            />
                        </div>

                        {/* Description Field */}
                        <div>
                            <label
                                htmlFor="description"
                                className="mb-2 block text-sm font-semibold text-gray-900"
                            >
                                Message
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Tell us about your inquiry..."
                                rows={5}
                                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-orange-500"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full rounded-full bg-black py-4 text-lg font-semibold text-white transition-colors duration-200 hover:bg-gray-800"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
