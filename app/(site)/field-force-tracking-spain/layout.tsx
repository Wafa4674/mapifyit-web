import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Field Force Tracking Software & GPS Tracking Spain",
    description:
        "Field force tracking software in Spain with real-time employee tracking, GPS workforce tracking, field service management, and mobile workforce platform.",
    keywords: [
        "field force tracking software Spain",
        "field staff tracking system Spain",
        "real-time employee tracking app Spain",
        "field service management system Spain",
        "sales team tracking software Spain",
        "workforce tracking with GPS Spain",
        "mobile workforce management platform Spain",
        "field operations tracking system Spain",
    ],
    openGraph: {
        title: "Field Force Tracking Software & GPS Tracking Spain",
        description:
            "Field force tracking software in Spain with real-time employee tracking, GPS workforce tracking, field service management, and mobile workforce platform.",
        url: "https://mapifyit.com/field-force-tracking",
    },
    twitter: {
        title: "Field Force Tracking Software & GPS Tracking Spain",
        description:
            "Field force tracking software in Spain with real-time employee tracking, GPS workforce tracking, field service management, and mobile workforce platform.",
    },
    alternates: {
        canonical: "https://mapifyit.com/field-force-tracking",
    },
};

export default function FFTLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
