import { teamMembers } from "@/data/team";
import React from "react";

const OurTeam = () => {
    return (
        <section className="bg-white py-32">
            <div className="mx-auto max-w-7xl px-4">
                {/* Header Section */}
                <div className="mb-16">
                    <div className="mb-6 flex items-center gap-3">
                        <div className="bg-brand h-0.5 w-10"></div>
                        <p className="text-brand font-mono text-xs tracking-[0.3em] uppercase">
                            Our Team
                        </p>
                    </div>
                    <h2 className="text-charcoal mb-4 text-4xl leading-tight font-bold md:text-5xl">
                        Meet the People Behind SteadFast Studio
                    </h2>
                    {/* <p className="text-charcoal/70 max-w-2xl text-sm leading-relaxed">
                        Real feedback from businesses we&apos;ve helped grow
                    </p> */}
                </div>
            </div>
            {/*  */}
            <div className="flex flex-wrap items-center justify-center gap-4">
                {teamMembers.map((member, idx) => (
                    <div
                        key={idx}
                        className="m-2 flex w-full max-w-sm flex-col items-center gap-4 rounded-3xl bg-linear-to-tr from-emerald-50 to-emerald-100 p-4 sm:w-auto sm:flex-row sm:items-start"
                    >
                        <img
                            src={member.img.src}
                            alt={member.name}
                            className="h-28 w-28 shrink-0 rounded-full bg-blue-200 object-cover"
                        />

                        <div className="text-center sm:text-left">
                            <h3 className="text-lg font-bold">{member.name}</h3>
                            <p className="text-brand">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurTeam;
