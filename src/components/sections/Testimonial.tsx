"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { testimonialData, TestimonialItem } from "@/data/testimonial";

const TestimonialsHeadline = () => (
    <div className="text-center">
        <h2 className="mb-4 text-4xl font-bold text-gray-800">
            What Our <span className="text-cambridge-darker">Clients</span> Say
        </h2>
        <p className="mx-auto max-w-2xl text-gray-600">
            Don&apos;t just take our word for it – hear from some of our
            satisfied clients
        </p>
    </div>
);

const TestimonialCard = ({ t }: { t: TestimonialItem }) => (
    <div className="testimonial-card before:border-b-cambridge relative mr-10 w-full max-w-xl shrink-0 rounded-tr-2xl rounded-b-2xl border-2 border-gray-300 bg-white px-6 py-6 text-gray-800 shadow-lg transition-shadow duration-300 before:absolute before:top-[-20px] before:left-0 before:border-r-[20px] before:border-b-[20px] before:border-r-transparent before:content-[''] hover:shadow-xl">
        <div className="flex flex-col gap-4">
            <div className="text-cambridge-darkest text-md font-semibold">
                {t.name}, {t.position}
            </div>
            <p className="font-bold text-gray-700 italic">{t.company}</p>
            <p className="text-sm leading-relaxed text-gray-600 italic">
                {t.testimonial}
            </p>
            {t.via && (
                <p className="text-cambridge-darkest/90 text-xs font-medium">
                    via <span className="font-semibold">{t.via}</span>
                </p>
            )}
        </div>
    </div>
);

const Testimonial: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const tlRef = useRef<gsap.core.Tween | null>(null);

    useGSAP(() => {
        const container = containerRef.current;
        const track = trackRef.current;
        if (!container || !track) return;

        // Respect reduced motion
        const prefersReduced =
            typeof window !== "undefined" &&
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const start = () => {
            // Kill any previous tween
            tlRef.current?.kill();

            // Measure width of one full set (first N children)
            const children = Array.from(track.children) as HTMLElement[];
            const half = children.length / 2;

            const setWidth = children.slice(0, half).reduce((sum, el) => {
                const style = window.getComputedStyle(el);
                const mr = parseFloat(style.marginRight || "0") || 0;
                return sum + el.offsetWidth + mr;
            }, 0);

            if (setWidth <= 0) return;

            if (prefersReduced) {
                // If user prefers reduced motion, don't animate—just show the first row
                gsap.set(track, { x: 0 });
                return;
            }

            // Constant speed (px/sec)
            const SPEED = 80;
            const duration = setWidth / SPEED;

            // Animate track from 0 to -setWidth and loop seamlessly (because content is duplicated)
            tlRef.current = gsap.fromTo(
                track,
                { x: 0 },
                {
                    x: -setWidth,
                    duration,
                    ease: "none",
                    repeat: -1,
                },
            );
        };

        start();

        // Pause on hover
        const onEnter = () => tlRef.current?.pause();
        const onLeave = () => tlRef.current?.play();
        container.addEventListener("mouseenter", onEnter);
        container.addEventListener("mouseleave", onLeave);

        // Recalculate on resize (debounced)
        let rAF: number | null = null;
        const onResize = () => {
            if (rAF) cancelAnimationFrame(rAF);
            rAF = requestAnimationFrame(start);
        };
        window.addEventListener("resize", onResize);

        return () => {
            container.removeEventListener("mouseenter", onEnter);
            container.removeEventListener("mouseleave", onLeave);
            window.removeEventListener("resize", onResize);
            tlRef.current?.kill();
        };
    }, []);

    // Duplicate data to create a seamless loop
    const loopData = [...testimonialData, ...testimonialData];

    return (
        <section className="mx-auto max-w-5xl bg-white py-16">
            <div className="container mx-auto px-6">
                <TestimonialsHeadline />

                <div
                    ref={containerRef}
                    className="relative mt-16 flex h-auto cursor-pointer items-center overflow-hidden"
                    style={{
                        maskImage:
                            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                        WebkitMaskImage:
                            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    }}
                >
                    <div
                        ref={trackRef}
                        className="flex items-stretch py-6 will-change-transform"
                        // No CSS gap; we use margin-right on items so measurement includes spacing.
                    >
                        {loopData.map((t, i) => (
                            <TestimonialCard key={`${t.name}-${i}`} t={t} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
