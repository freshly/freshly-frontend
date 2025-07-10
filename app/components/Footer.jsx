"use client";
import { useState, useEffect } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white">
      <div className="border-t border-white/20 pt-4"></div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Company Info */}
          <div className="space-y-2">
            <img
              src="/freshly-icon-square.png"
              alt="Freshly Logo"
              className="w-24 h-12 object-contain"
            />
            <p className="text-white/90 text-sm">
              Your trusted partner in sustainable living
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-white">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="/about"
                  className="text-white/90 hover:text-white transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-white/90 hover:text-white transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-white/90 hover:text-white transition-colors text-sm"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-white">Contact Us</h3>
            <div className="space-y-1 text-white/90 text-sm">
              <p>Email: support@freshly.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/20 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            {/* Social Media */}
            <div className="flex space-x-4">
              {/* ... your social icons ... */}
            </div>

            {/* Copyright */}
            <div className="text-xs text-white/90">
              <p>© {currentYear} Freshly. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
