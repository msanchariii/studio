import { verifyCerticateData } from "@/data/verify";
import { Check, X } from "lucide-react";
import React from "react";

const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

const VerifyCertificatePage = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;
    const data = verifyCerticateData[id];

    if (!data) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <div className="mt-16 rounded-2xl border p-8 text-center shadow">
                    <div className="mb-4 text-5xl">
                        <X className="mx-auto size-20 text-red-500" />
                    </div>
                    <h1 className="text-2xl font-bold text-red-500">
                        Certificate Not Found
                    </h1>
                    <p className="mt-2 text-gray-600">
                        No certificate exists with ID:
                    </p>
                    <p className="mt-1 font-mono text-sm text-gray-800">{id}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="my-16 flex justify-center px-4 py-16">
            <div className="w-full max-w-3xl rounded-2xl border bg-white p-8 shadow">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">
                        Certificate Verification
                    </h1>
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                        <Check className="inline" /> Verified
                    </span>
                </div>

                {/* Main Info */}
                <div className="flex items-center justify-between gap-4">
                    <div className="size-44 rounded-full bg-gray-100"></div>
                    <div className="grow space-y-3 text-gray-700">
                        <p>
                            <strong>Name:</strong> {data.name}
                        </p>
                        <p>
                            <strong>Role:</strong> {data.role}
                        </p>
                        <p>
                            <strong>Type:</strong> {data.type}
                        </p>
                        <p>
                            <strong>Grade:</strong>{" "}
                            <span className="font-semibold text-blue-600">
                                {data.grade}
                            </span>
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-6 border-t" />

                {/* Dates */}
                <div className="grid grid-cols-2 gap-4 text-gray-700">
                    <p>
                        <strong>Start Date:</strong>
                        <br />
                        {formatDate(data.startDate)}
                    </p>
                    <p>
                        <strong>End Date:</strong>
                        <br />
                        {formatDate(data.endDate)}
                    </p>
                    <p>
                        <strong>Issued On:</strong>
                        <br />
                        {formatDate(data.issuedOn)}
                    </p>
                    <p>
                        <strong>Certificate ID:</strong>
                        <br />
                        <span className="font-mono text-sm">
                            {data.certificateId}
                        </span>
                    </p>
                </div>

                {/* Notes */}
                {data.additionalNotes && (
                    <>
                        <div className="my-6 border-t" />
                        <div>
                            <strong>Additional Notes:</strong>
                            <p className="mt-2 text-gray-600">
                                {data.additionalNotes}
                            </p>
                        </div>
                    </>
                )}

                {/* Certificate Link */}
                {data.certificateLink && (
                    <div className="my-6">
                        <a
                            href={data.certificateLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-950 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                        >
                            Download Certificate
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VerifyCertificatePage;
