'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useHaptic } from '@/hooks/useHaptic';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { triggerLightTap } = useHaptic();

  const faqs = [
    {
      q: 'How do I place an order? How do I send candidate photos and symbols?',
      a: 'You can submit your requirements via the online booking form on this website or directly message owner Sura Devi Prasad on WhatsApp (+91 7075209795) with your candidate photo, name, and allocated symbol. Our design studio will prepare and share a free digital preview within 15 minutes.'
    },
    {
      q: 'Can independent candidates enter custom or unlisted election symbols?',
      a: 'Yes, absolutely! Since election symbols vary across political parties and independent candidates receive diverse symbols (Kite, Tractor, Glass, Cot, Scissors, Ring, etc.), our booking form allows you to freely type any symbol name. We print all official election commission symbols.'
    },
    {
      q: 'What is the Minimum Order Quantity (MOQ)?',
      a: 'For Double-Sided Oval Keychains and Round Photo Keychains, the minimum order is 500 pieces. For Glossy Mobile Stickers, the MOQ is 500 pieces, and for Campaign T-Shirts, it is 25 pieces. Bulk discounts apply for major campaign orders.'
    },
    {
      q: 'Do you offer Digital Marketing, Meta Ads & Video Reels alongside merchandise?',
      a: 'Yes! Our digital division manages hyper-local Facebook & Instagram sponsored ads, WhatsApp voter broadcast campaigns, candidate video reels, and political PR across Andhra Pradesh and Telangana constituencies.'
    },
    {
      q: 'How fast is doorstep delivery to our village / mandal?',
      a: 'Production completes within 24 to 48 hours of design approval. Dispatch takes 1 to 3 business days via RTC Cargo or express logistics to any village or mandal across Andhra Pradesh and Telangana.'
    },
    {
      q: 'What is the printing durability? Will colors fade in the sun?',
      a: 'Our keychains feature double-sided scratch-resistant crystal acrylic shields. Mobile stickers are printed on premium waterproof vinyl that withstands sunlight, rain, and daily wear.'
    },
  ];

  const toggle = (idx: number) => {
    triggerLightTap();
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-14 px-3 sm:px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Everything You Need To Know
          </h2>
        </div>

        <div className="space-y-3 pt-2">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 text-sm font-bold text-white hover:text-amber-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
