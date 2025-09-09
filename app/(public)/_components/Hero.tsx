import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Bell, Store } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-24 md:py-32">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-50/60 via-white to-white opacity-70"></div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3B82F608_1px,transparent_1px),linear-gradient(to_bottom,#3B82F608_1px,transparent_1px)] bg-[size:32px_32px] opacity-20"></div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 text-sm font-medium shadow-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>The choice of ambitious entrepreneurs</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold mb-6 tracking-tight text-gray-900 leading-none">
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent drop-shadow-sm">
                Bookly
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
              Simple Booking for Any Service
            </h2>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Manage appointments, automate reminders, and grow your business —
              all in one easy-to-use platform designed for modern entrepreneurs.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-10 justify-center">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100/80 text-blue-700 hover:bg-blue-50/80 hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-md group">
                <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Easy Scheduling</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100/80 text-blue-700 hover:bg-blue-50/80 hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-md group">
                <Bell className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Automatic Reminders</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100/80 text-blue-700 hover:bg-blue-50/80 hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-md group">
                <Store className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Custom Pages</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                variant="blue"
                className="text-white border-0 px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-blue-200 transition-all duration-300 group backdrop-blur-sm hover:scale-[1.02] transform"
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
                className="border-blue-200/80 text-blue-600 hover:bg-blue-50 hover:border-blue-300 px-8 py-6 text-lg font-medium rounded-2xl transition-all duration-300 backdrop-blur-sm bg-white/60 hover:scale-[1.02] transform shadow-sm hover:shadow-md"
              >
                <Link href="#features">View Features</Link>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="inline-flex items-center gap-6 px-6 py-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100/80 shadow-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-xs text-gray-600">Active Users</div>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-xs text-gray-600">Uptime</div>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4.9</div>
                <div className="text-xs text-gray-600">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-100/70 to-blue-300/40 rounded-full blur-3xl opacity-65 shadow-lg shadow-blue-100/30" />
      <div className="absolute bottom-20 left-10 w-[22rem] h-[22rem] bg-gradient-to-tr from-blue-50/70 to-blue-200/40 rounded-full blur-3xl opacity-60 shadow-md shadow-blue-50/30" />

      {/* Modern floating elements */}
      <div className="absolute top-1/3 left-1/4 w-5 h-5 bg-blue-400/40 rounded-full animate-ping" />
      <div className="absolute top-1/2 right-1/3 w-3.5 h-3.5 bg-blue-500/40 rounded-full animate-pulse delay-700" />
      <div className="absolute bottom-1/3 left-1/2 w-2.5 h-2.5 bg-blue-600/50 rounded-full animate-bounce delay-1000" />

      {/* Subtle geometric shapes */}
      <div className="absolute top-1/4 right-1/2 w-36 h-36 border border-blue-200/30 rounded-full animate-spin-slow opacity-70" />
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-blue-300/30 rounded-lg rotate-45 animate-pulse opacity-65" />
    </section>
  );
};

export default Hero;
