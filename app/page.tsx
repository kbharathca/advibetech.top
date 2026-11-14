'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { SocialProofTicker } from '@/components/SocialProofTicker';
import { Hero } from '@/components/Hero';
import { VideoShowcase } from '@/components/VideoShowcase';
import { MockupPreviewer } from '@/components/MockupPreviewer';
import { ComboKits } from '@/components/ComboKits';
import { ProductCatalog } from '@/components/ProductCatalog';
import { BookingForm } from '@/components/BookingForm';
import { ProprietorTrust } from '@/components/ProprietorTrust';
import { FAQSection } from '@/components/FAQSection';
import { BottomNav } from '@/components/BottomNav';
import { ComboKit } from '@/data/combos';
import { Product } from '@/data/products';
import { ShieldCheck, Phone, MessageCircle, Heart } from 'lucide-react';

export default function Home() {
  const [lang, setLang] = useState<'te' | 'en'>('te'); // Default to Telugu for local resonance
  const [prefilledSymbol, setPrefilledSymbol] = useState<string>('Cot / మంచం');
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
    <main className="min-h-screen flex flex-col bg-slate-950 selection:bg-amber-500 selection:text-slate-950 font-telugu">
      {/* 1. Header */}
      <Header lang={lang} setLang={setLang} />

      {/* 2. Live Social Proof Ticker */}
      <SocialProofTicker lang={lang} />

      {/* 3. Hero Section */}
      <Hero lang={lang} onBookClick={scrollToBooking} />

      {/* 4. Real Product Walkthrough Video */}
      <VideoShowcase lang={lang} />

      {/* 5. Interactive Mockup Generator */}
      <MockupPreviewer lang={lang} />

      {/* 6. Sarpanch Victory Combo Kits */}
      <ComboKits lang={lang} onSelectCombo={handleSelectCombo} />

      {/* 7. Categorized Merchandise Catalog */}
      <ProductCatalog lang={lang} onOrderProduct={handleOrderProduct} />

      {/* 8. Direct-to-Owner WhatsApp Booking Form */}
      <BookingForm
        lang={lang}
        prefilledSymbol={prefilledSymbol}
        prefilledQuantities={prefilledQuantities}
      />

      {/* 9. Proprietor & Manufacturing Trust */}
      <ProprietorTrust lang={lang} />

      {/* 10. FAQ Section */}
      <FAQSection lang={lang} />

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/80 py-8 px-4 text-center text-xs text-slate-400 space-y-3">
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300">
          <a href="tel:+917075209795" className="hover:text-amber-400 transition">
            📞 +91 7075209795
          </a>
          <span>•</span>
          <a href="mailto:support@advibetech.com" className="hover:text-amber-400 transition">
            ✉️ support@advibetech.com
          </a>
          <span>•</span>
          <span>📍 Rajampet, Kadapa Dist, AP - 516115</span>
        </div>

        <p className="text-slate-500">
          © {new Date().getFullYear()} AdVibe Tech (advibetech.top). All rights reserved.
          <br />
          Proprietor: <strong className="text-slate-400">SURA DEVI PRASAD</strong>.
        </p>

        <p className="text-[11px] text-slate-600">
          Manufactured with pride in Andhra Pradesh for Panchayat, MPTC, ZPTC and Municipal Election Campaigns.
        </p>
      </footer>

      {/* 11. Persistent Mobile Bottom Dock */}
      <BottomNav lang={lang} />
    </main>
  );
}
