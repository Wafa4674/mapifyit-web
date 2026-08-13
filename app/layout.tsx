import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MapProvider } from "@/context/MapContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Enterprise GIS & Mapping Platform in USA | MapifyIt",
    template: "%s | Mapifyit",
  },
  description:
    "Looking for Maps & Mapbox alternative in the USA? MapifyIt offers GIS mapping, unlimited APIs, & enterprise-grade solutions tailored for businesses.",
  keywords: [
    "GIS, Maps alternative USA",
    "Mapbox alternative USA",
    "MapifyIt GIS platform",
    "GIS platform USA",
    "Enterprise mapping solutions USA",
    "Geospatial platform alternative Maps",
  ],
  authors: [{ name: "Mapifyit" }],
  creator: "Mapifyit",
  publisher: "Mapifyit",
  metadataBase: new URL("https://mapifyit.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mapifyit.com",
    siteName: "Mapifyit",
    title: "Enterprise GIS & Mapping Platform in USA | MapifyIt",
    description:
      "Looking for GIS Maps & Mapbox alternative in the USA? MapifyIt offers GIS mapping, unlimited APIs, & enterprise-grade solutions tailored for businesses.",
    images: [
      {
        url: "/fullwhitebackground logo.png",
        width: 1200,
        height: 630,
        alt: "Mapifyit – Enterprise Location Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise GIS & Mapping Platform in USA | MapifyIt",
    description:
      "Looking for GIS Maps & Mapbox alternative in the USA? MapifyIt offers GIS mapping, unlimited APIs, & enterprise-grade solutions tailored for businesses.",
    images: ["/fullwhite-background.png"],
    creator: "@mapifyit",
  },
  icons: {
    icon: [
      { url: "/fullwhitebackground logo.png", sizes: "16x16", type: "image/png" },
      { url: "/fullwhitebackground logo.png", sizes: "32x32", type: "image/png" },
      { url: "/fullwhitebackground logo.png", sizes: "192x192", type: "image/png" },
    ],
    // apple: "/fullwhitebackground logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mapifyit.com",
  },
  verification: {
    google: "google4db3520bca7d7de0", // Google Search Console
    other: {
      "msvalidate.01": "03109F26A544DA03DF743844C7E17EAE", // Bing Webmaster Tools verification
    },
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* DNS + TLS preconnect for Mapifyit API origins - Crucial for Safari performance */}
        <link rel="preconnect" href="https://client.mapifyit.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* <link rel="preconnect" href="https://tiles.mapifyit.com" crossOrigin="anonymous" /> */}
        {/* <link rel="dns-prefetch" href="https://client.mapifyit.com" /> */}
        {/* <link rel="dns-prefetch" href="https://tiles.mapifyit.com" /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-blue-500/30 overflow-x-hidden`}
      >
        {/*
         * MapProvider boots the MapLibre map into an offscreen div immediately.
         * By the time the user navigates to /contact-us the map is fully rendered
         * and ContactUs just relocates the existing DOM node – zero re-init delay.
         */}
        <MapProvider>
          <div className="min-h-screen bg-[#03060D] text-slate-300 font-sans">
            {children}
          </div>
        </MapProvider>
      </body>
    </html>
  );
}
