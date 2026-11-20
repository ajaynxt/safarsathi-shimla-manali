import React, { useState } from 'react';
import { Calculator, Calendar, Car, Hotel, MapPin, Sparkles, Send, Check } from 'lucide-react';

export const PackageCalculator: React.FC = () => {
  const [duration, setDuration] = useState<'3N4D' | '4N5D' | '5N6D' | '6N7D'>('5N6D');
  const [stayCategory, setStayCategory] = useState<'deluxe' | 'super-deluxe' | 'luxury-wood'>('deluxe');
  const [cabType, setCabType] = useState<'sedan' | 'ertiga' | 'innova'>('sedan');
  const [includeHoneymoonKit, setIncludeHoneymoonKit] = useState<boolean>(true);
  const [pickupCity, setPickupCity] = useState<'Delhi' | 'Chandigarh' | 'Kalka' | 'Direct Shimla'>('Delhi');

  // Base pricing logic (per couple)
  const basePrices: Record<string, number> = {
    '3N4D': 13999,
    '4N5D': 17999,
    '5N6D': 21999,
    '6N7D': 28999,
  };

  const hotelAddons: Record<string, number> = {
    deluxe: 0,
    'super-deluxe': 3500,
    'luxury-wood': 7000,
  };

  const cabAddons: Record<string, number> = {
    sedan: 0,
    ertiga: 3000,
    innova: 6500,
  };

  const honeymoonAddon = includeHoneymoonKit ? 2500 : 0;
  const estimatedPrice = basePrices[duration] + hotelAddons[stayCategory] + cabAddons[cabType] + honeymoonAddon;

  const handleWhatsAppBooking = () => {
    const durationLabel =
      duration === '5N6D'
        ? '5 Nights / 6 Days (Shimla & Manali Classic)'
        : duration === '6N7D'
        ? '6 Nights / 7 Days (Royal Himachal Honeymoon)'
        : duration === '4N5D'
        ? '4 Nights / 5 Days (Manali & Solang Valley)'
        : '3 Nights / 4 Days (Shimla & Kufri Weekend)';

    const hotelLabel =
      stayCategory === 'luxury-wood'
        ? 'Luxury Pine Wood Suite (Panoramic Valley View)'
        : stayCategory === 'super-deluxe'
        ? 'Super Deluxe 4-Star Resort'
        : 'Deluxe Valley View Stay';

    const cabLabel =
      cabType === 'innova'
        ? 'Toyota Innova Crysta (Luxury SUV)'
        : cabType === 'ertiga'
        ? 'Maruti Ertiga (Spacious 6-Seater)'
        : 'Swift Dzire / Etios (Private Sedan)';

    const message = `Hello Safar Sathi! I calculated a customized package on your website:

🏔️ *Selected Package:* ${durationLabel}
🚗 *Pickup City:* ${pickupCity}
🚖 *Vehicle:* ${cabLabel}
🏨 *Hotel Tier:* ${hotelLabel}
🌹 *Honeymoon Kit Included:* ${includeHoneymoonKit ? 'Yes (Candlelight Dinner + Bed Decor + Cake)' : 'No'}
💰 *Estimated Price for 2:* ₹${estimatedPrice.toLocaleString('en-IN')}

Please check availability for my travel dates and share the official quotation.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/918351987587?text=${encoded}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-white to-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold tracking-widest uppercase">
            <Calculator className="w-3.5 h-3.5 text-amber-700" /> Transparent Pricing Estimator
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#421E29]">
            Calculate Your Trip In Seconds
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Select your preferred duration, vehicle, and hotel category to see an honest estimate with zero hidden commissions.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden grid lg:grid-cols-12">
          {/* Left Form controls */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-7">
            {/* 1. Duration */}
            <div>
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 flex items-center gap-2 mb-3">
                <Calendar className="w-4 h-4 text-[#E05500]" /> 1. Select Tour Duration
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: '3N4D', label: '3N / 4D', sub: 'Shimla Kufri' },
                  { id: '4N5D', label: '4N / 5D', sub: 'Manali Solang' },
                  { id: '5N6D', label: '5N / 6D', sub: 'Shimla + Manali' },
                  { id: '6N7D', label: '6N / 7D', sub: 'Royal Honeymoon' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setDuration(item.id as any)}
                    className={`p-3.5 rounded-2xl border text-left transition ${
                      duration === item.id
                        ? 'border-[#421E29] bg-[#421E29] text-white shadow-md'
                        : 'border-slate-200 bg-slate-50 text-slate-800 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-extrabold text-sm">{item.label}</div>
                    <div className={`text-[11px] ${duration === item.id ? 'text-amber-200' : 'text-slate-500'}`}>
                      {item.sub}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Pickup City */}
            <div>
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-[#E05500]" /> 2. Pickup & Drop Location
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {(['Delhi', 'Chandigarh', 'Kalka', 'Direct Shimla'] as const).map((city) => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => setPickupCity(city)}
                    className={`py-3 px-3 rounded-xl border text-center font-bold text-xs sm:text-sm transition ${
                      pickupCity === city
                        ? 'border-[#E05500] bg-orange-50 text-[#E05500] ring-1 ring-[#E05500]'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Cab Fleet Choice */}
            <div>
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 flex items-center gap-2 mb-3">
                <Car className="w-4 h-4 text-[#E05500]" /> 3. Vehicle Preference (Private Dedicated Cab)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'sedan', name: 'Swift Dzire / Etios', note: 'Standard Sedan • Best for 2' },
                  { id: 'ertiga', name: 'Maruti Ertiga', note: 'Extra Legroom • 6-Seater' },
                  { id: 'innova', name: 'Toyota Innova Crysta', note: 'Luxury Mountain SUV' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCabType(item.id as any)}
                    className={`p-3.5 rounded-2xl border text-left transition ${
                      cabType === item.id
                        ? 'border-emerald-600 bg-emerald-50/60 ring-1 ring-emerald-600'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm text-slate-900">{item.name}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{item.note}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Hotel Stay Category */}
            <div>
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 flex items-center gap-2 mb-3">
                <Hotel className="w-4 h-4 text-[#E05500]" /> 4. Resort & Stay Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'deluxe', name: 'Deluxe Mountain Stay', desc: 'Valley Facing 3-Star' },
                  { id: 'super-deluxe', name: 'Super Deluxe 4-Star', desc: 'Private Balcony + Buffet' },
                  { id: 'luxury-wood', name: 'Alpine Wood Cottage', desc: 'Cedar Suite + Jacuzzi/Heater' },
                ].map((h) => (
                  <button
                    key={h.id}
                    type="button"
                    onClick={() => setStayCategory(h.id as any)}
                    className={`p-3.5 rounded-2xl border text-left transition ${
                      stayCategory === h.id
                        ? 'border-amber-600 bg-amber-50/60 ring-1 ring-amber-600'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm text-slate-900">{h.name}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{h.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Honeymoon Kit Checkbox */}
            <div className="bg-[#FFF8F0] p-4 rounded-2xl border border-amber-200/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-lg">
                  🌹
                </div>
                <div>
                  <div className="font-bold text-sm text-[#421E29]">Add Romantic Honeymoon Inclusions?</div>
                  <div className="text-xs text-slate-600">
                    Candlelight dinner table setup, flower bed decoration & celebration cake
                  </div>
                </div>
              </div>
              <input
                type="checkbox"
                checked={includeHoneymoonKit}
                onChange={(e) => setIncludeHoneymoonKit(e.target.checked)}
                className="w-5 h-5 text-[#E05500] rounded focus:ring-amber-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Right Summary Card */}
          <div className="lg:col-span-5 bg-[#421E29] text-white p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Estimated Total For 2 Persons
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-white">
                  ₹{estimatedPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-sm text-slate-300">/ couple total</span>
              </div>
              <div className="text-xs text-amber-200 mt-1">
                *Approx ₹{Math.round(estimatedPrice / 2).toLocaleString('en-IN')} per person
              </div>

              {/* Breakdown List */}
              <div className="mt-8 space-y-3.5 border-t border-white/15 pt-6 text-sm">
                <div className="flex justify-between items-center text-slate-200">
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" /> Dedicated Private Cab
                  </span>
                  <span className="font-semibold text-white">Included</span>
                </div>
                <div className="flex justify-between items-center text-slate-200">
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" /> Breakfast & Dinners (MAP)
                  </span>
                  <span className="font-semibold text-white">Included</span>
                </div>
                <div className="flex justify-between items-center text-slate-200">
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" /> Tolls, Parking & Driver Night
                  </span>
                  <span className="font-semibold text-white">Zero Extra</span>
                </div>
                <div className="flex justify-between items-center text-slate-200">
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" /> Sightseeing Solang & Kufri
                  </span>
                  <span className="font-semibold text-white">Covered</span>
                </div>
                {includeHoneymoonKit && (
                  <div className="flex justify-between items-center text-amber-200">
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-amber-400" /> Honeymoon Kit & Candlelight
                    </span>
                    <span className="font-semibold">Included</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 space-y-3">
              <button
                type="button"
                onClick={handleWhatsAppBooking}
                className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white py-4 rounded-2xl font-extrabold text-sm shadow-lg transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Lock This Rate on WhatsApp
              </button>
              <p className="text-[11px] text-center text-slate-300">
                Direct reply from Safar Sathi Himachal Booking Office • No middleman
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
