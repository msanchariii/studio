import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import WhoWeServe from "@/components/sections/OurProducts";
import Testimonial from "@/components/sections/Testimonial";
import Workflow from "@/components/sections/Workflow";
import WhatYouGet from "@/components/WhatYouGet";

export default function Home() {
    return (
        <>
            <Hero />
            <WhoWeServe />
            <WhatYouGet />
            <Workflow />
            <Testimonial />
            <FAQ />
        </>
    );
}
