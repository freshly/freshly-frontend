// app/components/Footer.jsx
"use client";
import React from "react";
import { Linkedin, Instagram, Facebook, X } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white">
      <div className="border-t border-white/10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-5 space-y-4 text-center">
        <nav className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm sm:text-base font-light text-white/90">
          <a href="/about" className="hover:text-white transition-colors duration-200">
            About
          </a>
          <a href="/contact" className="hover:text-white transition-colors duration-200">
            Contact
          </a>
          <a href="/faqs" className="hover:text-white transition-colors duration-200">
            FAQs
          </a>
        </nav>

        <div className="flex justify-center items-center space-x-4 sm:space-x-5 text-white/70">
          <a
            href="https://www.instagram.com/joinfreshly?igsh=b2RnNjUwMGhncXZr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
            aria-label="Instagram"
          >
            <Instagram size={22} />
          </a>
          <a
            href="https://www.facebook.com/share/1SxCQcPc99/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
            aria-label="Facebook"
          >
            <Facebook size={22} />
          </a>
          <a
            href="https://x.com/joinfreshly"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
            aria-label="X (Twitter)"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M2.7 3L9.9 13.3L2.84 21H6.3L11.49 15.3L15.9 21H21.16L13.64 10.99L20.3 3H16.84L11.98 8.3L8.04 3H2.7Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="text-xs sm:text-sm text-white/60">
          © {currentYear} SAVR. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
