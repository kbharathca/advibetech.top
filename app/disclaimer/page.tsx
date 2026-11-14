import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AlertCircle, ArrowLeft, ShieldCheck, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Non-Affiliation Notice & Information | AdVibe Tech',
  description: 'Important customer information regarding AdVibe Tech commercial manufacturing independence and non-affiliation with government bodies or political parties.',
};

export default function DisclaimerPage() {
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
          <span className="text-slate-200 font-medium">Non-Affiliation Notice</span>
        </div>

        {/* Page Header */}
        <div className="space-y-3 border-b border-slate-800 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            <span>Customer Notice & Information</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Non-Affiliation & Service Notice
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Important information for candidates, campaign teams, and visitors &bull; AdVibe Tech
          </p>
        </div>

        {/* Highlight Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-500/15 via-slate-900 to-blue-500/15 border-2 border-amber-500/30 space-y-3">
          <div className="flex items-center gap-2 text-amber-400 font-extrabold text-sm sm:text-base">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>About Our Independence</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            <strong>AdVibe Tech</strong> is a privately owned and operated commercial printing workshop and digital marketing agency based in Rajampet, Kadapa District, Andhra Pradesh (Proprietor: SURA DEVI PRASAD).
            <br />
            <strong>AdVibe Tech is an independent private enterprise and is NOT affiliated with, authorized by, endorsed by, or connected with the Election Commission of India, any State Election Commission, any government body, or any political party.</strong>
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              1. Independent Commercial Services
            </h2>
            <p>
              We are a private manufacturing workshop. We do not issue official voter identification, government certificates, or ballot papers. We produce customized promotional merchandise (acrylic keychains, printed T-shirts, mobile stickers, placards, and badges) and manage digital advertising on social media for clients who hire our services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              2. Open & Equal Service to All Candidates
            </h2>
            <p>
              We treat all customers equally. Whether you are representing a national party, a regional party, or contesting as an independent candidate, you receive the exact same high-quality materials and factory-direct pricing.
            </p>
            <p>
              Any photos of past products, election symbols, or sample color themes (such as yellow, blue, red, green, or tricolor) shown on this website are for demonstration of our printing sharpness and fabric quality. Displaying sample designs does not mean we endorse any particular party or candidate.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              3. Campaign Tools & Outcome Information
            </h2>
            <p>
              Promotional items like keychains, T-shirts, stickers, and digital ads are valuable communication tools designed to increase candidate visibility and voter awareness in your locality.
            </p>
            <p className="text-xs bg-slate-900 p-3.5 rounded-xl border border-slate-800 text-slate-300">
              * Please note: Election results depend solely on voters, candidate reputation, and local campaign efforts. AdVibe Tech supplies publicity materials and does not promise, represent, or guarantee election victory or specific vote numbers.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              4. Campaign Guidelines & Local Rules
            </h2>
            <p>
              Candidates and campaign managers are responsible for ensuring that their campaign slogans, rally materials, and promotional spending follow local guidelines and the Model Code of Conduct set by election authorities.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              5. Direct Contact & Verification
            </h2>
            <p>
              If you have any questions or wish to verify details directly with our workshop founder:
            </p>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-xs">
              <p><strong className="text-white">Proprietor:</strong> SURA DEVI PRASAD</p>
              <p><strong className="text-white">Direct Phone:</strong> <a href="tel:+917075209795" className="text-blue-400 font-bold underline">+91 7075209795</a></p>
              <p><strong className="text-white">Email:</strong> <a href="mailto:contact@advibetech.top" className="text-amber-400 underline">contact@advibetech.top</a></p>
              <p><strong className="text-white">Workshop:</strong> 6/279 B, Balaji Nagar, Rajampet, Kadapa District, Andhra Pradesh - 516115</p>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
          <Link href="/shipping-policy" className="text-xs text-slate-400 hover:text-white">
            &larr; Shipping & Delivery Timelines
          </Link>
          <Link href="/contact" className="text-xs text-amber-400 hover:underline">
            Contact & Workshop Location &rarr;
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
