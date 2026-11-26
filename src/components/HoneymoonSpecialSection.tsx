import React from 'react';
import { Heart, Sparkles, ArrowRight, BedDouble, Utensils, Flower2, CarFront, Flame, Camera, CakeSlice } from 'lucide-react';
import { HONEYMOON_PERKS } from '../data/packagesData';
import { getAssetUrl } from '../utils/asset';

interface HoneymoonProps {
  onOpenBooking: (pkgTitle?: string) => void;
}

export const HoneymoonSpecialSection: React.FC<HoneymoonProps> = ({ onOpenBooking }) => {
  return (
    <section id="honeymoon" className="py-20 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Big Romantic Presentation */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 fill-rose-600 text-rose-600" /> Made For Two
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-extrabold text-[#421E29] leading-tight">
              A Honeymoon as Magical as Your Story.
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Celebrate your new beginning surrounded by snow-draped pine forests, private candlelit dinners, and scenic drives across the high Himalayan passes. Every detail is thoughtfully arranged so you can focus entirely on each other.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Private Candlelight Dinner</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Specially decorated table for two with ambient candles, fresh roses, and chef-curated cuisine.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                  <Flower2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Romantic Room Decoration & Cake</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fresh flower bed decor on arrival night in Manali with a complimentary celebration cake.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <CarFront className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Dedicated Couple Taxi</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    No shared group vans. A private sanitized cab for your complete route with maximum privacy.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => onOpenBooking('Shimla Manali 5N/6D Romantic Honeymoon Special')}
                className="inline-flex items-center gap-2 bg-[#421E29] hover:bg-[#5B293A] text-white px-8 py-4 rounded-full font-bold text-sm shadow-md transition transform hover:-translate-y-0.5"
              >
                Plan Our Honeymoon Itinerary <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Photo Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-3xl overflow-hidden shadow-lg group">
                  <img
                    src={getAssetUrl('/images/manali_wooden_suite.jpg')}
                    alt="Cozy Wooden Honeymoon Suite Manali"
                    className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300">
                      Cozy Stay
                    </span>
                    <div className="font-bold text-sm sm:text-base">Pine Wood Valley Suite</div>
                  </div>
                </div>

                <div className="relative rounded-3xl overflow-hidden shadow-lg group">
                  <img
                    src={getAssetUrl('/images/mountain_dining.jpg')}
                    alt="Mountain Garden Dining in Himachal"
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300">
                      Dining for Two
                    </span>
                    <div className="font-bold text-sm sm:text-base">Mountain Lawn Dining</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="relative rounded-3xl overflow-hidden shadow-lg group">
                  <img
                    src={getAssetUrl('/images/shimla_sunset_balcony.jpg')}
                    alt="Sunset Cloud Balcony in Shimla"
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300">
                      Golden Hour
                    </span>
                    <div className="font-bold text-sm sm:text-base">Sunset View Glass Lounge</div>
                  </div>
                </div>

                <div className="relative rounded-3xl overflow-hidden shadow-lg group">
                  <img
                    src={getAssetUrl('/images/pine_forest_terrace.jpg')}
                    alt="Pine Forest Outdoor Cafe Terrace"
                    className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300">
                      Serenity
                    </span>
                    <div className="font-bold text-sm sm:text-base">Pine Forest Terrace Walk</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Honeymoon Perks Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {HONEYMOON_PERKS.map((perk, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center flex flex-col items-center hover:shadow-md transition"
            >
              <div className="text-3xl mb-2">{perk.icon}</div>
              <h4 className="font-bold text-xs sm:text-sm text-slate-800">{perk.title}</h4>
              <p className="text-[11px] text-slate-500 mt-1 leading-snug">{perk.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
