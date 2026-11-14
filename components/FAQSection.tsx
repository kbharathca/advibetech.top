'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useHaptic } from '@/hooks/useHaptic';

interface FAQProps {
  lang: 'te' | 'en';
}

export function FAQSection({ lang }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { triggerLightTap } = useHaptic();

  const faqs = [
    {
      qTe: 'ఆర్డర్ ఎలా ఇవ్వాలి? ఫోటో మరియు గుర్తును ఎలా పంపాలి?',
      qEn: 'How to place an order? How do we send candidate photos & symbols?',
      aTe: 'మీరు వెబ్‌సైట్‌లోని ఆర్డర్ బుకింగ్ ఫారమ్ ద్వారా లేదా నేరుగా మా వాట్సాప్ (+91 7075209795) ద్వారా మీ అభ్యర్థి ఫోటో, పేరు మరియు ఎన్నికల గుర్తును పంపవచ్చు. మా డిజైనర్లు 15 నిమిషాల్లో డిజిటల్ ప్రివ్యూ తయారు చేసి మీకు పంపిస్తారు.',
      aEn: 'You can submit through the booking form on this website or directly message us on WhatsApp (+91 7075209795) with the candidate photo, name and symbol. Our design team will share a digital mockup within 15 minutes.'
    },
    {
      qTe: 'కీచైన్లు మరియు స్టిక్కర్లకు కనీస ఆర్డర్ (MOQ) ఎంత?',
      qEn: 'What is the Minimum Order Quantity (MOQ)?',
      aTe: 'ఓవల్ మరియు రౌండ్ ఫోటో కీచైన్లకు కనిష్ట ఆర్డర్ 500 పీసులు. మొబైల్ స్టిక్కర్లకు 500 పీసులు, టీ-షర్ట్లకు 25 పీసులు. భారీ ఆర్డర్లకు అదనపు రాయితీ లభిస్తుంది.',
      aEn: 'For Oval and Round Photo Keychains, the minimum order is 500 pieces. For Mobile Stickers, it is 500 pieces, and for T-shirts it is 25 pieces. Bulk discounts apply for larger quantities.'
    },
    {
      qTe: 'మా ఊరికి డెలివరీ కావడానికి ఎన్ని రోజులు పడుతుంది?',
      qEn: 'How many days does doorstep delivery take to our village/mandal?',
      aTe: 'డిజైన్ కన్ఫర్మ్ అయిన 24 నుండి 48 గంటల్లో ప్రొడక్షన్ పూర్తవుతుంది. ఆర్టీసీ కార్గో, ప్రైవేట్ బస్సులు లేదా కొరియర్ ద్వారా ఆంధ్రప్రదేశ్ మరియు తెలంగాణలోని ఏ మండలానికైనా 2-3 రోజుల్లో చేరుతుంది.',
      aEn: 'Production completes within 24 to 48 hours of design approval. Dispatch takes 1-3 days via RTC Cargo or express courier to any mandal across AP and Telangana.'
    },
    {
      qTe: 'ముద్రణ నాణ్యత ఎలా ఉంటుంది? రంగులు వెలసిపోవా?',
      qEn: 'What is the print durability? Will colors fade in sunlight?',
      aTe: 'మా కీచైన్లు రెండు వైపులా హై-క్వాలిటీ యాక్రిలిక్ షీల్డ్‌తో తయారు చేయబడతాయి. మొబైల్ స్టిక్కర్లు వాటర్‌ప్రూఫ్ గ్లోసీ గమ్మింగ్‌తో ఉంటాయి. ఎండ మరియు వర్షానికి కూడా రంగులు చెరిగిపోవు.',
      aEn: 'Our keychains feature double-sided scratch-resistant acrylic shields. Mobile stickers are printed on waterproof high-gloss vinyl that withstands sunlight and moisture.'
    },
  ];

  const toggle = (idx: number) => {
    triggerLightTap();
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-12 px-3 sm:px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'te' ? 'తరచుగా అడిగే ప్రశ్నలు' : 'FAQ & Order Process'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {lang === 'te' ? 'మీ సందేహాలు & సమాధానాలు' : 'Frequently Asked Questions'}
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
                  <span>{lang === 'te' ? faq.qTe : faq.qEn}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    {lang === 'te' ? faq.aTe : faq.aEn}
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
