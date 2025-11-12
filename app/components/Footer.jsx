// app/components/Footer.jsx
"use client";
import React from "react";
import { Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white">
      {/* top border */}
      <div className="border-t border-white/20" />

      {/* logo + nav + social */}
      <div
        className="
          max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10
          flex flex-col md:flex-row 
          justify-between items-center 
          space-y-6 md:space-y-0
          gap-4 md:gap-6
        "
      >
        {/* logo */}
        <div className="flex-shrink-0">
          <img
            src="/freshly-icon-square.png"
            alt="Freshly Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
          />
        </div>

        {/* nav links */}
        <nav
          className="
            flex flex-col sm:flex-row 
            items-center
            space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6 lg:space-x-8
            text-base sm:text-lg md:text-xl lg:text-2xl 
            font-light text-white/90
          "
        >
          <a 
            href="/about" 
            className="hover:text-white transition-colors duration-200"
          >
            About
          </a>
          <a 
            href="/contact" 
            className="hover:text-white transition-colors duration-200"
          >
            Contact
          </a>
          <a 
            href="/faqs" 
            className="hover:text-white transition-colors duration-200"
          >
            FAQs
          </a>
        </nav>

        {/* social icons */}
        <div className="flex items-center space-x-4 sm:space-x-5 md:space-x-6 flex-shrink-0">
          <a
            href="https://www.instagram.com/joinfreshly?igsh=b2RnNjUwMGhncXZr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-200"
            aria-label="Follow us on Instagram"
          >
            <Instagram 
              size={28} 
              className="sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10" 
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-200"
            aria-label="Follow us on LinkedIn"
          >
            <Linkedin 
              size={28} 
              className="sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10" 
            />
          </a>
        </div>
      </div>

      {/* copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-center text-xs sm:text-sm text-white/70">
        © {currentYear} Freshly. All Rights Reserved.
      </div>
    </footer>
  );
}