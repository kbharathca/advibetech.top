'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PRODUCTS, Product } from '@/data/products';
import { MessageCircle, Check, Sparkles, Phone } from 'lucide-react';
import { useHaptic } from '@/hooks/useHaptic';

interface ProductCatalogProps {
  lang: 'te' | 'en';
  onOrderProduct: (prod: Product) => void;
}

export function ProductCatalog({ lang, onOrderProduct }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { triggerLightTap, triggerSelectionTap, triggerSuccessHaptic } = useHaptic();

  const categories = [
    { id: 'all', nameEn: 'All Products', nameTe: 'అన్ని వస్తువులు' },
    { id: 'keychains', nameEn: 'Keychains (MOQ 500)', nameTe: 'కీచైన్లు (కనిష్టం 500)' },
    { id: 'tshirts', nameEn: 'T-Shirts', nameTe: 'టీ-షర్ట్లు' },
    { id: 'stickers', nameEn: 'Mobile Stickers', nameTe: 'మొబైల్ స్టిక్కర్లు' },
    { id: 'placards', nameEn: 'Placards & Fans', nameTe: 'ప్లకార్డ్స్ & విసనకర్రలు' },
    { id: 'badges', nameEn: 'Badges & Scarves', nameTe: 'బ్యాడ్జెస్ & కండువాలు' },
  ];

  const filtered = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const handleTabClick = (catId: string) => {
    triggerLightTap();
    setActiveCategory(catId);
  };

  const handleDirectWhatsApp = (prod: Product) => {
    triggerSuccessHaptic();
    const msg = encodeURIComponent(
      lang === 'te'
        ? `నమస్తే సూరా దేవి ప్రసాద్ గారు (అద్వైబ్ టెక్),\nనేను మీ "${prod.nameTe}" గురించి వివరాలు మరియు కొటేషన్ తెలుసుకోవాలనుకుంటున్నాను.\n• కనిష్ట ఆర్డర్: ${prod.moqTe}\nదయచేసి ధర వివరాలు పంపగలరు.`
        : `Hello Sura Devi Prasad garu (AdVibe Tech),\nI would like to inquire about "${prod.nameEn}".\n• MOQ: ${prod.moq}\nPlease send price quotation.`
    );
    window.open(`https://wa.me/917075209795?text=${msg}`, '_blank');
  };

  return (
    <section id="catalog" className="py-12 px-3 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>{lang === 'te' ? 'కస్టమ్ ప్రింటింగ్ క్యాటలాగ్' : 'Custom Printed Products'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            {lang === 'te' ? 'మా ప్రచార సామగ్రి కేటలాగ్' : 'Election Promotional Merchandise'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            {lang === 'te'
              ? 'ప్రతి ఉత్పత్తి రాజంపేటలోని మా ఫ్యాక్టరీలో అత్యుత్తమ నాణ్యతతో ముద్రించబడుతుంది. త్వరిత డెలివరీ హామీ.'
              : 'Direct from our Rajampet manufacturing unit with razor-sharp printing and high-durability materials.'}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleTabClick(cat.id)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all active:scale-95 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {lang === 'te' ? cat.nameTe : cat.nameEn}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filtered.map((prod) => (
            <div
              key={prod.id}
              className="rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 group"
            >
              <div>
                {/* Product Image Box */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={prod.image}
                    alt={prod.nameEn}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {prod.badge && (
                    <div className="absolute top-3 left-3 bg-amber-500/90 text-slate-950 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow">
                      {prod.badge}
                    </div>
                  )}
                  {/* MOQ Chip */}
                  <div className="absolute bottom-3 right-3 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-xs font-extrabold text-emerald-400">
                    {lang === 'te' ? prod.moqTe : prod.moq}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {lang === 'te' ? prod.nameTe : prod.nameEn}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {lang === 'te' ? prod.taglineTe : prod.taglineEn}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-1.5 pt-1">
                    {(lang === 'te' ? prod.featuresTe : prod.featuresEn).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                <button
                  onClick={() => onOrderProduct(prod)}
                  className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center transition active:scale-95 shadow"
                >
                  {lang === 'te' ? 'ఆర్డర్ ఫారమ్‌కు' : 'Add to Form'}
                </button>
                <button
                  onClick={() => handleDirectWhatsApp(prod)}
                  className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition active:scale-95 shadow"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
