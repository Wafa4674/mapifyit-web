import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Field Force Tracking Software & GPS Tracking Italy",
    description:
        "Field force tracking software in Italy with real-time employee tracking, GPS workforce tracking, field service management, and mobile workforce platform.",
    keywords: [
        "field force tracking software Italy",
        "field staff tracking system Italy",
        "real-time employee tracking app Italy",
        "field service management system Italy",
        "sales team tracking software Italy",
        "workforce tracking with GPS Italy",
        "mobile workforce management platform Italy",
        "field operations tracking system Italy",
    ],
    openGraph: {
        title: "Field Force Tracking Software & GPS Tracking Italy",
        description:
            "Field force tracking software in Italy with real-time employee tracking, GPS workforce tracking, field service management, and mobile workforce platform.",
        url: "https://mapifyit.com/field-force-tracking",
    },
    twitter: {
        title: "Field Force Tracking Software & GPS Tracking Italy",
        description:
            "Field force tracking software in Italy with real-time employee tracking, GPS workforce tracking, field service management, and mobile workforce platform.",
    },
    alternates: {
        canonical: "https://mapifyit.com/field-force-tracking",
    },
};

export default function FFTLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
