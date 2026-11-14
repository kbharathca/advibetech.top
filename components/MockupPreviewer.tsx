'use client';

import React, { useState } from 'react';
import { ELECTION_SYMBOLS, PARTY_THEMES, ElectionSymbol } from '@/data/symbols';
import { Sparkles, MessageCircle, RefreshCw, Check } from 'lucide-react';
import { useHaptic } from '@/hooks/useHaptic';

export function MockupPreviewer() {
  const [candidateName, setCandidateName] = useState('Ramesh Babu');
  const [customSymbolText, setCustomSymbolText] = useState('Cot');
  const [selectedTheme, setSelectedTheme] = useState(PARTY_THEMES[0]); // Yellow
  const [activeTab, setActiveTab] = useState<'keychain' | 'sticker'>('keychain');
  const { triggerLightTap, triggerSelectionTap, triggerSuccessHaptic } = useHaptic();

  const handleSymbolChip = (sym: ElectionSymbol) => {
    triggerSelectionTap();
    setCustomSymbolText(sym.nameEn);
  };

  const handleThemeChange = (thm: typeof PARTY_THEMES[0]) => {
    triggerSelectionTap();
    setSelectedTheme(thm);
  };

  const handleSendToWhatsApp = () => {
    triggerSuccessHaptic();
    const msg = encodeURIComponent(
      `Hello Sura Devi Prasad garu (AdVibe Tech),\nI generated a live candidate preview on your website:\n• Candidate Name: ${candidateName || 'Candidate'}\n• Election Symbol: ${customSymbolText || 'Custom Symbol'}\n• Color Theme: ${selectedTheme.name}\n\nPlease share price quotation and digital proof on this.`
    );
    window.open(`https://wa.me/917075209795?text=${msg}`, '_blank');
  };

  return (
    <section id="mockup" className="py-14 px-3 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Title */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Candidate Design Studio</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Create Your Live Candidate Preview
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Type your candidate name, enter any election symbol (party or independent), and choose colors to see your double-sided keychain and mobile sticker rendered in real time.
          </p>
        </div>

        {/* Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 space-y-5 shadow-xl">
            {/* 1. Candidate Name Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
                <span>Candidate / Representative Name</span>
                <span className="text-[10px] text-amber-400 font-medium">Reflects in live preview</span>
              </label>
              <input
                type="text"
                value={candidateName}
                onChange={(e) => setCandidateName(e.target.value)}
                placeholder="e.g. Ramesh Babu / Suresh Kumar"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition"
              />
            </div>

            {/* 2. Free-text Election Symbol Input + Quick Chips */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
                <span>Election Symbol (Type Any Symbol)</span>
                <span className="text-[10px] text-emerald-400 font-medium">Party or Independent</span>
              </label>
              <input
                type="text"
                value={customSymbolText}
                onChange={(e) => setCustomSymbolText(e.target.value)}
                placeholder="Type your symbol (e.g. Cot, Scissors, Kite, Tractor, Glass...)"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition font-bold"
              />

              {/* Quick Select Preset Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[10px] text-slate-500 w-full">Quick suggestions:</span>
                {ELECTION_SYMBOLS.slice(0, 8).map((sym) => (
                  <button
                    key={sym.id}
                    type="button"
                    onClick={() => handleSymbolChip(sym)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition ${
                      customSymbolText.toLowerCase() === sym.nameEn.toLowerCase()
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {sym.nameEn}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Party / Background Theme */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300">
                Select Color / Theme Scheme:
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

            {/* Format Switcher */}
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
                Oval Keychain Mockup
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
                Mobile Sticker Mockup
              </button>
            </div>
          </div>

          {/* Right Column: Live Render Display */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 relative shadow-2xl">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-1.5">
              <RefreshCw className="w-3 h-3 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>Real-Time Digital Proof</span>
            </span>

            {/* PREVIEW 1: Oval Keychain */}
            {activeTab === 'keychain' && (
              <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-6 py-4">
                {/* Front Side */}
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold text-amber-400 uppercase mb-2">
                    Front (Candidate Photo & Name)
                  </span>

                  <div className="w-7 h-7 rounded-full border-4 border-slate-400 shadow-md -mb-3 z-20 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-slate-500" />
                  </div>

                  <div className="w-36 h-60 rounded-[45px] p-2 bg-gradient-to-b from-white/30 to-white/5 backdrop-blur-md border-4 border-white/40 shadow-2xl relative flex flex-col items-center justify-between text-center overflow-hidden">
                    <div className={`w-full h-full rounded-[38px] bg-gradient-to-b ${selectedTheme.bgClass} p-3 flex flex-col items-center justify-between shadow-inner`}>
                      <span className="text-[8px] font-black uppercase tracking-wider text-slate-800 bg-white/80 px-2 py-0.5 rounded-full mt-1">
                        Sarpanch Candidate
                      </span>

                      <div className="w-16 h-16 rounded-full bg-slate-900/40 border-2 border-white flex items-center justify-center text-white text-xl font-black shadow-md">
                        {candidateName ? candidateName.slice(0, 2).toUpperCase() : 'AV'}
                      </div>

                      <div className="w-full bg-slate-950/85 backdrop-blur-sm py-1.5 px-2 rounded-xl text-center border border-white/20">
                        <span className="text-[9px] text-amber-300 block font-medium">Vote For</span>
                        <span className="text-xs font-black text-white block truncate">
                          {candidateName || 'Candidate Name'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase mb-2">
                    Reverse (Election Symbol)
                  </span>

                  <div className="w-7 h-7 rounded-full border-4 border-slate-400 shadow-md -mb-3 z-20 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-slate-500" />
                  </div>

                  <div className="w-36 h-60 rounded-[45px] p-2 bg-gradient-to-b from-white/30 to-white/5 backdrop-blur-md border-4 border-white/40 shadow-2xl relative flex flex-col items-center justify-between text-center overflow-hidden">
                    <div className="w-full h-full rounded-[38px] bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 p-3 flex flex-col items-center justify-between shadow-inner border border-white/10">
                      <span className="text-[8px] font-black uppercase text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded-full mt-1 border border-amber-500/30">
                        Vote for Symbol
                      </span>

                      <div className="my-auto flex flex-col items-center justify-center py-2 px-1 text-center">
                        <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 font-extrabold text-sm p-1">
                          {customSymbolText || 'Symbol'}
                        </div>
                        <span className="text-xs font-black text-white mt-2 truncate w-28">
                          {customSymbolText || 'Your Symbol'}
                        </span>
                      </div>

                      <div className="w-full bg-emerald-600/90 py-1.5 px-2 rounded-xl text-center border border-emerald-400/40">
                        <span className="text-[10px] font-black text-white block">
                          Vote For Victory!
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PREVIEW 2: Mobile Sticker */}
            {activeTab === 'sticker' && (
              <div className="py-6 flex flex-col items-center">
                <div className="w-52 h-52 rounded-full p-2 bg-gradient-to-tr from-amber-400 via-yellow-300 to-emerald-400 shadow-2xl flex items-center justify-center relative">
                  <div className="absolute inset-2 rounded-full border border-white/50 pointer-events-none" />

                  <div className={`w-full h-full rounded-full bg-gradient-to-b ${selectedTheme.bgClass} flex flex-col items-center justify-between p-4 text-center shadow-inner`}>
                    <span className="text-[9px] font-bold text-slate-900 bg-white/90 px-3 py-0.5 rounded-full uppercase tracking-wider">
                      Village Development
                    </span>

                    <div className="my-auto flex flex-col items-center px-2">
                      <div className="w-14 h-14 rounded-full bg-slate-950/80 border-2 border-white flex items-center justify-center text-amber-400 font-black text-xs p-1 text-center">
                        {customSymbolText || 'Symbol'}
                      </div>
                      <span className="text-sm font-black text-slate-950 mt-1 truncate max-w-[150px]">
                        Vote for {customSymbolText || 'Symbol'}
                      </span>
                    </div>

                    <div className="bg-slate-950/90 text-white px-3 py-1 rounded-full text-[10px] font-black tracking-wide truncate max-w-[170px]">
                      {candidateName ? `Vote for ${candidateName}` : 'Cast Your Vote'}
                    </div>
                  </div>
                </div>
                <span className="text-xs text-slate-400 mt-4 text-center">
                  Waterproof high-gloss sticker for mobile phone backs, bikes & campaign autos
                </span>
              </div>
            )}

            {/* Send Mockup CTA */}
            <div className="w-full pt-4">
              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Send This Design to Sura Devi Prasad on WhatsApp (+91 7075209795)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
