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
      description:
        "Perfect for individuals and small businesses just getting started.",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Up to 100 appointments/month",
        "Email reminders",
        "Basic booking page",
        "Calendar integration",
        "Email support",
      ],
      cta: "Start Free Trial",
      href: "/login",
      highlighted: false,
      gradient: "from-gray-50 to-white",
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600",
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
        "Priority support",
      ],
      cta: "Start Free Trial",
      href: "/login",
      highlighted: true,
      gradient: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-500",
      iconColor: "text-white",
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
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      href: "/contact",
      highlighted: false,
      gradient: "from-purple-50 to-purple-100",
      iconBg: "bg-purple-500",
      iconColor: "text-white",
    },
  ];

  return (
    <section
      id="pricing"
      className="py-16 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden"
    >
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
            Choose the plan that works best for your business. All plans include
            a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative rounded-xl border transition-all duration-300 ${
                plan.highlighted
                  ? "border-blue-300 shadow-md hover:shadow-lg bg-white"
                  : "border-gray-200 hover:border-blue-200 bg-white"
              }`}
            >
              {/* Header */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`${plan.highlighted ? "text-blue-600" : "text-gray-600"}`}
                  >
                    {plan.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {plan.name}
                  </h3>
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 text-sm">{plan.period}</span>
                  </div>
                  <p className="text-gray-500 mt-2 text-sm">
                    {plan.description}
                  </p>
                </div>

                <Button
                  asChild
                  className={`w-full py-3 font-medium rounded-lg ${
                    plan.highlighted
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border border-gray-300 text-gray-700 hover:border-blue-400 hover:text-blue-600"
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              </div>

              {/* Features */}
              <div className="p-6 border-t border-gray-100">
                <p className="font-medium text-gray-900 mb-4 text-sm">
                  What's included
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-gray-600 text-sm"
                    >
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
