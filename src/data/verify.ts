export type Certificate = {
    name: string;
    gender: "m" | "f" | "other";
    role: string;
    issuedOn: string; // ISO date string
    certificateId: string;
    type: "Internship" | "Course Completion" | "Workshop";
    startDate: string; // ISO date string
    endDate: string; // ISO date string
    grade:
        | "Excellent"
        | "Good"
        | "Satisfactory"
        | "Needs Improvement"
        | "Outstanding";
    additionalNotes?: string;
    certificateLink?: string; // Optional link to the certificate image or PDF
};

export const verifyCerticateData: { [key: string]: Certificate } = {
    "STD-INT-2026-001": {
        name: "Soumi Saha",
        gender: "f",
        role: "Front-end Web Developer",
        issuedOn: "2026-04-03",
        certificateId: "STD-INT-2026-001",
        type: "Internship",
        startDate: "2026-02-01",
        endDate: "2026-03-31",
        grade: "Outstanding",
        additionalNotes:
            "Completed all projects with excellence and demonstrated strong problem-solving skills.",
        certificateLink: "/certificates/std-int-2026-001.pdf",
    },
};
