'use client';

import React from 'react';
import { Home, Package, Sparkles, Phone, MessageCircle, Megaphone } from 'lucide-react';
import { useHaptic } from '@/hooks/useHaptic';

export function BottomNav() {
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
    window.open('https://wa.me/917075209795?text=Hello%20Sura%20Devi%20Prasad%20garu,%20I%20would%20like%20to%20order%20campaign%20merchandise%20and%20digital%20marketing%20services.', '_blank');
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden glass-nav pb-[env(safe-area-inset-bottom)] w-full max-w-full overflow-hidden">
      <div className="grid grid-cols-5 h-16 items-center px-1 w-full max-w-full">
        {/* Home */}
        <button
          onClick={() => scrollTo('top')}
          className="flex flex-col items-center justify-center gap-1 text-slate-400 hover:text-white transition active:scale-90"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-medium">Home</span>
        </button>

        {/* Catalog */}
        <button
          onClick={() => scrollTo('catalog')}
          className="flex flex-col items-center justify-center gap-1 text-slate-400 hover:text-white transition active:scale-90"
        >
          <Package className="w-5 h-5" />
          <span className="text-[10px] font-medium">Catalog</span>
        </button>

        {/* Digital Marketing */}
        <button
          onClick={() => scrollTo('digital-marketing')}
          className="flex flex-col items-center justify-center gap-1 text-cyan-400 hover:text-cyan-300 transition active:scale-90"
        >
          <Megaphone className="w-5 h-5 fill-current" />
          <span className="text-[10px] font-bold">Digital</span>
        </button>

        {/* Call */}
        <button
          onClick={handleCall}
          className="flex flex-col items-center justify-center gap-1 text-blue-400 hover:text-blue-300 transition active:scale-90"
        >
          <Phone className="w-5 h-5 fill-current" />
          <span className="text-[10px] font-medium">Call</span>
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
          <span className="text-[10px] font-extrabold">WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
