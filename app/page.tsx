'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { SocialProofTicker } from '@/components/SocialProofTicker';
import { Hero } from '@/components/Hero';
import { VideoShowcase } from '@/components/VideoShowcase';
import { DigitalMarketing } from '@/components/DigitalMarketing';
import { MockupPreviewer } from '@/components/MockupPreviewer';
import { ComboKits } from '@/components/ComboKits';
import { ProductCatalog } from '@/components/ProductCatalog';
import { BookingForm } from '@/components/BookingForm';
import { ProprietorTrust } from '@/components/ProprietorTrust';
import { FAQSection } from '@/components/FAQSection';
import { BottomNav } from '@/components/BottomNav';
import { ComboKit } from '@/data/combos';
import { Product } from '@/data/products';

export default function Home() {
  const [prefilledSymbol, setPrefilledSymbol] = useState<string>('');
  const [prefilledQuantities, setPrefilledQuantities] = useState<{
    keychains?: number;
    tshirts?: number;
    stickers?: number;
    placards?: number;
    badges?: number;
  }>({
    keychains: 500,
    stickers: 500,
    tshirts: 25,
    placards: 0,
    badges: 50,
  });

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCombo = (combo: ComboKit) => {
    setPrefilledQuantities(combo.defaultPayload);
    scrollToBooking();
  };

  const handleOrderProduct = (prod: Product) => {
    if (prod.category === 'keychains') {
      setPrefilledQuantities((prev) => ({ ...prev, keychains: 500 }));
    } else if (prod.category === 'tshirts') {
      setPrefilledQuantities((prev) => ({ ...prev, tshirts: 50 }));
    } else if (prod.category === 'stickers') {
      setPrefilledQuantities((prev) => ({ ...prev, stickers: 1000 }));
    } else if (prod.category === 'placards') {
      setPrefilledQuantities((prev) => ({ ...prev, placards: 200 }));
    } else if (prod.category === 'badges') {
      setPrefilledQuantities((prev) => ({ ...prev, badges: 100 }));
    }
    scrollToBooking();
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-950 selection:bg-amber-500 selection:text-slate-950 font-sans">
      {/* 1. Header */}
      <Header />

      {/* 2. Live Social Proof Ticker */}
      <SocialProofTicker />

      {/* 3. Hero Section with AI Election Branding Banner */}
      <Hero onBookClick={scrollToBooking} />

      {/* 4. Real Product Walkthrough Video */}
      <VideoShowcase />

      {/* 5. Comprehensive Digital Marketing Division */}
      <DigitalMarketing />

      {/* 6. Interactive Candidate Mockup Studio */}
      <MockupPreviewer />

      {/* 7. Sarpanch Victory Combo Packages */}
      <ComboKits onSelectCombo={handleSelectCombo} />

      {/* 8. Categorized Merchandise Manufacturing Catalog */}
      <ProductCatalog onOrderProduct={handleOrderProduct} />

      {/* 9. Direct-to-Owner WhatsApp Booking Form (with Free-Text Election Symbol Input) */}
      <BookingForm
        prefilledSymbol={prefilledSymbol}
        prefilledQuantities={prefilledQuantities}
      />

      {/* 10. Proprietor & Manufacturing Unit Trust */}
      <ProprietorTrust />

      {/* 11. FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/80 py-10 px-4 text-center text-xs text-slate-400 space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300">
          <a href="tel:+917075209795" className="hover:text-amber-400 transition">
            📞 +91 7075209795
          </a>
          <span>•</span>
          <a href="mailto:support@advibetech.com" className="hover:text-amber-400 transition">
            ✉️ support@advibetech.com
          </a>
          <span>•</span>
          <span>📍 6/279 B, Balaji Nagar, Rajampet, Kadapa Dist, AP - 516115</span>
        </div>

        <p className="text-slate-500">
          © {new Date().getFullYear()} AdVibe Tech (advibetech.top). All rights reserved.
          <br />
          Proprietor & Founder: <strong className="text-slate-300">SURA DEVI PRASAD</strong>.
        </p>

        <p className="text-[11px] text-slate-600 max-w-xl mx-auto">
          Custom Political Campaign Merchandise & End-to-End Digital Marketing Agency for Gram Panchayat, Municipal, and Assembly Election Campaigns across Andhra Pradesh & Telangana.
        </p>
      </footer>

      {/* 12. Persistent Mobile Bottom Dock */}
      <BottomNav />
    </main>
  );
}
