import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <GoogleAnalytics />
      {/* Global JSON-LD: Organization + WebSite structured data */}
      <Script
        id="global-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(require("@/public/schema/organization.json"))
        }}
      />
      <div className="min-h-screen bg-[#03060D] text-slate-300 font-sans">
        <Navbar />
        {children}
        {/* <WhatsAppButton /> */}
        <Footer />
      </div>
    </>
  );
}
