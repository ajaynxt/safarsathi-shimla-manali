import React, { useState } from 'react';
import { FAQS } from '../data/packagesData';
import { ChevronDown, ChevronUp, Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Rahul & Simran Sharma',
    city: 'Delhi NCR',
    trip: '5N/6D Shimla Manali Honeymoon Special',
    rating: 5,
    text: 'Safar Sathi made our honeymoon completely stress-free! The private Innova Crysta was spotless, and our driver Bhupender bhaiya was so polite and knew the best viewpoints in Solang. The candlelight dinner with valley view in Manali was truly unforgettable. 10/10 recommended!',
  },
  {
    name: 'Pooja & Ankit Verma',
    city: 'Mumbai, Maharashtra',
    trip: '6N/7D Royal Himachal Luxury Suite Tour',
    rating: 5,
    text: 'We were skeptical about booking online, but Safar Sathi proved to be 100% genuine and transparent. The wooden room in Manali with the balcony snow view looked even better than the photos. No hidden driver or toll charges at all. Thank you for wonderful memories!',
  },
  {
    name: 'Siddharth & Meera Nair',
    city: 'Bengaluru, Karnataka',
    trip: '5N/6D Himachal Honeymoon Tour',
    rating: 5,
    text: 'From Chandigarh airport pickup to Solang snow activities and the lovely flower bed decor, everything was arranged seamlessly. Their 24/7 WhatsApp support was always active. Best rates for couples visiting Himachal!',
  },
];

export const ReviewsAndFaq: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#9A713C]">
              Real Couple Experiences
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#421E29]">
              Loved by Over 3,500+ Couples
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((rev, i) => (
              <div
                key={i}
                className="bg-white p-7 rounded-3xl border border-[#E9DFD5] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {Array.from({ length: rev.rating }).map((_, r) => (
                      <Star key={r} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="font-bold text-sm text-[#421E29]">{rev.name}</div>
                  <div className="text-xs text-slate-500">{rev.city} • <span className="text-[#9A713C] font-semibold">{rev.trip}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#9A713C]">
              Got Questions?
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-extrabold text-[#421E29]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[#E9DFD5] overflow-hidden shadow-sm transition"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-900 flex justify-between items-center gap-4 hover:text-[#421E29]"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#E05500] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
