import React, { useState } from 'react';
import { Menu, X, Phone, Heart, Sparkles, Compass } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (pkgTitle?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Top micro bar */}
      <div className="bg-[#421E29] text-white/90 text-xs py-2 px-4 border-b border-[#5B293A]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium tracking-wide">
              Direct Local Himachal Rates • 24x7 On-Trip Assistance • Sanitized Private Cabs
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <a
              href="tel:+918351987587"
              className="hover:text-amber-300 transition flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" /> +91 83519 87587
            </a>
            <span className="text-white/40">|</span>
            <span className="text-amber-200">safarsathi.in</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-[#E9DFD5] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt="Safar Sathi Travel Logo"
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-xl sm:text-2xl tracking-wider text-[#421E29] leading-none">
                SAFAR SATHI
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-[#9A713C] tracking-widest uppercase mt-0.5">
                Shimla & Manali Travel Specialist
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <a href="#packages" className="hover:text-[#421E29] transition">
              Tour Packages
            </a>
            <a
              href="#honeymoon"
              className="flex items-center gap-1.5 text-[#E05500] hover:text-[#B84000] transition"
            >
              <Heart className="w-4 h-4 fill-[#E05500]" /> Honeymoon Special
            </a>
            <a href="#calculator" className="hover:text-[#421E29] transition flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Price Calculator
            </a>
            <a href="#itinerary" className="hover:text-[#421E29] transition">
              Day-by-Day Plan
            </a>
            <a href="#resorts" className="hover:text-[#421E29] transition">
              Resorts & Stays
            </a>
            <a href="#cabs" className="hover:text-[#421E29] transition">
              Private Cabs
            </a>
            <a href="#faq" className="hover:text-[#421E29] transition">
              FAQ
            </a>
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/918351987587?text=Hello%20Safar%20Sathi,%20I%20am%20looking%20for%20Shimla%20Manali%20Tour%20/%20Honeymoon%20Package%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-4 py-2.5 rounded-full text-xs font-bold shadow-sm transition transform hover:-translate-y-0.5"
            >
              <Compass className="w-4 h-4" /> WhatsApp Quote
            </a>
            <button
              onClick={() => onOpenBooking('Shimla Manali Custom Tour')}
              className="bg-[#421E29] hover:bg-[#5B293A] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-sm transition transform hover:-translate-y-0.5"
            >
              Get Custom Itinerary
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#421E29] p-2 rounded-lg hover:bg-slate-100 transition"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 py-4 px-2 space-y-3 bg-white">
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-800 rounded-md hover:bg-slate-50"
            >
              Tour Packages
            </a>
            <a
              href="#honeymoon"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-[#E05500] rounded-md hover:bg-orange-50 flex items-center gap-2"
            >
              <Heart className="w-4 h-4 fill-[#E05500]" /> Honeymoon Special
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-amber-700 rounded-md hover:bg-amber-50"
            >
              Instant Price Calculator
            </a>
            <a
              href="#itinerary"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-800 rounded-md hover:bg-slate-50"
            >
              Day-by-Day Plan
            </a>
            <a
              href="#resorts"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-800 rounded-md hover:bg-slate-50"
            >
              Resorts & Stays
            </a>
            <a
              href="#cabs"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-800 rounded-md hover:bg-slate-50"
            >
              Private Cabs
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://wa.me/918351987587?text=Hello%20Safar%20Sathi,%20I%20am%20looking%20for%20Shimla%20Manali%20Tour%20/%20Honeymoon%20Package%20quote."
                className="w-full text-center bg-[#25D366] text-white py-3 rounded-xl font-bold text-sm shadow"
              >
                Chat on WhatsApp
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking('Custom Himachal Tour');
                }}
                className="w-full text-center bg-[#421E29] text-white py-3 rounded-xl font-bold text-sm shadow"
              >
                Request Custom Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
