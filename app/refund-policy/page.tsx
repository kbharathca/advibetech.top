import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { RotateCcw, ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Refund & Quality Guarantee Policy | AdVibe Tech',
  description: 'Understand AdVibe Tech quality guarantee, custom merchandise replacement terms, and order cancellation guidelines.',
};

export default function RefundPolicyPage() {
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
          <span className="text-slate-200 font-medium">Refund & Quality Policy</span>
        </div>

        {/* Page Header */}
        <div className="space-y-3 border-b border-slate-800 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Free Defect Replacement Guarantee</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Refund & Quality Guarantee Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Clear guidelines on order changes, cancellations, and quality protection &bull; AdVibe Tech
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              1. Custom-Made Merchandise
            </h2>
            <p>
              Every keychain, T-shirt, mobile sticker, and placard we produce is custom-printed with your specific candidate photo, election symbol, name, and campaign colors.
            </p>
            <p>
              Because these items are manufactured uniquely for you and cannot be reused or resold to others, customized merchandise cannot be returned or refunded once printing has been approved and started.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              2. Changing or Canceling an Order
            </h2>
            <p>
              We know political campaigns move fast and circumstances can change quickly:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Before You Approve the Design:</strong> You can make unlimited changes to photos, spelling, or colors. If you need to cancel your order before you give the final approval for printing, we will refund your deposit in full (minus ₹500 for the designer mockup creation time).
              </li>
              <li>
                <strong>After You Approve the Design:</strong> Once you give us the go-ahead on WhatsApp and our printers start running, orders enter active production and cannot be cancelled.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-emerald-400 rounded-full inline-block" />
              3. 100% Free Replacement for Damaged or Defective Items
            </h2>
            <p>
              We take pride in our workmanship. If your shipment arrives with any manufacturing flaw or was damaged during transit, we replace it completely free of charge:
            </p>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
              <p className="font-bold text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>What We Cover With Free Replacements:</span>
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                <li>Keychains cracked or broken during road transit or cargo handling.</li>
                <li>Printing errors that differ noticeably from your approved digital mockup.</li>
                <li>Incorrect garment sizes or sewing defects in campaign T-shirts.</li>
                <li>Any box short on count compared to your invoice.</li>
              </ul>
            </div>
            <p className="text-xs text-slate-300">
              <strong>How to report:</strong> Simply send a quick video or clear photos of the damaged items to our WhatsApp (<a href="tel:+917075209795" className="text-blue-400 font-bold underline">+91 7075209795</a>) within <strong>48 hours of parcel delivery</strong>. We will prioritize your replacement and dispatch new items right away.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              4. Digital Marketing Services
            </h2>
            <p>
              For digital campaign services (such as Instagram ads, Facebook boosts, and video editing): ad budgets already paid to social media platforms are non-refundable once ads start running on screens. You can pause or adjust your campaign schedule at any time with 24 hours notice.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              5. Friendly Help & Direct Assistance
            </h2>
            <p>
              Our goal is 100% satisfaction and smooth campaigning for you. If you ever have a concern or problem with your delivery, contact owner Sura Devi Prasad directly:
            </p>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-xs">
              <p><strong className="text-white">Proprietor:</strong> SURA DEVI PRASAD</p>
              <p><strong className="text-white">Phone / WhatsApp:</strong> +91 7075209795</p>
              <p><strong className="text-white">Email:</strong> contact@advibetech.top</p>
              <p><strong className="text-white">Workshop:</strong> Balaji Nagar, Rajampet, Kadapa District, AP</p>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
          <Link href="/terms" className="text-xs text-slate-400 hover:text-white">
            &larr; Terms & Conditions
          </Link>
          <Link href="/shipping-policy" className="text-xs text-amber-400 hover:underline">
            Shipping & Delivery Timelines &rarr;
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
