"use client";

import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useRef, useState, useCallback } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Product() {
  const [scrollY, setScrollY] = useState(0);
  const featuresRef = useRef([]);
  const BACKGROUND_SCROLL_LIMIT = 600;
  const HERO_SCROLL_LIMIT = 300;
  const backgroundOffset = Math.min(scrollY, BACKGROUND_SCROLL_LIMIT) * 0.3;
  const heroOffset = -Math.min(scrollY, HERO_SCROLL_LIMIT) * 0.15;
  const scrollIntoWaitlist = useCallback(() => {
    const el = document.getElementById("waitlist");
    if (el) {
      requestAnimationFrame(() =>
        el.scrollIntoView({ behavior: "smooth", block: "start" })
      );
      return true;
    }
    return false;
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleIntent = () => {
      if (window.location.hash === "#waitlist") {
        scrollIntoWaitlist();
      }
    };

    if (window.location.hash === "#waitlist") {
      scrollIntoWaitlist();
    }

    window.addEventListener("hashchange", handleIntent);
    return () => window.removeEventListener("hashchange", handleIntent);
  }, [scrollIntoWaitlist]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let shouldScroll = false;

    try {
      if (sessionStorage.getItem("scrollToWaitlist") === "true") {
        sessionStorage.removeItem("scrollToWaitlist");
        shouldScroll = true;
      }
    } catch {
      // ignore storage errors
    }

    const params = new URLSearchParams(window.location.search);
    if (params.get("waitlist") === "1") {
      shouldScroll = true;
      window.history.replaceState(null, "", "/#waitlist");
    }

    if (shouldScroll) {
      const scrolled = scrollIntoWaitlist();
      if (!scrolled) {
        const timeout = setTimeout(scrollIntoWaitlist, 300);
        return () => clearTimeout(timeout);
      }
    }
  }, [scrollIntoWaitlist]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeInUp");
        }
      });
    }, observerOptions);

    featuresRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      featuresRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div
      className={`${inter.className} relative min-h-screen w-full overflow-x-hidden`}
    >
      {/* Animated Gradient Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white via-orange-50 to-emerald-50 opacity-50" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-tr from-transparent via-[#FD8100]/5 to-[#00A86B]/5" />

      {/* Floating Orbs Animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FD8100]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#00A86B]/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative min-h-[50vh] flex items-center justify-center px-4 sm:px-6 pt-12 pb-8">
          <div
            className="w-full max-w-5xl mx-auto text-center"
            style={{ transform: `translateY(${heroOffset}px)` }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-6 animate-fadeIn">
              Smarter Grocery Shopping.
              <br />
              <span className="bg-gradient-to-r from-[#FD8100] to-[#00A86B] bg-clip-text text-transparent">
                Powered by AI.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fadeIn animation-delay-200">
              Plan meals, track your pantry, and shop efficiently - all in one
              app.
            </p>

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

        {/* Stats Bar */}
        <div className="py-12 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                number: "5K+",
                label: "People in the waitlist",
                color: "text-[#FD8100]",
              },
              {
                number: "35%",
                label: "Average Savings",
                color: "text-[#00A86B]",
              },
              {
                number: "1M+",
                label: "Recipes Created",
                color: "text-[#FD8100]",
              },
              {
                number: "Q4 2025",
                label: "Launching in",
                color: "text-[#00A86B]",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white/80 backdrop-blur rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`text-2xl sm:text-3xl font-bold ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Section 1 - AI-Powered Personalization */}
        <div
          ref={(el) => (featuresRef.current[0] = el)}
          className="feature-card opacity-0 mt-16 mx-4 sm:mx-6 lg:mx-auto max-w-7xl"
        >
          <div className="relative rounded-3xl bg-white shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FD8100]/15 via-transparent to-[#00A86B]/10" />

            <div className="relative p-6 sm:p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Images Gallery */}
                <div className="w-full lg:w-1/2">
                  <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    {[
                      { src: "/pantry2.png", ratio: "660 / 1436", alt: "Pantry Management" },
                      { src: "/p1.png", ratio: "1206 / 2622", alt: "Smart Cart" },
                      { src: "/p2.png", ratio: "1206 / 2622", alt: "Shop Selection" },
                    ].map((img) => (
                      <div
                        key={img.src}
                        className="relative w-full overflow-hidden rounded-2xl border border-[#FD8100]/15 bg-white shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
                        style={{ aspectRatio: img.ratio }}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(min-width: 1024px) 15vw, (min-width: 768px) 22vw, 90vw"
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="text-center lg:text-left">
                    <span className="inline-block px-3 py-1 bg-[#FD8100]/10 text-[#B45309] text-sm font-semibold rounded-full mb-3">
                      AI Intelligence
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      AI-Powered Personalization
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 group/item">
                        <div className="mt-1 w-6 h-6 rounded-full bg-[#FD8100]/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#FD8100] transition-colors duration-300">
                          <span className="text-[#B45309] group-hover/item:text-white text-sm">
                            ✓
                          </span>
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg">
                          Personalized weekly meal plans built by AI for your goals and diet.
                        </p>
                      </div>
                      <div className="flex items-start gap-3 group/item">
                        <div className="mt-1 w-6 h-6 rounded-full bg-[#FD8100]/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#FD8100] transition-colors duration-300">
                          <span className="text-[#B45309] group-hover/item:text-white text-sm">
                            ✓
                          </span>
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg">
                          Smart recipe suggestions using what's already in your pantry.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#FD8100]/15 text-center lg:text-left">
                    <span className="inline-block px-3 py-1 bg-[#00A86B]/15 text-[#00A86B] text-sm font-semibold rounded-full mb-3">
                      Inventory Management
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      Real-Time Inventory Tracking
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 group/item">
                        <div className="mt-1 w-6 h-6 rounded-full bg-[#00A86B]/15 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#00A86B] transition-colors duration-300">
                          <span className="text-[#00A86B] group-hover/item:text-white text-sm">
                            ✓
                          </span>
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg">
                          Automatically track what's in stock and what's running low.
                        </p>
                      </div>
                      <div className="flex items-start gap-3 group/item">
                        <div className="mt-1 w-6 h-6 rounded-full bg-[#00A86B]/15 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#00A86B] transition-colors duration-300">
                          <span className="text-[#00A86B] group-hover/item:text-white text-sm">
                            ✓
                          </span>
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg">
                          Organize grocery lists by category for faster shopping.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Section 2 - Pantry-to-Recipe Generator */}
        <div
          ref={(el) => (featuresRef.current[1] = el)}
          className="feature-card opacity-0 mt-16 mx-4 sm:mx-6 lg:mx-auto max-w-7xl"
        >
          <div className="relative rounded-3xl bg-[#F1FFF7] shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00A86B]/30 via-transparent to-transparent" />

            <div className="relative p-6 sm:p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Images Gallery */}
                <div className="w-full lg:w-1/2">
                  <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    {[
                      { src: "/home.png", alt: "Freshly Home", ratio: "750 / 1624" },
                      { src: "/quick.png", alt: "Quick Recipes", ratio: "750 / 1624" },
                      { src: "/cart.png", alt: "Smart Cart", ratio: "750 / 1624" },
                    ].map((img) => (
                      <div
                        key={img.src}
                        className="relative w-full overflow-hidden rounded-2xl border border-[#00A86B]/25 bg-white shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
                        style={{ aspectRatio: img.ratio }}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(min-width: 1024px) 15vw, (min-width: 768px) 22vw, 90vw"
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="text-center lg:text-left">
                    <span className="inline-block px-3 py-1 bg-[#00A86B]/15 text-[#00A86B] text-sm font-semibold rounded-full mb-3">
                      Recipe Magic
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      Pantry-to-Recipe Generator
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 group/item">
                        <div className="mt-1 w-6 h-6 rounded-full bg-[#00A86B]/15 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#00A86B] transition-colors duration-300">
                          <span className="text-[#00A86B] group-hover/item:text-white text-sm">
                            ✨
                          </span>
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg">
                          Turn your pantry into recipes instantly with AI suggestions.
                        </p>
                      </div>
                      <div className="flex items-start gap-3 group/item">
                        <div className="mt-1 w-6 h-6 rounded-full bg-[#00A86B]/15 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#00A86B] transition-colors duration-300">
                          <span className="text-[#00A86B] group-hover/item:text-white text-sm">
                            💡
                          </span>
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg">
                          Discover new dishes, reduce waste, and save money effortlessly.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#00A86B]/20 text-center lg:text-left">
                    <span className="inline-block px-3 py-1 bg-[#00A86B]/15 text-[#00A86B] text-sm font-semibold rounded-full mb-3">
                      Sustainability
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      Waste Reduction Metrics
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 group/item">
                        <div className="mt-1 w-6 h-6 rounded-full bg-[#00A86B]/15 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#00A86B] transition-colors duration-300">
                          <span className="text-[#00A86B] group-hover/item:text-white text-sm">
                            📊
                          </span>
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg">
                          Track your food usage, expiration dates, and total savings.
                        </p>
                      </div>
                      <div className="flex items-start gap-3 group/item">
                        <div className="mt-1 w-6 h-6 rounded-full bg-[#00A86B]/15 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#00A86B] transition-colors duration-300">
                          <span className="text-[#00A86B] group-hover/item:text-white text-sm">
                            🌱
                          </span>
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg">
                          Cut waste, spend smarter, and live more sustainably over time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Section 3 - Smart Price Comparison */}
        <div
          ref={(el) => (featuresRef.current[2] = el)}
          className="feature-card opacity-0 mt-16 mx-4 sm:mx-6 lg:mx-auto max-w-7xl mb-20"
        >
          <div className="relative bg-[#FFFCF9] rounded-3xl shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FD8100]/20 via-transparent to-[#00A86B]/15 opacity-70" />

            <div className="relative p-6 sm:p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Images Gallery */}
                <div className="w-full lg:w-1/2">
                  <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    <div
                      className="relative w-full overflow-hidden rounded-xl border-2 border-[#FD8100]/15 shadow-lg transition-transform duration-500 hover:scale-110 hover:shadow-2xl bg-white"
                      style={{ aspectRatio: "375 / 812" }}
                    >
                      <Image
                        src="/34.png"
                        alt="Price Comparison"
                        fill
                        sizes="(min-width: 1024px) 12vw, (min-width: 768px) 20vw, 50vw"
                        className="object-contain"
                      />
                    </div>
                    <div
                      className="relative w-full overflow-hidden rounded-xl border-2 border-[#FD8100]/15 shadow-lg transition-transform duration-500 hover:scale-110 hover:shadow-2xl bg-white"
                      style={{ aspectRatio: "375 / 812" }}
                    >
                      <Image
                        src="/35.png"
                        alt="Store Options"
                        fill
                        sizes="(min-width: 1024px) 12vw, (min-width: 768px) 20vw, 50vw"
                        className="object-contain"
                      />
                    </div>
                    <div
                      className="relative w-full overflow-hidden rounded-xl border-2 border-[#FD8100]/15 shadow-lg transition-transform duration-500 hover:scale-110 hover:shadow-2xl bg-white"
                      style={{ aspectRatio: "375 / 812" }}
                    >
                      <Image
                        src="/51.png"
                        alt="Delivery Tracking"
                        fill
                        sizes="(min-width: 1024px) 12vw, (min-width: 768px) 20vw, 50vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="text-center lg:text-left">
                    <span className="inline-block px-3 py-1 bg-[#FD8100]/10 text-[#B45309] text-sm font-semibold rounded-full mb-3">
                      Smart Savings
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      Smart Price Comparison
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 group/item">
                        <div className="mt-1 w-6 h-6 rounded-full bg-white/70 border border-[#FD8100]/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#FD8100] transition-colors duration-300">
                          <span className="text-[#B45309] group-hover/item:text-white text-sm">
                            💰
                          </span>
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg">
                          Compare grocery prices across stores automatically in
                          real time.
                        </p>
                      </div>
                      <div className="flex items-start gap-3 group/item">
                        <div className="mt-1 w-6 h-6 rounded-full bg-white/70 border border-[#FD8100]/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#FD8100] transition-colors duration-300">
                          <span className="text-[#B45309] group-hover/item:text-white text-sm">
                            🛒
                          </span>
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg">
                          Save money without sacrificing quality or convenience.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#00A86B]/15 text-center lg:text-left">
                    <span className="inline-block px-3 py-1 bg-[#00A86B]/10 text-[#007A4E] text-sm font-semibold rounded-full mb-3">
                      Delivery Excellence
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      Seamless Delivery Integration
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 group/item">
                        <div className="mt-1 w-6 h-6 rounded-full bg-white/70 border border-[#00A86B]/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#00A86B] transition-colors duration-300">
                          <span className="text-[#007A4E] group-hover/item:text-white text-sm">
                            🚚
                          </span>
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg">
                          Get groceries delivered fast and reliably with local
                          partners.
                        </p>
                      </div>
                      <div className="flex items-start gap-3 group/item">
                        <div className="mt-1 w-6 h-6 rounded-full bg-white/70 border border-[#00A86B]/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#00A86B] transition-colors duration-300">
                          <span className="text-[#007A4E] group-hover/item:text-white text-sm">
                            📱
                          </span>
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg">
                          Place, track, and receive orders directly within the
                          app.
                        </p>
                      </div>
                      <div className="flex items-start gap-3 group/item">
                        <div className="mt-1 w-6 h-6 rounded-full bg-white/70 border border-[#00A86B]/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#00A86B] transition-colors duration-300">
                          <span className="text-[#007A4E] group-hover/item:text-white text-sm">
                            ⭐
                          </span>
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg">
                          Enjoy a smooth, all-in-one shopping and delivery
                          experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
              Are you ready to revolutionize your
              <span className="bg-[#FD8100] bg-clip-text text-transparent">
                {" "}
                grocery shopping{" "}
              </span>
              and
              <span className="bg-[#00A86B] bg-clip-text text-transparent">
                {" "}
                meal planning{" "}
              </span>
              experience
              ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of users who save time and money every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/download"
                className="px-8 py-4 bg-gradient-to-r from-[#FD8100] to-[#00A86B] text-white font-semibold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center"
              >
                Download
              </Link>
          
            </div>
          </div>
        </div>
      </div>

      {/* Add styles for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
        }

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

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-gentle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
          animation-delay: 3s;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .feature-card {
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .feature-card.animate-fadeInUp {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
