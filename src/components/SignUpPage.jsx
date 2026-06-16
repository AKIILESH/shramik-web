import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { 
  HardHat, 
  Check, 
  Wallet, 
  UserCheck, 
  ShieldCheck, 
  FileText, 
  Lock, 
  Clock, 
  ArrowRight
} from 'lucide-react';
import LaborerSignUpForm from './LaborerSignUpForm';
import HirerSignUpForm from './HirerSignUpForm';
import LoginForm from './LoginForm';
import { translations } from '../lib/translations';

export default function SignUpPage({ onNavigate, initialStep = 'choose', language = 'hi', onLanguageChange }) {
  const [step, setStep] = useState(initialStep);

  // Sync initialStep when navigated from outside
  useEffect(() => {
    setStep(initialStep);
  }, [initialStep]);

  const t = translations[language].signup;

  // Reusable Login header action link for the 'choose' step
  const loginAction = (
    <div className="text-xs sm:text-sm md:text-base text-slate-600 font-semibold font-sans">
      <span className="hidden sm:inline">{t.loginPrompt} </span>
      <button 
        onClick={() => setStep('login')} 
        className="font-bold text-kaam-orange hover:text-orange-cta-safe transition-all duration-200 cursor-pointer ml-1"
        id="btn-login-trigger"
      >
        {translations[language].login.submitBtn}
      </button>
    </div>
  );

  // 1. LABORER SIGNUP VIEW ROUTING
  if (step === 'laborer-signup') {
    return (
      <LaborerSignUpForm 
        onNavigate={onNavigate} 
        onBack={() => setStep('choose')} 
        language={language}
        onLanguageChange={onLanguageChange}
      />
    );
  }

  // 2. HIRER SIGNUP VIEW ROUTING
  if (step === 'hirer-signup') {
    return (
      <HirerSignUpForm 
        onNavigate={onNavigate} 
        onBack={() => setStep('choose')} 
        language={language}
        onLanguageChange={onLanguageChange}
      />
    );
  }

  // 3. LOGIN VIEW ROUTING
  if (step === 'login') {
    return (
      <LoginForm 
        onNavigate={onNavigate} 
        onBack={() => setStep('choose')} 
        language={language}
        onLanguageChange={onLanguageChange}
      />
    );
  }

  // 4. CHOOSE PATH VIEW (Default)
  return (
    <div className="min-h-screen bg-surface-gray-2 text-[#1C2733] font-sans flex flex-col justify-between">
      <Header 
        theme="light" 
        onNavigate={onNavigate} 
        rightAction={loginAction} 
        language={language} 
        onLanguageChange={onLanguageChange} 
      />
      
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-16 text-center flex-grow flex flex-col justify-center w-full">
        <h1 className="text-4xl md:text-5xl font-black text-shramik-navy tracking-tight mb-4 font-display">
          {t.title}
        </h1>
        <p className="text-base md:text-lg text-[#3A4856] max-w-2xl mx-auto mb-16 leading-relaxed font-semibold">
          {t.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16 w-full text-left">
          
          {/* Laborer Card */}
          <div className="bg-white border border-[#DDE3EA] rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
            <div className="mb-8">
              <div className="w-14 h-14 rounded-2xl bg-shramik-navy flex items-center justify-center text-white mb-8 shadow-sm">
                <HardHat className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-shramik-navy mb-4 font-display">
                {t.laborerCardTitle}
              </h2>
              <p className="text-[#3A4856] text-sm md:text-base mb-8 leading-relaxed font-medium">
                {t.laborerCardDesc}
              </p>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3 text-slate-800 font-semibold text-sm md:text-base">
                  <div className="w-6 h-6 rounded-full bg-kaam-orange flex items-center justify-center text-white flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{t.laborerBullet1}</span>
                </li>
                <li className="flex items-center gap-3 text-slate-800 font-semibold text-sm md:text-base">
                  <div className="w-6 h-6 rounded-full bg-kaam-orange flex items-center justify-center text-white flex-shrink-0">
                    <Wallet className="w-3.5 h-3.5" />
                  </div>
                  <span>{t.laborerBullet2}</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={() => setStep('laborer-signup')}
              className="w-full bg-shramik-navy hover:bg-shramik-navy-hover text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 group transition-all duration-200 cursor-pointer shadow-sm font-display text-base"
              id="btn-laborer-continue"
            >
              <span>{t.continueBtn}</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Hirer Card */}
          <div className="bg-white border border-[#DDE3EA] rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
            <div className="mb-8">
              <div className="w-14 h-14 rounded-2xl bg-kaam-orange flex items-center justify-center text-white mb-8 shadow-sm">
                <UserCheck className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-shramik-navy mb-4 font-display">
                {t.hirerCardTitle}
              </h2>
              <p className="text-[#3A4856] text-sm md:text-base mb-8 leading-relaxed font-medium">
                {t.hirerCardDesc}
              </p>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3 text-slate-800 font-semibold text-sm md:text-base">
                  <div className="w-6 h-6 rounded-full bg-shramik-navy flex items-center justify-center text-white flex-shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span>{t.hirerBullet1}</span>
                </li>
                <li className="flex items-center gap-3 text-slate-800 font-semibold text-sm md:text-base">
                  <div className="w-6 h-6 rounded-full bg-shramik-navy flex items-center justify-center text-white flex-shrink-0">
                    <FileText className="w-3.5 h-3.5" />
                  </div>
                  <span>{t.hirerBullet2}</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={() => setStep('hirer-signup')}
              className="w-full bg-shramik-navy hover:bg-shramik-navy-hover text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 group transition-all duration-200 cursor-pointer shadow-sm font-display text-base"
              id="btn-hirer-continue"
            >
              <span>{t.continueBtn}</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

        </div>

        <div className="border-t border-[#DDE3EA] pt-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full">
          <div className="flex items-center gap-2.5 text-[#5B6B7B] font-bold text-xs md:text-sm">
            <Lock className="w-4 h-4 md:w-5 md:h-5 text-shramik-navy" />
            <span>{t.encryptedData}</span>
          </div>
          <div className="flex items-center gap-2.5 text-[#5B6B7B] font-bold text-xs md:text-sm">
            <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-shramik-navy" />
            <span>{t.govtVerified}</span>
          </div>
          <div className="flex items-center gap-2.5 text-[#5B6B7B] font-bold text-xs md:text-sm">
            <Clock className="w-4 h-4 md:w-5 md:h-5 text-shramik-navy" />
            <span>{t.saralSupport}</span>
          </div>
        </div>
      </main>
      <Footer theme="light" />
    </div>
  );
}
