export default function PointyWave({
    color = "currentColor",
}: {
    color?: string;
}) {
    return (
        <svg
            className="absolute -right-4 -bottom-4 h-32 w-32"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            {/* Pointy wave layers */}
            <path
                d="M0 40 L15 30 L30 35 L45 25 L60 30 L75 20 L90 25 L100 20 L100 100 L0 100 Z"
                fill={color}
                opacity="0.15"
            />
            <path
                d="M0 55 L10 45 L25 50 L40 40 L55 45 L70 35 L85 40 L100 35 L100 100 L0 100 Z"
                fill={color}
                opacity="0.12"
            />
            <path
                d="M0 70 L12 60 L27 65 L42 55 L57 60 L72 50 L87 55 L100 50 L100 100 L0 100 Z"
                fill={color}
                opacity="0.08"
            />

            {/* Sharp accent elements */}
            <path
                d="M80 10 L90 0 L95 10 L85 15 Z"
                fill={color}
                opacity="0.18"
            />
            <path d="M60 5 L70 -2 L75 8 L65 12 Z" fill={color} opacity="0.15" />
        </svg>
    );
}
