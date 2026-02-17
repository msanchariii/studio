"use client";
import { sectionDescriptions } from "@/data/globals";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

import Calendly from "../Calendly";
import Image from "next/image";

export default function Hero() {
    const titleRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        const splitTitle = SplitText.create(titleRef.current, {
            type: "chars",
        });
        const splitDescription = SplitText.create("#hero-description", {
            type: "lines",
        });
        const tl = gsap.timeline();
        tl.from(splitTitle.chars, {
            duration: 0.7,
            delay: 0.2,
            opacity: 0,
            y: 50,
            ease: "power2.out",
            stagger: {
                amount: 0.2,
                from: "start",
            },
        });
        tl.from(
            ".stat-list",
            {
                duration: 0.7,
                opacity: 0,
                y: 50,
                ease: "power2.out",
                stagger: {
                    amount: 0.2,
                    from: "start",
                },
            },
            "<0.2",
        );
        tl.from(
            splitDescription.lines,
            {
                delay: 0.2,
                duration: 1,
                opacity: 0,
                ease: "power2.out",
                stagger: {
                    amount: 0.6,
                    from: "start",
                },
            },
            "<0.2",
        );
    }, []);

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
