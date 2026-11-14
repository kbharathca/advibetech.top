'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { SocialProofTicker } from '@/components/SocialProofTicker';
import { Hero } from '@/components/Hero';
import { VideoShowcase } from '@/components/VideoShowcase';
import { DigitalMarketing } from '@/components/DigitalMarketing';
import { ComboKits } from '@/components/ComboKits';
import { ProductCatalog } from '@/components/ProductCatalog';
import { BookingForm } from '@/components/BookingForm';
import { ProprietorTrust } from '@/components/ProprietorTrust';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';
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

      {/* 6. Sarpanch Victory Combo Packages */}
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

      {/* 12. Full Legal, Policy & Advertising Compliance Footer */}
      <Footer />

      {/* 13. Persistent Mobile Bottom Dock */}
      <BottomNav />
    </main>
  );
}
