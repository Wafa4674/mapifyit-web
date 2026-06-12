import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Field Force Tracking Software & GPS Tracking Europe",
    description:
        "Field force tracking software in Europe with real-time employee tracking, GPS workforce tracking, field service management, and mobile workforce platform.",
    keywords: [
        "field force tracking software Europe",
        "field staff tracking system Europe",
        "real-time employee tracking app Europe",
        "field service management system Europe",
        "sales team tracking software Europe",
        "workforce tracking with GPS Europe",
        "mobile workforce management platform Europe",
        "field operations tracking system Europe",
    ],
    openGraph: {
        title: "Field Force Tracking Software & GPS Tracking Europe",
        description:
            "Field force tracking software in Europe with real-time employee tracking, GPS workforce tracking, field service management, and mobile workforce platform.",
        url: "https://mapifyit.com/field-force-tracking",
    },
    twitter: {
        title: "Field Force Tracking Software & GPS Tracking Europe",
        description:
            "Field force tracking software in Europe with real-time employee tracking, GPS workforce tracking, field service management, and mobile workforce platform.",
    },
    alternates: {
        canonical: "https://mapifyit.com/field-force-tracking",
    },
};

export default function FFTLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
