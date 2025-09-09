import React from "react";
import { Check, Crown, Zap, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$19",
      period: "per month",
      description: "Perfect for individuals and small businesses just getting started.",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Up to 100 appointments/month",
        "Email reminders",
        "Basic booking page",
        "Calendar integration",
        "Email support"
      ],
      cta: "Start Free Trial",
      href: "/login",
      highlighted: false,
      gradient: "from-gray-50 to-white",
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600"
    },
    {
      name: "Professional",
      price: "$49",
      period: "per month",
      description: "Ideal for growing businesses with multiple staff members.",
      icon: <Crown className="w-6 h-6" />,
      features: [
        "Unlimited appointments",
        "SMS & email reminders",
        "Custom booking page",
        "Staff management",
        "Payment processing",
        "Analytics dashboard",
        "Priority support"
      ],
      cta: "Start Free Trial",
      href: "/login",
      highlighted: true,
      gradient: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-500",
      iconColor: "text-white"
    },
    {
      name: "Business",
      price: "$99",
      period: "per month",
      description: "For established businesses requiring advanced features.",
      icon: <Building className="w-6 h-6" />,
      features: [
        "Everything in Professional",
        "Multiple locations",
        "Advanced reporting",
        "API access",
        "Custom integrations",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      href: "/contact",
      highlighted: false,
      gradient: "from-purple-50 to-purple-100",
      iconBg: "bg-purple-500",
      iconColor: "text-white"
    }
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-purple-100/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 text-xs sm:text-sm font-medium">
            <Crown className="w-4 h-4" />
            <span>Pricing Plans</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-3 sm:mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
            Choose the plan that works best for your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 ${
                plan.highlighted 
                  ? 'ring-1 sm:ring-2 ring-blue-400 shadow-xl sm:shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/30 sm:scale-105' 
                  : 'border border-gray-200/80 hover:border-blue-200/80 shadow-sm hover:shadow-xl hover:shadow-gray-500/10'
              } backdrop-blur-sm`}
            >
              {/* Header */}
              <div className={`p-6 sm:p-8 bg-gradient-to-br ${plan.gradient} relative`}>
                <div className="flex items-center gap-4 mb-4 sm:mb-6">
                  <div className={`p-2.5 sm:p-3 ${plan.iconBg} ${plan.iconColor} rounded-xl sm:rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{plan.name}</h3>
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-baseline gap-1.5 sm:gap-2">
                    <span className="text-3xl sm:text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 text-sm sm:text-base">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">{plan.description}</p>
                </div>
                
                <Button 
                  asChild
                  className={`w-full py-4 sm:py-6 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 ${
                    plan.highlighted 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-blue-200 hover:scale-[1.02]' 
                      : 'bg-white/80 backdrop-blur-sm border border-gray-200/80 text-gray-700 hover:bg-white hover:border-blue-200 hover:text-blue-600 shadow-sm hover:shadow-md'
                  }`}
                >
                  <Link href={plan.href} className="flex items-center justify-center gap-2 text-sm sm:text-base">
                    {plan.cta}
                  </Link>
                </Button>
              </div>
              
              {/* Features */}
              <div className="p-6 sm:p-8 bg-white/90 backdrop-blur-sm">
                <p className="font-semibold text-gray-900 mb-4 sm:mb-6 text-sm sm:text-base">What's included:</p>
                <ul className="space-y-3 sm:space-y-4">
                  {plan.features.map((feature, i) => (
                    <li 
                      key={i} 
                      className="flex items-start group-hover:translate-x-1 transition-transform duration-300" 
                      style={{ transitionDelay: `${i * 40}ms` }}
                    >
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center mr-2.5 sm:mr-3 mt-0.5">
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600" />
                      </div>
                      <span className="text-gray-600 text-sm sm:text-base leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
