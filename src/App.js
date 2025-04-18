import React, { useState } from "react";
import Footer from './components/footer';
import EnquiryForm from './components/EnquiryForm';
import BusAnimation from './components/bus/BusAnimation';

export default function App() {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-center bg-cover relative overflow-hidden"
      style={{
        backgroundImage: `url('assets/intro-bg.jpg')`
      }}
    >
      {/* Overlay Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-800/80 to-orange-600/60 z-0" />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center py-10 px-4">
        {/* Logo */}
        <img src="assets/logo2.png" alt="ANT Logo" className="h-24 mb-2 select-none" draggable="false" />

        {/* Slogan */}
        <div className="text-xl sm:text-2xl font-bold text-orange-400 mb-1">WE MAKE TRAVEL JOYFUL</div>

        {/* Coming Soon */}
        <div className="text-3xl sm:text-5xl font-extrabold text-white mb-2 text-center drop-shadow-lg tracking-tight">
          COMING SOON
        </div>

        {/* Description */}
        <div className="max-w-xl text-center text-white/90 sm:text-lg mb-6 font-medium">
          India's Most Trusted Bus Rental Platform for Businesses. Hassle-Free, Long-Term Staff Transport Contracts, Outstation, Events, and More!
          <br />
          <span className="text-orange-200 font-semibold">Corporate, Group, Pilgrimage, and Leisure Bus Services</span>
        </div>

        {/* Enquiry Button */}
        <button
          onClick={() => setShowEnquiry(true)}
          className="absolute top-8 right-8 z-20 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg shadow-md text-lg transition-colors"
        >
          Enquiry
        </button>

        {/* Enquiry Modal */}
        {showEnquiry && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-start justify-center z-50">
            <div className="relative mt-16 w-[90vw] max-w-2xl">
              <span
                className="absolute top-4 right-4 cursor-pointer text-2xl text-gray-400 hover:text-orange-500 z-10"
                onClick={() => setShowEnquiry(false)}
              >
                &times;
              </span>
              <EnquiryForm setShowEnquiry={setShowEnquiry} />
            </div>
          </div>
        )}
      </div>

      {/* Bus Animation */}
      <div className="relative z-10 w-full">
        <BusAnimation />
      </div>

      {/* Footer at the bottom */}
      <footer className="z-10 relative bg-white w-full">
        <Footer />
      </footer>
    </div>
  );
}
