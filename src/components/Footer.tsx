import { email, footerLinks, phone, socialLinks } from "@/data/globals";
import PointyPattern from "./PointyPattern";
import Image from "next/image";

const Footer = () => (
    <footer className="bg-french-blue relative min-h-[40dvh] overflow-hidden px-6 py-8 text-white md:mx-2 md:mb-1 xl:px-12 2xl:px-16">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
            <PointyPattern />
        </div>

        <div className="relative z-10">
            {/* Top Section - Logo and Links */}
            <div className="mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
                {/* Logo */}
                <div className="flex flex-col gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded bg-white/40 backdrop-blur-sm">
                        <Image
                            src={"/assets/global/logo.svg"}
                            alt="Logo"
                            className="h-12 w-12"
                            height={128}
                            width={128}
                        />
                    </div>
                    <p className="max-w-xs text-sm leading-relaxed text-white/80">
                        Building fast, scalable websites for businesses ready to
                        grow.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="grid grid-cols-2 gap-4 sm:flex sm:gap-8">
                    {footerLinks.map((link) => (
                        <div key={link.id + "footerLink"}>
                            <a
                                href={link.href}
                                className="text-sm font-medium text-white/90 transition-colors duration-200 hover:text-white"
                            >
                                {link.label}
                            </a>
                        </div>
                    ))}
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social) => (
                        <a
                            key={social.id}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20"
                            aria-label={social.platform}
                        >
                            <span className="text-sm font-semibold">
                                {social.platform.charAt(0)}
                            </span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Middle Section - Main Message */}
            <div className="mb-10 border-y border-white/20 py-8">
                <h2 className="leading-tight font-bold text-vintage-grape-100 text-3xl sm:text-4xl lg:text-5xl">
                    Your brand deserves better.
                    <br />
                    <span className="text-vanilla-custard-100">
                        Let&apos;s build it right.
                    </span>
                </h2>
            </div>

            {/* Bottom Section - Contact Info */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                {/* Contact Details */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <p className="mb-1 text-xs font-semibold tracking-wider text-white/60 uppercase">
                            Email
                        </p>
                        <a
                            href={`mailto:${email}`}
                            className="text-base font-medium text-white transition-colors hover:text-white/80"
                        >
                            {email}
                        </a>
                    </div>
                    <div>
                        <p className="mb-1 text-xs font-semibold tracking-wider text-white/60 uppercase">
                            Phone
                        </p>
                        <a
                            href={`tel:${phone}`}
                            className="text-base font-medium text-white transition-colors hover:text-white/80"
                        >
                            {phone}
                        </a>
                    </div>
                </div>

                {/* Legal Links */}
                <div className="flex flex-col gap-2 text-xs text-white/60 sm:flex-row sm:gap-4">
                    <span>© 2026 Steadfast. All rights reserved.</span>
                    <a
                        href="#"
                        className="transition-colors hover:text-white/80"
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="#"
                        className="transition-colors hover:text-white/80"
                    >
                        Terms of Service
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
