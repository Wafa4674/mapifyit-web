import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import TawkTo from "@/components/TawkTo";
import organizationSchema from "@/public/schema/organization.json";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <GoogleAnalytics />
      <TawkTo />
      {/* Global JSON-LD: Organization + WebSite structured data */}
      <Script
        id="global-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <div className="min-h-screen bg-[#03060D] text-slate-300 font-sans">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
