import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FileText, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions | AdVibe Tech',
  description: 'Clear and simple customer terms for ordering custom election campaign merchandise and digital marketing services from AdVibe Tech.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-slate-950 text-slate-100 font-sans">
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
            <span>Customer Order & Service Guidelines</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Clear, straightforward guidelines for ordering with AdVibe Tech &bull; Last Updated: November 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
          {/* 1. Ordering With Us */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              1. Ordering & Custom Quotations
            </h2>
            <p>
              When you submit an order or request a quote on <strong className="text-white">advibetech.top</strong> or through WhatsApp (+91 7075209795), we work with you directly to confirm quantities, item types, color themes, and printing details. These terms explain how our design, production, and delivery process works from start to finish.
            </p>
          </section>

          {/* 2. Equal Service for Everyone */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              2. Open & Equal Service for All Candidates
            </h2>
            <p>
              AdVibe Tech is an independent commercial printing manufacturer. We are proud to serve candidates and organizers from all political parties as well as independent candidates equally and without discrimination. We treat every customer with professional care and prompt service.
            </p>
          </section>

          {/* 3. Your Photos, Slogans & Symbols */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              3. Providing Your Photos and Symbols
            </h2>
            <p>
              To customize your keychains, T-shirts, stickers, and placards, you provide us with candidate portrait photos, names, symbols, and slogans. When you share these assets with us, you confirm that you are the candidate or an authorized campaign worker with permission to use them.
            </p>
          </section>

          {/* 4. Design Approval Before Printing */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              4. You Approve the Design Before We Print
            </h2>
            <p>
              We always send you a clear digital mockup of your keychain, T-shirt, or sticker on WhatsApp before mass production begins.
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Please check spelling, symbol details, phone numbers, and photos carefully.</li>
              <li>Once you approve the design on WhatsApp, our machines begin cutting acrylic, printing films, and stitching.</li>
              <li>Because all items are custom-made specifically for your campaign, orders cannot be changed or cancelled after proof approval.</li>
            </ul>
          </section>

          {/* 5. Minimum Order Quantities & Fair Pricing */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              5. Minimum Order Quantities (MOQ) & Payment
            </h2>
            <p>
              Because customized printing requires specialized setup and machine batching, minimum order quantities apply:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Double-Sided Keychains:</strong> Minimum 500 pieces</li>
              <li><strong>Glossy Mobile Stickers:</strong> Minimum 500 pieces</li>
              <li><strong>Custom Campaign T-Shirts:</strong> Minimum 25 pieces</li>
              <li><strong>Combo Packs:</strong> Pre-bundled packages with special bulk savings</li>
            </ul>
            <p className="pt-1">
              An advance deposit is standard to begin production, with the balance cleared prior to dispatch or upon parcel pickup as agreed in your quote.
            </p>
          </section>

          {/* 6. Campaign Guidelines & Local Rules */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              6. Campaign Guidelines & Local Rules
            </h2>
            <p>
              Campaign teams are responsible for ensuring that their campaign materials, rally items, and advertising comply with local election rules, police permissions, and the Model Code of Conduct. We provide commercial printing and promotional tools to assist your voter outreach.
            </p>
          </section>

          {/* 7. Need Help or Have Questions? */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              7. Questions About Your Order?
            </h2>
            <p>
              If you ever have any questions about your order, need an updated delivery estimate, or want to re-order additional batches, call or message us directly at <a href="tel:+917075209795" className="text-blue-400 font-bold underline">+91 7075209795</a>. We are always glad to assist you.
            </p>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
          <Link href="/privacy-policy" className="text-xs text-slate-400 hover:text-white">
            &larr; Privacy Policy
          </Link>
          <Link href="/refund-policy" className="text-xs text-amber-400 hover:underline">
            Refund & Quality Guarantee Policy &rarr;
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
