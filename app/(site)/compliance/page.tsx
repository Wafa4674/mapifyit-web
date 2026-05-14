import React from "react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import {
  Shield,
  ShieldCheck,
  Lock,
  Server,
  Globe,
  FileCheck,
  CheckCircle2,
  Building2,
  Scale,
  Key,
  Database,
  Cloud,
  BadgeCheck,
  ChevronRight,
  ArrowRight,
  Zap,
  Eye,
  HardDrive,
  Users,
  FileText,
  Fingerprint,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance & Security | Mapifyit",
  description:
    "Enterprise-grade security, compliance certifications, and data protection standards at Mapifyit. SOC 2, ISO 27001, NIST, CCPA, GDPR, and industry-specific compliance.",
};

export const dynamic = "force-static";
export const revalidate = 86400;

const certifications = [
  {
    icon: ShieldCheck,
    title: "SOC 2 Type II",
    status: "Certified",
    color: "emerald",
    description:
      "Independently audited controls for security, availability, processing integrity, confidentiality, and privacy. Annual re-certification ensures continuous compliance.",
  },
  {
    icon: Shield,
    title: "ISO 27001:2022",
    status: "Certified",
    color: "blue",
    description:
      "International standard for Information Security Management Systems (ISMS). Our comprehensive security framework covers risk assessment, access controls, and incident management.",
  },
  {
    icon: Lock,
    title: "NIST Cybersecurity Framework",
    status: "Aligned",
    color: "indigo",
    description:
      "Full alignment with NIST CSF core functions: Identify, Protect, Detect, Respond, and Recover. Designed for critical infrastructure protection.",
  },
  {
    icon: Cloud,
    title: "FedRAMP Ready",
    status: "In Progress",
    color: "cyan",
    description:
      "Currently pursuing FedRAMP authorization for federal government workloads. Contact us for current status and government deployment options.",
  },
];

const securityFeatures = [
  {
    icon: Key,
    title: "Encryption Standards",
    items: [
      "AES-256 encryption at rest for all customer data",
      "TLS 1.3 encryption in transit for all API communications",
      "End-to-end encryption for sensitive geospatial payloads",
      "Hardware Security Modules (HSM) for key management",
    ],
  },
  {
    icon: Users,
    title: "Access Controls",
    items: [
      "Role-based access control (RBAC) with least privilege principle",
      "Multi-factor authentication (MFA) enforced for all personnel",
      "Background checks for all employees handling customer data",
      "Quarterly access reviews and privilege audits",
    ],
  },
  {
    icon: Server,
    title: "Infrastructure Security",
    items: [
      "SOC 2 Type II certified data centers",
      "24/7 Security Operations Center (SOC) monitoring",
      "Automated vulnerability scanning and penetration testing",
      "Network segmentation and intrusion detection systems",
    ],
  },
  {
    icon: HardDrive,
    title: "Disaster Recovery & Business Continuity",
    items: [
      "RPO < 1 hour, RTO < 4 hours for critical services",
      "Geo-redundant backups across multiple availability zones",
      "Annual disaster recovery testing and tabletop exercises",
      "Documented incident response and communication procedures",
    ],
  },
];

const industryCompliance = [
  {
    icon: Zap,
    title: "NERC CIP",
    sector: "Electric Utilities",
    description:
      "Our infrastructure and processes support NERC Critical Infrastructure Protection standards for clients in the electric utility sector. We provide dedicated environments for critical infrastructure mapping data.",
  },
  {
    icon: Globe,
    title: "FCC Compliance",
    sector: "Telecommunications",
    description:
      "Compliant with FCC regulations for telecom infrastructure data handling. We support broadband mapping, tower location data, and network coverage analysis with appropriate safeguards.",
  },
  {
    icon: Building2,
    title: "StateRAMP",
    sector: "State & Local Government",
    description:
      "StateRAMP-aligned security posture for state and local government deployments. Available for on-premise and private cloud configurations to meet jurisdiction-specific requirements.",
  },
  {
    icon: Scale,
    title: "ITAR/EAR Awareness",
    sector: "Defense & Critical Infrastructure",
    description:
      "For clients requiring ITAR or Export Administration Regulations compliance, we offer US-person-only access controls and isolated environments. Contact us for defense-grade deployment options.",
  },
];

