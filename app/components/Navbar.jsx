"use client";
import { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import { Menu, X } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  display: "swap",
});

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToWaitlist = useCallback(() => {
    const target = document.getElementById("waitlist");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleWaitlistClick = useCallback(
    (e) => {
      if (e) e.preventDefault();
      setIsMobileMenuOpen(false);

      if (pathname === "/") {
        scrollToWaitlist();
      } else {
        try {
          sessionStorage.setItem("scrollToWaitlist", "true");
        } catch (err) {
          // ignore storage errors
        }
        router.push("/?waitlist=1#waitlist");
      }
    },
    [pathname, router, scrollToWaitlist]
  );

  return (
    <nav
      className={`${inter.className} fixed w-full z-50 transition-all duration-500 bg-neutral-950 md:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(21,128,61,0.3),rgba(255,255,255,0))] shadow-lg`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img
                className="h-12 sm:h-14 md:h-16 lg:h-15 w-auto"
                src="/rl.png"
                alt="Freshly Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            <Link
              href="/faqs"
              className="text-base lg:text-lg font-normal text-white hover:text-white/80 transition-colors duration-200"
            >
              FAQs
            </Link>
            <Link
              href="/about"
              className="text-base lg:text-lg font-light text-white hover:text-white/80 transition-colors duration-200"
            >
              Founders
            </Link>
            <Link
              href="/contact"
              className="text-base lg:text-lg font-normal text-white hover:text-white/80 transition-colors duration-200"
            >
              Contact
            </Link>
            <a
              href="/#waitlist"
              onClick={handleWaitlistClick}
              className="bg-white text-[rgb(21,128,60)] px-3 py-1.5 lg:px-4 lg:py-2 rounded-md text-sm lg:text-base font-medium hover:bg-white/90 transition-colors duration-200 whitespace-nowrap"
            >
              Join Waitlist Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {!isMobileMenuOpen ? (
                <Menu className="h-6 w-6" />
              ) : (
                <X className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-neutral-950 border-t border-white/10">
          <Link
            href="/about"
            className="block px-4 py-3 rounded-md text-base font-light text-white hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Founders
          </Link>
          <Link
            href="/faqs"
            className="block px-4 py-3 rounded-md text-base font-light text-white hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQs
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-3 rounded-md text-base font-light text-white hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <a
            href="/#waitlist"
            className="block w-full px-4 py-3 mt-2 rounded-md text-base font-medium text-center bg-white text-[rgb(21,128,60)] hover:bg-white/90 transition-colors duration-200"
            onClick={handleWaitlistClick}
          >
            Join Waitlist Now
          </a>
        </div>
      </div>
    </nav>
  );
}
