import React from "react";
import { Sparkles, ArrowUp } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-100/15 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white rounded-3xl p-10 sm:p-12 text-center shadow-2xl shadow-blue-900/25 border border-blue-400/30 overflow-hidden">
          {/* Enhanced background patterns */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-purple-600/10 opacity-60"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          {/* Floating elements */}
          <div className="absolute top-8 right-8 w-4 h-4 bg-white/20 rounded-full animate-ping"></div>
          <div className="absolute bottom-8 left-8 w-3 h-3 bg-blue-300/40 rounded-full animate-bounce delay-500"></div>
          
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Ready to Transform Your Business?</span>
            </div>
            
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
              Boost Your Business with Bookly
            </h2>
            <p className="text-blue-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              Join thousands of professionals who trust Bookly to manage their appointments and grow their business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <button className="group relative inline-flex items-center justify-center bg-white text-blue-700 font-bold px-10 py-4 sm:px-12 sm:py-5 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 text-lg border border-white/10 cursor-pointer">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2">
                  Start Your Free Trial
                  <ArrowUp className="w-5 h-5 rotate-45 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
            
            <p className="text-blue-200/80 text-sm">
              • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;