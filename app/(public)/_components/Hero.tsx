import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Bell, Store } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-32">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3B82F61A_1px,transparent_1px),linear-gradient(to_bottom,#3B82F61A_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-9xl font-extrabold mb-6 tracking-tight text-gray-900">
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent drop-shadow-sm">
                Bookly
              </span>
            </h1>
            <p className="text-2xl font-medium text-gray-900 mb-4">
              Simple Booking for Any Service
            </p>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
              Manage appointments, automate reminders, and grow your business — all in one easy-to-use platform.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-10 justify-center">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100 text-blue-700 hover:bg-blue-100/80 transition-all duration-300">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">Easy Scheduling</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100 text-blue-700 hover:bg-blue-100/80 transition-all duration-300">
                <Bell className="w-4 h-4" />
                <span className="text-sm font-medium">Automatic Reminders</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100 text-blue-700 hover:bg-blue-100/80 transition-all duration-300">
                <Store className="w-4 h-4" />
                <span className="text-sm font-medium">Custom Pages</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="blue"
                className="text-white border-0 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-blue-200 transition-all duration-300 group backdrop-blur-sm"
              >
                <Link href="/login">
                  Try It Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm bg-white/50"
              >
                <Link href="#features">
                  Features
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-gray-500 text-sm mb-4">Trusted by thousands of businesses worldwide</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-tr from-blue-50 to-blue-100 rounded-full blur-3xl opacity-40 animate-pulse delay-1000" />

      {/* Additional modern elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-2xl opacity-20" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-tl from-blue-100 to-transparent rounded-full blur-2xl opacity-25" />
    </section>
  );
};

export default Hero;