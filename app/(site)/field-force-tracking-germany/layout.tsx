import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Field Force Tracking Software & GPS Tracking Germany",
    description:
        "Field force tracking software in Germany with real-time employee tracking, GPS workforce tracking, field service management, and mobile workforce platform.",
    keywords: [
        "field force tracking software Germany",
        "field staff tracking system Germany",
        "real-time employee tracking app Germany",
        "field service management system Germany",
        "sales team tracking software Germany",
        "workforce tracking with GPS Germany",
        "mobile workforce management platform Germany",
        "field operations tracking system Germany",
    ],
    openGraph: {
        title: "Field Force Tracking Software & GPS Tracking Germany",
        description:
            "Field force tracking software in Germany with real-time employee tracking, GPS workforce tracking, field service management, and mobile workforce platform.",
        url: "https://mapifyit.com/field-force-tracking",
    },
    twitter: {
        title: "Field Force Tracking Software & GPS Tracking Germany",
        description:
            "Field force tracking software in Germany with real-time employee tracking, GPS workforce tracking, field service management, and mobile workforce platform.",
    },
    alternates: {
        canonical: "https://mapifyit.com/field-force-tracking",
    },
};

export default function FFTLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
