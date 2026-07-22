import OurBestsellers from "@/components/OurBestsellers";
import PosterPopup from "@/components/PosterPopup";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import WhoWeServe from "@/components/sections/OurProducts";
import OurTeam from "@/components/sections/OurTeam";
import Testimonial from "@/components/sections/Testimonial";
import Workflow from "@/components/sections/Workflow";
import { Settings } from "lucide-react";
import Image from "next/image";
// import Workflow from "@/components/sections/Workflow";
// import WhatYouGet from "@/components/WhatYouGet";

export default function Home() {
    return (
        <>
            <Hero />
            {/* <WhoWeServe /> */}
            <OurBestsellers />

            <section className="h-screen max-w-none bg-gray-100 p-8">
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
                    <div className="group relative h-full w-full overflow-hidden rounded-2xl bg-gray-500">
                        <Image
                            src="/assets/fashion-store.avif"
                            alt="Product 1"
                            width={400}
                            height={400}
                            className="size-full object-cover transition duration-500 group-hover:scale-105"
                        />

                        {/* Black Overlay */}
                        <div className="absolute inset-0 bg-black/50 transition group-hover:bg-black/60" />

                        {/* Text */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                            <p className="mb-2 font-mono text-xs tracking-[0.3em] text-emerald-300 uppercase">
                                Shopify
                            </p>

                            <h3 className="text-2xl font-bold">
                                Fashion Store Development
                            </h3>

                            <p className="mt-2 text-sm text-white/70">
                                Premium ecommerce experience built for modern
                                D2C brands.
                            </p>
                        </div>
                    </div>
                    <div className="flex h-full w-full flex-col rounded-2xl bg-[#F99967] p-6">
                        <div className="flex h-12 w-48 items-center justify-center rounded-full bg-white px-2">
                            <div className="size-8 rounded-full bg-emerald-100">
                                .
                            </div>
                            <div className="grow"></div>
                        </div>
                        <div className="flex grow flex-col justify-end text-white">
                            <h3 className="text-2xl">Excellent Experience</h3>
                            <p className="mt-2 text-sm">
                                SteadFast transformed our online presence with a
                                modern, high-performing website that perfectly
                                represents our brand. The team understood our
                                vision, delivered a smooth experience, and paid
                                attention to every detail.
                            </p>
                            <div className="mt-6 flex justify-between">
                                <button className="bg-white px-4 py-2 font-medium text-black transition duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-gray-50 p-6">
                        <div>
                            <p className="text-sm font-light uppercase">
                                Some Heading
                            </p>
                            <h3 className="text-lg font-semibold">
                                Lorem ipsum, dolor
                            </h3>
                        </div>
                        <div className="mt-4 flex flex-col gap-2">
                            <div className="flex flex-row items-center gap-2 rounded-lg border border-gray-200 p-2">
                                <div className="rounded-lg bg-green-900 p-4">
                                    <Settings className="size-4 text-gray-100" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-700">
                                        Lorem ipsum
                                    </h4>
                                    <p className="text-xs text-gray-500">
                                        Lorem ipsum dolor sit amet
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center gap-2 rounded-lg border border-gray-200 p-2">
                                <div className="rounded-lg bg-green-900 p-4">
                                    <Settings className="size-4 text-gray-100" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-700">
                                        Lorem ipsum
                                    </h4>
                                    <p className="text-xs text-gray-500">
                                        Lorem ipsum dolor sit amet
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center gap-2 rounded-lg border border-gray-200 p-2">
                                <div className="rounded-lg bg-green-900 p-4">
                                    <Settings className="size-4 text-gray-100" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-700">
                                        Lorem ipsum
                                    </h4>
                                    <p className="text-xs text-gray-500">
                                        Lorem ipsum dolor sit amet
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <WhatYouGet /> */}
            <Workflow />
            <Testimonial />
            <OurTeam />
            <FAQ />
            <div className="flex items-center justify-center p-12">
                <div className="group relative overflow-hidden">
                    <Image
                        src="/assets/full-shopping.jpg"
                        alt="Full Shopping"
                        width={1920}
                        height={1080}
                        className="h-full w-full object-cover transition duration-500 sm:h-[90vh]"
                    />

                    {/* Black Overlay */}
                    <div className="absolute inset-0 bg-black/70" />

                    {/* Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
                        <h2 className="text-xl sm:text-2xl max-w-xl md:text-3xl font-bold">
                            Want to take your D2C brand to the next
                            level?
                        </h2>

                        <p className="text-xs sm:text-base mt-3 max-w-lg text-white/70">
                            You build the brand, we&apos;ll help you from
                            design, setup, domains and hosting to make your
                            brand a success.
                        </p>
                        <div className="mt-4">
                            <button className="bg-white px-4 py-2 font-medium text-black transition duration-300">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <PosterPopup /> */}
        </>
    );
}
