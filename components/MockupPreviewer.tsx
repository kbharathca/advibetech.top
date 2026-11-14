'use client';

import React, { useState } from 'react';
import { ELECTION_SYMBOLS, PARTY_THEMES, ElectionSymbol } from '@/data/symbols';
import { Sparkles, MessageCircle, RefreshCw, Send, Check } from 'lucide-react';
import { useHaptic } from '@/hooks/useHaptic';

interface MockupProps {
  lang: 'te' | 'en';
}

export function MockupPreviewer({ lang }: MockupProps) {
  const [candidateName, setCandidateName] = useState(lang === 'te' ? 'రమేష్ బాబు' : 'Ramesh Babu');
  const [selectedSymbol, setSelectedSymbol] = useState<ElectionSymbol>(ELECTION_SYMBOLS[0]); // Cot
  const [selectedTheme, setSelectedTheme] = useState(PARTY_THEMES[0]); // Yellow
  const [activeTab, setActiveTab] = useState<'keychain' | 'sticker'>('keychain');
  const { triggerLightTap, triggerSelectionTap, triggerSuccessHaptic } = useHaptic();

  const handleSymbolChange = (sym: ElectionSymbol) => {
    triggerSelectionTap();
    setSelectedSymbol(sym);
  };

  const handleThemeChange = (thm: typeof PARTY_THEMES[0]) => {
    triggerSelectionTap();
    setSelectedTheme(thm);
  };

  const handleSendToWhatsApp = () => {
    triggerSuccessHaptic();
    const msg = encodeURIComponent(
      lang === 'te'
        ? `నమస్తే సూరా దేవి ప్రసాద్ గారు (అద్వైబ్ టెక్),\nనేను వెబ్‌సైట్‌లో లైవ్ ప్రివ్యూ డిజైన్ చేశాను:\n• అభ్యర్థి పేరు: ${candidateName || 'అభ్యర్థి'}\n• ఎన్నికల గుర్తు: ${selectedSymbol.nameTe} (${selectedSymbol.nameEn})\n• రంగుల థీమ్: ${selectedTheme.name}\n\nదయచేసి ఈ డిజైన్ ఆధారంగా కీచైన్లు మరియు స్టిక్కర్లకు కొటేషన్ పంపగలరు.`
        : `Hello Sura Devi Prasad garu (AdVibe Tech),\nI customized a preview design on your website:\n• Candidate Name: ${candidateName || 'Candidate'}\n• Symbol: ${selectedSymbol.nameEn} (${selectedSymbol.nameTe})\n• Color Theme: ${selectedTheme.name}\n\nPlease share price quotation and digital proof on this.`
    );
    window.open(`https://wa.me/917075209795?text=${msg}`, '_blank');
  };

  // Helper for Symbol SVG Icons
  const renderSymbolGraphic = (id: string, color: string) => {
    switch (id) {
      case 'cot': // మంచం
        return (
          <svg viewBox="0 0 100 60" className="w-16 h-10 fill-none stroke-current" strokeWidth="4">
            <rect x="10" y="15" width="80" height="25" rx="3" stroke={color} fill={color + '22'} />
            <path d="M15 15 L85 40 M85 15 L15 40 M30 15 L70 40 M70 15 L30 40" stroke={color} strokeWidth="1.5" />
            <line x1="15" y1="40" x2="15" y2="55" stroke={color} strokeWidth="5" strokeLinecap="round" />
            <line x1="85" y1="40" x2="85" y2="55" stroke={color} strokeWidth="5" strokeLinecap="round" />
            <line x1="10" y1="10" x2="10" y2="20" stroke={color} strokeWidth="5" strokeLinecap="round" />
            <line x1="90" y1="10" x2="90" y2="20" stroke={color} strokeWidth="5" strokeLinecap="round" />
          </svg>
        );
      case 'scissors': // కత్తెర
        return (
          <svg viewBox="0 0 80 80" className="w-14 h-14 stroke-current" strokeWidth="4" fill="none">
            <circle cx="25" cy="60" r="12" stroke={color} strokeWidth="4" />
            <circle cx="55" cy="60" r="12" stroke={color} strokeWidth="4" />
            <line x1="33" y1="52" x2="60" y2="15" stroke={color} strokeWidth="5" strokeLinecap="round" />
            <line x1="47" y1="52" x2="20" y2="15" stroke={color} strokeWidth="5" strokeLinecap="round" />
            <circle cx="40" cy="38" r="3" fill={color} />
          </svg>
        );
      case 'ring': // ఉంగరం
        return (
          <svg viewBox="0 0 80 80" className="w-14 h-14 fill-none stroke-current">
            <ellipse cx="40" cy="48" rx="26" ry="20" stroke={color} strokeWidth="6" />
            <path d="M30 28 L40 18 L50 28 L45 34 L35 34 Z" fill={color} stroke={color} strokeWidth="2" />
            <circle cx="40" cy="26" r="3" fill="#fff" />
          </svg>
        );
      case 'basket': // బుట్ట
        return (
          <svg viewBox="0 0 80 60" className="w-14 h-12 fill-none stroke-current" strokeWidth="3">
            <ellipse cx="40" cy="20" rx="30" ry="10" stroke={color} />
            <path d="M12 20 Q40 60 68 20" stroke={color} strokeWidth="4" fill={color + '33'} />
            <path d="M22 24 L58 48 M58 24 L22 48" stroke={color} strokeWidth="2" />
          </svg>
        );
      case 'stool': // స్టూల్
        return (
          <svg viewBox="0 0 80 70" className="w-14 h-12 fill-none stroke-current" strokeWidth="4">
            <ellipse cx="40" cy="18" rx="26" ry="8" stroke={color} fill={color + '33'} />
            <line x1="22" y1="22" x2="16" y2="60" stroke={color} strokeWidth="4" />
            <line x1="58" y1="22" x2="64" y2="60" stroke={color} strokeWidth="4" />
            <line x1="40" y1="24" x2="40" y2="58" stroke={color} strokeWidth="3" />
            <line x1="20" y1="44" x2="60" y2="44" stroke={color} strokeWidth="2" />
          </svg>
        );
      default:
        return (
          <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center font-bold text-xs" style={{ color }}>
            {selectedSymbol.nameEn}
          </div>
        );
    }
  };

  return (
    <section id="mockup" className="py-12 px-3 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Title & Sub */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'te' ? 'ఇంటరాక్టివ్ డిజైన్ టూల్' : 'Interactive Mockup Studio'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            {lang === 'te'
              ? 'మీ అభ్యర్థి ప్రివ్యూను ఇప్పుడే తయారు చేసుకోండి'
              : 'Create Your Live Candidate Preview'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            {lang === 'te'
              ? 'మీ పేరు మరియు గుర్తును ఎంచుకొని కీచైన్ మరియు మొబైల్ స్టిక్కర్ ప్రివ్యూ చూడండి. నచ్చితే నేరుగా వాట్సాప్‌లో పంపవచ్చు.'
              : 'Type your name, select your election symbol and party colors to preview your double-sided keychain & mobile sticker instantly.'}
          </p>
        </div>

        {/* Studio Controls + Preview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-3xl p-4 sm:p-6 space-y-5 shadow-xl">
            {/* 1. Candidate Name Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
                <span>{lang === 'te' ? 'అభ్యర్థి పేరు / Contact Name' : 'Candidate Name'}</span>
                <span className="text-[10px] text-amber-400 font-medium">
                  {lang === 'te' ? 'లైవ్ ప్రివ్యూలో కనిపిస్తుంది' : 'Reflects in live preview'}
                </span>
              </label>
              <input
                type="text"
                value={candidateName}
                onChange={(e) => setCandidateName(e.target.value)}
                placeholder={lang === 'te' ? 'ఉదా: రమేష్ బాబు / Suresh' : 'e.g. Ramesh Babu'}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition"
              />
            </div>

            {/* 2. Select Election Symbol */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300">
                {lang === 'te' ? 'ఎన్నికల గుర్తును ఎంచుకోండి (Select Symbol):' : 'Select Election Symbol:'}
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {ELECTION_SYMBOLS.map((sym) => {
                  const isSelected = selectedSymbol.id === sym.id;
                  return (
                    <button
                      key={sym.id}
                      onClick={() => handleSymbolChange(sym)}
                      className={`p-2 rounded-xl border text-center transition-all flex flex-col items-center gap-1 active:scale-95 ${
                        isSelected
                          ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-md shadow-amber-500/20'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      <span className="text-xs font-extrabold truncate w-full">
                        {lang === 'te' ? sym.nameTe : sym.nameEn}
                      </span>
                      <span className="text-[9px] text-slate-500">
                        {lang === 'te' ? sym.nameEn : sym.nameTe}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Select Party Theme / Background Colors */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300">
                {lang === 'te' ? 'పార్టీ రంగులు / థీమ్ ఎంచుకోండి:' : 'Select Party Theme / Color Scheme:'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {PARTY_THEMES.map((theme) => {
                  const isSelected = selectedTheme.id === theme.id;
                  return (
                    <button
                      key={theme.id}
                      onClick={() => handleThemeChange(theme)}
                      className={`px-3 py-2 rounded-xl border text-xs font-bold transition-all flex items-center justify-between active:scale-95 ${
                        isSelected
                          ? 'border-amber-400 bg-amber-500/20 text-amber-300'
                          : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white'
                      }`}
                    >
                      <span className="truncate">{theme.name}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-amber-400" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mockup Format Switcher (Keychain vs Sticker) */}
            <div className="flex rounded-xl bg-slate-950 p-1 border border-slate-800">
              <button
                onClick={() => {
                  triggerLightTap();
                  setActiveTab('keychain');
                }}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'keychain'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {lang === 'te' ? 'ఓవల్ కీచైన్ ప్రివ్యూ' : 'Oval Keychain Preview'}
              </button>
              <button
                onClick={() => {
                  triggerLightTap();
                  setActiveTab('sticker');
                }}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'sticker'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {lang === 'te' ? 'మొబైల్ స్టిక్కర్ ప్రివ్యూ' : 'Mobile Sticker Preview'}
              </button>
            </div>
          </div>

          {/* Right Column: Live Mockup Canvas Display */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 relative shadow-2xl">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-1.5">
              <RefreshCw className="w-3 h-3 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>{lang === 'te' ? 'లైవ్ ప్రివ్యూ స్క్రీన్' : 'Real-Time Render'}</span>
            </span>

            {/* PREVIEW 1: Oval Keychain (Double-Sided Presentation) */}
            {activeTab === 'keychain' && (
              <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-6 py-4">
                {/* Keychain Side 1: Candidate Photo & Name */}
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold text-amber-400 uppercase mb-2">
                    {lang === 'te' ? 'ముందు భాగం (Front Side)' : 'Front (Photo & Name)'}
                  </span>
                  
                  {/* Metal Ring */}
                  <div className="w-7 h-7 rounded-full border-4 border-slate-400 shadow-md -mb-3 z-20 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-slate-500" />
                  </div>

                  {/* Keychain Body */}
                  <div className="w-36 h-60 rounded-[45px] p-2 bg-gradient-to-b from-white/30 to-white/5 backdrop-blur-md border-4 border-white/40 shadow-2xl relative flex flex-col items-center justify-between text-center overflow-hidden">
                    {/* Inner Card */}
                    <div className={`w-full h-full rounded-[38px] bg-gradient-to-b ${selectedTheme.bgClass} p-3 flex flex-col items-center justify-between shadow-inner`}>
                      <span className="text-[8px] font-black uppercase tracking-wider text-slate-800 bg-white/80 px-2 py-0.5 rounded-full mt-1">
                        సర్పంచ్ అభ్యర్థి
                      </span>

                      {/* Candidate Avatar Placeholder */}
                      <div className="w-16 h-16 rounded-full bg-slate-900/30 border-2 border-white flex items-center justify-center text-white text-xl font-black shadow-md">
                        {candidateName ? candidateName.slice(0, 2) : 'AV'}
                      </div>

                      {/* Name Card */}
                      <div className="w-full bg-slate-950/85 backdrop-blur-sm py-1.5 px-2 rounded-xl text-center border border-white/20">
                        <span className="text-[9px] text-amber-300 block font-medium">మన ఓటు</span>
                        <span className="text-xs font-black text-white block truncate">
                          {candidateName || (lang === 'te' ? 'మీ పేరు' : 'Your Name')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Keychain Side 2: Election Symbol & Voting Slogan */}
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase mb-2">
                    {lang === 'te' ? 'వెనుక భాగం (Back Side)' : 'Back (Election Symbol)'}
                  </span>

                  {/* Metal Ring */}
                  <div className="w-7 h-7 rounded-full border-4 border-slate-400 shadow-md -mb-3 z-20 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-slate-500" />
                  </div>

                  {/* Keychain Body */}
                  <div className="w-36 h-60 rounded-[45px] p-2 bg-gradient-to-b from-white/30 to-white/5 backdrop-blur-md border-4 border-white/40 shadow-2xl relative flex flex-col items-center justify-between text-center overflow-hidden">
                    <div className="w-full h-full rounded-[38px] bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 p-3 flex flex-col items-center justify-between shadow-inner border border-white/10">
                      <span className="text-[8px] font-black uppercase text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded-full mt-1 border border-amber-500/30">
                        Vote for
                      </span>

                      {/* Rendered Election Symbol */}
                      <div className="my-auto flex flex-col items-center justify-center py-2">
                        {renderSymbolGraphic(selectedSymbol.id, selectedSymbol.color)}
                        <span className="text-xs font-black text-white mt-2">
                          {selectedSymbol.nameTe}
                        </span>
                        <span className="text-[9px] text-slate-400">
                          ({selectedSymbol.nameEn})
                        </span>
                      </div>

                      {/* Slogan */}
                      <div className="w-full bg-emerald-600/90 py-1.5 px-2 rounded-xl text-center border border-emerald-400/40">
                        <span className="text-[10px] font-black text-white block">
                          గుర్తుకే మన ఓటు!
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PREVIEW 2: Circular Mobile Sticker */}
            {activeTab === 'sticker' && (
              <div className="py-6 flex flex-col items-center">
                <div className="w-52 h-52 rounded-full p-2 bg-gradient-to-tr from-amber-400 via-yellow-300 to-emerald-400 shadow-2xl flex items-center justify-center relative">
                  {/* Glossy Edge Reflection */}
                  <div className="absolute inset-2 rounded-full border border-white/50 pointer-events-none" />

                  {/* Inner Sticker Face */}
                  <div className={`w-full h-full rounded-full bg-gradient-to-b ${selectedTheme.bgClass} flex flex-col items-center justify-between p-4 text-center shadow-inner`}>
                    <span className="text-[9px] font-bold text-slate-900 bg-white/90 px-3 py-0.5 rounded-full">
                      మన గ్రామ అభివృద్ధి కోసం
                    </span>

                    {/* Central Symbol */}
                    <div className="my-auto flex flex-col items-center">
                      {renderSymbolGraphic(selectedSymbol.id, '#1e293b')}
                      <span className="text-sm font-black text-slate-950 mt-1">
                        {selectedSymbol.nameTe}
                      </span>
                    </div>

                    <div className="bg-slate-950/90 text-white px-3 py-1 rounded-full text-[10px] font-black tracking-wide">
                      {candidateName ? `${candidateName} గారికి ఓటు వేయండి` : 'గుర్తుకే మన ఓటు'}
                    </div>
                  </div>
                </div>
                <span className="text-xs text-slate-400 mt-4 text-center">
                  {lang === 'te'
                    ? 'మొబైల్ ఫోన్లు, బైక్‌లు మరియు ఆటోలపై అంటించుకునే హై-గ్లాస్ స్టిక్కర్'
                    : 'Waterproof high-gloss sticker for mobile backs, bikes & campaign vehicles'}
                </span>
              </div>
            )}

            {/* Direct Send Mockup CTA Button */}
            <div className="w-full pt-4">
              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>
                  {lang === 'te'
                    ? 'ఈ డిజైన్‌ను వాట్సాప్‌లో పంపి రేటు అడగండి (+91 7075209795)'
                    : 'Send This Design to Owner on WhatsApp (+91 7075209795)'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
