import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Truck, ArrowLeft, Clock, MapPin, PackageCheck, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shipping & Delivery Policy | AdVibe Tech - Fast Cargo & Doorstep Delivery',
  description: 'Official Shipping and Delivery Policy for AdVibe Tech (advibetech.top). Disclosing production timelines, APSRTC Cargo delivery across AP & Telangana, courier options, and pan-India dispatch.',
};

export default function ShippingPolicyPage() {
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
          <span className="text-slate-200 font-medium">Shipping & Delivery Policy</span>
        </div>

        {/* Page Header */}
        <div className="space-y-3 border-b border-slate-800 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Truck className="w-3.5 h-3.5 text-blue-400" />
            <span>State-Wide Cargo & Pan-India Dispatch Details</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Shipping & Delivery Policy
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
              1. Manufacturing Base & Fulfillment Location
            </h2>
            <p>
              All promotional merchandise orders placed with <strong>AdVibe Tech</strong> are manufactured, inspected, and dispatched directly from our dedicated production workshop located at:
            </p>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-xs">
              <p><strong className="text-white">Facility:</strong> AdVibe Tech Manufacturing Unit</p>
              <p><strong className="text-white">Address:</strong> 6/279 B, Balaji Nagar, Rajampet, Kadapa District, Andhra Pradesh - 516115, India</p>
              <p><strong className="text-white">Dispatch In-Charge:</strong> SURA DEVI PRASAD (+91 7075209795)</p>
            </div>
          </section>

          {/* 2. Production & Manufacturing Turnaround Time */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              2. Production & Fabrication Lead Times
            </h2>
            <p>
              Because merchandise is customized with candidate photos, names, and symbols, order fulfillment includes design proofing, machine fabrication, assembly, and quality checking:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="font-bold text-amber-400 block mb-1">Standard Orders (500 – 2,000 units)</span>
                <p className="text-slate-300">Manufactured and packaged within <strong>2 to 4 business days</strong> following digital proof sign-off.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="font-bold text-emerald-400 block mb-1">Bulk / Mega Campaign Combos (2,000+ units)</span>
                <p className="text-slate-300">Manufactured in staggered batches within <strong>3 to 5 business days</strong> to ensure immediate partial dispatch for rallies.</p>
              </div>
            </div>
          </section>

          {/* 3. Delivery Methods & Logistics Partners */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              3. Delivery Channels & Express Carriers
            </h2>
            <p>To ensure election candidates receive supplies before campaigning deadlines, we offer multiple shipping channels:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>APSRTC / TSRTC Bus Express Cargo (Recommended for AP & Telangana):</strong>
                <br />
                The fastest, most reliable method for election deliveries. Consignments are booked on direct state transport buses departing Rajampet and can be collected from the nearest district or mandal bus station cargo counter within <strong>24 to 48 hours</strong>.
              </li>
              <li>
                <strong>Doorstep Courier Delivery (DTDC / Professional Couriers / Delhivery):</strong>
                <br />
                Direct doorstep dispatch to your campaign office or residence. Delivery timeline is typically <strong>2 to 4 business days</strong> across South India.
              </li>
              <li>
                <strong>India Post Speed Post:</strong>
                <br />
                For remote rural gram panchayats lacking private courier coverage, we dispatch through Speed Post (3 to 6 business days).
              </li>
              <li>
                <strong>Self-Pickup / Factory Collection:</strong>
                <br />
                Candidates or authorized campaign workers are welcome to inspect and collect finished cartons directly from our Rajampet unit with prior notice.
              </li>
            </ul>
          </section>

          {/* 4. Estimated Transit Times by Region */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              4. Estimated Transit Time Table
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-800 rounded-xl overflow-hidden">
                <thead className="bg-slate-900 text-slate-300 font-bold">
                  <tr>
                    <th className="p-3 border-b border-slate-800">Destination Region</th>
                    <th className="p-3 border-b border-slate-800">Primary Delivery Mode</th>
                    <th className="p-3 border-b border-slate-800">Estimated Transit Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-400">
                  <tr>
                    <td className="p-3 font-medium text-white">Rayalaseema (Kadapa, Tirupati, Kurnool, Anantapur, Chittoor)</td>
                    <td className="p-3">APSRTC Express Cargo / Local Courier</td>
                    <td className="p-3 text-emerald-400 font-semibold">24 to 36 Hours</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">Coastal Andhra (Nellore, Guntur, Vijayawada, Godavari, Vizag)</td>
                    <td className="p-3">APSRTC Cargo / DTDC Express</td>
                    <td className="p-3 text-emerald-400 font-semibold">24 to 48 Hours</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">Telangana (Hyderabad, Warangal, Nizamabad, Karimnagar)</td>
                    <td className="p-3">TSRTC Cargo / Express Courier</td>
                    <td className="p-3 text-emerald-400 font-semibold">2 to 3 Business Days</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">Rest of India (All States & UTs)</td>
                    <td className="p-3">National Air / Surface Courier & Speed Post</td>
                    <td className="p-3 text-amber-400 font-semibold">4 to 7 Business Days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 5. Dispatch Tracking & Notifications */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              5. Consignment Tracking & WhatsApp Updates
            </h2>
            <p>
              As soon as your shipment is handed over to the cargo operator or courier company:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>A high-resolution photograph of the sealed cartons with destination labels is sent to you on WhatsApp.</li>
              <li>The official Lorry Receipt (LR) copy, consignment note number, or courier tracking link is shared directly to your mobile number.</li>
              <li>Our team monitors the cargo movement until successful delivery.</li>
            </ul>
          </section>

          {/* 6. Shipping Charges & Freight Billing */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              6. Freight Billing & Packaging Fees
            </h2>
            <p>
              All shipments are packed in heavy-duty corrugated cartons with bubble cushioning to prevent scratches and breakage. Freight fees are calculated based on shipment weight and distance. Depending on package agreements, freight can be prepaid on invoice or paid directly to the cargo counter upon package pickup.
            </p>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
          <Link href="/refund-policy" className="text-xs text-slate-400 hover:text-white">
            &larr; Refund & Cancellation Policy
          </Link>
          <Link href="/disclaimer" className="text-xs text-amber-400 hover:underline">
            Non-Affiliation Disclaimer &rarr;
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
