import React from 'react';

export default function Footer({ theme = 'light' }) {
  const isDark = theme === 'dark';
  return (
    <footer className={`w-full py-8 px-6 md:px-16 border-t transition-colors duration-200 ${
      isDark 
        ? 'bg-[#0E1626] border-slate-800 text-slate-400' 
        : 'bg-[#ECEFF3] border-[#DDE3EA] text-slate-600'
    }`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left branding */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <span className={`text-xl font-extrabold tracking-tight font-display ${isDark ? 'text-white' : 'text-shramik-navy'}`}>
            श्रमिक SHRAMIK
          </span>
          <p className="text-xs text-slate-500 mt-1 font-semibold">
            © 2026 Shramik Rozgar Pvt. Ltd. All rights reserved.
          </p>
        </div>

        {/* Right Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-xs md:text-sm font-bold">
          <a href="#contact" className="hover:text-kaam-orange transition-colors duration-200">Contact Us</a>
          <a href="#privacy" className="hover:text-kaam-orange transition-colors duration-200">Privacy Policy</a>
          <a href="#terms" className="hover:text-kaam-orange transition-colors duration-200">Terms of Service</a>
          <a href="#certified" className={`transition-colors duration-200 ${isDark ? 'text-slate-200 hover:text-kaam-orange' : 'text-shramik-navy hover:text-kaam-orange'}`}>Shramik Certified</a>
        </div>
      </div>
    </footer>
  );
}
