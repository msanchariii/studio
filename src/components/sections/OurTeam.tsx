import { teamMembers } from "@/data/team";
import Image from "next/image";
import PageHeading from "../PageHeading";

const OurTeam = () => {
    return (
        <div className="mx-auto max-w-4xl">
            <PageHeading
                title="Our Team"
                subtitle="Meet the talented individuals behind our success"
                description="Meet the talented individuals behind our success. Our team is dedicated to delivering exceptional results and providing top-notch service to our clients."
            />
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                {teamMembers.map((member, idx) => (
                    <div
                        key={idx}
                        className="group relative aspect-square h-full w-full overflow-hidden rounded-3xl"
                    >
                        <Image
                            src={member.img.src}
                            alt={member.name}
                            fill
                            className="object-cover transition duration-500"
                        />

                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />

                        {/* Floating Info */}
                        <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-black/20 p-2 text-center shadow-lg transition-transform duration-300">
                            <h3 className="font-bold text-white">
                                {member.name}
                            </h3>

                            <p className="text-sm font-semibold text-emerald-500">
                                {member.role}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurTeam;
