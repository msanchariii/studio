import { bestsellers } from "@/data/bestsellters";
import { ChevronRight } from "lucide-react";

const OurBestsellers = () => {
    return (
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="mb-4">
                <div className="mb-5 flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-emerald-400">
                    <span className="text-black/30">[</span>
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                    bestsellers
                    <span className="text-black/30">]</span>
                </div>
                <h2 className="mb-4 max-w-2xl text-3xl leading-tight font-bold tracking-tight text-gray-900 md:text-4xl">
                    Get to know our{" "}
                    <span className="text-emerald-400">bestsellers.</span>
                </h2>
                <p className="max-w-md border-l-2 border-black/10 pl-4 font-mono text-[13px] leading-relaxed text-gray-700">
                    bestsellers that will boost your business growth.
                </p>
            </div>
            {/* Best Sellers Grid */}

            <div className="border-y border-gray-200">
                {bestsellers.map((product) => (
                    <div
                        key={product.id}
                        className="group -mx-4 flex cursor-pointer items-center justify-between gap-6 border-y border-gray-200 px-4 py-6 transition-colors duration-200 hover:bg-emerald-50"
                    >
                        <div className="flex gap-4">
                            <div className="size-32 shrink-0 overflow-hidden rounded-3xl bg-gray-400">
                                <div className="size-full transition-transform duration-300 ease-out group-hover:scale-105" />
                            </div>

                            <div>
                                <h3 className="text-lg mb-2 font-semibold text-gray-900 transition-colors duration-200 group-hover:text-gray-950">
                                    {product.name}
                                </h3>

                                <p className="text-gray-700 pr-4 xl:pr-6 2xl:pr-8 ">
                                    {product.description}
                                </p>
                            </div>
                        </div>

                        <div className="flex size-9 shrink-0 items-center justify-center rounded-full transition-all duration-200 group-hover:bg-gray-900 group-hover:shadow-sm">
                            <ChevronRight className="size-5 shrink-0 text-gray-500 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-white" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurBestsellers;
