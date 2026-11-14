'use client';

import React from 'react';
import { Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import { useHaptic } from '@/hooks/useHaptic';

interface HeaderProps {
  lang: 'te' | 'en';
  setLang: (lang: 'te' | 'en') => void;
}

export function Header({ lang, setLang }: HeaderProps) {
  const { triggerLightTap, triggerSelectionTap } = useHaptic();

  const handleLangToggle = (newLang: 'te' | 'en') => {
    triggerSelectionTap();
    setLang(newLang);
  };

  const handleCall = () => {
    triggerLightTap();
    window.location.href = 'tel:+917075209795';
  };

  const handleWhatsApp = () => {
    triggerLightTap();
    const msg = encodeURIComponent(
      lang === 'te'
        ? 'నమస్తే అద్వైబ్ టెక్ (సూరా దేవి ప్రసాద్ గారు), నేను ఎన్నికల ప్రచార సామగ్రి గురించి వివరాలు తెలుసుకోవాలనుకుంటున్నాను.'
        : 'Hello AdVibe Tech (Sura Devi Prasad garu), I would like to inquire about election campaign merchandise.'
    );
    window.open(`https://wa.me/917075209795?text=${msg}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-white/10 shadow-lg">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2.5 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-amber-500 flex items-center justify-center shadow-md shadow-blue-500/20 text-white font-black text-lg">
            AV
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-white">
                {lang === 'te' ? 'అద్వైబ్ టెక్' : 'AdVibe Tech'}
              </span>
              <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                Kadapa
              </span>
            </div>
            <p className="text-[11px] text-slate-300 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400 inline" />
              <span>{lang === 'te' ? 'యజమాని: సూరా దేవి ప్రసాద్' : 'Prop: Sura Devi Prasad'}</span>
            </p>
          </div>
        </div>

        {/* Actions: Language Toggle & Direct CTAs */}
        <div className="flex items-center gap-2">
          {/* Language Switcher Pill */}
          <div className="bg-slate-900/90 border border-slate-700 rounded-full p-0.5 flex items-center text-xs font-semibold">
            <button
              onClick={() => handleLangToggle('te')}
              className={`px-2.5 py-1 rounded-full transition-all ${
                lang === 'te'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              తెలుగు
            </button>
            <button
              onClick={() => handleLangToggle('en')}
              className={`px-2.5 py-1 rounded-full transition-all ${
                lang === 'en'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Quick Call Button */}
          <button
            onClick={handleCall}
            aria-label="Call Owner"
            className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-md shadow-blue-600/30 active:scale-95"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span className="hidden sm:inline">7075209795</span>
          </button>

          {/* Quick WhatsApp Button */}
          <button
            onClick={handleWhatsApp}
            aria-label="WhatsApp Owner"
            className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-md shadow-emerald-600/30 active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span className="hidden sm:inline">WhatsApp</span>
          </button>
        </div>
      </div>
    </header>
  );
}
