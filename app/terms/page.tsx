import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ShieldAlert, ArrowLeft, FileText, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms and Conditions | AdVibe Tech - Commercial Policy & Client Agreement',
  description: 'Official Terms of Service and Manufacturing Agreement for AdVibe Tech (advibetech.top). Disclosing ordering procedures, client representations, and electoral compliance.',
};

export default function TermsPage() {
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
          <span className="text-slate-200 font-medium">Terms & Conditions</span>
        </div>

        {/* Page Header */}
        <div className="space-y-3 border-b border-slate-800 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5 text-blue-400" />
            <span>Commercial Manufacturing & Marketing Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Effective Date: January 1, 2024 &bull; Last Revised: November 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
          {/* 1. Overview */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, submitting inquiries on <strong className="text-white">advibetech.top</strong>, or placing customized manufacturing orders via WhatsApp with <strong>AdVibe Tech</strong> (Proprietor: SURA DEVI PRASAD), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue using this site and our services immediately.
            </p>
          </section>

          {/* 2. Nature of Business & Commercial Relationship */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              2. Commercial Vendor & Non-Partisan Service
            </h2>
            <p>
              AdVibe Tech operates purely as an independent, third-party commercial printing manufacturer and digital marketing consultant. We provide custom merchandise fabrication (keychains, t-shirts, mobile stickers, placards, badges) and digital advertising execution to candidates, party cadres, independent candidates, and commercial businesses on an open, commercial, and strictly non-discriminatory basis.
            </p>
            <p className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300">
              <strong className="text-amber-400">Non-Partisan Commitment:</strong> AdVibe Tech does not endorse, support, or affiliate with any political ideology, party, or candidate. Our provision of printing or marketing services does not constitute an endorsement of the client&apos;s political beliefs, campaign promises, or conduct.
            </p>
          </section>

          {/* 3. Client Representations & Intellectual Property Rights */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              3. Client Authorization & Content Ownership Warranty
            </h2>
            <p>
              When submitting candidate names, portrait photos, election symbols, registered trade logos, party flags, or slogans for custom merchandise manufacturing or digital ad creative production, the client represents and warrants that:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>The client is the candidate, an officially nominated campaign manager, or an authorized representative legally entitled to use the submitted materials.</li>
              <li>The submitted content does not violate any copyright, trademark, right of publicity, or proprietary right of any third party.</li>
              <li>The candidate has officially been allotted or is legally entitled to seek votes under the designated symbol, or has provided explicit written consent.</li>
              <li>The client shall indemnify, defend, and hold harmless AdVibe Tech and its proprietor against any claims, losses, or legal costs arising from trademark infringement or unauthorized use of personal likenesses provided by the client.</li>
            </ul>
          </section>

          {/* 4. Model Code of Conduct & Statutory Compliance */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              4. Election Commission Rules & Model Code of Conduct (MCC)
            </h2>
            <p>
              The client acknowledges and agrees that compliance with election laws is solely their legal responsibility:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Regulatory Permissions:</strong> The client is solely responsible for obtaining any necessary permissions or clearances from the Election Commission of India (ECI), State Election Commission, District Collector / Returning Officer (RO), and local police authorities prior to distributing merchandise or publishing ads.</li>
              <li><strong>Expense Accounting:</strong> The client is solely responsible for recording and reporting expenditure on election promotional merchandise and digital marketing within their statutory election expenditure limits. Commercial GST tax invoices will be provided upon request.</li>
              <li><strong>Model Code of Conduct:</strong> AdVibe Tech will decline to print content that contains hate speech, promotes communal disharmony, defames individuals, or violates the Indian Penal Code or MCC guidelines.</li>
            </ul>
          </section>

          {/* 5. Proofing, Production & Color Variances */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              5. Digital Proofing & Manufacturing Tolerances
            </h2>
            <p>
              Before mass printing, a digital mockup of the keychain, sticker, or t-shirt design is sent to the client via WhatsApp for review.
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Client Proof Approval:</strong> Once the client approves the digital proof (via text confirmation on WhatsApp or email), mass production is initiated immediately. AdVibe Tech is not responsible for typographical errors, spelling mistakes, or incorrect symbol numbers approved by the client.</li>
              <li><strong>Color Tolerance:</strong> Screen displays (RGB) inherently vary from physical print outputs (CMYK / Sublimation inks). A minor tolerance (±5-8%) in shade intensity is normal and accepted across the printing industry.</li>
            </ul>
          </section>

          {/* 6. Pricing, Payments & Taxes */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              6. Pricing & Payment Terms
            </h2>
            <p>
              Due to the personalized nature of customized merchandise:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Standard payment terms require an advance deposit (typically 50%) prior to raw material cutting and printing, with the balance cleared prior to dispatch or upon delivery via agreed cargo COD terms.</li>
              <li>Minimum Order Quantities (MOQs) are mandatory: 500 pcs for Keychains, 500 pcs for Mobile Stickers, and 25 pcs for T-Shirts.</li>
              <li>Prices quoted are subject to prevailing material rates, and valid for 7 calendar days from quotation.</li>
            </ul>
          </section>

          {/* 7. Limitation of Liability */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              7. Limitation of Liability & No Outcome Warranty
            </h2>
            <p>
              Under no circumstances shall AdVibe Tech, its proprietor (Sura Devi Prasad), or employees be liable for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Any election outcomes, vote totals, disqualifications, or political penalties incurred by candidates or parties.</li>
              <li>Unforeseen transit delays caused by road blockades, festival holidays, curfews, or third-party cargo disruptions beyond our reasonable control.</li>
              <li>Total aggregate liability for any proven manufacturing defect shall not exceed the actual invoiced purchase price paid by the customer for the specific defective items.</li>
            </ul>
          </section>

          {/* 8. Governing Law & Jurisdiction */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              8. Governing Law & Dispute Resolution
            </h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of India. Any legal dispute, claim, or proceeding arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in Rajampet / Kadapa District, Andhra Pradesh.
            </p>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
          <Link href="/privacy-policy" className="text-xs text-slate-400 hover:text-white">
            &larr; Privacy Policy
          </Link>
          <Link href="/refund-policy" className="text-xs text-amber-400 hover:underline">
            Refund & Cancellation Policy &rarr;
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
