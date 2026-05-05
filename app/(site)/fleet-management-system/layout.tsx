import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fleet Management System & GPS Tracking USA",
    description:
        "Fleet management system with maps in USA. Real-time GPS fleet tracking, route optimization, delivery software, and logistics tracking platform.",
    keywords: [
        "fleet management system with maps in USA",
        "GPS fleet tracking software USA",
        "real-time fleet tracking platform USA",
        "fleet tracking API usa",
        "logistics tracking platform USA",
        "delivery fleet management software USA",
        "route optimization for fleet",
        "usa",

    ],
    openGraph: {
        title: "Fleet Management System & GPS Tracking USA",
        description:
            "Fleet management system with maps in USA. Real-time GPS fleet tracking, route optimization, delivery software, and logistics tracking platform.",
        url: "https://mapifyit.com/fleet-management-system",
    },
    twitter: {
        title: "Fleet Management System & GPS Tracking USA",
        description:
            "Fleet management system with maps in USA. Real-time GPS fleet tracking, route optimization, delivery software, and logistics tracking platform.",
    },
    alternates: {
        canonical: "https://mapifyit.com/fleet-management-system",
    },
};

export default function FMSLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
