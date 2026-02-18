"use client";

import Link from "next/link";
import { Navlink } from "./navbar/Navlink";
import Image from "next/image";
import { ArrowRight, X, Menu } from "lucide-react";
import { useState } from "react";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/our-work" },
    { name: "Pricing", href: "/pricing" },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-4 right-0 left-0 z-50 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
                <div className="flex h-18 items-center justify-between rounded-2xl border border-gray-200/20 bg-white/60 px-6 shadow-lg shadow-gray-900/5 backdrop-blur-md transition-all duration-300 hover:shadow-xl">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src={"/assets/global/logo-full.svg"}
                            alt="SteadFast full logo"
                            height={128}
                            width={128}
                            className="flex items-center justify-center"
                        ></Image>
                        <span className="sr-only">SteadFast</span>
                    </Link>

                    {/* Navigation Links */}
                    <nav className="hidden items-center space-x-2 rounded-full bg-gray-100/60 px-2 py-1.5 backdrop-blur-sm md:flex">
                        {navigation.map((item) => (
                            <Navlink key={item.name} item={item} />
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <Link
                        href="/contact"
                        className="group hidden items-center rounded-full bg-[#306C4D] px-6 py-2.5 font-semibold text-white shadow-md shadow-[#306C4D]/40 transition-all duration-200 hover:scale-105 md:flex"
                    >
                        Contact{" "}
                        <ArrowRight className="ml-2 h-5 w-5 rounded-full bg-white stroke-3 p-0.5 text-[#306C4D] transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="rounded-lg p-2 text-gray-900 transition-colors hover:bg-gray-100 md:hidden"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu Panel */}
                {mobileMenuOpen && (
                    <div className="mt-2 overflow-hidden rounded-2xl border border-gray-200/20 bg-white/95 shadow-lg backdrop-blur-md md:hidden">
                        <nav className="flex flex-col p-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="rounded-lg px-4 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-2 flex items-center justify-center rounded-full bg-[#306C4D] px-6 py-3 font-semibold text-white shadow-md shadow-[#306C4D]/40 transition-all duration-200 hover:scale-105"
                            >
                                Contact
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
