import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { getAssetUrl } from '../utils/asset';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A0B10] text-white pt-16 pb-28 sm:pb-16 border-t border-[#421E29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={getAssetUrl('/images/logo.png')}
                alt="Safar Sathi Logo"
                className="h-12 w-auto object-contain"
              />
              <div>
                <span className="font-extrabold text-xl tracking-wider text-white">
                  SAFAR SATHI
                </span>
                <div className="text-[10px] text-amber-300 uppercase tracking-widest font-bold">
                  Your Journey, Our Responsibility
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Himachal Pradesh registered travel booking platform. Specialized in private couple honeymoon tours, family vacations, luxury mountain resort stays, and sanitized outstation taxi services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm uppercase tracking-wider text-amber-300">Popular Packages</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#packages" className="hover:text-white transition">5N/6D Shimla Manali Honeymoon Special</a></li>
              <li><a href="#packages" className="hover:text-white transition">6N/7D Royal Himachal Luxury Suite</a></li>
              <li><a href="#packages" className="hover:text-white transition">4N/5D Manali, Solang & Atal Tunnel Tour</a></li>
              <li><a href="#packages" className="hover:text-white transition">3N/4D Shimla & Kufri Weekend Getaway</a></li>
              <li><a href="#packages" className="hover:text-white transition">Delhi to Manali Private Taxi Rental</a></li>
            </ul>
          </div>

          {/* Experiences */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm uppercase tracking-wider text-amber-300">Couple Inclusions</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>• Private Valley-View Wooden Stays</li>
              <li>• Romantic Candlelight Dinner & Flowers</li>
              <li>• 100% Dedicated Sanitized Private Cab</li>
              <li>• Snow Activities at Solang & Sissu</li>
              <li>• 24x7 Dedicated Trip Concierge</li>
            </ul>
          </div>

          {/* Direct Office & Contact */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm uppercase tracking-wider text-amber-300">24x7 Support Desk</h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a href="tel:+918351987587" className="flex items-center gap-2 hover:text-white transition font-semibold text-amber-200">
                <Phone className="w-4 h-4 text-emerald-400" /> +91 83519 87587
              </a>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" /> safarsathi.india@gmail.com
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>Operating 100% Online Pan-India • Base: Shimla & Manali, Himachal Pradesh</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Safar Sathi (<a href="https://safarsathi.in" className="hover:text-amber-300">safarsathi.in</a>). All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-300">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for Himachal travelers
          </div>
        </div>
      </div>
    </footer>
  );
};
