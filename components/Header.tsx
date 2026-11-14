'use client';

import React from 'react';
import { Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import { useHaptic } from '@/hooks/useHaptic';

export function Header() {
  const { triggerLightTap } = useHaptic();

  const handleCall = () => {
    triggerLightTap();
    window.location.href = 'tel:+917075209795';
  };

  const handleWhatsApp = () => {
    triggerLightTap();
    const msg = encodeURIComponent(
      'Hello Sura Devi Prasad garu (AdVibe Tech), I would like to inquire about your election campaign merchandise and digital marketing services.'
    );
    window.open(`https://wa.me/917075209795?text=${msg}`, '_blank');
  };

  const scrollTo = (id: string) => {
    triggerLightTap();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-white/10 shadow-lg">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-3 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-amber-500 flex items-center justify-center shadow-md shadow-blue-500/20 text-white font-black text-lg">
            AV
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-white">
                AdVibe Tech
              </span>
              <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                Rajampet
              </span>
            </div>
            <p className="text-[11px] text-slate-300 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400 inline" />
              <span>Prop: Sura Devi Prasad</span>
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-slate-300">
          <button onClick={() => scrollTo('catalog')} className="hover:text-amber-400 transition">
            Products
          </button>
          <button onClick={() => scrollTo('mockup')} className="hover:text-amber-400 transition">
            Mockup Studio
          </button>
          <button onClick={() => scrollTo('digital-marketing')} className="hover:text-cyan-400 transition flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Digital Marketing</span>
          </button>
          <button onClick={() => scrollTo('combos')} className="hover:text-amber-400 transition">
            Victory Kits
          </button>
          <button onClick={() => scrollTo('booking')} className="hover:text-emerald-400 transition">
            Book Order
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Quick Call */}
          <button
            onClick={handleCall}
            aria-label="Call Sura Devi Prasad"
            className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shadow-md shadow-blue-600/30 active:scale-95"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>7075209795</span>
          </button>

          {/* Quick WhatsApp */}
          <button
            onClick={handleWhatsApp}
            aria-label="WhatsApp Sura Devi Prasad"
            className="hidden sm:flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shadow-md shadow-emerald-600/30 active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </header>
  );
}
