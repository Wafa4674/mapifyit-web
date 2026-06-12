import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Field Force Tracking Software & GPS Tracking Netherlands",
    description:
        "Field force tracking software in Netherlands with real-time employee tracking, GPS workforce tracking, field service management, and mobile workforce platform.",
    keywords: [
        "field force tracking software Netherlands",
        "field staff tracking system Netherlands",
        "real-time employee tracking app Netherlands",
        "field service management system Netherlands",
        "sales team tracking software Netherlands",
        "workforce tracking with GPS Netherlands",
        "mobile workforce management platform Netherlands",
        "field operations tracking system Netherlands",
    ],
    openGraph: {
        title: "Field Force Tracking Software & GPS Tracking Netherlands",
        description:
            "Field force tracking software in Netherlands with real-time employee tracking, GPS workforce tracking, field service management, and mobile workforce platform.",
        url: "https://mapifyit.com/field-force-tracking",
    },
    twitter: {
        title: "Field Force Tracking Software & GPS Tracking Netherlands",
        description:
            "Field force tracking software in Netherlands with real-time employee tracking, GPS workforce tracking, field service management, and mobile workforce platform.",
    },
    alternates: {
        canonical: "https://mapifyit.com/field-force-tracking",
    },
};

export default function FFTLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
