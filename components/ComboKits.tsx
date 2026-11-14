'use client';

import React from 'react';
import { COMBO_KITS, ComboKit } from '@/data/combos';
import { Check, Flame, ArrowRight, Sparkles } from 'lucide-react';
import { useHaptic } from '@/hooks/useHaptic';

interface ComboKitsProps {
  lang: 'te' | 'en';
  onSelectCombo: (combo: ComboKit) => void;
}

export function ComboKits({ lang, onSelectCombo }: ComboKitsProps) {
  const { triggerSelectionTap } = useHaptic();

  const handleSelect = (combo: ComboKit) => {
    triggerSelectionTap();
    onSelectCombo(combo);
  };

  return (
    <section id="combos" className="py-12 px-3 sm:px-6 bg-slate-900/40 border-y border-white/5">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'te' ? 'ఆల్-ఇన్-వన్ కాంబో ప్యాకేజీలు' : 'All-in-One Value Kits'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            {lang === 'te' ? 'సర్పంచ్ విక్టరీ కాంబో కిట్లు' : 'Sarpanch Campaign Victory Kits'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            {lang === 'te'
              ? 'గ్రామ పంచాయతీ అభ్యర్థుల కోసం అన్ని ప్రచార వస్తువులను ఒకే బండిల్‌గా తక్కువ ఖర్చుతో అందిస్తున్నాం.'
              : 'Save time and budget with pre-configured campaign bundles designed for village voter populations.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {COMBO_KITS.map((combo) => (
            <div
              key={combo.id}
              className="relative rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-slate-800 hover:border-amber-400/50 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl group"
            >
              {combo.recommendedBadge && (
                <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md shadow-amber-500/30 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>{combo.recommendedBadge}</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-extrabold text-white group-hover:text-amber-400 transition-colors">
                    {lang === 'te' ? combo.nameTe : combo.nameEn}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {lang === 'te' ? combo.taglineTe : combo.taglineEn}
                  </p>
                </div>

                <div className="px-3 py-2 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-amber-300 font-semibold">
                  🎯 {lang === 'te' ? combo.idealForTe : combo.idealForEn}
                </div>

                {/* Items List */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    {lang === 'te' ? 'ప్యాకేజీలో లభించే వస్తువులు:' : 'Included Merchandise:'}
                  </span>
                  <ul className="space-y-2">
                    {(lang === 'te' ? combo.itemsTe : combo.itemsEn).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4 border-t border-slate-800/80">
                <button
                  onClick={() => handleSelect(combo)}
                  className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
                >
                  <span>
                    {lang === 'te'
                      ? 'ఈ కిట్‌ను ఆర్డర్ ఫారమ్‌లో ఎంచుకోండి'
                      : 'Select This Kit in Booking Form'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
