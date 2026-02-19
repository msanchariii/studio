"use client";
import { sectionDescriptions } from "@/data/globals";
import Calendly from "../Calendly";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="border-cambridge-blue/20 bg-beige/20 relative m-0 flex min-h-screen flex-col overflow-hidden bg-[url(/bg.svg)] bg-contain px-4 py-32 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="mb-4 text-6xl font-medium">SteadFast Studio</h1>
                <p className="mx-auto mb-8 max-w-2xl">
                    {sectionDescriptions.hero}
                </p>
                <div className="mb-4 flex flex-col justify-center gap-4 sm:flex-row">
                    <Calendly />
                    <Link
                        href="/contact"
                        className="flex items-center justify-center rounded-full border-2 border-black bg-transparent px-4 py-2 text-black transition-all duration-200 hover:bg-black hover:text-white"
                    >
                        Contact
                    </Link>
                </div>
            </div>

            <Image
                src="/sample.png"
                alt="hero image"
                height={700}
                width={700}
                className="mx-auto w-full max-w-3xl rounded-xl bg-white"
            />
        </div>
    );
}
