export type TestimonialItem = {
    name: string;
    position: string;
    company: string;
    testimonial: string;
    via?: string;
};

export const testimonialData: TestimonialItem[] = [
    {
        name: "Shiwani Sharma",
        position: "Hotel Manager",
        company: "The Grand Kalimpong",
        testimonial:
            "Working with Steadfast Web Studio on the development of my business website has been an exceptional experience from start to finish. Their team demonstrated remarkable professionalism, creativity, and technical expertise throughout the entire process. They took the time to understand my hotel, translated my vision into a clean and highly functional design, and executed every detail with precision.",
        via: "Local Reference",
    },
    {
        name: "Michael Chen",
        position: "Product Manager",
        company: "InnovateCorp",
        testimonial:
            "Outstanding results and exceptional customer service. I would highly recommend this to any business looking to scale.",
        via: "Google Reviews",
    },
    {
        name: "Emma Williams",
        position: "Marketing Director",
        company: "BrandForge",
        testimonial:
            "The team's expertise and dedication to our project was remarkable. They delivered beyond what we thought was possible.",
        via: "Trustpilot",
    },
    {
        name: "David Brown",
        position: "CTO",
        company: "NextGen Apps",
        testimonial:
            "They delivered exactly what we needed on time. The seamless process and communication were top-notch.",
        via: "Clutch",
    },
];
