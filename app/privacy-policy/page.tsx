import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ShieldCheck, ArrowLeft, Mail, Phone, MapPin, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | AdVibe Tech - Google & Meta Ads Policy Compliant',
  description: 'Official Privacy Policy of AdVibe Tech (advibetech.top). Disclosing data collection, cookies, Meta Pixel, Google Ads tracking, and user privacy rights under the DPDP Act.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-amber-400 transition flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-200 font-medium">Privacy Policy</span>
        </div>

        {/* Page Header */}
        <div className="space-y-3 border-b border-slate-800 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Digital Personal Data Protection (DPDP) & Ads Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Effective Date: January 1, 2024 &bull; Last Updated: November 2026
          </p>
        </div>

        {/* Legal Text Sections */}
        <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              1. Introduction & Data Controller Information
            </h2>
            <p>
              Welcome to <strong>AdVibe Tech</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us,&rdquo; accessible at <a href="https://advibetech.top" className="text-amber-400 underline">advibetech.top</a>). We are a dedicated commercial printing and manufacturing enterprise specialized in customized political and election promotional merchandise (double-sided acrylic keychains, campaign T-shirts, mobile stickers, placards, badges) alongside digital advertising and marketing services.
            </p>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-xs">
              <p><strong className="text-white">Legal Entity / Trade Name:</strong> AdVibe Tech</p>
              <p><strong className="text-white">Proprietor & Founder:</strong> SURA DEVI PRASAD</p>
              <p><strong className="text-white">Operational & Manufacturing Unit:</strong> 6/279 B, Balaji Nagar, Rajampet, Kadapa District, Andhra Pradesh - 516115, India</p>
              <p><strong className="text-white">Official Contact Email:</strong> support@advibetech.com</p>
              <p><strong className="text-white">Direct Phone / WhatsApp:</strong> +91 7075209795</p>
            </div>
            <p>
              This Privacy Policy details how we collect, store, handle, and protect your personal information when you visit our website, submit quotation requests, book merchandise, or interact with our digital marketing campaigns.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              2. Information We Collect
            </h2>
            <p>We only collect information necessary to provide customized quotations, fulfill printing orders, and manage client communications:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Direct Inquiries & Order Submissions:</strong> Name of candidate or authorized contact person, 10-digit mobile number, village / mandal / district, election symbol name or specifications, color theme preference, item quantities, and special manufacturing instructions.
              </li>
              <li>
                <strong>Custom Artwork & Printing Assets:</strong> Candidate portraits, high-resolution photographs, party colors, logos, and authorized campaign slogans provided for printing on keychains, t-shirts, stickers, and placards.
              </li>
              <li>
                <strong>Automated Log Data:</strong> IP address, device type, operating system, browser version, pages visited, time spent, and referral sources, collected automatically for server security and analytics.
              </li>
              <li>
                <strong>WhatsApp Messaging Data:</strong> When you initiate a chat with our proprietor via WhatsApp (+91 7075209795), your telephone number and message history are retained on encrypted WhatsApp Business endpoints to process your order.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              3. Cookies, Meta Pixel & Google Advertising Technologies
            </h2>
            <p>
              In full compliance with <strong>Google Ads Policy</strong> and <strong>Meta Advertising Standards</strong>, we disclose our use of tracking technologies:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Google Ads & Google Analytics:</strong> We may use Google Ads remarketing tags and conversion tracking cookies to analyze landing page traffic, detect click fraud, and optimize campaign performance. Google uses cookies to serve ads based on prior visits. You may opt out via Google Ads Settings.
              </li>
              <li>
                <strong>Meta Pixel (Facebook & Instagram):</strong> We utilize the Meta Pixel and Conversions API to measure advertising effectiveness for election merchandise and digital marketing services. This helps us ensure that ads shown to prospective candidates and political workers are relevant and not repetitive.
              </li>
              <li>
                <strong>Local Storage / Essential Cookies:</strong> We store minimal session identifiers, cookie consent status, and user UI preferences locally in your browser. These do not contain sensitive personal data.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              4. How We Use Your Information
            </h2>
            <p>We process your personal information strictly for legitimate commercial business purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Generating formal price quotes and preparing digital sample mockups for approval.</li>
              <li>Manufacturing, custom laser-cutting, acrylic casing, and printing of ordered merchandise.</li>
              <li>Dispatching consignments through logistics carriers (APSRTC Cargo, courier partners, India Post) and sharing tracking numbers.</li>
              <li>Executing targeted digital ad campaigns (Meta ads, Instagram reels, WhatsApp outreach) requested by candidates.</li>
              <li>Issuing GST/commercial invoices and complying with statutory tax obligations.</li>
            </ul>
            <p className="text-amber-400 font-semibold text-xs bg-amber-500/10 p-3 rounded-lg border border-amber-500/20">
              * Zero Data Brokerage Guarantee: We do NOT sell, rent, lease, or trade candidate contact numbers, voter lists, or inquiries to any political parties, third-party marketing brokers, or advertising networks.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              5. Data Sharing & Third-Party Processors
            </h2>
            <p>We share necessary data solely with the following trusted service providers:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Logistics & Freight Partners:</strong> APSRTC / TSRTC Cargo counters, DTDC, and postal services strictly to deliver packages to your village or town.</li>
              <li><strong>WhatsApp & Meta:</strong> For facilitating instant customer communications and executing candidate-approved digital ads.</li>
              <li><strong>Cloud & Hosting Infrastructure:</strong> Cloudflare and web servers for secure site delivery and DDoS protection.</li>
              <li><strong>Law Enforcement / Statutory Authorities:</strong> If required by a lawful judicial order or statutory mandate under the Information Technology Act, 2000.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              6. Data Security & Storage
            </h2>
            <p>
              We implement industry-standard administrative, physical, and technical safeguards (SSL/TLS HTTPS 256-bit encryption, restricted staff access, and secure local backups) to prevent unauthorized access, loss, or alteration of your artwork files and contact details.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              7. Your Rights Under Indian DPDP Act
            </h2>
            <p>
              Under the Digital Personal Data Protection Act, 2023 (DPDP Act) and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, you have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Request a summary of your personal information collected by us.</li>
              <li>Request correction or updating of any inaccurate contact details.</li>
              <li>Request erasure of your artwork photos and contact details once your manufacturing order and delivery are complete.</li>
              <li>Withdraw consent for receiving marketing or promotional communications at any time.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              8. Grievance Officer & Contact Information
            </h2>
            <p>
              If you have any questions, feedback, or grievance regarding our privacy practices or data handling, please contact our designated Grievance Officer:
            </p>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5 text-xs">
              <p><strong className="text-white">Designated Officer:</strong> SURA DEVI PRASAD</p>
              <p><strong className="text-white">Organization:</strong> AdVibe Tech</p>
              <p><strong className="text-white">Address:</strong> 6/279 B, Balaji Nagar, Rajampet, Kadapa District, Andhra Pradesh - 516115</p>
              <p><strong className="text-white">Email:</strong> <a href="mailto:support@advibetech.com" className="text-amber-400 underline">support@advibetech.com</a></p>
              <p><strong className="text-white">Phone / WhatsApp:</strong> <a href="tel:+917075209795" className="text-blue-400 underline">+91 7075209795</a></p>
            </div>
          </section>
        </div>

        {/* Bottom CTA */}
        <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
          <Link href="/" className="text-xs text-amber-400 hover:underline">
            &larr; Return to Homepage
          </Link>
          <Link href="/terms" className="text-xs text-slate-400 hover:text-white">
            Read Terms & Conditions &rarr;
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
