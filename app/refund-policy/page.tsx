import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { RotateCcw, ArrowLeft, AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | AdVibe Tech - Google & Meta Ads Policy Compliant',
  description: 'Official Refund, Return, and Cancellation Policy for custom election merchandise and digital marketing services by AdVibe Tech (advibetech.top), Rajampet.',
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
          <span className="text-slate-200 font-medium">Refund & Cancellation Policy</span>
        </div>

        {/* Page Header */}
        <div className="space-y-3 border-b border-slate-800 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
            <span>Customer Protection & Custom Merchandise Terms</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Refund & Cancellation Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Effective Date: January 1, 2024 &bull; Last Revised: November 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
          {/* 1. Nature of Custom-Made Goods */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              1. Custom-Manufactured Promotional Goods Notice
            </h2>
            <p>
              At <strong>AdVibe Tech</strong> (Proprietor: SURA DEVI PRASAD, Rajampet, AP), all promotional merchandise—including double-sided acrylic keychains, election campaign T-shirts, mobile back stickers, hand placards, and ribbon badges—is custom fabricated and printed according to candidate-specific specifications (candidate photo, name, election symbol, ward/panchayat details).
            </p>
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs space-y-1.5">
              <p className="font-bold flex items-center gap-1.5 text-amber-400">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Industry Standard Custom Goods Rule</span>
              </p>
              <p>
                Because custom-printed merchandise bearing a specific candidate&apos;s photo and election symbol cannot be resold, restocked, or repurposed, <strong>orders cannot be returned or refunded once digital proof approval has been given and print manufacturing has commenced.</strong>
              </p>
            </div>
          </section>

          {/* 2. Order Cancellation Prior to Manufacturing */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              2. Cancellation Before Production Begins
            </h2>
            <p>
              We understand campaign dynamics can change rapidly. If you need to cancel your order:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Before Proof Approval / Before Production:</strong> You may cancel your order within 6 hours of initial booking or before you approve the digital design mockup. In this scenario, any advance payment received will be refunded in full minus a nominal design setup / file processing fee of ₹500.
              </li>
              <li>
                <strong>After Proof Approval / In Active Production:</strong> Once the design proof is approved via WhatsApp and materials (acrylic sheets, fabrics, inks) are loaded onto machines, the order enters irrevocable production. No cancellation or cash refund can be provided at this stage.
              </li>
            </ul>
          </section>

          {/* 3. Replacement for Manufacturing Defects & Transit Damage */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-emerald-400 rounded-full inline-block" />
              3. 100% Free Replacement for Manufacturing Defects
            </h2>
            <p>
              We take pride in our manufacturing quality. If your shipment contains any valid manufacturing defect or transit damage, we provide a <strong>100% free replacement guarantee</strong>:
            </p>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
              <p className="font-bold text-emerald-400">Qualifying Replacement Conditions:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                <li>Physical cracking or shattering of acrylic keychains sustained during freight transit.</li>
                <li>Clear printing misprints (e.g., distorted photo, illegible text, inverted symbol) that differ substantially from the approved digital proof.</li>
                <li>Defective stitching or wrong garment sizes delivered in campaign T-shirt bundles.</li>
                <li>Quantity shortages where delivered count is less than the invoiced quantity.</li>
              </ul>
            </div>
            <p className="text-xs text-slate-400">
              <strong>Reporting Requirement:</strong> To request a replacement, the client must contact our team within <strong>48 hours of parcel delivery</strong> via WhatsApp (<a href="tel:+917075209795" className="text-blue-400 underline">+91 7075209795</a>) or email (<a href="mailto:support@advibetech.com" className="text-amber-400 underline">support@advibetech.com</a>), providing parcel unboxing video footage and close-up photographs showing the damaged or defective units.
            </p>
            <p className="text-xs text-slate-400">
              Upon prompt review, replacement units will be rushed into priority production and dispatched at our expense via express cargo within 24 to 48 hours.
            </p>
          </section>

          {/* 4. Digital Marketing Services Refund Terms */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              4. Digital Marketing & Advertising Services
            </h2>
            <p>
              For digital campaign services (Meta / Instagram ads setup, WhatsApp broadcast marketing, video reels editing, graphic design):
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Ad budgets spent directly with third-party advertising platforms (Meta Platforms Inc., Google LLC) are non-refundable once impressions have been delivered.</li>
              <li>Agency management retainers can be cancelled for subsequent billing cycles with 3 days prior notice before the campaign week starts.</li>
              <li>Creative design charges are non-refundable once custom reels, flyers, or banners have been created and delivered to the client.</li>
            </ul>
          </section>

          {/* 5. Refund Processing Timelines */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              5. Refund Payment Method & Processing Timeline
            </h2>
            <p>
              Where an eligible monetary refund is approved by our management (such as pre-production cancellation):
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Refunds are credited directly back to the original source bank account or UPI ID used during the transaction.</li>
              <li>Refund processing turnaround is <strong>5 to 7 business days</strong> from the date of formal refund approval.</li>
              <li>A digital confirmation receipt will be shared via WhatsApp and email once the refund transaction is completed.</li>
            </ul>
          </section>

          {/* 6. Grievance & Claims Contact */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              6. Helpdesk & Support Desk
            </h2>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5 text-xs">
              <p><strong className="text-white">Customer Support Lead:</strong> SURA DEVI PRASAD</p>
              <p><strong className="text-white">Direct WhatsApp / Phone:</strong> +91 7075209795</p>
              <p><strong className="text-white">Email Address:</strong> support@advibetech.com</p>
              <p><strong className="text-white">Operating Hours:</strong> Monday – Sunday, 9:00 AM – 9:00 PM IST</p>
              <p><strong className="text-white">Factory Address:</strong> 6/279 B, Balaji Nagar, Rajampet, Kadapa Dist, AP - 516115</p>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
          <Link href="/terms" className="text-xs text-slate-400 hover:text-white">
            &larr; Terms & Conditions
          </Link>
          <Link href="/shipping-policy" className="text-xs text-amber-400 hover:underline">
            Shipping & Delivery Policy &rarr;
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
