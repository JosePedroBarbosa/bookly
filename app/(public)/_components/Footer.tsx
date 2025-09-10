"use client";

import React from "react";
import Link from "next/link";
import { Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="container mx-auto px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    
                    {/* Brand Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">
                            Bookly
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Simple appointment management for professionals
                        </p>
                    </div>

                    {/* Support Section */}
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Support</h4>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                            <Mail className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-medium">support@bookly.com</span>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="flex gap-4 justify-center md:justify-end">
                        {[
                            { Icon: Twitter, href: "#", label: "Twitter" },
                            { Icon: Instagram, href: "#", label: "Instagram" },
                            { Icon: Linkedin, href: "#", label: "LinkedIn" }
                        ].map(({ Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
                            >
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-200 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
                        
                        {/* Copyright */}
                        <div className="flex items-center gap-2">
                            <span>© {currentYear} Bookly. All rights reserved.</span>
                            <span className="hidden md:inline text-gray-400">•</span>
                            <span className="flex items-center gap-1">
                                Made with <span className="text-red-500 animate-pulse">❤️</span> in Portugal
                            </span>
                        </div>

                        {/* Legal Links */}
                        <div className="flex items-center gap-6">
                            {['Privacy Policy', 'Terms of Service'].map((item, index) => (
                                <React.Fragment key={item}>
                                    <Link
                                        href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="hover:text-blue-600 transition-colors duration-300"
                                    >
                                        {item}
                                    </Link>
                                    {index < 1 && <span className="text-gray-400">•</span>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;