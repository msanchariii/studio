// import PointyPattern from "@/components/PointyPattern";
// import PointyWave from "@/components/PointyWave";

// export default function WhoWeServe() {
//     return (
//         <section className="relative px-4 py-16 sm:px-6 md:py-20 lg:px-8">
//             {/* Subtle background with pointy pattern */}
//             <div className="absolute inset-0">
//                 <PointyPattern />
//             </div>

//             <div className="relative mx-auto max-w-5xl">
//                 {/* Header */}
//                 <div className="mb-12">
//                     <div className="mb-4 flex items-center gap-3">
//                         <div className="bg-brand h-0.5 w-10"></div>
//                         <p className="text-brand font-mono text-xs tracking-[0.3em] uppercase">
//                             Who We Serve
//                         </p>
//                     </div>
//                     <h2 className="text-charcoal mb-4 text-3xl leading-tight font-bold md:text-4xl">
//                         Built for businesses&nbsp;
//                         <span className="text-brand">ready to grow</span> beyond
//                         Instagram.
//                     </h2>
//                 </div>

//                 {/* Services Grid */}
//                 <div className="mb-20 grid grid-cols-1 gap-5 md:grid-cols-3">
//                     {services.map((service, index) => {
//                         const isElevated = index === 1 || index === 4;
//                         return (
//                             <div
//                                 key={index}
//                                 className={`group relative overflow-hidden border-t-4 bg-white p-6 transition-all duration-300 ${
//                                     isElevated
//                                         ? "-translate-y-2 shadow-md hover:-translate-y-3 hover:shadow-md"
//                                         : "shadow-md hover:-translate-y-2 hover:shadow-md"
//                                 } ${service.borderColor}`}
//                                 style={{ borderRadius: "0 0 12px 12px" }}
//                             >
//                                 {/* Decorative pointy wave background */}
//                                 <div
//                                     className={`absolute -right-4 -bottom-4 transition-transform duration-500 ${
//                                         isElevated
//                                             ? "scale-110 group-hover:scale-125"
//                                             : "scale-100 group-hover:scale-110"
//                                     }`}
//                                 >
//                                     <PointyWave color={service.colorHex} />
//                                 </div>

//                                 {/* Number badge */}
//                                 <div className="relative mb-4 flex items-center justify-between">
//                                     <div
//                                         className={`flex h-10 w-10 items-center justify-center rounded-full ${service.accentColor} shadow-md`}
//                                     >
//                                         <span className="text-lg font-bold text-white">
//                                             {(index + 1)
//                                                 .toString()
//                                                 .padStart(2, "0")}
//                                         </span>
//                                     </div>
//                                     <div
//                                         className={`h-0.5 rounded-full ${service.accentColor} opacity-40 transition-all duration-300 ${
//                                             isElevated
//                                                 ? "w-16 group-hover:w-20"
//                                                 : "w-12 group-hover:w-16"
//                                         }`}
//                                     ></div>
//                                 </div>

//                                 {/* Subtitle */}
//                                 <p
//                                     className={`mb-2 text-xs font-semibold tracking-wide ${service.textColor} uppercase`}
//                                 >
//                                     {service.subtitle}
//                                 </p>

//                                 {/* Title */}
//                                 <h3 className="text-charcoal relative z-10 mb-3 text-xl leading-tight font-bold">
//                                     {service.title}
//                                 </h3>

//                                 {/* Description */}
//                                 <p className="text-charcoal/70 relative z-10 text-sm leading-relaxed">
//                                     {service.description}
//                                 </p>
//                             </div>
//                         );
//                     })}
//                 </div>

//                 {/* FAQ Section */}
//             </div>
//         </section>
//     );
// }
// const services = [
//     {
//         color: "teal",
//         colorHex: "#14b8a6",
//         accentColor: "bg-teal",
//         textColor: "text-teal",
//         borderColor: "border-teal/30",
//         title: "Instagram & Local Sellers",
//         subtitle: "Selling on Instagram or WhatsApp?",
//         description:
//             "Turn your DMs into a real checkout experience. We build you a store that takes orders, payments, and runs 24/7 — without you lifting a finger.",
//     },
//     {
//         color: "indigo",
//         colorHex: "#6366f1",
//         accentColor: "bg-indigo",
//         textColor: "text-indigo",
//         borderColor: "border-indigo/30",
//         title: "Hotel & Stays",
//         subtitle: "Running a Hotel or B&B?",
//         description:
//             "Stop losing bookings to OTAs. We build direct booking websites that save you commission and give guests a seamless reservation experience.",
//     },
//     {
//         color: "coral",
//         colorHex: "#f97066",
//         accentColor: "bg-coral",
//         textColor: "text-coral",
//         borderColor: "border-coral/30",
//         title: "Small Businesses & Creators",
//         subtitle: "Need a Web Presence?",
//         description:
//             "From portfolio sites to business landing pages — if you need something that looks great and works perfectly, we build it right.",
//     },
//     {
//         color: "lavender",
//         colorHex: "#ba9ad3",
//         accentColor: "bg-lavender",
//         textColor: "text-lavender",
//         borderColor: "border-lavender/30",
//         title: "Restaurants & Cafés",
//         subtitle: "Want online orders without fees?",
//         description:
//             "Stop paying commissions to delivery apps. We build custom ordering systems that put profit back in your pocket and give you full control.",
//     },
//     {
//         color: "brand",
//         colorHex: "#306c4d",
//         accentColor: "bg-brand",
//         textColor: "text-brand",
//         borderColor: "border-brand/30",
//         title: "Service Providers",
//         subtitle: "Consultants, Coaches & Agencies?",
//         description:
//             "Book meetings, showcase your work, and capture leads without the hassle. We build sites that turn visitors into clients.",
//     },
//     {
//         color: "cambridge",
//         colorHex: "#77ba99",
//         accentColor: "bg-cambridge",
//         textColor: "text-cambridge",
//         borderColor: "border-cambridge/30",
//         title: "Event & Workshop Hosts",
//         subtitle: "Hosting events or workshops?",
//         description:
//             "Sell tickets, manage registrations, and promote your events — all in one place. No middleman, no confusion, just streamlined bookings.",
//     },
// ];

