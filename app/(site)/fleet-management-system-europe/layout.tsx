import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fleet Management System & GPS Tracking Europe",
    description:
        "Fleet management system with maps in Europe. Real-time GPS fleet tracking, route optimization, delivery software, and logistics tracking platform.",
    keywords: [
        "fleet management system with maps in Europe",
        "GPS fleet tracking software Europe",
        "real-time fleet tracking platform Europe",
        "fleet tracking API Europe",
        "logistics tracking platform Europe",
        "delivery fleet management software Europe",
        "route optimization for fleet",
        "Europe",

    ],
    openGraph: {
        title: "Fleet Management System & GPS Tracking Europe",
        description:
            "Fleet management system with maps in Europe. Real-time GPS fleet tracking, route optimization, delivery software, and logistics tracking platform.",
        url: "https://mapifyit.com/fleet-management-system",
    },
    twitter: {
        title: "Fleet Management System & GPS Tracking Europe",
        description:
            "Fleet management system with maps in Europe. Real-time GPS fleet tracking, route optimization, delivery software, and logistics tracking platform.",
    },
    alternates: {
        canonical: "https://mapifyit.com/fleet-management-system",
    },
};

export default function FMSLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
