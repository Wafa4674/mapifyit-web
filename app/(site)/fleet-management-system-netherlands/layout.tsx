import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fleet Management System & GPS Tracking Netherlands",
    description:
        "Fleet management system with maps in Netherlands. Real-time GPS fleet tracking, route optimization, delivery software, and logistics tracking platform.",
    keywords: [
        "fleet management system with maps in Netherlands",
        "GPS fleet tracking software Netherlands",
        "real-time fleet tracking platform Netherlands",
        "fleet tracking API Netherlands",
        "logistics tracking platform Netherlands",
        "delivery fleet management software Netherlands",
        "route optimization for fleet",
        "Netherlands",

    ],
    openGraph: {
        title: "Fleet Management System & GPS Tracking Netherlands",
        description:
            "Fleet management system with maps in Netherlands. Real-time GPS fleet tracking, route optimization, delivery software, and logistics tracking platform.",
        url: "https://mapifyit.com/fleet-management-system",
    },
    twitter: {
        title: "Fleet Management System & GPS Tracking Netherlands",
        description:
            "Fleet management system with maps in Netherlands. Real-time GPS fleet tracking, route optimization, delivery software, and logistics tracking platform.",
    },
    alternates: {
        canonical: "https://mapifyit.com/fleet-management-system",
    },
};

export default function FMSLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
