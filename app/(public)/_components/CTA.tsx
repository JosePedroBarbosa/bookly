import React from "react";

const CTA = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 text-white rounded-2xl p-8 sm:p-12 text-center shadow-lg">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Boost Your Business with Bookly
          </h2>
          <p className="text-base sm:text-lg mb-6 max-w-xl mx-auto">
            Manage appointments effortlessly, reduce no-shows, and grow your business with ease. Perfect for barbers, clinics, and small businesses.
          </p>

          {/* CTA Button */}
          <button className="cursor-pointer bg-white text-blue-600 font-semibold px-8 py-3 sm:px-12 sm:py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-base sm:text-lg bg-gradient-to-r from-white to-blue-50">
            Start Your Free Trial
          </button>
          <p className="text-white/70 mt-3 text-xs sm:text-sm">
            Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;