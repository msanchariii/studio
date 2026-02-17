"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navlink = ({
    item,
}: {
    item: {
        name: string;
        href: string;
    };
}) => {
    const pathName = usePathname();
    return (
        <Link
            key={item.name}
            href={item.href}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                item.href === pathName
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:bg-white/50 hover:text-gray-900"
            }`}
        >
            {item.name}
        </Link>
    );
};
