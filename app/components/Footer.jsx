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
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        {/* logo */}
        <img
          src="/freshly-icon-square.png"
          alt="Freshly Logo"
          className="w-24 h-12 object-contain"
        />

        {/* nav links + socials */}
        <div className="flex items-center space-x-8">
          {/* links */}
          <nav className="flex items-center space-x-8 text-[8pt] md:text-sm font-light">
            <a
              href="/about"
              className="text-white/90 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-white/90 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="/faqs"
              className="text-white/90 hover:text-white transition-colors"
            >
              FAQs
            </a>
          </nav>

          {/* social icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com"
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
      </div>

      {/* bottom divider */}
      {/* <div className="border-t border-white/20" /> */}

      {/* copyright */}
      <div className="max-w-7xl mx-auto px-4 py-4 text-center text-xs text-white/70">
        © {currentYear} Freshly. All Rights Reserved.
      </div>
    </footer>
  );
}
