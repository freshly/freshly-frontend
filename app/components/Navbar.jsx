"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400"], // extra-light, light, regular
  display: "swap",
});

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`${inter.className} fixed w-full z-50 transition-all duration-500 transform bg-neutral-950 md:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(21,128,61,0.3),rgba(255,255,å255,0))] shadow-lg translate-y-0 h-max p-4`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 w-max h-max ">
            <Link href="/" className="flex items-center">
              <img
                className="h-20 w-auto"
                src="/freshly-icon-square.png"
                alt="Freshly Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/faqs"
              className="text-lg font-normal text-white hover:text-white/80 transition-colors"
            >
              FAQs
            </Link>
            <Link
          href="/about"
              className="text-lg font-light text-white hover:text-white/80 transition-colors"
            >
              Founders
            </Link>
            <Link
              href="/contact"
              className="text-lg font-normal text-white hover:text-white/80 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/#waitlist"
              className="bg-white text-[rgb(21,128,60)] px-4 py-2 rounded-md text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Join Waitlist Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-neutral-950">
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-light text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/faqs"
            className="block px-3 py-2 rounded-md text-base font-light text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQs
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-light text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/#waitlist"
            className="block w-full px-3 py-2 rounded-md text-base font-light bg-white text-[rgb(21,128,60)] hover:bg-white/90 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Join Waitlist Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
