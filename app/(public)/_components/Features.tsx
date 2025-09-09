import React from "react";
import { Calendar, Bell, Store, Users, BarChart, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-blue-500" />,
      title: "Smart Scheduling",
      description: "Intelligent booking system that adapts to your business hours and staff availability.",
      gradient: "from-blue-50 to-blue-100",
      hoverGradient: "group-hover:from-blue-100 group-hover:to-blue-200"
    },
    {
      icon: <Bell className="w-8 h-8 text-emerald-500" />,
      title: "Automated Reminders",
      description: "Reduce no-shows with customizable SMS and email reminders sent at the perfect time.",
      gradient: "from-emerald-50 to-emerald-100",
      hoverGradient: "group-hover:from-emerald-100 group-hover:to-emerald-200"
    },
    {
      icon: <Store className="w-8 h-8 text-purple-500" />,
      title: "Business Profile",
      description: "Create a beautiful online presence with customizable booking pages for your business.",
      gradient: "from-purple-50 to-purple-100",
      hoverGradient: "group-hover:from-purple-100 group-hover:to-purple-200"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Client Management",
      description: "Keep track of client history, preferences, and booking patterns all in one place.",
      gradient: "from-orange-50 to-orange-100",
      hoverGradient: "group-hover:from-orange-100 group-hover:to-orange-200"
    },
    {
      icon: <BarChart className="w-8 h-8 text-indigo-500" />,
      title: "Analytics Dashboard",
      description: "Gain insights into your business performance with detailed reports and metrics.",
      gradient: "from-indigo-50 to-indigo-100",
      hoverGradient: "group-hover:from-indigo-100 group-hover:to-indigo-200"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Secure Payments",
      description: "Accept deposits and payments online with our secure payment processing system.",
      gradient: "from-green-50 to-green-100",
      hoverGradient: "group-hover:from-green-100 group-hover:to-green-200"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 text-sm font-medium">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Powerful Features</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-4">
            Everything You Need to Grow Your Business
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Bookly provides all the tools you need to manage appointments, clients, and payments in one simple platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100/80 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-[1.02] hover:border-blue-200/50 relative overflow-hidden"
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className={`mb-6 p-4 inline-block bg-gradient-to-br ${feature.gradient} ${feature.hoverGradient} rounded-2xl transition-all duration-300 group-hover:scale-110`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
              </div>
              
              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;