const privacyStandards = [
  {
    icon: Eye,
    title: "CCPA Compliance",
    description:
      "Full compliance with the California Consumer Privacy Act. California residents can exercise their rights to know, delete, and opt-out of data sales. We do not sell personal information.",
    link: "/privacy-policy#ccpa",
  },
  {
    icon: Globe,
    title: "GDPR Compliance",
    description:
      "Adherence to the General Data Protection Regulation for EU/EEA clients. We provide Data Processing Agreements (DPAs) and support data subject access requests.",
    link: "/privacy-policy#gdpr",
  },
  {
    icon: Database,
    title: "US-Based Data Residency",
    description:
      "All customer data is stored exclusively on US-based servers. We use SOC 2 certified data centers located in the continental United States. Custom data residency options available for enterprise clients.",
    link: null,
  },
  {
    icon: FileText,
    title: "Data Processing Agreement",
    description:
      "Enterprise clients can request our standard DPA covering data handling, subprocessor lists, breach notification procedures, and data return/deletion commitments.",
    link: "/data-processing-agreement",
  },
];

export default function CompliancePage() {
  const sections = [
    { id: "certifications", label: "Certifications" },
    { id: "data-security", label: "Data Security" },
    { id: "data-privacy", label: "Data Privacy" },
    { id: "data-residency", label: "Data Residency" },
    { id: "industry-compliance", label: "Industry Compliance" },
    { id: "licensing", label: "Licensing & IP" },
    { id: "insurance", label: "Insurance Coverage" },
    { id: "contact", label: "Contact Security Team" },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#030712] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Navigation Sidebar */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-32">
              <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-6">
                Compliance & Security
              </h3>
              <nav className="flex flex-col space-y-3">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-slate-400 hover:text-emerald-400 text-sm transition-colors"
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
                  <Shield className="w-4 h-4 group-hover:text-emerald-400 transition-colors" />
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="flex items-center gap-3 text-slate-500 hover:text-slate-300 text-sm transition-colors group"
                >
                  <Scale className="w-4 h-4 group-hover:text-emerald-400 transition-colors" />
                  Terms of Service
                </Link>
                <Link
                  href="/data-processing-agreement"
                  className="flex items-center gap-3 text-slate-500 hover:text-slate-300 text-sm transition-colors group"
                >
                  <FileCheck className="w-4 h-4 group-hover:text-emerald-400 transition-colors" />
                  Data Processing Agreement
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-9">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-6">
                <ShieldCheck className="w-3.5 h-3.5" /> Enterprise Security
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Compliance &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Security.
                </span>
              </h1>
            </Reveal>

            <p className="text-lg text-slate-400 mb-6 leading-relaxed max-w-3xl">
              At Mapifyit, security isn&apos;t an afterthought — it&apos;s the foundation
              of everything we build. We maintain rigorous security controls,
              independent certifications, and industry-specific compliance to
              protect the most sensitive geospatial data in utilities, telecom,
              and government.
            </p>

            {/* Trust Badges Row */}
            <div className="flex flex-wrap gap-3 mb-16">
              {["SOC 2 Type II", "ISO 27001", "NIST CSF", "CCPA", "GDPR", "AES-256", "TLS 1.3"].map((badge) => (
                <div
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-semibold text-slate-300"
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  {badge}
                </div>
              ))}
            </div>

            <div className="space-y-20">
              {/* ═══ CERTIFICATIONS ═══ */}
              <section id="certifications" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <BadgeCheck className="w-5 h-5" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    Certifications & Standards
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {certifications.map((cert) => (
                    <div
                      key={cert.title}
                      className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-${cert.color}-500/10 border border-${cert.color}-500/20 flex items-center justify-center text-${cert.color}-400 shrink-0`}
                        >
                          <cert.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-bold text-white">
                              {cert.title}
                            </h3>
                            <span
                              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${cert.status === "Certified"
                                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                  : cert.status === "Aligned"
                                    ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                                    : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                                }`}
                            >
                              {cert.status}
                            </span>
                          </div>
                          <p className="text-sm text-slate-400 leading-relaxed">
                            {cert.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ═══ DATA SECURITY ═══ */}
              <section id="data-security" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    Data Security
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {securityFeatures.map((feature) => (
                    <div
                      key={feature.title}
                      className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/20 transition-all"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                          <feature.icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">
                          {feature.title}
                        </h3>
                      </div>
                      <ul className="space-y-2.5">
                        {feature.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-slate-400"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* ═══ DATA PRIVACY ═══ */}
              <section id="data-privacy" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Fingerprint className="w-5 h-5" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    Data Privacy & Compliance
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {privacyStandards.map((standard) => (
                    <div
                      key={standard.title}
                      className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/20 transition-all"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                          <standard.icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">
                          {standard.title}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed mb-4">
                        {standard.description}
                      </p>
                      {standard.link && (
                        <Link
                          href={standard.link}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                          Learn More{" "}
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* ═══ DATA RESIDENCY ═══ */}
              <section id="data-residency" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Server className="w-5 h-5" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    Data Residency
                  </h2>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-900/10 to-transparent border border-cyan-500/10">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3">
                        Primary Storage
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        All customer data is stored exclusively in <strong className="text-white">US-based, SOC 2 certified data centers</strong> located in the continental United States (Virginia and Oregon regions).
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3">
                        Backup & Redundancy
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Geo-redundant backups are maintained within US borders. No customer data is transferred to or stored in data centers outside the United States without explicit written consent.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3">
                        Custom Residency
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Enterprise clients can request custom data residency configurations including on-premise, private cloud, air-gapped, and region-specific deployments.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ═══ INDUSTRY COMPLIANCE ═══ */}
              <section id="industry-compliance" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    Industry-Specific Compliance
                  </h2>
                </div>

                <p className="text-slate-400 mb-8 leading-relaxed">
                  We serve clients across utilities, telecom, government, and
                  defense sectors. Our platform and processes are designed to
                  meet the unique compliance requirements of each industry.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {industryCompliance.map((item) => (
                    <div
                      key={item.title}
                      className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-amber-500/20 transition-all"
                    >
                      <div className="flex items-center gap-3 mb-1">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-amber-400/60 mb-3 pl-11">
                        {item.sector}
                      </p>
                      <p className="text-sm text-slate-400 leading-relaxed pl-11">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ═══ LICENSING & IP ═══ */}
              <section id="licensing" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    Licensing & Intellectual Property
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Client Data & Deliverable Ownership
                    </h3>
                    <ul className="space-y-2.5">
                      {[
                        "Clients retain full ownership of all uploaded data, maps, and generated deliverables",
                        "Mapifyit does not claim any IP rights over client-generated content or geospatial data",
                        "Upon contract termination, all client data is returned or securely deleted per our data retention policy",
                        "Clear IP assignment clauses available in enterprise contracts",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-slate-400"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Software & Platform Licensing
                    </h3>
                    <ul className="space-y-2.5">
                      {[
                        "Mapifyit operates a proprietary geospatial technology stack built in-house",
                        "All third-party components used are properly commercially licensed or open-source (MIT/Apache 2.0)",
                        "We maintain a Software Bill of Materials (SBOM) for supply chain transparency",
                        "Export control compliance (ITAR/EAR) is available for qualified defense and government clients",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-slate-400"
                        >
                          <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* ═══ INSURANCE ═══ */}
              <section id="insurance" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    Insurance Coverage
                  </h2>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-green-900/10 to-transparent border border-green-500/10">
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    Mapifyit maintains comprehensive insurance coverage to
                    protect our clients and partners. Certificates of insurance
                    are available upon request.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Professional Liability (E&O)",
                        description:
                          "Covers errors, omissions, and professional negligence in our GIS and mapping services delivery.",
                      },
                      {
                        title: "Cyber Liability Insurance",
                        description:
                          "Comprehensive coverage for data breaches, cyber incidents, and associated remediation costs.",
                      },
                      {
                        title: "General Liability Insurance",
                        description:
                          "Commercial general liability coverage for business operations, property damage, and bodily injury.",
                      },
                    ].map((ins) => (
                      <div key={ins.title}>
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="w-4 h-4 text-green-400" />
                          <h4 className="text-sm font-bold text-white">
                            {ins.title}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {ins.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ═══ CONTACT CTA ═══ */}
              <section
                id="contact"
                className="scroll-mt-32 pt-8 mt-12 border-t border-white/10"
              >
                <h2 className="text-2xl font-bold text-white mb-6">
                  Questions About Our Security Posture?
                </h2>
                <div className="bg-gradient-to-br from-emerald-900/20 to-blue-900/10 border border-emerald-500/20 p-8 rounded-2xl">
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    Our security team is available to answer questions, provide
                    compliance documentation, share audit reports (under NDA),
                    and complete security questionnaires for enterprise
                    evaluation.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/contact-us"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-600/20"
                    >
                      Contact Security Team{" "}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/data-processing-agreement"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all"
                    >
                      View DPA{" "}
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                    <a
                      href="mailto:security@mapifyit.com"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all"
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
