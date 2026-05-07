import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Map API for Developers USA | Google Maps Alternative",
    description:
        "Affordable map API for developers in USA with geocoding, routing, vector maps, map tiles, & self-hosted enterprise mapping tools.",
    keywords: [
        "Map API for developers USA",
        "custom map builder usa",
        "interactive map platform usa",
        "replace google maps api usa",
        "mapbox pricing alternative usa",
        "Cheaper Map Api usa",
        "Best mapping api for developers usa",
        "vector map API usa",
        "location data API usa",
        "real-time mapping API usa",
        "Distance API USA",
        "private mapping platform usa",
        "self-hosted mapping platform usa",
        "enterprise mapping platform usa",
        "unlimited map Api usa",
        "unlimited geocoding API usa",
        "unlimited map API usa"
    ],
    openGraph: {
        title: "Maps API | Mapifyit",
        description:
            "Render high-resolution vector and satellite tiles at 60fps for mass-scale web and mobile apps with localized address accuracy.",
        url: "https://mapifyit.com/maps",
    },
    twitter: {
        title: "Maps API | Mapifyit",
        description:
            "Render high-resolution vector and satellite tiles at 60fps for mass-scale web and mobile apps with localized address accuracy.",
    },
    alternates: {
        canonical: "https://mapifyit.com/maps",
    },
};

export default function MapsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
