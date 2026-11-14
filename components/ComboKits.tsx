'use client';

import React from 'react';
import { COMBO_KITS, ComboKit } from '@/data/combos';
import { Check, Flame, ArrowRight, Sparkles } from 'lucide-react';
import { useHaptic } from '@/hooks/useHaptic';

interface ComboKitsProps {
  onSelectCombo: (combo: ComboKit) => void;
}

export function ComboKits({ onSelectCombo }: ComboKitsProps) {
  const { triggerSelectionTap } = useHaptic();

  const handleSelect = (combo: ComboKit) => {
    triggerSelectionTap();
    onSelectCombo(combo);
  };

  return (
    <section id="combos" className="py-14 px-3 sm:px-6 bg-slate-900/40 border-y border-white/5">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>All-In-One Value Packages</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sarpanch Campaign Combo Packages
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Save time and budget with pre-configured campaign bundles designed for village voter populations across Andhra Pradesh and Telangana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {COMBO_KITS.map((combo) => (
            <div
              key={combo.id}
              className="relative rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-slate-800 hover:border-amber-400/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl group"
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
                    {combo.nameEn}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {combo.taglineEn}
                  </p>
                </div>

                <div className="px-3.5 py-2 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-amber-300 font-semibold">
                  🎯 {combo.idealForEn}
                </div>

                {/* Items List */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Included Merchandise:
                  </span>
                  <ul className="space-y-2">
                    {combo.itemsEn.map((item, idx) => (
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
                  <span>Select This Kit in Booking Form</span>
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
