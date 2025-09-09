import { Calendar, Bell, Store, Users, BarChart, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Calendar className="w-10 h-10 text-blue-500" />,
      title: "Smart Scheduling",
      description: "Intelligent booking system that adapts to your business hours and staff availability."
    },
    {
      icon: <Bell className="w-10 h-10 text-blue-500" />,
      title: "Automated Reminders",
      description: "Reduce no-shows with customizable SMS and email reminders sent at the perfect time."
    },
    {
      icon: <Store className="w-10 h-10 text-blue-500" />,
      title: "Business Profile",
      description: "Create a beautiful online presence with customizable booking pages for your business."
    },
    {
      icon: <Users className="w-10 h-10 text-blue-500" />,
      title: "Client Management",
      description: "Keep track of client history, preferences, and booking patterns all in one place."
    },
    {
      icon: <BarChart className="w-10 h-10 text-blue-500" />,
      title: "Analytics Dashboard",
      description: "Gain insights into your business performance with detailed reports and metrics."
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-500" />,
      title: "Secure Payments",
      description: "Accept deposits and payments online with our secure payment processing system."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Everything You Need to Grow Your Business</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Bookly provides all the tools you need to manage appointments, clients, and payments in one simple platform.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="mb-5 p-3 inline-block bg-blue-50 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;