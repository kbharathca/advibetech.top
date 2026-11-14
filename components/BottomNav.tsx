'use client';

import React from 'react';
import { Home, Package, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { useHaptic } from '@/hooks/useHaptic';

interface BottomNavProps {
  lang: 'te' | 'en';
}

export function BottomNav({ lang }: BottomNavProps) {
  const { triggerLightTap, triggerSuccessHaptic } = useHaptic();

  const scrollTo = (id: string) => {
    triggerLightTap();
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCall = () => {
    triggerLightTap();
    window.location.href = 'tel:+917075209795';
  };

  const handleWhatsApp = () => {
    triggerSuccessHaptic();
    window.open('https://wa.me/917075209795?text=Hi%20Sura%20Devi%20Prasad%20garu,%20I%20want%20to%20order%20campaign%20merchandise.', '_blank');
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 sm:hidden glass-nav pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-5 h-16 items-center px-1">
        {/* Home */}
        <button
          onClick={() => scrollTo('top')}
          className="flex flex-col items-center justify-center gap-1 text-slate-400 hover:text-white transition active:scale-90"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-medium">{lang === 'te' ? 'హోమ్' : 'Home'}</span>
        </button>

        {/* Catalog */}
        <button
          onClick={() => scrollTo('catalog')}
          className="flex flex-col items-center justify-center gap-1 text-slate-400 hover:text-white transition active:scale-90"
        >
          <Package className="w-5 h-5" />
          <span className="text-[10px] font-medium">{lang === 'te' ? 'కేటలాగ్' : 'Catalog'}</span>
        </button>

        {/* Mockup Generator */}
        <button
          onClick={() => scrollTo('mockup')}
          className="flex flex-col items-center justify-center gap-1 text-amber-400 hover:text-amber-300 transition active:scale-90"
        >
          <Sparkles className="w-5 h-5 fill-current" />
          <span className="text-[10px] font-bold">{lang === 'te' ? 'ప్రివ్యూ' : 'Mockup'}</span>
        </button>

        {/* Call */}
        <button
          onClick={handleCall}
          className="flex flex-col items-center justify-center gap-1 text-blue-400 hover:text-blue-300 transition active:scale-90"
        >
          <Phone className="w-5 h-5 fill-current" />
          <span className="text-[10px] font-medium">{lang === 'te' ? 'కాల్' : 'Call'}</span>
        </button>

        {/* WhatsApp Book */}
        <button
          onClick={handleWhatsApp}
          className="flex flex-col items-center justify-center gap-1 text-emerald-400 hover:text-emerald-300 transition active:scale-90"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 fill-current" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>
          <span className="text-[10px] font-extrabold">{lang === 'te' ? 'వాట్సాప్' : 'WhatsApp'}</span>
        </button>
      </div>
    </div>
  );
}
