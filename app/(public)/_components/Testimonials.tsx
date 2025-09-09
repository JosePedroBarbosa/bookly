import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Ana Silva",
        role: "Freelancer",
        feedback:
            "Bookly has made managing my appointments so much easier and organized. I highly recommend it!",
        avatar: "https://i.pravatar.cc/100?img=32",
        rating: 5,
        company: "Creative Studio"
    },
    {
        name: "Carlos Santos",
        role: "Barber",
        feedback:
            "I love how easy it is to track bookings and clients. Bookly has truly improved my daily workflow!",
        avatar: "https://i.pravatar.cc/100?img=12",
        rating: 5,
        company: "Santos Barbershop"
    },
    {
        name: "Joana Costa",
        role: "Therapist",
        feedback:
            "The support is amazing and the app is super intuitive. I save so much time every day.",
        avatar: "https://i.pravatar.cc/100?img=45",
        rating: 5,
        company: "Wellness Center"
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="bg-gradient-to-br from-white via-blue-50/20 to-gray-50 py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-100/20 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
                {/* Heading */}
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 text-sm font-medium">
                        <Star className="w-4 h-4 fill-current" />
                        <span>Customer Stories</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Real feedback from people who use Bookly daily to manage appointments and schedules efficiently.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="group bg-white/80 backdrop-blur-sm border border-gray-100/80 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-[1.02] hover:border-blue-200/50 relative overflow-hidden"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-4 right-4 text-blue-200/50 group-hover:text-blue-300/60 transition-colors duration-300">
                                <Quote className="w-8 h-8" fill="currentColor" />
                            </div>
                            
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            <div className="relative z-10">
                                {/* Stars */}
                                <div className="flex gap-1 mb-6 justify-center">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform duration-300"
                                            fill="currentColor"
                                            style={{ animationDelay: `${i * 100}ms` }}
                                        />
                                    ))}
                                </div>

                                {/* Feedback */}
                                <p className="text-gray-700 mb-6 leading-relaxed italic group-hover:text-gray-800 transition-colors">
                                    "{t.feedback}"
                                </p>

                                {/* Profile */}
                                <div className="flex items-center justify-center gap-4">
                                    <div className="relative">
                                        <img
                                            src={t.avatar}
                                            alt={t.name}
                                            className="w-14 h-14 rounded-full border-3 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 group-hover:from-blue-400/30 group-hover:to-purple-400/30 transition-all duration-300"></div>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                                            {t.name}
                                        </h3>
                                        <p className="text-sm text-gray-600 font-medium">{t.role}</p>
                                        <p className="text-xs text-gray-500">{t.company}</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Bottom accent */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                        </div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-gray-200/50">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 mb-1">4.9/5</div>
                        <div className="text-sm text-gray-600">Average Rating</div>
                    </div>
                    <div className="w-px h-12 bg-gray-200"></div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 mb-1">1,000+</div>
                        <div className="text-sm text-gray-600">Happy Clients</div>
                    </div>
                    <div className="w-px h-12 bg-gray-200"></div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 mb-1">50+</div>
                        <div className="text-sm text-gray-600">Industries</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;