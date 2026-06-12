import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fleet Management System & GPS Tracking Italy",
    description:
        "Fleet management system with maps in Italy. Real-time GPS fleet tracking, route optimization, delivery software, and logistics tracking platform.",
    keywords: [
        "fleet management system with maps in Italy",
        "GPS fleet tracking software Italy",
        "real-time fleet tracking platform Italy",
        "fleet tracking API Italy",
        "logistics tracking platform Italy",
        "delivery fleet management software Italy",
        "route optimization for fleet",
        "Italy",

    ],
    openGraph: {
        title: "Fleet Management System & GPS Tracking Italy",
        description:
            "Fleet management system with maps in Italy. Real-time GPS fleet tracking, route optimization, delivery software, and logistics tracking platform.",
        url: "https://mapifyit.com/fleet-management-system",
    },
    twitter: {
        title: "Fleet Management System & GPS Tracking Italy",
        description:
            "Fleet management system with maps in Italy. Real-time GPS fleet tracking, route optimization, delivery software, and logistics tracking platform.",
    },
    alternates: {
        canonical: "https://mapifyit.com/fleet-management-system",
    },
};

export default function FMSLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
