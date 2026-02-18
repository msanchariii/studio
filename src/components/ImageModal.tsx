"use client";

import Image from "next/image";
import { useEffect } from "react";

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
    imageAlt: string;
}

const ImageModal = ({
    isOpen,
    onClose,
    imageSrc,
    imageAlt,
}: ImageModalProps) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.body.style.overflow = "unset";
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={onClose}
        >
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                aria-label="Close modal"
            >
                <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>

            {/* Image container */}
            <div
                className="relative max-h-[90vh] max-w-[90vw]"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative h-full w-full">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={1920}
                        height={1080}
                        className="h-auto max-h-[90vh] w-auto max-w-full object-contain shadow-2xl"
                    />
                </div>
            </div>

            {/* Hint text */}
            <p className="absolute bottom-4 text-sm text-white/60">
                Press <kbd className="rounded bg-white/10 px-2 py-1">Esc</kbd>{" "}
                or click outside to close
            </p>
        </div>
    );
};

export default ImageModal;
