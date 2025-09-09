import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$19",
      period: "per month",
      description: "Perfect for individuals and small businesses just getting started.",
      features: [
        "Up to 100 appointments/month",
        "Email reminders",
        "Basic booking page",
        "Calendar integration",
        "Email support"
      ],
      cta: "Start Free Trial",
      href: "/login",
      highlighted: false
    },
    {
      name: "Professional",
      price: "$49",
      period: "per month",
      description: "Ideal for growing businesses with multiple staff members.",
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
      highlighted: true
    },
    {
      name: "Business",
      price: "$99",
      period: "per month",
      description: "For established businesses requiring advanced features.",
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
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Choose the plan that works best for your business. All plans include a 14-day free trial.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl overflow-hidden ${plan.highlighted ? 'ring-2 ring-blue-500 shadow-lg' : 'border border-gray-200'}`}
            >
              <div className={`p-8 ${plan.highlighted ? 'bg-blue-50' : 'bg-white'}`}>
                {plan.highlighted && (
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <Button 
                  asChild
                  className={`w-full py-6 ${plan.highlighted ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white border border-blue-200 text-blue-600 hover:bg-blue-50'}`}
                >
                  <Link href={plan.href}>
                    {plan.cta}
                  </Link>
                </Button>
              </div>
              
              <div className="p-8 bg-white border-t border-gray-100">
                <p className="font-medium text-gray-900 mb-4">What's included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600">Need a custom plan? <a href="/contact" className="text-blue-600 font-medium hover:underline">Contact our sales team</a></p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;