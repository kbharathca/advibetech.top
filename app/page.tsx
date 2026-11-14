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
  const [initialService, setInitialService] = useState<string>(
    'Campaign Merchandise (Keychains, T-Shirts, Stickers)'
  );
  const [initialMessage, setInitialMessage] = useState<string>('');

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCombo = (combo: ComboKit) => {
    setInitialService('Complete Campaign Combo Package (Merchandise + Digital Ads)');
    setInitialMessage(`Inquiry for ${combo.nameEn} - Please share package price quote and digital samples.`);
    scrollToBooking();
  };

  const handleOrderProduct = (prod: Product) => {
    setInitialService('Campaign Merchandise (Keychains, T-Shirts, Stickers)');
    setInitialMessage(`Inquiry for ${prod.nameEn} (${prod.moq}) - Please share price quote.`);
    scrollToBooking();
  };

  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-slate-950 selection:bg-amber-500 selection:text-slate-950 font-sans">
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

      {/* 9. Simple Direct-to-Owner WhatsApp Booking Form */}
      <BookingForm
        initialService={initialService}
        initialMessage={initialMessage}
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
