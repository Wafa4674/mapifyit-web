import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Field Force Tracking Software & GPS Tracking USA",
    description:
        "Field force tracking software in USA with real-time employee tracking, GPS workforce tracking, field service management, and mobile workforce platform.",
    keywords: [
        "field force tracking software usa",
        "field staff tracking system USA",
        "real-time employee tracking app USA",
        "field service management system usa",
        "sales team tracking software usa",
        "workforce tracking with GPS usa",
        "mobile workforce management platform USA",
        "field operations tracking system usa",
    ],
    openGraph: {
        title: "Field Force Tracking Software & GPS Tracking USA",
        description:
            "Field force tracking software in USA with real-time employee tracking, GPS workforce tracking, field service management, and mobile workforce platform.",
        url: "https://mapifyit.com/field-force-tracking",
    },
    twitter: {
        title: "Field Force Tracking Software & GPS Tracking USA",
        description:
            "Field force tracking software in USA with real-time employee tracking, GPS workforce tracking, field service management, and mobile workforce platform.",
    },
    alternates: {
        canonical: "https://mapifyit.com/field-force-tracking",
    },
};

export default function FFTLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
