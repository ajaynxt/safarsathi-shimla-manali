import React from 'react';
import { Check, X, ShieldAlert } from 'lucide-react';

export const InclusionsExclusions: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#9A713C]">
            No Hidden Fees Guarantee
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#421E29]">
            Transparent Inclusions vs Exclusions
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Know exactly what you are paying for before you travel. No surprise bills on the road.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Inclusions */}
          <div className="bg-emerald-50/50 rounded-3xl p-6 sm:p-8 border border-emerald-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold text-emerald-950">100% Covered In Your Package</h3>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
              {[
                'Exclusive dedicated private cab for complete transfers and agreed sightseeing.',
                'Handpicked mountain-view hotel / resort accommodation as per chosen category.',
                'Daily morning breakfast and delicious dinner (MAP Plan) at your stay.',
                'Special Candlelight dinner table setup with fresh flowers (Honeymoon packages).',
                'Romantic floral bed decoration on arrival night in Manali (Honeymoon packages).',
                'Complimentary Honeymoon Celebration Cake (Honeymoon packages).',
                'All Interstate Border Taxes, Green Cess, Highway Tolls & Fuel charges.',
                'Driver daily allowance, boarding, lodging and night allowances.',
                '24x7 dedicated local Himachal operations helpline during your entire trip.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Exclusions */}
          <div className="bg-rose-50/40 rounded-3xl p-6 sm:p-8 border border-rose-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-rose-600 text-white flex items-center justify-center font-bold">
                ✕
              </div>
              <h3 className="text-xl font-bold text-rose-950">Not Included (Pay Directly as Used)</h3>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
              {[
                'Airfare or train tickets from your home city to Delhi / Chandigarh (can be assisted on request).',
                'Entry tickets to monuments, adventure amusement parks, museums, or cable car tickets.',
                'Personal adventure sport activities (Skiing, Paragliding, River Rafting, Snow Scooter, ATV).',
                'Personal expenses like room laundry, telephone calls, alcoholic beverages, room service tips.',
                'Any expenses caused by factors beyond control like landslides, flight delays, road closures.',
                'National Green Tribunal (NGT) Rohtang Pass permit if Rohtang is opted over Solang / Sissu.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
