import { bestsellers } from "@/data/bestsellters";
import { Check, ChevronRight } from "lucide-react";

const featuredProduct = {
    id: 0,
    name: "Ecommerce Starter Kit",
    description:
        "A complete solution for your online store, including design, setup, and hosting.",
    imageSrc: "/path/to/featured-image.jpg",
    imageAlt: "Image of Featured Product",
    price: {
        USD: 200,
        INR: 14999,
    },
    included: [
        "Custom Design",
        "Domain Setup",
        "Hosting",
        "Payment Gateway Integration",
        "Basic SEO Optimization",
    ],
};

const OurBestsellers = () => {
    return (
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            
            {/* Best Sellers Grid */}
            {featuredProduct && (
                <div className="mb-8 bg-[#9DF6EF] p-6 rounded-2xl text-white">
                    <h3 className="text-xl font-bold text-gray-900">
                        {featuredProduct.name}
                    </h3>
                    <p className="text-gray-700">
                        {featuredProduct.description}
                    </p>
                    <ul className="flex flex-col gap-2">
                        {featuredProduct.included.map((item, index) => (
                            <li key={index} className="flex gap-2 text-gray-600 font-medium">
                                <Check className="bg-black text-white rounded-full p-1 font-semibold" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <div></div>

            <div className="grid grid-cols-2 gap-4">
                {bestsellers.map((product) => (
                    <div
                        key={product.id}
                        className="group flex cursor-pointer items-center justify-between gap-6 rounded-2xl bg-gray-50 px-4 py-6 transition-colors duration-200"
                    >
                        <div className="flex gap-4">
                            <div className="size-32 shrink-0 overflow-hidden rounded-3xl bg-gray-400">
                                <div className="size-full transition-transform duration-300 ease-out group-hover:scale-105" />
                            </div>

                            <div>
                                <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors duration-200 group-hover:text-gray-950">
                                    {product.name}
                                </h3>

                                <p className="pr-4 text-gray-700 xl:pr-6 2xl:pr-8">
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
