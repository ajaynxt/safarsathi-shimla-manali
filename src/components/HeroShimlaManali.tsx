import React, { useState } from 'react';
import { Heart, ShieldCheck, MapPin, Calendar, Users, ArrowRight, Star, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: (pkgTitle?: string) => void;
}

export const HeroShimlaManali: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [selectedRoute, setSelectedRoute] = useState('delhi-shimla-manali');
  const [tripType, setTripType] = useState('honeymoon');
  const [passengers, setPassengers] = useState('2');

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const routeText =
      selectedRoute === 'delhi-shimla-manali'
        ? 'Delhi to Shimla Manali'
        : selectedRoute === 'chd-shimla-manali'
        ? 'Chandigarh to Shimla Manali'
        : 'Direct Shimla & Manali';

    const msg = `Hello Safar Sathi! I want to check package rates for:
• Route: ${routeText}
• Trip Type: ${tripType.toUpperCase()}
• Guests: ${passengers} Persons
Please share the detailed itinerary and best price quotation.`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/918351987587?text=${encoded}`, '_blank');
  };

  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden bg-[#0A1428]">
      {/* Background Cinematic Image with Ken Burns / Parallax effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/shimla_sunset_balcony.jpg"
          alt="Luxury Resort Balcony Sunset View in Himachal Pradesh"
          className="w-full h-full object-cover object-center filter brightness-[0.65] contrast-[1.08] scale-105 transition-transform duration-1000"
        />
        {/* Deep Gradient Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1428]/95 via-[#0A1428]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1428] via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and Trust Elements */}
          <div className="lg:col-span-7 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold tracking-wider uppercase mb-5 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Himachal Tour & Honeymoon Specialist
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight">
              A Little More Romance <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-orange-400">
                In The Mountains.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-200/90 leading-relaxed max-w-xl font-normal">
              Book your private Himachal escape with a dedicated sanitized cab from Delhi or Chandigarh, luxury mountain-facing wooden stays, romantic candlelight dinners, and handpicked local sightseeing.
            </p>

            {/* Micro Trust Pills */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/15">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs font-semibold text-white/90">100% Private Cab</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/15">
                <Heart className="w-5 h-5 text-rose-400 shrink-0" />
                <span className="text-xs font-semibold text-white/90">Romantic Extras</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/15">
                <Star className="w-5 h-5 text-amber-400 shrink-0 fill-amber-400" />
                <span className="text-xs font-semibold text-white/90">Direct Local Rates</span>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#packages"
                className="bg-gradient-to-r from-[#E0A96D] to-[#D48C46] hover:from-[#D48C46] hover:to-[#B8702E] text-slate-900 px-7 py-3.5 rounded-full font-extrabold text-sm shadow-lg shadow-amber-500/25 transition transform hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                Explore Shimla-Manali Packages <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+918351987587"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/25 px-6 py-3.5 rounded-full font-bold text-sm backdrop-blur-md transition"
              >
                Call Concierge: +91 83519 87587
              </a>
            </div>
          </div>

          {/* Right Column: Instant Live Booking & Quote Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/40">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#9A713C]">
                    Instant Quotation
                  </span>
                  <h3 className="text-xl font-bold text-[#421E29]">Plan Your Tour</h3>
                </div>
                <div className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
                  ⚡ 5 Min Response
                </div>
              </div>

              <form onSubmit={handleQuickInquiry} className="space-y-4">
                {/* Pickup and route */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#E05500]" /> Pickup & Route
                  </label>
                  <select
                    value={selectedRoute}
                    onChange={(e) => setSelectedRoute(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="delhi-shimla-manali">Delhi ➔ Shimla ➔ Manali ➔ Delhi</option>
                    <option value="chd-shimla-manali">Chandigarh ➔ Shimla ➔ Manali ➔ Chandigarh</option>
                    <option value="direct-manali">Direct Manali & Solang Valley (4N/5D)</option>
                    <option value="direct-shimla">Direct Shimla & Kufri (3N/4D)</option>
                  </select>
                </div>

                {/* Trip Type */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#E05500]" /> Trip Category
                    </label>
                    <select
                      value={tripType}
                      onChange={(e) => setTripType(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="honeymoon">Couple Honeymoon</option>
                      <option value="family">Family Holiday</option>
                      <option value="luxury">Luxury Suite & SUV</option>
                      <option value="friends">Friends Group Trip</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#E05500]" /> Travelers
                    </label>
                    <select
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="2">2 Persons (Couple)</option>
                      <option value="3">3-4 Persons (Family)</option>
                      <option value="5">5-6 Persons (SUV)</option>
                      <option value="7">7+ Persons (Tempo)</option>
                    </select>
                  </div>
                </div>

                {/* Included perks preview */}
                <div className="bg-[#FAF7F2] p-3.5 rounded-xl border border-[#E9DFD5] text-xs space-y-1.5">
                  <div className="font-bold text-[#421E29] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Package Guaranteed Inclusions:
                  </div>
                  <div className="text-slate-600 flex items-center gap-1.5">
                    ✓ Private sanitized Sedan/SUV dedicated cab
                  </div>
                  <div className="text-slate-600 flex items-center gap-1.5">
                    ✓ Daily Breakfast & Dinner at Valley View stays
                  </div>
                  {tripType === 'honeymoon' && (
                    <div className="text-[#E05500] font-semibold flex items-center gap-1.5">
                      ✓ Candlelight Dinner, Flower Bed & Cake included
                    </div>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Get Instant WhatsApp Quote & Plan
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  No commitment required • Direct quotes from Himachal local office
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
