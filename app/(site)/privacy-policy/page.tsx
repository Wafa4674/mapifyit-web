import React from 'react';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { Shield, FileText, Lock, Eye, Database, Globe, UserCheck, Settings, Bell, Server } from 'lucide-react';

export default function PrivacyPolicyPage() {
    const sections = [
        { id: "who-we-are", label: "Who we are" },
        { id: "comments", label: "Comments" },
        { id: "media", label: "Media" },
        { id: "cookies", label: "Cookies" },
        { id: "embedded-content", label: "Embedded content" },
        { id: "data-sharing", label: "Data sharing" },
        { id: "data-retention", label: "Data retention" },
        { id: "data-rights", label: "Data rights" },
        { id: "ccpa", label: "CCPA (California)" },
        { id: "gdpr", label: "GDPR (Europe)" },
        { id: "data-residency", label: "Data residency" },
    ];

    return (
        <div className="pt-32 pb-24 bg-[#030712] min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Navigation Sidebar */}
                    <div className="lg:col-span-3 hidden lg:block">
                        <div className="sticky top-32">
                            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Privacy Policy</h3>
                            <nav className="flex flex-col space-y-3">
                                {sections.map((section) => (
                                    <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                                    >
                                        {section.label}
                                    </a>
                                ))}
                            </nav>

                            <div className="mt-12 flex flex-col space-y-4">
                                <Link href="/terms-of-service" className="flex items-center gap-3 text-slate-500 hover:text-slate-300 text-sm transition-colors group">
                                    <FileText className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                                    Read Terms of Service
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-8">
                        <Reveal>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold uppercase tracking-wider text-blue-400 mb-6">
                                <Shield className="w-3.5 h-3.5" /> Data Security & Privacy
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Privacy Policy.</h1>
                        </Reveal>

                        <p className="text-lg text-slate-400 mb-12 leading-relaxed">
                            We are committed to maintaining the highest standard of data privacy and security for our enterprise users. This policy outlines how we handle data on our platform.
                        </p>

                        <div className="space-y-16">
                            {/* Sections */}
                            <section id="who-we-are" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-cyan-400">
                                        <Globe className="w-4 h-4" />
                                    </div>
                                    <h2 className="text-2xl font-semibold text-white">Who we are</h2>
                                </div>
                                <div className="text-slate-400 leading-relaxed pl-11">
                                    <p>Our website address is: <a href="https://mapifyit.com" className="text-blue-400 hover:text-blue-300 transition-colors">https://mapifyit.com</a>.</p>
                                </div>
                            </section>

                            <section id="comments" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-blue-400">
                                        <Bell className="w-4 h-4" />
                                    </div>
                                    <h2 className="text-2xl font-semibold text-white">Comments</h2>
                                </div>
                                <div className="text-slate-400 leading-relaxed space-y-4 pl-11">
                                    <p>When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.</p>
                                    <p>An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: <a href="https://automattic.com/privacy/" className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">automattic.com/privacy</a>. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>
                                </div>
                            </section>

                            <section id="media" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-emerald-400">
                                        <Eye className="w-4 h-4" />
                                    </div>
                                    <h2 className="text-2xl font-semibold text-white">Media</h2>
                                </div>
                                <div className="text-slate-400 leading-relaxed pl-11">
                                    <p>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>
                                </div>
                            </section>

                            <section id="cookies" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-indigo-400">
                                        <Settings className="w-4 h-4" />
                                    </div>
                                    <h2 className="text-2xl font-semibold text-white">Cookies</h2>
                                </div>
                                <div className="text-slate-400 leading-relaxed space-y-4 pl-11 bg-white/[0.02] border border-white/5 p-6 rounded-xl">
                                    <p>If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment.</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li><strong className="text-slate-300">Login Page:</strong> We will set a temporary cookie to determine if your browser accepts cookies. This contains no personal data and is discarded when you close your browser.</li>
                                        <li><strong className="text-slate-300">Login Session:</strong> We run multiple cookies to save your login information and screen choices. Login cookies last two days, screen options last a year. "Remember Me" persists for two weeks.</li>
                                        <li><strong className="text-slate-300">Editing Content:</strong> An additional cookie is saved in your browser when editing articles. It includes no personal data and simply indicates the post ID. Expires after 1 day.</li>
                                    </ul>
                                </div>
                            </section>

                            <section id="embedded-content" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-cyan-400">
                                        <Database className="w-4 h-4" />
                                    </div>
                                    <h2 className="text-2xl font-semibold text-white">Embedded Content</h2>
                                </div>
                                <div className="text-slate-400 leading-relaxed space-y-4 pl-11">
                                    <p>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>
                                    <p>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content.</p>
                                </div>
                            </section>

                            <section id="data-sharing" className="scroll-mt-32">
                                <h2 className="text-2xl font-semibold text-white mb-4">Who we share your data with</h2>
                                <div className="text-slate-400 leading-relaxed">
                                    <p>If you request a password reset, your IP address will be included in the reset email. Visitor comments may be checked through an automated spam detection service.</p>
                                </div>
                            </section>

                            <section id="data-retention" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-blue-400">
                                        <Server className="w-4 h-4" />
                                    </div>
                                    <h2 className="text-2xl font-semibold text-white">Data Retention</h2>
                                </div>
                                <div className="text-slate-400 leading-relaxed space-y-4 pl-11">
                                    <p>If you leave a comment, the comment and its metadata are retained indefinitely. This ensures we can recognize and approve follow-up comments automatically.</p>
                                    <p>For users that register on our website, we store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (username changes are disallowed). Administrators also have view/edit access.</p>
                                </div>
                            </section>

                            <section id="data-rights" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-emerald-400">
                                        <UserCheck className="w-4 h-4" />
                                    </div>
                                    <h2 className="text-2xl font-semibold text-white">Your Data Rights</h2>
                                </div>
                                <div className="text-slate-400 leading-relaxed pl-11">
                                    <p>If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you. You can also request that we erase any personal data we hold about you. This does not include data we are legally obliged to keep.</p>
                                </div>
                            </section>

                            <section id="ccpa" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-amber-400">
                                        <Shield className="w-4 h-4" />
                                    </div>
                                    <h2 className="text-2xl font-semibold text-white">California Privacy (CCPA)</h2>
                                </div>
                                <div className="text-slate-400 leading-relaxed space-y-4 pl-11">
                                    <p>If you are a California resident, you have the right to request access to the personal information we collect, request deletion of your information, and opt-out of the sale of your personal information.</p>
                                    <p>Mapifyit does not sell your personal information to third parties. For any CCPA-related inquiries, please contact us at <a href="mailto:hi@mapifyit.com" className="text-blue-400">privacy@mapifyit.com</a>.</p>
                                </div>
                            </section>

                            <section id="gdpr" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-indigo-400">
                                        <Globe className="w-4 h-4" />
                                    </div>
                                    <h2 className="text-2xl font-semibold text-white">European Privacy (GDPR)</h2>
                                </div>
                                <div className="text-slate-400 leading-relaxed space-y-4 pl-11">
                                    <p>For users in the European Economic Area (EEA), we process your personal data in accordance with the General Data Protection Regulation (GDPR). Our legal basis for processing includes your consent, the performance of a contract, and our legitimate business interests.</p>
                                    <p>You have the right to access, correct, or delete your personal data, as well as the right to data portability and restriction of processing.</p>
                                </div>
                            </section>

                            <section id="data-residency" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-blue-400">
                                        <Server className="w-4 h-4" />
                                    </div>
                                    <h2 className="text-2xl font-semibold text-white">Data Residency & Hosting</h2>
                                </div>
                                <div className="text-slate-400 leading-relaxed space-y-4 pl-11">
                                    <p>Mapifyit utilizes US-based servers for data storage and processing. We primarily use SOC 2 Type II certified data centers located within the United States to ensure the highest levels of security and compliance.</p>
                                    <p>Client data is stored in isolated environments, and we offer dedicated residency options for enterprise clients requiring specific geographic constraints.</p>
                                </div>
                            </section>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
