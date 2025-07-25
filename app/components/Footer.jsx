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
          max-w-7xl mx-auto px-4 py-6
          flex 
          flex-row justify-between items-center space-y-0
        "
      >
        {/* logo */}
        <img
          src="/freshly-icon-square.png"
          alt="Freshly Logo"
          className="w-10 h-10 md:w-24 md:h-12 object-contain"
        />

        {/* nav links */}
        <nav
          className="
            flex space-x-6
            text-sm font-light text-white/90
            hover:text-white transition-colors
          "
        >
          <a href="/about" className="hover:text-white">
            About
          </a>
          <a href="/contact" className="hover:text-white">
            Contact
          </a>
          <a href="/faqs" className="hover:text-white">
            FAQs
          </a>
        </nav>

        {/* social icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/joinfreshly?igsh=b2RnNjUwMGhncXZr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      {/* copyright */}

      <div className="max-w-7xl mx-auto px-4 py-4 text-center text-xs text-white/70">
        © {currentYear} Freshly. All Rights Reserved.
      </div>
    </footer>
  );
}
