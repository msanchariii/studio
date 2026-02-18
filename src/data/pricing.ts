export const pricingPlans = [
    {
        id: 1,
        name: "Shopify Store",
        price: 25000,
        priceUnit: "/year",
        description: "Perfect for Instagram sellers ready to automate sales",
        features: [
            "Complete Shopify store setup & design",
            "Up to 50 products uploaded for you",
            "Free domain (.com/.in) + Professional email",
            "Payment gateway integration (Razorpay, PayU, etc.)",
            "Mobile-first responsive design",
            "Order & inventory management",
            "1 year hosting included",
            "3 months free support & updates",
        ],
        cta: "Start Selling",
        ctaLink: "/contact?plan=shopify",
        popular: true,
        color: "indigo",
    },
    {
        id: 2,
        name: "Custom E-commerce",
        price: 45000,
        description: "Full-featured store with complete ownership and control",
        features: [
            "Custom design & development (no templates)",
            "Unlimited products & categories",
            "Admin dashboard for easy management",
            "Multiple payment gateway options",
            "Advanced inventory & order tracking",
            "Customer accounts & wishlists",
            "Email & SMS notifications",
            "Mobile app ready architecture",
            "Full source code ownership",
            "6 months free support",
        ],
        cta: "Build Your Store",
        ctaLink: "/contact?plan=custom-ecommerce",
        popular: false,
        color: "coral",
    },
    {
        id: 3,
        name: "Business Website",
        price: 12000,
        description:
            "Professional website for service businesses and local shops",
        features: [
            "8-10 custom pages (Home, About, Services, Contact, etc.)",
            "Mobile responsive design",
            "Content management system (update easily yourself)",
            "Contact & inquiry forms",
            "Google Maps & WhatsApp integration",
            "Social media integration",
            "Basic SEO optimization",
            "2 months free support",
        ],
        cta: "Get Started",
        ctaLink: "/contact?plan=business",
        popular: false,
        color: "lavender",
    },
    {
        id: 4,
        name: "Portfolio Website",
        price: 8000,
        description:
            "Showcase your work beautifully for freelancers and creatives",
        features: [
            "5-6 pages (Home, About, Portfolio, Services, Contact)",
            "Gallery/portfolio showcase section",
            "Mobile responsive design",
            "Contact form integration",
            "Social media & resume links",
            "Fast loading optimized images",
            "Basic SEO setup",
            "1 month free support",
        ],
        cta: "Get Started",
        ctaLink: "/contact?plan=portfolio",
        popular: false,
        color: "teal",
    },
    {
        id: 5,
        name: "Hotel & Restaurant",
        price: 18000,
        description:
            "Showcase your hospitality business and take direct bookings",
        features: [
            "Custom branded design for your property",
            "Online booking or inquiry system",
            "Room/Menu showcase with photo galleries",
            "Customer reviews & testimonials section",
            "Location map & directions",
            "Mobile responsive design",
            "Optional: Multi-language support",
            "3 months free support",
        ],
        cta: "Get Your Site",
        ctaLink: "/contact?plan=hotel",
        popular: false,
        color: "brand",
    },
    {
        id: 6,
        name: "Custom Solution",
        price: null,
        description:
            "Enterprise-grade solutions tailored to your specific needs",
        features: [
            "Requirements analysis & consultation",
            "Scalable custom architecture",
            "Advanced features & integrations",
            "Dedicated project manager",
            "Priority support & maintenance",
            "No limitations on complexity",
            "Full training & documentation included",
        ],
        cta: "Let's Talk",
        ctaLink: "/contact?plan=custom",
        popular: false,
        color: "indigo",
    },
];

export const whatsIncluded = [
    "Clear project timeline & defined deliverables",
    "Transparent pricing—no surprise fees",
    "Focus on a single core objective (e.g. scale, optimize)",
    "Expert-led execution with regular updates",
    "Collaborative checkpoints & feedback loops",
];

// pricingConfig.ts
export const unitPricing = {
    currency: {
        INR: "₹",
        USD: "$",
    },
    pages: {
        base: 3,
        pricePerPage: {
            INR: 1000,
            USD: 15,
        },
    },
    design: {
        custom: {
            INR: 2500,
            USD: 40,
        },
        figma: {
            INR: 0,
            USD: 15,
        },
        template: {
            INR: 0,
            USD: 0,
        },
    },
    backendTech: {
        none: { INR: 0, USD: 0 },
        express: { INR: 5000, USD: 100 },
        nestjs: { INR: 7000, USD: 120 },
        nextjs: { INR: 5000, USD: 110 },
        cms: { INR: 5000, USD: 150 },
    },
    features: {
        auth: { INR: 3000, USD: 100 },
        dbIntegration: { INR: 2000, USD: 100 },
        docker: { INR: 2000, USD: 60 },
    },
    addons: {
        seo: { INR: 300, USD: 5 },
        chatbot: { INR: 2000, USD: 25 },
        animations: { INR: 2000, USD: 20 },
        dns: { INR: 0, USD: 0 },
        deployment: { INR: 2000, USD: 30 },
    },
};

export type TPlan = (typeof pricingPlans)[number];

export type TCurrency = "INR" | "USD";
export type TDesignType = "custom" | "figma" | "template";
export type TBackendTech = keyof typeof unitPricing.backendTech;
export type TFeature = keyof typeof unitPricing.features;
export type TAddon = keyof typeof unitPricing.addons;
// type TFeature = keyof typeof unitPricing.features;

export function calculateQuote({
    pages,
    design,
    backend,
    selectedAddons,
    currency,
    features,
}: {
    pages: number;
    design: TDesignType;
    backend: TBackendTech;
    selectedAddons: TAddon[];
    currency: TCurrency;
    features: TFeature[]; // 💡 Added this!
}): number {
    let total = 3000;

    // 📄 Extra Pages
    const basePages = unitPricing.pages.base;
    const extraPages = Math.max(pages - basePages, 0);
    total += extraPages * unitPricing.pages.pricePerPage[currency];

    // 🎨 Design
    total += unitPricing.design[design][currency];

    // 🛠️ Backend
    total += unitPricing.backendTech[backend][currency];

    // ➕ Add-ons
    selectedAddons.forEach((addon) => {
        const addonPrice =
            unitPricing.addons[addon as keyof typeof unitPricing.addons][
                currency
            ];
        total += addonPrice;
    });

    // 🌟 Features
    features.forEach((feature) => {
        const featurePrice =
            unitPricing.features[feature as keyof typeof unitPricing.features][
                currency
            ];
        total += featurePrice;
    });

    // 💰 Return total quote
    return total;
}
