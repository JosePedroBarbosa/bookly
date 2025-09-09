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
        <>
            <div className="h-px bg-blue-200 opacity-50 my-6"></div>

            <footer className="relative text-gray-800 overflow-hidden">
                <div className="relative z-20 container mx-auto px-6 lg:px-8">
                    {/* Main Footer Content */}
                    <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-start">

                        {/* Brand Section - Takes 2 columns on large screens */}
                        <div className="lg:col-span-2 space-y-6">
                            <div>
                                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent mb-3">
                                    Bookly
                                </h3>
                                <p className="text-gray-600 leading-relaxed max-w-sm">
                                    Transforming appointment management for professionals. Simple, powerful, effective.
                                </p>
                            </div>

                            {/* Social Media with light mode styling */}
                            <div>
                                <p className="text-sm text-gray-500 mb-3">Connect with us</p>
                                <div className="flex gap-3">
                                    {[
                                        { Icon: Facebook, href: "#", label: "Facebook" },
                                        { Icon: Twitter, href: "#", label: "Twitter" },
                                        { Icon: Instagram, href: "#", label: "Instagram" },
                                        { Icon: Linkedin, href: "#", label: "LinkedIn" }
                                    ].map(({ Icon, href, label }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            aria-label={label}
                                            className="group w-9 h-9 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                                        >
                                            <Icon className="w-4 h-4 text-gray-600 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Product Links */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold text-blue-700 uppercase tracking-wider">Product</h4>
                            <ul className="space-y-2">
                                {['Features', 'Pricing', 'Integrations', 'Mobile App'].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={`/${item.toLowerCase().replace(' ', '-')}`}
                                            className="text-gray-600 text-sm hover:text-blue-600 hover:translate-x-1 transition-all duration-300 inline-block"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold text-blue-700 uppercase tracking-wider">Company</h4>
                            <ul className="space-y-2">
                                {['About', 'Blog', 'Careers', 'Partners'].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={`/${item.toLowerCase()}`}
                                            className="text-gray-600 text-sm hover:text-blue-600 hover:translate-x-1 transition-all duration-300 inline-block"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support & Contact */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold text-blue-700 uppercase tracking-wider">Support</h4>

                            {/* Support links */}
                            <ul className="space-y-2 mb-4">
                                {['Help Center', 'Contact', 'Security'].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={`/${item.toLowerCase().replace(' ', '-')}`}
                                            className="text-gray-600 text-sm hover:text-blue-600 hover:translate-x-1 transition-all duration-300 inline-block"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* Contact info - compact */}
                            <div className="space-y-2 text-xs text-gray-500">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-3 h-3 text-blue-500" />
                                    <span>support@bookly.com</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-3 h-3 text-blue-500" />
                                    <span>Porto, Portugal</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-gray-200 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                            {/* Copyright */}
                            <div className="text-sm text-gray-500 flex items-center gap-2">
                                <span>© {currentYear} Bookly.</span>
                                <span className="hidden md:inline">•</span>
                                <span>Made with ❤️ in Portugal</span>
                            </div>

                            {/* Legal Links */}
                            <div className="flex items-center gap-6 text-xs">
                                {['Privacy', 'Terms', 'Cookies'].map((item, index) => (
                                    <React.Fragment key={item}>
                                        <Link
                                            href={`/${item.toLowerCase()}`}
                                            className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                                        >
                                            {item}
                                        </Link>
                                        {index < 2 && <span className="text-gray-300">•</span>}
                                    </React.Fragment>
                                ))}
                            </div>

                            {/* Back to top button */}
                            <button
                                onClick={scrollToTop}
                                className="cursor-pointer group w-8 h-8 bg-blue-50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-100 border border-blue-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300"
                                aria-label="Back to top"
                            >
                                <ArrowUp className="w-4 h-4 text-blue-600 group-hover:-translate-y-0.5 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;