export const pricingPlans = [
    {
        id: 1,
        name: "Portfolio Website",
        price: 5000,
        description: "Perfect for freelancers, professionals, and creatives",
        features: [
            "5 Pages (Home, About, Services, Portfolio, Contact)",
            "Mobile responsive design",
            "Contact form integration",
            "Basic SEO optimization",
            "1 month free support",
            "Fast loading speed",
        ],
        cta: "Get Started",
        ctaLink: "/contact",
        popular: false,
        color: "teal",
    },
    {
        id: 2,
        name: "Shopify Store",
        price: 25000,
        priceUnit: "year",
        description: "Launch your online store with everything included",
        features: [
            "Complete Shopify store setup",
            "Custom theme design",
            "Up to 50 products",
            "Free domain name (.com/.in)",
            "Professional email (yourname@yourbrand.com)",
            "Payment gateway integration",
            "1 year hosting included",
            "Product upload assistance",
            "3 months free support",
        ],
        cta: "Start Selling",
        ctaLink: "/contact",
        popular: true,
        color: "indigo",
    },
    {
        id: 3,
        name: "Custom E-commerce",
        price: 45000,
        description: "Full-featured online store with complete control",
        features: [
            "Custom design & development",
            "Unlimited products",
            "Multiple payment options",
            "Admin dashboard",
            "Inventory management",
            "Order tracking system",
            "Customer accounts",
            "Email notifications",
            "Mobile app ready",
            "6 months free support",
        ],
        cta: "Build Your Store",
        ctaLink: "/contact",
        popular: false,
        color: "coral",
    },
    {
        id: 4,
        name: "Business Website",
        price: 12000,
        description: "Professional website for small businesses",
        features: [
            "8-10 Pages",
            "Custom design",
            "CMS integration (easy updates)",
            "Contact & inquiry forms",
            "Google Maps integration",
            "Social media links",
            "WhatsApp integration",
            "Advanced SEO",
            "2 months free support",
        ],
        cta: "Get Started",
        ctaLink: "/contact",
        popular: false,
        color: "lavender",
    },
    {
        id: 5,
        name: "Hotel/Restaurant",
        price: 18000,
        description: "Showcase your hospitality business online",
        features: [
            "Custom branded design",
            "Online booking system",
            "Menu/Room showcase",
            "Photo gallery",
            "Customer reviews section",
            "Location & directions",
            "Multi-language support (optional)",
            "Mobile responsive",
            "3 months free support",
        ],
        cta: "Get Started",
        ctaLink: "/contact",
        popular: false,
        color: "brand",
    },
    {
        id: 6,
        name: "Landing Page",
        price: 3500,
        description: "Single page to capture leads and drive conversions",
        features: [
            "1 Page design",
            "Lead capture form",
            "Call-to-action buttons",
            "Mobile responsive",
            "Fast loading",
            "Basic SEO",
            "2 weeks delivery",
        ],
        cta: "Get Started",
        ctaLink: "/contact",
        popular: false,
        color: "teal",
    },
    {
        id: 7,
        name: "Custom Solution",
        price: null,
        description: "Enterprise-grade solutions tailored to your needs",
        features: [
            "Custom requirements analysis",
            "Scalable architecture",
            "Advanced integrations",
            "Dedicated project manager",
            "Priority support",
            "Custom features & functionality",
            "Consultation included",
        ],
        cta: "Contact Us",
        ctaLink: "/contact",
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
