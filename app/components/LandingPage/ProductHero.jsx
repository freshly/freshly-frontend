"use client";

import Link from "next/link";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function ProductHero() {
  const [scrollY, setScrollY] = useState(0);
  const HERO_SCROLL_LIMIT = 300;
  const heroOffset = -Math.min(scrollY, HERO_SCROLL_LIMIT) * 0.15;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${inter.className} relative min-h-[50vh] w-full overflow-x-hidden`}
    >
      {/* Hero Section */}
      <div className="relative min-h-[50vh] flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-8">
        <div
          className="w-full max-w-5xl mx-auto text-center"
          style={{ transform: `translateY(${heroOffset}px)` }}
        >
          <div className="flex flex-col items-center justify-center min-h-[30vh]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-bold text-black mb-6 animate-fadeIn border- px-6 py-2 rounded-lg text-center w-max h-max">
              Grocery Shopping & Meal Planning App.
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-bold text-black mb-6 animate-fadeIn border- px-6 py-2 rounded-lg text-center mt-[-13px]">
               Powered By{" "}
              <span className="bg-gradient-to-r from-[#FD8100] to-[#00A86B] bg-clip-text text-transparent">
                AI.
              </span>
            </h1>
          </div>
        

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn animation-delay-400">
            <Link
              href="/#waitlist"
              className="px-8 py-4 bg-[#FD8100] text-white font-semibold rounded-full hover:bg-[#FD8100]/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </div>

      {/* Add styles for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  );
}

