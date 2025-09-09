"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-gradient-to-b from-white to-gray-50 text-gray-800 overflow-hidden border-t border-gray-100">
            {/* Subtle background elements */}
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-50/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-20 container mx-auto px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-start">

                    {/* Brand Section - Takes 2 columns on large screens */}
                    <div className="lg:col-span-2 space-y-6">
                        <div>
                            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent mb-4">
                                Bookly
                            </h3>
                            <p className="text-gray-600 leading-relaxed max-w-sm text-lg">
                                Transforming appointment management for professionals worldwide. Simple, powerful, effective.
                            </p>
                        </div>

                        {/* Enhanced Social Media */}
                        <div>
                            <p className="text-sm font-semibold text-gray-700 mb-4">Connect with us</p>
                            <div className="flex gap-3">
                                {[
                                    { Icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-50 hover:text-blue-600" },
                                    { Icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-50 hover:text-sky-600" },
                                    { Icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-50 hover:text-pink-600" },
                                    { Icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-50 hover:text-blue-700" }
                                ].map(({ Icon, href, label, color }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        className={`group w-12 h-12 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-gray-200/80 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-110 ${color}`}
                                    >
                                        <Icon className="w-5 h-5 text-gray-600 group-hover:scale-110 transition-all duration-300" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gray-900 mb-6">Product</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Features', href: '#features' },
                                { name: 'Pricing', href: '#pricing' },
                                { name: 'Integrations', href: '/integrations' },
                                { name: 'Mobile App', href: '/mobile-app' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-600 hover:text-blue-600 hover:translate-x-2 transition-all duration-300 inline-block font-medium"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gray-900 mb-6">Company</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'About', href: '/about' },
                                { name: 'Blog', href: '/blog' },
                                { name: 'Careers', href: '/careers' },
                                { name: 'Partners', href: '/partners' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-600 hover:text-blue-600 hover:translate-x-2 transition-all duration-300 inline-block font-medium"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support & Contact */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gray-900 mb-6">Support</h4>

                        {/* Support links */}
                        <ul className="space-y-3 mb-6">
                            {[
                                { name: 'Help Center', href: '/help' },
                                { name: 'Contact', href: '/contact' },
                                { name: 'Security', href: '/security' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-600 hover:text-blue-600 hover:translate-x-2 transition-all duration-300 inline-block font-medium"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Contact info - enhanced */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50">
                                <Mail className="w-5 h-5 text-blue-500" />
                                <span className="text-gray-700 font-medium">support@bookly.com</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50">
                                <MapPin className="w-5 h-5 text-blue-500" />
                                <span className="text-gray-700 font-medium">Porto, Portugal</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Bottom Section */}
                <div className="border-t border-gray-200/60 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                        {/* Copyright */}
                        <div className="text-gray-600 flex items-center gap-2 font-medium">
                            <span>© {currentYear} Bookly.</span>
                            <span className="hidden md:inline text-gray-400">•</span>
                            <span className="flex items-center gap-1">
                                Made with <span className="text-red-500 animate-pulse">❤️</span> in Portugal
                            </span>
                        </div>

                        {/* Legal Links */}
                        <div className="flex items-center gap-6">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                                <React.Fragment key={item}>
                                    <Link
                                        href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="text-gray-500 hover:text-blue-600 transition-colors duration-300 font-medium text-sm"
                                    >
                                        {item}
                                    </Link>
                                    {index < 2 && <span className="text-gray-300">•</span>}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Enhanced Back to top button */}
                        {/* <button
                            onClick={scrollToTop}
                            className="group w-12 h-12 bg-blue-500 hover:bg-blue-600 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
                            aria-label="Back to top"
                        >
                            <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform duration-300" />
                        </button> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;