import Link from "next/link";
import { Navlink } from "./navbar/Navlink";
import Image from "next/image";
import { ArrowBigRight, ArrowRight } from "lucide-react";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/our-work" },
    { name: "Pricing", href: "/pricing" },
];

export default function Navbar() {
    return (
        <header className="fixed top-4 right-0 left-0 z-50 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
                <div className="flex h-18 items-center justify-between rounded-2xl border border-gray-200/20 bg-white/60 px-6 shadow-lg shadow-gray-900/5 backdrop-blur-md transition-all duration-300 hover:shadow-xl">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center space-x-2 transition-all duration-200 hover:scale-105"
                    >
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
                        className="flex items-center rounded-full bg-[#306C4D] px-6 py-2.5 font-semibold text-white shadow-md shadow-[#306C4D]/40 transition-all duration-200 hover:scale-105"
                    >
                        Contact{" "}
                        <ArrowRight className="ml-2 h-5 w-5 rounded-full bg-white stroke-3 p-0.5 text-[#306C4D]" />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button className="rounded-lg p-2 text-gray-900 transition-colors hover:bg-gray-100 md:hidden">
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
        </header>
    );
}
