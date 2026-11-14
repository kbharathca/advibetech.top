import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Truck, ArrowLeft, Clock, MapPin, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shipping & Delivery Timelines | AdVibe Tech',
  description: 'Learn how AdVibe Tech delivers campaign merchandise across Andhra Pradesh, Telangana, and across India via express RTC bus cargo and fast couriers.',
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
          <span className="text-slate-200 font-medium">Delivery Information</span>
        </div>

        {/* Page Header */}
        <div className="space-y-3 border-b border-slate-800 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Truck className="w-3.5 h-3.5 text-blue-400" />
            <span>Fast Express Dispatch from Rajampet</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Shipping & Delivery Timelines
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            How we pack, dispatch, and deliver your campaign merchandise safely &bull; AdVibe Tech
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              1. Direct Manufacturing in Rajampet
            </h2>
            <p>
              All promotional merchandise is manufactured, quality-checked, and boxed directly at our own production unit located at:
            </p>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-xs">
              <p><strong className="text-white">Workshop:</strong> AdVibe Tech</p>
              <p><strong className="text-white">Location:</strong> 6/279 B, Balaji Nagar, Rajampet, Kadapa District, Andhra Pradesh - 516115</p>
              <p><strong className="text-white">Production In-Charge:</strong> SURA DEVI PRASAD (+91 7075209795)</p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              2. Fast Manufacturing Lead Times
            </h2>
            <p>
              Because your campaign has strict rally deadlines and voting dates, we prioritize fast production turnaround:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="font-bold text-amber-400 block">Standard Orders (500 – 1,500 units)</span>
                <p className="text-slate-300">Ready for dispatch in <strong>2 to 3 days</strong> after you approve your digital design mockup.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="font-bold text-emerald-400 block">Mega Bundles & Large Combos (2,000+ units)</span>
                <p className="text-slate-300">Can be dispatched in priority partial batches starting in <strong>3 to 4 days</strong> so your workers have items immediately.</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              3. Delivery Options to Your Village or Mandal
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>APSRTC Bus Express Cargo (Fastest for AP & Telangana):</strong>
                <br />
                The most reliable option for campaign deadlines. Cartons are loaded onto direct state transport buses leaving Rajampet and can be collected at your nearest bus station cargo counter in <strong>24 to 48 hours</strong>.
              </li>
              <li>
                <strong>Doorstep Courier Delivery (DTDC / Professional Couriers / Delhivery):</strong>
                <br />
                Delivered directly to your campaign office or residence in <strong>2 to 4 business days</strong>.
              </li>
              <li>
                <strong>India Post Speed Post:</strong>
                <br />
                Available for remote villages without private courier counters.
              </li>
              <li>
                <strong>Direct Workshop Pickup:</strong>
                <br />
                You or your campaign team members are welcome to visit our Rajampet unit to inspect finished boxes and collect them in person.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              4. Typical Delivery Times by District
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-800 rounded-xl overflow-hidden">
                <thead className="bg-slate-900 text-slate-300 font-bold">
                  <tr>
                    <th className="p-3 border-b border-slate-800">Your Region</th>
                    <th className="p-3 border-b border-slate-800">Best Delivery Mode</th>
                    <th className="p-3 border-b border-slate-800">Typical Transit Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-400">
                  <tr>
                    <td className="p-3 font-medium text-white">Kadapa, Tirupati, Kurnool, Anantapur, Chittoor</td>
                    <td className="p-3">APSRTC Express Bus Cargo</td>
                    <td className="p-3 text-emerald-400 font-semibold">24 to 36 Hours</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">Nellore, Guntur, Vijayawada, Godavari, Vizag</td>
                    <td className="p-3">APSRTC Cargo / DTDC Express</td>
                    <td className="p-3 text-emerald-400 font-semibold">24 to 48 Hours</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">Telangana (Hyderabad, Warangal, Karimnagar, etc.)</td>
                    <td className="p-3">TSRTC Cargo / Express Courier</td>
                    <td className="p-3 text-emerald-400 font-semibold">2 to 3 Days</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">Other States Across India</td>
                    <td className="p-3">National Air & Express Surface Couriers</td>
                    <td className="p-3 text-amber-400 font-semibold">4 to 7 Days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              5. Live Tracking on WhatsApp
            </h2>
            <p>
              As soon as your shipment is booked:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>We send you a photo of your sealed boxes with destination labels.</li>
              <li>We send you the bus cargo receipt (LR copy) or courier tracking number right on WhatsApp.</li>
              <li>We remain available to help until your parcel is safely in your hands.</li>
            </ul>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
          <Link href="/refund-policy" className="text-xs text-slate-400 hover:text-white">
            &larr; Refund Policy
          </Link>
          <Link href="/disclaimer" className="text-xs text-amber-400 hover:underline">
            Non-Affiliation Notice &rarr;
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
