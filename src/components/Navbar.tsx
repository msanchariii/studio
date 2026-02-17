import Link from "next/link";
import { Navlink } from "./navbar/Navlink";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/our-work" },
    { name: "Pricing", href: "/pricing" },
];

export default function Navbar() {
    return (
        <header className="fixed top-4 right-0 left-0 z-50 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="flex h-16 items-center justify-between rounded-2xl border border-gray-200/20 bg-white/60 px-6 shadow-lg shadow-gray-900/5 backdrop-blur-md transition-all duration-300 hover:shadow-xl">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center space-x-2 transition-all duration-200 hover:scale-105"
                    >
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-gray-800 to-gray-950 shadow-md">
                            <span className="text-lg font-bold text-white">
                                S
                            </span>
                        </div>
                        <span className="text-xl font-bold text-gray-900">
                            SteadFast
                        </span>
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
                        className="rounded-xl bg-gradient-to-r from-green-400 to-green-500 px-6 py-2.5 font-semibold text-white shadow-md shadow-green-500/25 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-green-500/40"
                    >
                        Contact
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
