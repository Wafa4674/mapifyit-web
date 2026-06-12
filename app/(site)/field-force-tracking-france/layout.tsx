import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Field Force Tracking Software & GPS Tracking France",
    description:
        "Field force tracking software in France with real-time employee tracking, GPS workforce tracking, field service management, and mobile workforce platform.",
    keywords: [
        "field force tracking software France",
        "field staff tracking system France",
        "real-time employee tracking app France",
        "field service management system France",
        "sales team tracking software France",
        "workforce tracking with GPS France",
        "mobile workforce management platform France",
        "field operations tracking system France",
    ],
    openGraph: {
        title: "Field Force Tracking Software & GPS Tracking France",
        description:
            "Field force tracking software in France with real-time employee tracking, GPS workforce tracking, field service management, and mobile workforce platform.",
        url: "https://mapifyit.com/field-force-tracking",
    },
    twitter: {
        title: "Field Force Tracking Software & GPS Tracking France",
        description:
            "Field force tracking software in France with real-time employee tracking, GPS workforce tracking, field service management, and mobile workforce platform.",
    },
    alternates: {
        canonical: "https://mapifyit.com/field-force-tracking",
    },
};

export default function FFTLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
