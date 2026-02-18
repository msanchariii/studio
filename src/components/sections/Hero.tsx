"use client";
import { sectionDescriptions } from "@/data/globals";
import Calendly from "../Calendly";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="border-cambridge-blue/20 bg-beige/20 relative m-0 flex min-h-screen flex-col overflow-hidden bg-[url(/bg.svg)] bg-contain p-12 lg:p-16 lg:py-32">
            <div className="text-center">
                <h1 className="mb-4 text-6xl font-medium">SteadFast Studio</h1>
                <p className="mx-auto mb-8 max-w-2xl">
                    {sectionDescriptions.hero}
                </p>
                <div className="mb-4 flex justify-center gap-4">
                    <Calendly />
                    <button className="rounded-full border-2 border-black px-4 transition-all duration-150 hover:bg-black/80 hover:text-white">
                        Contact
                    </button>
                </div>
                {/* <button className="mb-8 cursor-pointer underline decoration-dotted underline-offset-4">
                    See Our Work
                </button> */}
            </div>

            <Image
                src={"/sample.png"}
                alt="hero image"
                height={700}
                width={700}
                className="mx-auto w-full max-w-3xl rounded-xl bg-white"
            />

            <div className="relative z-20 mx-auto flex h-full w-full flex-col lg:flex-row" />
        </div>
    );
}
