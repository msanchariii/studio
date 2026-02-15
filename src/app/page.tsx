import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import OurProducts from "@/components/sections/OurProducts";
import Testimonial from "@/components/sections/Testimonial";
import Workflow from "@/components/sections/Workflow";

export default function Home() {
    return (
        <>
            <Hero />
            <OurProducts />
            <Workflow />
            <Testimonial />
            <FAQ />
        </>
    );
}
