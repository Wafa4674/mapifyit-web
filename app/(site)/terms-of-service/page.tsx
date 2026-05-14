import React from "react";
import {
  Scale,
  Activity,
  Link as LinkIcon,
  Database,
  HardDrive,
  CreditCard,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";

export const dynamic = "force-static";
export const revalidate = 86400;

export default function TermsOfServicePage() {
  const sections = [
    { id: "use-of-services", label: "Use of Services" },
    { id: "accounts-access", label: "Accounts & Access" },
    { id: "api-usage", label: "APIs & SDKs" },
    { id: "data-ownership", label: "Data Ownership" },
    { id: "deployment", label: "Deployment Models" },
    { id: "pricing", label: "Pricing & Billing" },
    { id: "intellectual-property", label: "Intellectual Property" },
    { id: "licensing-third-party", label: "Third-Party Licensing" },
    { id: "export-control", label: "ITAR & Export Control" },
    { id: "liability", label: "Limitation of Liability" },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#030712] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-32">
              <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-6">
                Terms & Conditions
              </h3>
              <nav className="flex flex-col space-y-3">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {section.label}
                  </a>
                ))}
              </nav>

              <div className="mt-12 flex flex-col space-y-4">
                <Link
                  href="/privacy-policy"
                  className="flex items-center gap-3 text-slate-500 hover:text-slate-300 text-sm transition-colors group"
                >
                  <ShieldCheck className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                  Read Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="animate-in fade-in slide-in-from-bottom-5 duration-700">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-6">
                <Scale className="w-3.5 h-3.5" /> Legal Framework
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Terms & Conditions.
              </h1>
            </div>

            <div className="text-lg text-slate-400 mb-12 leading-relaxed bg-white/[0.02] border border-white/5 p-6 rounded-xl">
              <p>
                Welcome to Mapifyit ("Mapifyit", "we", "our", or "us"). These Terms &
                Conditions ("Terms") govern your access to and use of the Mapifyit website,
                APIs, SDKs, software, platforms, data services, and related offerings
                (collectively, the "Services").
              </p>
              <p className="mt-4">
                By accessing or using Mapifyit, you agree to be bound by these Terms. If
                you do not agree, you may not use our Services.
              </p>
            </div>

            <div className="space-y-16">
              <section id="use-of-services" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-blue-400">
                    <Activity className="w-4 h-4" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">Use of Services</h2>
                </div>
                <div className="text-slate-400 leading-relaxed pl-11">
                  <p>
                    You may use Mapifyit Services solely for lawful purposes and in
                    accordance with these Terms. You agree not to misuse the Services or
                    attempt to access them using unauthorized methods.
                  </p>
                  <p className="mt-4">
                    You are responsible for ensuring that your use of the Services complies
                    with all applicable laws, regulations, and industry standards.
                  </p>
                </div>
              </section>

              <section id="accounts-access" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-indigo-400">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">Accounts & Access</h2>
                </div>
                <div className="text-slate-400 leading-relaxed pl-11">
                  <p>Some Services may require account registration or API credentials. You agree to:</p>
                  <ul className="list-disc pl-5 mt-4 space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your credentials</li>
                    <li>Notify us immediately of any unauthorized access</li>
                  </ul>
                  <p className="mt-4">
                    You are responsible for all activity that occurs under your account or API
                    keys.
                  </p>
                </div>
              </section>

              <section id="api-usage" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-cyan-400">
                    <LinkIcon className="w-4 h-4" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">APIs, SDKs & Platform Usage</h2>
                </div>
                <div className="text-slate-400 leading-relaxed pl-11">
                  <p>
                    Mapifyit provides APIs, SDKs, map data, analytics, and related tools for
                    integration into your applications. You may not:
                  </p>
                  <ul className="list-disc pl-5 mt-4 space-y-2">
                    <li>Reverse engineer, decompile, or disassemble the Services</li>
                    <li>Resell or sublicense Services without written authorization</li>
                    <li>Exceed usage limits or bypass rate-limiting mechanisms</li>
                    <li>Use the Services to build competing mapping platforms</li>
                  </ul>
                </div>
              </section>

              <section id="data-ownership" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-emerald-400">
                    <Database className="w-4 h-4" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">Data Ownership</h2>
                </div>
                <div className="text-slate-400 leading-relaxed pl-11">
                  <p>
                    You retain full ownership of your data, your applications, and any
                    content you upload. Mapifyit does not claim ownership of customer data.
                  </p>
                  <p className="mt-4">
                    By using the Services, you grant Mapifyit a limited, non-exclusive license
                    to process data solely to provide and improve the Services.
                  </p>
                </div>
              </section>

              <section id="deployment" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-blue-400">
                    <HardDrive className="w-4 h-4" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">Data Sovereignty & Deployment</h2>
                </div>
                <div className="text-slate-400 leading-relaxed pl-11">
                  <p>
                    Mapifyit supports cloud, private cloud, on-premise, offline, and
                    air-gapped deployments. Customers are responsible for choosing
                    appropriate deployment models and ensuring regulatory compliance.
                  </p>
                </div>
              </section>

              <section id="pricing" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-green-400">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">Pricing & Billing</h2>
                </div>
                <div className="text-slate-400 leading-relaxed pl-11">
                  <p>
                    Pricing is usage-based or contract-based. Fees are non-refundable. Usage
                    beyond plan limits incurs charges, and taxes/duties are your responsibility.
                    Free trials or beta features may be discontinued at any time and operate
                    "as is".
                  </p>
                </div>
              </section>

              <section id="intellectual-property" className="scroll-mt-32">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Intellectual Property & Confidentiality
                </h2>
                <div className="text-slate-400 leading-relaxed">
                  <p>
                    All Mapifyit software, platform architecture, and branding are the
                    intellectual property of Mapifyit or its licensors. Both parties agree to
                    protect confidential information exchanged during the course of using the
                    Services.
                  </p>
                </div>
              </section>

              <section id="licensing-third-party" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-blue-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">Third-Party Licensing</h2>
                </div>
                <div className="text-slate-400 leading-relaxed pl-11 space-y-4">
                  <p>
                    Mapifyit utilizes various third-party software components and datasets. We ensure that all third-party integrations, including GIS platforms and mapping libraries (such as Esri ArcGIS, Mapbox, or open-source tools like QGIS and Pelias), are properly licensed under commercial or open-source terms.
                  </p>
                  <p>
                    Users are responsible for complying with the respective licenses of any third-party data or software they integrate into their applications via Mapifyit.
                  </p>
                </div>
              </section>

              <section id="export-control" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-red-400">
                    <Scale className="w-4 h-4" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">ITAR & Export Control</h2>
                </div>
                <div className="text-slate-400 leading-relaxed pl-11 space-y-4">
                  <p>
                    Certain geospatial data and mapping services may be subject to US export control laws, including the International Traffic in Arms Regulations (ITAR) and the Export Administration Regulations (EAR).
                  </p>
                  <p>
                    Mapifyit complies with all applicable export control regulations. Customers mapping critical defense or national security infrastructure are responsible for ensuring their use of our platform adheres to these legal requirements. We offer specialized, isolated environments for ITAR-regulated data upon request.
                  </p>
                </div>
              </section>

              <section id="liability" className="scroll-mt-32">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Liability & Indemnification
                </h2>
                <div className="text-slate-400 leading-relaxed space-y-4">
                  <p>
                    The Services are provided "as is" and "as available." Mapifyit disclaims
                    all warranties. To the maximum extent permitted by law, Mapifyit shall not
                    be liable for indirect, incidental, or consequential damages. Our absolute
                    liability shall not exceed the amount paid by you during the preceding 12
                    months.
                  </p>
                  <p>
                    You agree to indemnify Mapifyit from claims arising out of misuse of the
                    Services, agreement violations, or third-party rights violations.
                  </p>
                </div>
              </section>

              <section className="pt-8 mt-12 border-t border-white/10">
                <h2 className="text-xl font-semibold text-white mb-6">
                  Questions about these terms?
                </h2>
                <div className="bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20 p-6 rounded-xl text-slate-400">
                  <p>For inquiries, please contact our legal team:</p>
                  <ul className="mt-4 space-y-2">
                    <li>
                      Email:{" "}
                      <a href="mailto:hi@mapifyit.com" className="text-blue-400 hover:text-blue-300">
                        hi@mapifyit.com
                      </a>
                    </li>
                    <li>
                      Web:{" "}
                      <a href="https://www.mapifyit.com" className="text-blue-400 hover:text-blue-300">
                        https://mapifyit.com
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
