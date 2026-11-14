import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ShieldCheck, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | AdVibe Tech',
  description: 'Learn how AdVibe Tech protects your personal details, order specifications, and campaign artwork.',
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
            <span>Customer Privacy & Data Protection</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Last Updated: November 2026 &bull; AdVibe Tech (advibetech.top)
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              1. Who We Are & Our Commitment to Your Privacy
            </h2>
            <p>
              Welcome to <strong>AdVibe Tech</strong>. We manufacture customized promotional items (such as double-sided acrylic keychains, campaign T-shirts, mobile back stickers, and placards) and offer digital marketing services across Andhra Pradesh, Telangana, and across India.
            </p>
            <p>
              We treat your contact information and campaign materials with absolute confidentiality and respect. This page clearly explains what information we collect when you order or request a quote, how we use it, and how we keep it safe.
            </p>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-xs">
              <p><strong className="text-white">Business Name:</strong> AdVibe Tech</p>
              <p><strong className="text-white">Proprietor:</strong> SURA DEVI PRASAD</p>
              <p><strong className="text-white">Workshop Address:</strong> 6/279 B, Balaji Nagar, Rajampet, Kadapa District, Andhra Pradesh - 516115</p>
              <p><strong className="text-white">Phone & WhatsApp:</strong> +91 7075209795</p>
              <p><strong className="text-white">Email:</strong> contact@advibetech.top</p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              2. Information We Collect to Fulfill Your Order
            </h2>
            <p>We only ask for details needed to create your design mockups and deliver your order:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Contact Information:</strong> Your name or candidate name, mobile phone number, and delivery location (village, mandal, district).
              </li>
              <li>
                <strong>Printing Assets:</strong> Candidate photos, election symbols, color preferences, and slogans you want printed on keychains, T-shirts, or stickers.
              </li>
              <li>
                <strong>Order Specifications:</strong> Quantity required, sizes, packaging instructions, and delivery deadlines.
              </li>
              <li>
                <strong>WhatsApp Inquiries:</strong> When you message us on WhatsApp, your phone number and conversation are kept to help coordinate proofing and delivery.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              3. How We Use Your Details
            </h2>
            <p>Your details are used exclusively to complete your requested services:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Preparing accurate price estimates and digital sample mockups for your approval.</li>
              <li>Printing, assembling, and packaging your custom merchandise.</li>
              <li>Handing parcels over to RTC bus cargo or courier partners and sharing your tracking number.</li>
              <li>Managing digital marketing campaigns if requested by you.</li>
              <li>Providing GST or commercial bills for your campaign accounting.</li>
            </ul>
            <p className="text-amber-400 font-semibold text-xs bg-amber-500/10 p-3 rounded-lg border border-amber-500/20">
              * Privacy Guarantee: We never sell, rent, or share your phone number, voter lists, or candidate details with any third parties, other candidates, or brokers.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              4. Cookies & Online Advertising
            </h2>
            <p>
              Like most modern websites, we use standard cookies to help our site load quickly and smoothly. We also run online ads on Google and Meta (Facebook and Instagram) to introduce our printing services to candidates and organizers looking for quality campaign merchandise. These tools help us show relevant ads and measure how visitors find us. You can adjust your browser cookie settings anytime.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              5. Sharing with Delivery Partners Only
            </h2>
            <p>
              We only share your delivery name, address, and contact number with the delivery services transporting your parcel (such as APSRTC bus cargo, private express couriers, or India Post) so they can reach you without delay.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              6. Your Choices & Data Rights
            </h2>
            <p>
              You are always in control of your information. After your order is printed and delivered:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>You can ask us to delete your submitted photos, candidate graphics, and phone number from our systems.</li>
              <li>You can contact us anytime if you need an updated invoice or want to change your saved delivery address.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              7. Contact Us Directly
            </h2>
            <p>
              If you have any questions about how your information or photos are handled, please contact our proprietor directly:
            </p>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-xs">
              <p><strong className="text-white">Contact Person:</strong> SURA DEVI PRASAD</p>
              <p><strong className="text-white">Phone / WhatsApp:</strong> <a href="tel:+917075209795" className="text-blue-400 underline">+91 7075209795</a></p>
              <p><strong className="text-white">Email:</strong> <a href="mailto:contact@advibetech.top" className="text-amber-400 underline">contact@advibetech.top</a></p>
              <p><strong className="text-white">Address:</strong> 6/279 B, Balaji Nagar, Rajampet, Kadapa Dist, AP - 516115</p>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
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
