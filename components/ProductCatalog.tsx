'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PRODUCTS, Product } from '@/data/products';
import { MessageCircle, Check, Sparkles } from 'lucide-react';
import { useHaptic } from '@/hooks/useHaptic';

interface ProductCatalogProps {
  onOrderProduct: (prod: Product) => void;
}

export function ProductCatalog({ onOrderProduct }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { triggerLightTap, triggerSuccessHaptic } = useHaptic();

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'keychains', name: 'Keychains (MOQ 500)' },
    { id: 'tshirts', name: 'Campaign T-Shirts' },
    { id: 'stickers', name: 'Mobile Stickers' },
    { id: 'placards', name: 'Placards & Fans' },
    { id: 'badges', name: 'Badges & Scarves' },
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
      `Hello Sura Devi Prasad garu (AdVibe Tech),\nI would like to inquire about "${prod.nameEn}".\n• Minimum Order: ${prod.moq}\nPlease send price quotation and digital samples.`
    );
    window.open(`https://wa.me/917075209795?text=${msg}`, '_blank');
  };

  return (
    <section id="catalog" className="py-14 px-3 sm:px-6 w-full max-w-full overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Manufacturing Catalog</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Campaign Merchandise Products
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Manufactured directly at our Rajampet unit with crystal-clear photo printing, heavy-duty acrylic, and premium fabrics.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="w-full max-w-full flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center px-0.5">
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
                {cat.name}
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
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={prod.image}
                    alt={prod.nameEn}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {prod.badge && (
                    <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow">
                      {prod.badge}
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-xs font-extrabold text-emerald-400">
                    {prod.moq}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {prod.nameEn}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {prod.taglineEn}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    {prod.featuresEn.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                <button
                  onClick={() => onOrderProduct(prod)}
                  className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center transition active:scale-95 shadow"
                >
                  Add to Form
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
