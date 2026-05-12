import Script from "next/script";

const TAWK_TO_SRC = "https://embed.tawk.to/6a02baab9d8a681c3560638f/1jodaibll";

export default function TawkTo() {
  return (
    <>
      <Script id="tawkto-init" strategy="afterInteractive">
        {`
          window.Tawk_API = window.Tawk_API || {};
          window.Tawk_LoadStart = new Date();
        `}
      </Script>
      <Script
        id="tawkto-script"
        src={TAWK_TO_SRC}
        strategy="afterInteractive"
        charSet="UTF-8"
        crossOrigin="anonymous"
      />
    </>
  );
}
