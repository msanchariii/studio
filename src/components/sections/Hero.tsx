"use client";
import { sectionDescriptions } from "@/data/globals";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

import Calendly from "../Calendly";

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
        <section className="border-cambridge-blue/20 bg-beige/20 relative flex min-h-screen flex-col overflow-hidden bg-[url(/bg.svg)] bg-contain">
            <div className="text-center">
                <h1 className="mb-4 text-7xl font-medium">
                    SteadFast Web Studio
                </h1>
                <p className="mx-auto mb-8 max-w-3xl">
                    {sectionDescriptions.hero}
                </p>
                <div className="mb-8 flex justify-center gap-4">
                    <Calendly />
                    <button className="rounded-full border-2 border-black/50 px-4">
                        Contact
                    </button>
                </div>
            </div>
            <div className="mx-auto aspect-[16/9] w-full max-w-3xl rounded-xl bg-white">
                hihi
            </div>

            <div className="relative z-20 mx-auto flex h-full w-full flex-col lg:flex-row">
                {/* <h1 className="text-7xl">
                        SteadFast
                        <br />
                        <span className="text-5xl tracking-[10px]">
                        Web Studio
                        </span>
                        </h1> */}
                {/* <p className="max-w-lg">{sectionDescriptions.hero}</p> */}
                {/* <div className="order-1 flex basis-1/2 flex-col items-center justify-between gap-4 lg:order-none lg:items-start">
                    
                    <div className="stat-list flex flex-wrap items-center gap-4">
                        <SiTailwindcss size={24} className="" />
                        <FaReact size={24} className="" />
                        <SiNextdotjs size={24} />
                        <FaNodeJs size={24} className="" />
                        <SiExpress size={24} className="" />
                        <SiFastapi size={24} className="" />
                        <SiStrapi size={24} className="" />
                        <SiSanity size={24} className="" />
                        <DiMongodb size={24} className="" />
                        <SiPostgresql size={24} className="" />
                    </div>
                </div>
                <div className="basis-1/2">
                    <Image
                        src={"/hero.png"}
                        alt="hero image"
                        height={700}
                        width={700}
                        className="mx-auto my-4"
                    />
                </div> */}
            </div>
            {/* <div className="bg-cambridge-blue absolute -top-[100%] z-10 size-[150%] rounded-full lg:-top-1/4 lg:-right-1/4 lg:size-[900px]"></div> */}
        </section>
    );
}
