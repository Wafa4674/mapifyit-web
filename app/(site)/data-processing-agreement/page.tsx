import React from "react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import {
  FileCheck,
  Shield,
  Scale,
  Database,
  Server,
  Globe,
  Users,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Lock,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Processing Agreement | Mapifyit",
  description:
    "Mapifyit Data Processing Agreement Comprehensive data handling, subprocessor management, breach notification, and GDPR/CCPA compliance commitments.",
};

export const dynamic = "force-static";
export const revalidate = 86400;

export default function DataProcessingAgreementPage() {
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "definitions", label: "Definitions" },
    { id: "data-processing", label: "Data Processing" },
    { id: "security-measures", label: "Security Measures" },
    { id: "subprocessors", label: "Subprocessors" },
    { id: "data-transfers", label: "Data Transfers" },
    { id: "data-subject-rights", label: "Data Subject Rights" },
    { id: "breach-notification", label: "Breach Notification" },
    { id: "data-retention", label: "Data Retention" },
    { id: "audits", label: "Audits & Assessments" },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#030712] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Navigation Sidebar */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-32">
              <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-6">
                DPA
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
                  href="/compliance"
                  className="flex items-center gap-3 text-slate-500 hover:text-slate-300 text-sm transition-colors group"
                >
                  <ShieldCheck className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                  Compliance & Security
                </Link>
                <Link
                  href="/privacy-policy"
                  className="flex items-center gap-3 text-slate-500 hover:text-slate-300 text-sm transition-colors group"
                >
                  <Shield className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-9">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold uppercase tracking-wider text-blue-400 mb-6">
                <FileCheck className="w-3.5 h-3.5" /> Legal Framework
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Data Processing{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  Agreement.
                </span>
              </h1>
            </Reveal>

            <div className="text-lg text-slate-400 mb-12 leading-relaxed bg-white/[0.02] border border-white/5 p-6 rounded-xl">
              <p>
                This Data Processing Agreement forms part of the
                Services Agreement between Mapifyit and the
                Client. This DPA applies where Mapifyit
                processes personal data on behalf of the Client in connection
                with the provision of geospatial services.
              </p>
              <p className="mt-4 text-sm">
                <strong className="text-slate-300">Effective Date:</strong> This
                DPA is effective as of the date the Client agrees to the Terms
                of Service or enters into a separate enterprise agreement with
                Mapifyit.
              </p>
            </div>

            <div className="space-y-16">
              {/* Overview */}
              <section id="overview" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-blue-400">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">
                    1. Overview & Scope
                  </h2>
                </div>
                <div className="text-slate-400 leading-relaxed space-y-4 pl-11">
                  <p>
                    This DPA establishes the obligations of both parties
                    regarding the processing of personal data in compliance with
                    applicable data protection laws, including but not limited
                    to:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "General Data Protection Regulation — EU/EEA",
                      "California Consumer Privacy Act — United States",
                      "Other applicable US state privacy laws",
                      "Industry-specific regulations (NERC CIP, FCC, HIPAA where applicable)",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Definitions */}
              <section id="definitions" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-indigo-400">
                    <Scale className="w-4 h-4" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">
                    2. Definitions
                  </h2>
                </div>
                <div className="text-slate-400 leading-relaxed space-y-4 pl-11">
                  <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 space-y-4">
                    {[
                      {
                        term: "Personal Data",
                        def: "Any information relating to an identified or identifiable natural person, as processed by Mapifyit on behalf of the Client.",
                      },
                      {
                        term: "Controller",
                        def: "The Client, who determines the purposes and means of the processing of Personal Data.",
                      },
                      {
                        term: "Processor",
                        def: "Mapifyit, who processes Personal Data on behalf of the Controller.",
                      },
                      {
                        term: "Subprocessor",
                        def: "A third party engaged by Mapifyit to process Personal Data on behalf of the Controller.",
                      },
                      {
                        term: "Data Subject",
                        def: "An identified or identifiable natural person whose Personal Data is processed.",
                      },
                    ].map((d) => (
                      <div key={d.term}>
                        <strong className="text-slate-200">{d.term}:</strong>{" "}
                        <span className="text-sm">{d.def}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Data Processing */}
              <section id="data-processing" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-cyan-400">
                    <Database className="w-4 h-4" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">
                    3. Data Processing Obligations
                  </h2>
                </div>
                <div className="text-slate-400 leading-relaxed space-y-4 pl-11">
                  <p>Mapifyit shall:</p>
                  <ul className="space-y-2">
                    {[
                      "Process Personal Data only on documented instructions from the Controller",
                      "Ensure that persons authorized to process Personal Data have committed to confidentiality",
                      "Implement appropriate technical and organizational measures to ensure security of processing",
                      "Not engage another Subprocessor without prior written authorization of the Controller",
                      "Assist the Controller in responding to Data Subject requests",
                      "Delete or return all Personal Data upon termination of services, at the Controller's choice",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Security Measures */}
              <section id="security-measures" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-emerald-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">
                    4. Technical & Organizational Security Measures
                  </h2>
                </div>
                <div className="text-slate-400 leading-relaxed space-y-4 pl-11">
                  <p>
                    Mapifyit implements and maintains the following security
                    measures:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      "AES-256 encryption at rest",
                      "TLS 1.3 encryption in transit",
                      "Role-based access controls (RBAC)",
                      "Multi-factor authentication (MFA)",
                      "Regular penetration testing",
                      "24/7 security monitoring",
                      "Automated vulnerability scanning",
                      "Employee background checks",
                      "Security awareness training",
                      "Incident response procedures",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm mt-4">
                    For the full list of security controls, see our{" "}
                    <Link
                      href="/compliance#data-security"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Compliance & Security page
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Subprocessors */}
              <section id="subprocessors" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-blue-400">
                    <Users className="w-4 h-4" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">
                    5. Subprocessors
                  </h2>
                </div>
                <div className="text-slate-400 leading-relaxed space-y-4 pl-11">
                  <p>
                    Mapifyit maintains a current list of authorized
                    subprocessors. We will notify the Controller at least 30 days
                    before adding or replacing a subprocessor. The Controller may
                    object to any new subprocessor on reasonable grounds.
                  </p>
                  <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6">
                    <h4 className="text-sm font-bold text-white mb-4">
                      Current Subprocessors
                    </h4>
                    <div className="space-y-3">
                      {[
                        {
                          name: "Cloud Infrastructure Provider",
                          purpose: "Data hosting & compute",
                          location: "United States",
                        },
                        {
                          name: "Payment Processor",
                          purpose: "Billing & subscription management",
                          location: "United States",
                        },
                        {
                          name: "Monitoring & Analytics",
                          purpose: "Service uptime & performance monitoring",
                          location: "United States",
                        },
                      ].map((sp) => (
                        <div
                          key={sp.name}
                          className="flex items-center justify-between text-sm border-b border-white/5 pb-3 last:border-0 last:pb-0"
                        >
                          <div>
                            <span className="text-slate-200 font-medium">
                              {sp.name}
                            </span>
                            <span className="text-slate-500 ml-2">
                              — {sp.purpose}
                            </span>
                          </div>
                          <span className="text-xs text-emerald-400 font-medium">
                            {sp.location}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-500">
                    Enterprise clients can request the full subprocessor list
                    with entity names under NDA.
                  </p>
                </div>
              </section>

              {/* Data Transfers */}
              <section id="data-transfers" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-cyan-400">
                    <Globe className="w-4 h-4" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">
                    6. International Data Transfers
                  </h2>
                </div>
                <div className="text-slate-400 leading-relaxed space-y-4 pl-11">
                  <p>
                    All customer data is stored and processed exclusively within
                    the United States. Mapifyit does not transfer personal data
                    outside the United States unless:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "The Controller has provided explicit written consent",
                      "Adequate safeguards are in place (Standard Contractual Clauses, where applicable)",
                      "The transfer is necessary for the performance of services requested by the Controller",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Data Subject Rights */}
              <section id="data-subject-rights" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-violet-400">
                    <Users className="w-4 h-4" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">
                    7. Data Subject Rights
                  </h2>
                </div>
                <div className="text-slate-400 leading-relaxed space-y-4 pl-11">
                  <p>
                    Mapifyit will assist the Controller in responding to requests
                    from data subjects exercising their rights under applicable
                    law, including:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Right of Access",
                      "Right to Rectification",
                      "Right to Erasure (Right to be Forgotten)",
                      "Right to Restriction of Processing",
                      "Right to Data Portability",
                      "Right to Object",
                      "Right to Opt-Out (CCPA)",
                      "Right to Know (CCPA)",
                    ].map((right) => (
                      <div
                        key={right}
                        className="flex items-center gap-2 text-sm bg-white/[0.02] border border-white/5 rounded-lg px-3 py-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                        {right}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Breach Notification */}
              <section id="breach-notification" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-red-400">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">
                    8. Data Breach Notification
                  </h2>
                </div>
                <div className="text-slate-400 leading-relaxed space-y-4 pl-11">
                  <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-6">
                    <p className="mb-4">
                      In the event of a Personal Data breach, Mapifyit will:
                    </p>
                    <ul className="space-y-2.5">
                      {[
                        "Notify the Controller without undue delay, and in any event within 72 hours of becoming aware",
                        "Provide details of the nature and scope of the breach",
                        "Describe the likely consequences of the breach",
                        "Describe the measures taken or proposed to address the breach",
                        "Cooperate with the Controller's investigation and remediation efforts",
                        "Maintain records of all breaches, including facts, effects, and remedial actions",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Data Retention */}
              <section id="data-retention" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-blue-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">
                    9. Data Retention & Deletion
                  </h2>
                </div>
                <div className="text-slate-400 leading-relaxed space-y-4 pl-11">
                  <p>Upon termination of the Services Agreement, Mapifyit will:</p>
                  <ul className="space-y-2">
                    {[
                      "Return all Personal Data to the Controller in a standard, machine-readable format upon request",
                      "Securely delete all Personal Data within 90 days of termination (unless legally required to retain)",
                      "Provide written certification of deletion upon request",
                      "Remove all copies from backup systems within 180 days",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Audits */}
              <section id="audits" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-emerald-400">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">
                    10. Audits & Impact Assessments
                  </h2>
                </div>
                <div className="text-slate-400 leading-relaxed space-y-4 pl-11">
                  <p>
                    Mapifyit will make available to the Controller all
                    information necessary to demonstrate compliance with this
                    DPA. This includes:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Annual SOC 2 Type II audit reports (available under NDA)",
                      "ISO 27001 certification documentation",
                      "Security questionnaire responses (SIG, CAIQ, or custom formats)",
                      "Support for the Controller's data protection impact assessments (DPIAs)",
                      "Cooperation with regulatory audits as required by applicable law",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Contact CTA */}
              <section className="pt-8 mt-12 border-t border-white/10">
                <h2 className="text-xl font-semibold text-white mb-6">
                  Request a Signed DPA
                </h2>
                <div className="bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20 p-6 rounded-xl text-slate-400">
                  <p className="mb-4">
                    Enterprise and regulated industry clients can request a
                    signed, customized DPA. Contact our legal team to get
                    started.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/contact-us"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all"
                    >
                      Request DPA <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href="mailto:legal@mapifyit.com"
                      className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center gap-1.5"
                    >
                      hi@mapifyit.com
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
