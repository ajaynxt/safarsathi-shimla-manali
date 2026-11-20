import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroShimlaManali } from './components/HeroShimlaManali';
import { PackageListSection } from './components/PackageListSection';
import { PackageCalculator } from './components/PackageCalculator';
import { HoneymoonSpecialSection } from './components/HoneymoonSpecialSection';
import { DetailedItineraryTimeline } from './components/DetailedItineraryTimeline';
import { ResortShowcase } from './components/ResortShowcase';
import { SanitizedCabFleet } from './components/SanitizedCabFleet';
import { InclusionsExclusions } from './components/InclusionsExclusions';
import { ReviewsAndFaq } from './components/ReviewsAndFaq';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { StickyBookingBar } from './components/StickyBookingBar';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackageTitle, setSelectedPackageTitle] = useState('Shimla Manali 5N/6D Romantic Honeymoon Special');

  const handleOpenBooking = (pkgTitle?: string) => {
    if (pkgTitle) {
      setSelectedPackageTitle(pkgTitle);
    }
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-800">
      <Navbar onOpenBooking={handleOpenBooking} />
      
      <main className="flex-1">
        <HeroShimlaManali onOpenBooking={handleOpenBooking} />
        <PackageListSection onOpenBooking={handleOpenBooking} />
        <PackageCalculator />
        <HoneymoonSpecialSection onOpenBooking={handleOpenBooking} />
        <DetailedItineraryTimeline />
        <ResortShowcase />
        <SanitizedCabFleet />
        <InclusionsExclusions />
        <ReviewsAndFaq />
      </main>

      <Footer />
      <StickyBookingBar onOpenBooking={() => handleOpenBooking()} />

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultPackageTitle={selectedPackageTitle}
      />
    </div>
  );
}

export default App;
