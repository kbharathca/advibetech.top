'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldCheck, Clock, CheckCircle2, ExternalLink } from 'lucide-react';
import { useHaptic } from '@/hooks/useHaptic';

export function Footer() {
  const { triggerLightTap } = useHaptic();

  const handleCall = () => {
    triggerLightTap();
    window.location.href = 'tel:+917075209795';
  };

  const handleWhatsApp = () => {
    triggerLightTap();
    window.open('https://wa.me/917075209795?text=Hello%20Sura%20Devi%20Prasad%20garu%20(AdVibe%20Tech)%2C%20I%20have%20an%20inquiry%20regarding%20campaign%20merchandise%20and%20digital%20marketing.', '_blank');
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs mt-auto">
      {/* Top Value / Compliance Bar */}
      <div className="border-b border-slate-900 bg-slate-900/50 py-4 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Verified Commercial Manufacturer & Registered Digital Agency</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Support Hours: 9:00 AM – 9:00 PM IST (Mon – Sun)</span>
            </span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="hidden sm:inline text-slate-300">Direct Contact: +91 7075209795</span>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Company Details */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        {/* Column 1: Business Identity */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-700 to-amber-500 flex items-center justify-center text-white font-black text-sm">
              AV
            </div>
            <span className="text-base font-extrabold text-white tracking-tight">
              AdVibe Tech
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed text-xs">
            Commercial election campaign merchandise manufacturing and hyper-local digital marketing agency. Supplying double-sided acrylic keychains, campaign apparel, waterproof stickers, and targeted digital ads across Andhra Pradesh, Telangana, and pan-India.
          </p>
          <div className="pt-1 text-[11px] text-slate-400 space-y-1">
            <p><strong className="text-slate-300">Proprietor:</strong> SURA DEVI PRASAD</p>
            <p><strong className="text-slate-300">Operational Base:</strong> Rajampet, Kadapa District, AP</p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[11px]">
            Navigation & Services
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="/#catalog" className="hover:text-amber-400 transition-colors">
                Campaign Merchandise Catalog
              </a>
            </li>
            <li>
              <a href="/#digital-marketing" className="hover:text-amber-400 transition-colors">
                Digital Marketing & Meta Ads
              </a>
            </li>
            <li>
              <a href="/#combos" className="hover:text-amber-400 transition-colors">
                Panchayat Campaign Combos
              </a>
            </li>
            <li>
              <a href="/#booking" className="hover:text-amber-400 transition-colors">
                Direct WhatsApp Booking
              </a>
            </li>
            <li>
              <Link href="/contact" className="hover:text-amber-400 transition-colors">
                Contact & Factory Location
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Mandatory Legal & Advertising Policies */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[11px]">
            Policy & Compliance
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors flex items-center justify-between">
                <span>Privacy Policy</span>
                <span className="text-[10px] text-emerald-400 font-mono">DPDP Act</span>
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-amber-400 transition-colors flex items-center justify-between">
                <span>Terms & Conditions</span>
                <span className="text-[10px] text-slate-500 font-mono">Legal</span>
              </Link>
            </li>
            <li>
              <Link href="/refund-policy" className="hover:text-amber-400 transition-colors flex items-center justify-between">
                <span>Refund & Cancellation Policy</span>
                <span className="text-[10px] text-slate-500 font-mono">Custom Goods</span>
              </Link>
            </li>
            <li>
              <Link href="/shipping-policy" className="hover:text-amber-400 transition-colors flex items-center justify-between">
                <span>Shipping & Delivery Policy</span>
                <span className="text-[10px] text-slate-500 font-mono">Pan-India</span>
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:text-amber-400 transition-colors flex items-center justify-between text-amber-400/90 font-medium">
                <span>Non-Affiliation Disclaimer</span>
                <span className="text-[10px] text-amber-400 font-mono">Important</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Verification */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[11px]">
            Manufacturing Unit & Inquiries
          </h4>
          <div className="space-y-2 text-xs text-slate-400">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                6/279 B, Balaji Nagar, Rajampet, Kadapa District, Andhra Pradesh - 516115, India
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-400 shrink-0" />
              <a href="tel:+917075209795" className="hover:text-white transition-colors">
                +91 7075209795
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href="mailto:support@advibetech.com" className="hover:text-white transition-colors">
                support@advibetech.com
              </a>
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={handleWhatsApp}
              className="w-full py-2 px-3 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow"
            >
              <span>WhatsApp Direct Hotline</span>
            </button>
            <button
              onClick={handleCall}
              className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 transition border border-slate-700"
            >
              <span>Direct Phone Call</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mandatory Advertising Policy & Non-Affiliation Disclaimer Bar */}
      <div className="border-t border-slate-900 bg-slate-950/80 px-4 sm:px-6 py-6">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-[11px] leading-relaxed text-slate-400 space-y-2">
            <p className="font-semibold text-slate-300 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
              <span>Official Regulatory & Advertising Policy Compliance Statement</span>
            </p>
            <p>
              <strong>Non-Affiliation Disclaimer:</strong> AdVibe Tech is an independent, privately owned commercial promotional merchandise manufacturer and digital advertising consultancy. AdVibe Tech is <strong>not affiliated with, associated with, authorized by, endorsed by, or in any way officially connected with the Election Commission of India (ECI)</strong>, any State Election Commission, any government department, or any political party. All election symbols, color schemes, and sample mockups shown on this website are for demonstration of manufacturing, printing, and customization capabilities only.
            </p>
            <p>
              <strong>Campaign Outcome Disclaimer:</strong> Promotional merchandise, printed campaign materials, and targeted digital marketing campaigns are tools designed for voter outreach and brand visibility. AdVibe Tech does not promise, represent, or guarantee election outcomes, ballot victories, or specific vote turnouts. Clients are solely responsible for ensuring that all campaign content and disbursements comply with the applicable Model Code of Conduct (MCC) and guidelines issued by statutory election authorities.
            </p>
            <p>
              <strong>Google Ads & Meta Advertising Standards Compliance:</strong> This website complies with Google Ads Misrepresentation Policies and Meta Advertising Standards for elections and social issues. All merchandise prices are quoted transparently based on customization requirements and minimum order quantities. No misleading claims or unverified political endorsements are made.
            </p>
          </div>

          {/* Copyright & Signoff */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px] pt-2">
            <p>
              © {new Date().getFullYear()} AdVibe Tech (advibetech.top). All rights reserved. Registered Proprietorship: SURA DEVI PRASAD.
            </p>
            <div className="flex items-center gap-3">
              <Link href="/privacy-policy" className="hover:text-slate-300">Privacy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-slate-300">Terms</Link>
              <span>•</span>
              <Link href="/refund-policy" className="hover:text-slate-300">Refunds</Link>
              <span>•</span>
              <Link href="/shipping-policy" className="hover:text-slate-300">Shipping</Link>
              <span>•</span>
              <Link href="/disclaimer" className="hover:text-slate-300">Disclaimer</Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-slate-300">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
