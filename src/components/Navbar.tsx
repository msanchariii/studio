"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, X, Menu } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/our-work" },
    { name: "Pricing", href: "/pricing" },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathName = usePathname();
    const pillRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLElement>(null);
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    const movePillTo = (el: HTMLAnchorElement | null, duration = 0.25) => {
        if (!el || !pillRef.current || !navRef.current) return;
        const navRect = navRef.current.getBoundingClientRect();
        const linkRect = el.getBoundingClientRect();
        gsap.to(pillRef.current, {
            x: linkRect.left - navRect.left,
            width: linkRect.width,
            duration,
            ease: "power3.out",
        });
    };

    // Position pill on active link on mount and route change
    useEffect(() => {
        const activeIndex = navigation.findIndex(
            (item) => item.href === pathName,
        );
        if (activeIndex !== -1) {
            // Use a tiny delay to let layout settle
            const raf = requestAnimationFrame(() =>
                movePillTo(linkRefs.current[activeIndex], 0),
            );
            return () => cancelAnimationFrame(raf);
        }
    }, [pathName]);

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
                    <nav
                        ref={navRef}
                        className="relative hidden items-center rounded-full bg-gray-100/60 px-2 py-1.5 backdrop-blur-sm md:flex"
                    >
                        {/* Sliding background pill */}
                        <div
                            ref={pillRef}
                            className="absolute top-1.5 left-0 h-[calc(100%-12px)] rounded-full bg-white shadow-sm"
                            style={{ width: 0 }}
                        />
                        {navigation.map((item, i) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                ref={(el) => {
                                    linkRefs.current[i] = el;
                                }}
                                onMouseEnter={() =>
                                    movePillTo(linkRefs.current[i])
                                }
                                onMouseLeave={() => {
                                    const activeIndex = navigation.findIndex(
                                        (n) => n.href === pathName,
                                    );
                                    movePillTo(linkRefs.current[activeIndex]);
                                }}
                                className={`relative z-10 rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 ${
                                    item.href === pathName
                                        ? "text-gray-900"
                                        : "text-gray-600 hover:text-gray-900"
                                }`}
                            >
                                {item.name}
                            </Link>
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
