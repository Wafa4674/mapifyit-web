import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fleet Management System & GPS Tracking Spain",
    description:
        "Fleet management system with maps in Spain. Real-time GPS fleet tracking, route optimization, delivery software, and logistics tracking platform.",
    keywords: [
        "fleet management system with maps in Spain",
        "GPS fleet tracking software Spain",
        "real-time fleet tracking platform Spain",
        "fleet tracking API Spain",
        "logistics tracking platform Spain",
        "delivery fleet management software Spain",
        "route optimization for fleet",
        "Spain",

    ],
    openGraph: {
        title: "Fleet Management System & GPS Tracking Spain",
        description:
            "Fleet management system with maps in Spain. Real-time GPS fleet tracking, route optimization, delivery software, and logistics tracking platform.",
        url: "https://mapifyit.com/fleet-management-system",
    },
    twitter: {
        title: "Fleet Management System & GPS Tracking Spain",
        description:
            "Fleet management system with maps in Spain. Real-time GPS fleet tracking, route optimization, delivery software, and logistics tracking platform.",
    },
    alternates: {
        canonical: "https://mapifyit.com/fleet-management-system",
    },
};

export default function FMSLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