export default function WhoWeServe() {
    return (
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-24 lg:px-8">
            {/* Blueprint grid background */}
            {/* <div
                className="absolute inset-0 opacity-[0.22]"
                style={{
                    backgroundImage:
                        "linear-gradient(#1C2620 1px, transparent 1px), linear-gradient(90deg, #1C2620 1px, transparent 1px)",
                    backgroundSize: "64px 64px",
                    maskImage:
                        "radial-gradient(ellipse 80% 60% at 50% 20%, black 30%, transparent 80%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 80% 60% at 50% 20%, black 30%, transparent 80%)",
                }}
            /> */}
            {/* Soft green glow */}
            {/* <div className="pointer-events-none absolute -top-52 left-1/2 h-125 w-225 -translate-x-1/2 bg-brand/10 blur-3xl" /> */}

            <div className="relative mx-auto max-w-5xl">
                {/* Header */}
                <div className="mb-4">
                    <div className="mb-5 flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-emerald-400">
                        <span className="text-black/30">[</span>
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        </span>
                        who_we_serve
                        <span className="text-black/30">]</span>
                    </div>
                    <h2 className="mb-4 max-w-2xl text-3xl leading-tight font-bold tracking-tight text-gray-900 md:text-4xl">
                        Built for businesses ready to grow{" "}
                        <span className="text-emerald-400">beyond Instagram.</span>
                    </h2>
                    <p className="max-w-md border-l-2 border-black/10 pl-4 font-mono text-[13px] leading-relaxed text-gray-700">
                        six client profiles we build systems for — pick the
                        one that matches, or tell us what&apos;s missing.
                    </p>
                </div>

                {/* Node list */}
                <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
                    {[0, 1].map((col) => (
                        <div key={col} className="relative pl-7">
                            {/* connecting spine */}
                            <div className="absolute top-2.5 bottom-2.5 left-[5px] w-px bg-gradient-to-b from-black/10 via-black/15 to-black/10" />

                            {services
                                .slice(col * 3, col * 3 + 3)
                                .map((service, i) => {
                                    const index = col * 3 + i;
                                    const isLast = i === 2;
                                    return (
                                        <div
                                            key={index}
                                            className={`group relative py-6 pl-0 ${
                                                isLast ? "" : "border-b border-black/10"
                                            }`}
                                        >
                                            {/* LED node dot */}
                                            <span className="absolute top-8 -left-7 h-2.5 w-2.5 rounded-full bg-gray-700/60 shadow-[0_0_0_3px_#070B09] transition-all duration-300 group-hover:bg-emerald-400 group-hover:shadow-[0_0_0_3px_#070B09,0_0_10px_2px_rgba(52,211,153,0.7)]" />

                                            <div className="mb-2.5 flex items-baseline justify-between font-mono text-[11px] tracking-wide text-gray-800">
                                                <span className="text-emerald-500/70 transition-colors duration-300 group-hover:text-emerald-400">
                                                    SRV&nbsp;
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                                <span className="flex -translate-x-1 items-center gap-1.5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                                                    online
                                                </span>
                                            </div>

                                            <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold tracking-tight text-gray-900">
                                                {service.title}
                                                <span className="translate-x-[-6px] font-mono text-emerald-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                                    →
                                                </span>
                                            </h3>

                                            <p className="max-w-105 text-sm leading-relaxed text-gray-800 transition-colors duration-300 group-hover:text-gray-900">
                                                {service.description}
                                            </p>
                                        </div>
                                    );
                                })}
                        </div>
                    ))}
                </div>

                {/* Footer strip */}
                {/* <div className="mt-14 flex flex-wrap gap-x-8 gap-y-2 border-t border-white/10 pt-6 font-mono text-[11px] tracking-wide text-white/35">
                    <div>
                        <span className="text-emerald-500/80">06</span> profiles
                        matched
                    </div>
                    <div>
                        <span className="text-emerald-500/80">∞</span> uptime,
                        zero babysitting
                    </div>
                    <div>
                        <span className="text-emerald-500/80">$0</span>{" "}
                        commission taken by us
                    </div>
                </div> */}
            </div>
        </section>
    );
}

const services = [
    {
        title: "Instagram & Local Sellers",
        description:
            "Turn your DMs into a real checkout experience. We build you a store that takes orders, payments, and runs 24/7 — without you lifting a finger.",
    },
    {
        title: "Hotels & Stays",
        description:
            "Stop losing bookings to OTAs. We build direct booking websites that save you commission and give guests a seamless reservation experience.",
    },
    {
        title: "Small Businesses & Creators",
        description:
            "From portfolio sites to business landing pages — if you need something that looks great and works perfectly, we build it right.",
    },
    {
        title: "Restaurants & Cafés",
        description:
            "Stop paying commissions to delivery apps. We build custom ordering systems that put profit back in your pocket and give you full control.",
    },
    {
        title: "Service Providers",
        description:
            "Book meetings, showcase your work, and capture leads without the hassle. We build sites that turn visitors into clients.",
    },
    {
        title: "Event & Workshop Hosts",
        description:
            "Sell tickets, manage registrations, and promote your events — all in one place. No middleman, no confusion, just streamlined bookings.",
    },
];
