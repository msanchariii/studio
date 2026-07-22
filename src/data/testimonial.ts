export type TestimonialItem = {
    name: string;
    position: string;
    company: string;
    testimonial: string;
    via?: string;
    image?: string;
    translatedTestimonial?: string;
};

export const testimonialData: TestimonialItem[] = [
    {
        name: "Shiwani Sharma",
        position: "Hotel Manager",
        company: "The Grand Kalimpong",
        testimonial:
            "Working with Steadfast Studio on the development of my website has been an exceptional experience from start to finish. Their team demonstrated remarkable professionalism, creativity, and technical expertise throughout the entire process. They took the time to understand my hotel, translated my vision into a clean and highly functional design, and executed every detail with precision.",
        via: "Local Reference",
        image: "/assets/testimonials/shiwani-sharma.jpg",
    },
    {
        name: "Ayan Santra",
        position: "Filmmaker & Writer",
        company: "InnovateCorp",
        testimonial:
            "খুবই পরিচ্ছন্ন আর চমৎকার পোর্টফোলিও বানিয়ে দিয়েছে। এত ঝকঝকে আর স্মার্ট ওয়েবসাইট যে নিজের কাজের সমাহারকে প্রদর্শন করার জন্য আর অতিরিক্ত একটা শব্দও খরচ করতে হয় না।",
        translatedTestimonial:"They have created a truly clean and excellent portfolio. It is such a sleek and smart website that not a single extra word is needed to showcase the collection of work.",
            via: "Local Reference",
        image: "/assets/testimonials/michael-chen.jpg",
    },
    {
        name: "Manjeet S.",
        position: "Founder & CEO",
        company: "Aiinfox",
        testimonial:
            "She has done a great job. Delivered project on time and followed all instructions.",
        via: "Freelancer",
        image: "/assets/testimonials/michael-chen.jpg",
    },
    // {
    //     name: "Emma Williams",
    //     position: "Marketing Director",
    //     company: "BrandForge",
    //     testimonial:
    //         "The team's expertise and dedication to our project was remarkable. They delivered beyond what we thought was possible.",
    //     via: "Local Reference",
    // },
    // {
    //     name: "David Brown",
    //     position: "CTO",
    //     company: "NextGen Apps",
    //     testimonial:
    //         "They delivered exactly what we needed on time. The seamless process and communication were top-notch.",
    //     via: "Local Reference",
    // },
];
