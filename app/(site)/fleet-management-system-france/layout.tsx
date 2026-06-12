import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fleet Management System & GPS Tracking France",
    description:
        "Fleet management system with maps in France. Real-time GPS fleet tracking, route optimization, delivery software, and logistics tracking platform.",
    keywords: [
        "fleet management system with maps in France",
        "GPS fleet tracking software France",
        "real-time fleet tracking platform France",
        "fleet tracking API France",
        "logistics tracking platform France",
        "delivery fleet management software France",
        "route optimization for fleet",
        "France",

    ],
    openGraph: {
        title: "Fleet Management System & GPS Tracking France",
        description:
            "Fleet management system with maps in France. Real-time GPS fleet tracking, route optimization, delivery software, and logistics tracking platform.",
        url: "https://mapifyit.com/fleet-management-system",
    },
    twitter: {
        title: "Fleet Management System & GPS Tracking France",
        description:
            "Fleet management system with maps in France. Real-time GPS fleet tracking, route optimization, delivery software, and logistics tracking platform.",
    },
    alternates: {
        canonical: "https://mapifyit.com/fleet-management-system",
    },
};

export default function FMSLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
