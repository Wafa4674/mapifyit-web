import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fleet Management System & GPS Tracking Germany",
    description:
        "Fleet management system with maps in Germany. Real-time GPS fleet tracking, route optimization, delivery software, and logistics tracking platform.",
    keywords: [
        "fleet management system with maps in Germany",
        "GPS fleet tracking software Germany",
        "real-time fleet tracking platform Germany",
        "fleet tracking API Germany",
        "logistics tracking platform Germany",
        "delivery fleet management software Germany",
        "route optimization for fleet",
        "Germany",

    ],
    openGraph: {
        title: "Fleet Management System & GPS Tracking Germany",
        description:
            "Fleet management system with maps in Germany. Real-time GPS fleet tracking, route optimization, delivery software, and logistics tracking platform.",
        url: "https://mapifyit.com/fleet-management-system",
    },
    twitter: {
        title: "Fleet Management System & GPS Tracking Germany",
        description:
            "Fleet management system with maps in Germany. Real-time GPS fleet tracking, route optimization, delivery software, and logistics tracking platform.",
    },
    alternates: {
        canonical: "https://mapifyit.com/fleet-management-system",
    },
};

export default function FMSLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
