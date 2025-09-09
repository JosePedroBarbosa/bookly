import React from "react";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Ana Silva",
        role: "Freelancer",
        feedback:
            "Bookly has made managing my appointments so much easier and organized. I highly recommend it!",
        avatar: "https://i.pravatar.cc/100?img=32",
    },
    {
        name: "Carlos Santos",
        role: "Barber",
        feedback:
            "I love how easy it is to track bookings and clients. Bookly has truly improved my daily workflow!",
        avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
        name: "Joana Costa",
        role: "Therapist",
        feedback:
            "The support is amazing and the app is super intuitive. I save so much time every day.",
        avatar: "https://i.pravatar.cc/100?img=45",
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="bg-white py-30">
            <div className="container mx-auto px-6 lg:px-8 text-center">
                {/* Heading */}
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-4">
                    What Our Clients Say
                </h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                    Real feedback from people who use Bookly daily to manage appointments and schedules efficiently.
                </p>

                {/* Testimonials Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-blue-50 border border-blue-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full border-2 border-blue-200"
                                />
                                <div className="text-left">
                                    <h3 className="text-sm font-semibold text-blue-700">{t.name}</h3>
                                    <p className="text-xs text-gray-500">{t.role}</p>
                                </div>
                            </div>

                            {/* Feedback and Stars aligned left */}
                            <div className="text-left">
                                <p className="text-gray-700 mb-2">{t.feedback}</p>
                                <div className="flex gap-1 mt-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 text-blue-500"
                                            fill="currentColor"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
