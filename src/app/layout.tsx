import type { Metadata } from "next";
import { Inter, Poppins, Baloo_Bhai_2 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GsapProvider } from "@/context/GsapProvider";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const balooBhai2 = Baloo_Bhai_2({
    variable: "--font-baloo-bhai-2",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    // 🧠 Page title - will show as "<page> | SteadFast Studio"
    title: {
        template: "%s | SteadFast Studio",
        default: "SteadFast Studio", // Default fallback title
    },

    // 📝 Description for search engines & social sharing
    description:
        "We craft fast, scalable websites and digital products that help startups, creators, and small teams grow, engage, and stand out online.",

    // ⚙ Shows which tool created the site
    generator: "Next.js",

    // 🧾 Sets the app name (used in PWA & some meta contexts)
    applicationName: "SteadFast Studio",

    // 🔐 Controls referrer behavior for privacy
    referrer: "origin-when-cross-origin",

    // 🔍 Keywords for SEO (less relevant today but still okay)
    keywords: [
        "Web Development",
        "Next.js",
        "React",
        "Freelance Studio",
        "SteadFast Studio",
    ],

    // ✍ Authors of the content (can appear in rich snippets)
    authors: [
        { name: "Sanchari Mandal", url: "https://msanchariii.vercel.app/" },
        { name: "Kankan Mondal", url: "https://kankanmondal22.github.io/" },
    ],

    // 👤 Who created this site
    creator: "Sanchari Mandal",

    // 🏢 Who published the content/site
    publisher: "SteadFast Web Studio",

    // 📵 Stops auto-linking email/phone/address in Safari
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },

    // 🟦 Open Graph (for Facebook, LinkedIn, WhatsApp previews)
    openGraph: {
        title: "SteadFast Studio", // Title shown when shared
        description: "Your partner in digital excellence.",
        url: "https://steadfastweb.studio/", // Your live domain
        siteName: "SteadFast Studio", // Brand or site name
        // images: [
        //     {
        //         url: "https://steadfastweb.studio/og-image.png", // OG image path
        //         width: 1200,
        //         height: 630,
        //         alt: "SteadFast Studio - Digital solutions",
        //     },
        // ],
        locale: "en_IN", // Language/region
        type: "website", // Type of OG content
    },

    // 🐦 Twitter Card (controls how links appear on Twitter)
    twitter: {
        card: "summary_large_image", // Full-width preview
        title: "SteadFast Studio", // Title on Twitter
        description: "Your partner in digital excellence.",
        // images: ["https://steadfastweb.studio/og-image.png"],
        creator: "@steadfastss", // Your Twitter handle
    },

    // ✅ Optional: Canonical URL to avoid duplicate SEO issues
    metadataBase: new URL("https://steadfastweb.studio"),
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${balooBhai2.variable} ${poppins.variable} font-poppins bg-white antialiased`}
            >
                <div>
                    <main className="flex min-h-screen items-center justify-center px-6">
                        <div className="max-w-lg text-center">
                            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
                                🚧 Under Maintenance
                            </h1>

                            <p className="mt-6 text-lg leading-relaxed text-gray-600">
                                We&apos;re currently performing a
                                maintenance to improve your experience.
                                We&apos;ll be back online shortly.
                            </p>

                            <div className="mt-8 inline-flex items-center rounded-lg border border-gray-200 bg-white px-6 py-4 shadow-sm">
                                <span className="mr-2 text-gray-500">📞</span>
                                <p className="text-gray-800">
                                    <a
                                        href="tel:+919239505770"
                                        className="font-semibold text-blue-600 hover:underline"
                                    >
                                        +91 9239505770
                                    </a>
                                </p>
                            </div>
                        </div>
                    </main>
                </div>
                {/* <GsapProvider>
                    <Navbar />
                    <main className="mx-auto w-full max-w-360">{children}</main>
                    <Footer />
                </GsapProvider> */}
            </body>
        </html>
    );
}
