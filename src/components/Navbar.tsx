import React from "react";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="border-b border-gray-200 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center space-x-2 transition-opacity hover:opacity-80"
                    >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black">
                            <span className="text-lg font-bold text-white">
                                S
                            </span>
                        </div>
                        <span className="text-xl font-bold text-gray-900">
                            SteadFast
                        </span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden items-center space-x-8 md:flex">
                        <Link
                            href="/"
                            className="font-medium text-gray-900 transition-colors hover:text-gray-600"
                        >
                            Home
                        </Link>
                        <Link
                            href="/services"
                            className="font-medium text-gray-600 transition-colors hover:text-gray-900"
                        >
                            Services
                        </Link>
                        <Link
                            href="/our-work"
                            className="font-medium text-gray-600 transition-colors hover:text-gray-900"
                        >
                            Our Work
                        </Link>
                        <Link
                            href="/pricing"
                            className="font-medium text-gray-600 transition-colors hover:text-gray-900"
                        >
                            Pricing
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <Link
                        href="/contact"
                        className="rounded-lg bg-gradient-to-r from-green-300 to-green-400 px-6 py-2 font-semibold text-gray-900 shadow-sm transition-all duration-200 hover:from-green-400 hover:to-green-500 hover:shadow-md"
                    >
                        Contact
                    </Link>

                    {/* Mobile Menu Button */}
                    <button className="text-gray-900 hover:text-gray-600 md:hidden">
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
