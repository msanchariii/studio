export type Work = {
    id: string;
    title: string;
    year: string;
    description: string;
    imageUrls: string[];
    liveUrl?: string;
    sampleUrl?: string; // if not hosted with a live URL, then a sample preview URL
};

export const workData: Work[] = [
    {
        id: "1",
        title: "Bangalir Street Food",
        year: "2026",
        description:
            "Bangalir Street Food is an easy-to-use travel booking platform from scratch that handles 24/7 secure payments, works perfectly on phones, and has a built-in admin dashboard so the team can manage everything behind the scenes.",
        imageUrls: [
            "/assets/projects/bangalirstreetfood1.png",
            "/assets/projects/bangalirstreetfood2.png",
        ],
        liveUrl: "https://bangalirstreetfood.com",
    },
    {
        id: "2",
        title: "The Grand Kalimpong",
        year: "2025",
        description:
            "The Grand Kalimpong is a multi-section hotel website built with Next.js. It features a gallery and contact form, providing a seamless user experience for potential guests.",
        imageUrls: [
            "/assets/projects/thegrandk1.png",
            "/assets/projects/thegrandk2.png",
        ],
        liveUrl: "https://www.thegrandkalimpong.in/",
    },
    {
        id: "3",
        title: "Rustic Charm Homestay",
        year: "2024",
        description:
            "Rustic Charm Homestay is a responsive single-page booking-focused website built using Next.js (or whichever tech you used). It features a gallery, pricing section, and contact form to provide a cozy, immersive user experience for potential guests.",
        imageUrls: [
            "/assets/projects/homestay1.webp",
            "/assets/projects/homestay2.webp",
        ],
        liveUrl: "https://msanchariii.github.io/rustic-charm/",
        // sampleUrl: "https://example.com/sample-alpha",
    },

];
