'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldCheck, Clock } from 'lucide-react';
import { useHaptic } from '@/hooks/useHaptic';

export function Footer() {
  const { triggerLightTap } = useHaptic();

  const handleCall = () => {
    triggerLightTap();
    window.location.href = 'tel:+917075209795';
  };

  const handleWhatsApp = () => {
    triggerLightTap();
    window.open(
      'https://wa.me/917075209795?text=Hello%20Sura%20Devi%20Prasad%20garu%20(AdVibe%20Tech)%2C%20I%20have%20an%20inquiry%20regarding%20campaign%20merchandise%20and%20digital%20marketing.',
      '_blank'
    );
  };

  return (
    <footer className="w-full max-w-full overflow-hidden bg-slate-950 border-t border-slate-800 text-slate-400 text-xs mt-auto">
      {/* Top Welcome Bar */}
      <div className="border-b border-slate-900 bg-slate-900/50 py-4 px-3 sm:px-6 w-full max-w-full overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Direct Manufacturer Pricing & Fast Express Delivery Across AP & Telangana</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Open 7 Days a Week: 9:00 AM – 9:00 PM IST</span>
            </span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="hidden sm:inline text-slate-300">Hotline: +91 7075209795</span>
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
            Direct manufacturers of election campaign promotional items including custom acrylic keychains, campaign T-shirts, waterproof mobile stickers, and placards, combined with targeted digital marketing on Instagram, Facebook, and WhatsApp.
          </p>
          <div className="pt-1 text-[11px] text-slate-400 space-y-1">
            <p><strong className="text-slate-300">Proprietor:</strong> SURA DEVI PRASAD</p>
            <p><strong className="text-slate-300">Workshop Location:</strong> Rajampet, Kadapa District, Andhra Pradesh</p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[11px]">
            Explore Products & Services
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="/#catalog" className="hover:text-amber-400 transition-colors">
                Campaign Merchandise Catalog
              </a>
            </li>
            <li>
              <a href="/#digital-marketing" className="hover:text-amber-400 transition-colors">
                Digital Marketing & Social Media Ads
              </a>
            </li>
            <li>
              <a href="/#combos" className="hover:text-amber-400 transition-colors">
                Panchayat Campaign Combo Packs
              </a>
            </li>
            <li>
              <a href="/#booking" className="hover:text-amber-400 transition-colors">
                Direct WhatsApp Order Form
              </a>
            </li>
            <li>
              <Link href="/contact" className="hover:text-amber-400 transition-colors">
                Workshop Location & Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Customer Information & Policies */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[11px]">
            Customer Support & Policies
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-amber-400 transition-colors">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/refund-policy" className="hover:text-amber-400 transition-colors">
                Refund & Quality Guarantee Policy
              </Link>
            </li>
            <li>
              <Link href="/shipping-policy" className="hover:text-amber-400 transition-colors">
                Shipping & Delivery Timelines
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:text-amber-400 transition-colors text-amber-400/90 font-medium">
                Non-Affiliation Notice
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Workshop */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[11px]">
            Contact Our Workshop
          </h4>
          <div className="space-y-2 text-xs text-slate-400">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                6/279 B, Balaji Nagar, Rajampet, Kadapa District, Andhra Pradesh - 516115
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
              <a href="mailto:contact@advibetech.top" className="hover:text-white transition-colors">
                contact@advibetech.top
              </a>
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={handleWhatsApp}
              className="w-full py-2 px-3 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow"
            >
              <span>Chat on WhatsApp</span>
            </button>
            <button
              onClick={handleCall}
              className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 transition border border-slate-700"
            >
              <span>Call Sura Devi Prasad</span>
            </button>
          </div>
        </div>
      </div>

      {/* Customer Information & Transparency Bar */}
      <div className="border-t border-slate-900 bg-slate-950/80 px-4 sm:px-6 py-6">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-[11px] leading-relaxed text-slate-400 space-y-2">
            <p className="font-semibold text-slate-300 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
              <span>Customer Information & Service Details</span>
            </p>
            <p>
              <strong>Independent Printing & Marketing Provider:</strong> AdVibe Tech is an independent, privately owned commercial manufacturing workshop and digital marketing agency. We are not an official government department and are not affiliated with or endorsed by the Election Commission of India or any political party.
            </p>
            <p>
              <strong>Equal Service for All Candidates:</strong> We proudly supply high-quality promotional products to candidates and political groups of all affiliations as well as independent candidates equally. All sample photos, mockups, and election symbols shown on this website are for demonstration of our printing formats and fabric quality.
            </p>
            <p>
              <strong>Campaign Tools:</strong> Promotional merchandise and digital ads are designed to help candidates connect with voters and raise awareness. AdVibe Tech provides custom promotional materials and does not promise or guarantee specific election outcomes or voter numbers.
            </p>
          </div>

          {/* Copyright & Signoff */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px] pt-2">
            <p>
              © {new Date().getFullYear()} AdVibe Tech (advibetech.top). All rights reserved. Proprietor: SURA DEVI PRASAD.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/privacy-policy" className="hover:text-slate-300">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-slate-300">Terms of Service</Link>
              <span>•</span>
              <Link href="/refund-policy" className="hover:text-slate-300">Refund Policy</Link>
              <span>•</span>
              <Link href="/shipping-policy" className="hover:text-slate-300">Delivery Information</Link>
              <span>•</span>
              <Link href="/disclaimer" className="hover:text-slate-300">Non-Affiliation Notice</Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-slate-300">Contact</Link>
            </div>
          </div>

          {/* Designer & Presentation Credits */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-400 text-[11px] pt-3 border-t border-slate-900/80 text-center sm:text-left">
            <p>
              Designed By{' '}
              <a
                href="https://tirupatihost.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2 transition-colors"
              >
                Bharath Kattamanchi
              </a>
            </p>
            <p className="text-slate-400 font-medium">
              Proudly presented by{' '}
              <span className="text-slate-200 font-bold">
                DNJ IT SOLUTIONS PRIVATE LIMITED
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
