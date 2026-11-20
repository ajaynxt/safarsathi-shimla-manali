import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

interface StickyBarProps {
  onOpenBooking: () => void;
}

export const StickyBookingBar: React.FC<StickyBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 sm:hidden shadow-lg">
      <div className="grid grid-cols-2 gap-2">
        <a
          href="tel:+918351987587"
          className="flex items-center justify-center gap-1.5 bg-[#421E29] text-white py-3 rounded-xl font-bold text-xs"
        >
          <Phone className="w-3.5 h-3.5" /> Call Local Desk
        </a>
        <a
          href="https://wa.me/918351987587?text=Hello%20Safar%20Sathi!%20I%20am%20looking%20for%20Shimla%20Manali%20Tour%20/%20Honeymoon%20Package."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 bg-[#25D366] text-white py-3 rounded-xl font-bold text-xs shadow"
        >
          <MessageCircle className="w-4 h-4" /> WhatsApp Quote
        </a>
      </div>
    </div>
  );
};
