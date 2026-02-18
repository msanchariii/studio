"use client";

import { Work } from "@/data/works";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ImageModal from "./ImageModal";

const WorkCard = ({
    work,
    index,
    variant = "light",
}: {
    work: Work;
    index?: number;
    variant?: "light" | "dark";
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<{
        src: string;
        alt: string;
    } | null>(null);

    const openModal = (src: string, alt: string) => {
        setSelectedImage({ src, alt });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };
    const colors = [
        {
            badge: "bg-teal",
            line: "bg-teal/30",
            border: "border-teal",
            text: "text-teal",
            hover: "hover:border-teal/50 hover:text-teal/80",
        },
        {
            badge: "bg-indigo",
            line: "bg-indigo/30",
            border: "border-indigo",
            text: "text-indigo",
            hover: "hover:border-indigo/50 hover:text-indigo/80",
        },
        {
            badge: "bg-coral",
            line: "bg-coral/30",
            border: "border-coral",
            text: "text-coral",
            hover: "hover:border-coral/50 hover:text-coral/80",
        },
        {
            badge: "bg-lavender",
            line: "bg-lavender/30",
            border: "border-lavender",
            text: "text-lavender",
            hover: "hover:border-lavender/50 hover:text-lavender/80",
        },
        {
            badge: "bg-brand",
            line: "bg-brand/30",
            border: "border-brand",
            text: "text-brand",
            hover: "hover:border-brand/50 hover:text-brand/80",
        },
    ];

    const colorScheme = colors[index! % colors.length];

    return (
        <article className="group relative">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                {/* Left: Content */}
                <div className="flex flex-col justify-center">
                    {/* Number Badge */}
                    <div
                        className={`${colorScheme.badge} mb-6 flex h-10 w-10 items-center justify-center font-mono text-sm font-bold text-white shadow-md`}
                    >
                        {(index! + 1).toString().padStart(2, "0")}
                    </div>

                    <div className="mb-3 flex items-center gap-2">
                        <div className={`${colorScheme.line} h-px w-8`}></div>
                        <span className="text-charcoal/50 font-mono text-xs tracking-[0.2em] uppercase">
                            {work.year}
                        </span>
                    </div>

                    <h3 className="text-charcoal mb-4 text-3xl leading-tight font-bold md:text-4xl">
                        {work?.title}
                    </h3>

                    <p className="text-charcoal/70 mb-8 text-sm leading-relaxed">
                        {work.description}
                    </p>

                    <Link
                        href={work.liveUrl || work.sampleUrl || "#"}
                        className={`${colorScheme.border} ${colorScheme.text} ${colorScheme.hover} inline-flex w-fit items-center gap-2 border-b-2 pb-1 font-semibold transition-all duration-300`}
                    >
                        {work?.liveUrl ? "View Live Site" : "View Sample"}
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </Link>
                </div>

                {/* Right: Images */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div
                        className="group/img relative aspect-video w-full cursor-pointer overflow-hidden bg-zinc-100 shadow-md"
                        onClick={() =>
                            openModal(
                                work.imageUrls[0],
                                work.title + " preview 1",
                            )
                        }
                    >
                        <Image
                            src={work.imageUrls[0]}
                            fill
                            alt={work.title + " preview 1"}
                            className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                        />
                        {/* Zoom indicator */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover/img:bg-black/20">
                            <div className="translate-y-2 opacity-0 transition-all duration-300 group-hover/img:translate-y-0 group-hover/img:opacity-100">
                                <svg
                                    className="h-8 w-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div
                        className="group/img relative aspect-video w-full cursor-pointer overflow-hidden bg-zinc-100 shadow-md"
                        onClick={() =>
                            openModal(
                                work.imageUrls[1],
                                work.title + " preview 2",
                            )
                        }
                    >
                        <Image
                            src={work.imageUrls[1]}
                            fill
                            alt={work.title + " preview 2"}
                            className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                        />
                        {/* Zoom indicator */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover/img:bg-black/20">
                            <div className="translate-y-2 opacity-0 transition-all duration-300 group-hover/img:translate-y-0 group-hover/img:opacity-100">
                                <svg
                                    className="h-8 w-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <ImageModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    imageSrc={selectedImage.src}
                    imageAlt={selectedImage.alt}
                />
            )}
        </article>
    );
};

export default WorkCard;
