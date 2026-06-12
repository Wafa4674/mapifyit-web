import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fleet Management System & GPS Tracking Paris",
    description:
        "Fleet management system with maps in Paris. Real-time GPS fleet tracking, route optimization, delivery software, and logistics tracking platform.",
    keywords: [
        "fleet management system with maps in Paris",
        "GPS fleet tracking software Paris",
        "real-time fleet tracking platform Paris",
        "fleet tracking API Paris",
        "logistics tracking platform Paris",
        "delivery fleet management software Paris",
        "route optimization for fleet",
        "Paris",

    ],
    openGraph: {
        title: "Fleet Management System & GPS Tracking Paris",
        description:
            "Fleet management system with maps in Paris. Real-time GPS fleet tracking, route optimization, delivery software, and logistics tracking platform.",
        url: "https://mapifyit.com/fleet-management-system",
    },
    twitter: {
        title: "Fleet Management System & GPS Tracking Paris",
        description:
            "Fleet management system with maps in Paris. Real-time GPS fleet tracking, route optimization, delivery software, and logistics tracking platform.",
    },
    alternates: {
        canonical: "https://mapifyit.com/fleet-management-system",
    },
};

export default function FMSLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
