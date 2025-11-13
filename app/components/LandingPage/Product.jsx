"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useRef, useState } from "react";

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

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              <button className="px-8 py-4 bg-[#FD8100] text-white font-semibold rounded-full hover:bg-[#FD8100]/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started Free
              </button>
              <button className="px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Watch Demo
              </button>
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
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
            {/* Accent Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FD8100] to-[#00A86B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-white m-[2px] rounded-3xl p-6 sm:p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Images Gallery */}
                <div className="w-full lg:w-1/2">
                  <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    <div className="col-span-2 row-span-2">
                      <Image
                        src="/pantry.png"
                        alt="Pantry Management"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 hover:shadow-xl"
                      />
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      <Image
                        src="/cart.png"
                        alt="Smart Cart"
                        width={200}
                        height={200}
                        className="w-full h-auto aspect-square object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 hover:shadow-xl"
                      />
                      <Image
                        src="/choose-shop.png"
                        alt="Shop Selection"
                        width={200}
                        height={200}
                        className="w-full h-auto aspect-square object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 hover:shadow-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#FD8100]/10 text-[#FD8100] text-sm font-semibold rounded-full mb-3">
                      AI Intelligence
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
                      AI-Powered Personalization
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 group/item">
                        <div className="mt-1 w-6 h-6 rounded-full bg-[#FD8100]/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#FD8100] transition-colors duration-300">
                          <span className="text-[#FD8100] group-hover/item:text-white text-sm">
                            ✓
                          </span>
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg">
                          Personalized weekly meal plans built by AI for your
                          goals and diet.
                        </p>
                      </div>
                      <div className="flex items-start gap-3 group/item">
                        <div className="mt-1 w-6 h-6 rounded-full bg-[#FD8100]/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#FD8100] transition-colors duration-300">
                          <span className="text-[#FD8100] group-hover/item:text-white text-sm">
                            ✓
                          </span>
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg">
                          Smart recipe suggestions using what's already in your
                          pantry.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <span className="inline-block px-3 py-1 bg-[#00A86B]/10 text-[#00A86B] text-sm font-semibold rounded-full mb-3">
                      Inventory Management
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                      Real-Time Inventory Tracking
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 group/item">
                        <div className="mt-1 w-6 h-6 rounded-full bg-[#00A86B]/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#00A86B] transition-colors duration-300">
                          <span className="text-[#00A86B] group-hover/item:text-white text-sm">
                            ✓
                          </span>
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg">
                          Automatically track what's in stock and what's running
                          low.
                        </p>
                      </div>
                      <div className="flex items-start gap-3 group/item">
                        <div className="mt-1 w-6 h-6 rounded-full bg-[#00A86B]/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#00A86B] transition-colors duration-300">
                          <span className="text-[#00A86B] group-hover/item:text-white text-sm">
                            ✓
                          </span>
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg">
                          Organize grocery lists by category for faster
                          shopping.
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
          <div className="relative bg-gradient-to-r from-[#FD8100] to-[#00A86B] p-[2px] rounded-3xl">
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
                {/* Images Gallery */}
                <div className="w-full lg:w-1/2">
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <Image
                        src="/freshly-home.png"
                        alt="Freshly Home"
                        width={300}
                        height={300}
                        className="w-full h-auto aspect-square object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 hover:shadow-xl"
                      />
                      <Image
                        src="/cart.png"
                        alt="Smart Shopping"
                        width={300}
                        height={300}
                        className="w-full h-auto aspect-square object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 hover:shadow-xl"
                      />
                    </div>
                    <div className="mt-3 sm:mt-4">
                      <Image
                        src="/choose-shop.png"
                        alt="Choose Your Store"
                        width={600}
                        height={300}
                        className="w-full h-auto object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 hover:shadow-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#FD8100]/10 text-[#FD8100] text-sm font-semibold rounded-full mb-3">
                      Recipe Magic
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
                      Pantry-to-Recipe Generator
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 group/item">
                        <div className="mt-1 w-6 h-6 rounded-full bg-[#FD8100]/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#FD8100] transition-colors duration-300">
                          <span className="text-[#FD8100] group-hover/item:text-white text-sm">
                            ✨
                          </span>
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg">
                          Turn your pantry into recipes instantly with AI
                          suggestions.
                        </p>
                      </div>
                      <div className="flex items-start gap-3 group/item">
                        <div className="mt-1 w-6 h-6 rounded-full bg-[#FD8100]/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#FD8100] transition-colors duration-300">
                          <span className="text-[#FD8100] group-hover/item:text-white text-sm">
                            💡
                          </span>
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg">
                          Discover new dishes, reduce waste, and save money
                          effortlessly.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <span className="inline-block px-3 py-1 bg-[#00A86B]/10 text-[#00A86B] text-sm font-semibold rounded-full mb-3">
                      Sustainability
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                      Waste Reduction Metrics
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 group/item">
                        <div className="mt-1 w-6 h-6 rounded-full bg-[#00A86B]/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#00A86B] transition-colors duration-300">
                          <span className="text-[#00A86B] group-hover/item:text-white text-sm">
                            📊
                          </span>
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg">
                          Track your food usage, expiration dates, and total
                          savings.
                        </p>
                      </div>
                      <div className="flex items-start gap-3 group/item">
                        <div className="mt-1 w-6 h-6 rounded-full bg-[#00A86B]/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#00A86B] transition-colors duration-300">
                          <span className="text-[#00A86B] group-hover/item:text-white text-sm">
                            🌱
                          </span>
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg">
                          Cut waste, spend smarter, and live more sustainably
                          over time.
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
          <div className="relative bg-black rounded-3xl shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FD8100]/20 to-[#00A86B]/20 opacity-50" />

            <div className="relative p-6 sm:p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Images Gallery */}
                <div className="w-full lg:w-1/2">
                  <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    <Image
                      src="/34.png"
                      alt="Price Comparison"
                      width={200}
                      height={200}
                      className="w-full h-auto aspect-square object-cover rounded-xl shadow-lg hover:scale-110 transition-transform duration-500 hover:shadow-2xl border-2 border-white/20"
                    />
                    <Image
                      src="/35.png"
                      alt="Store Options"
                      width={200}
                      height={200}
                      className="w-full h-auto aspect-square object-cover rounded-xl shadow-lg hover:scale-110 transition-transform duration-500 hover:shadow-2xl border-2 border-white/20"
                    />
                    <Image
                      src="/51.png"
                      alt="Delivery Tracking"
                      width={200}
                      height={200}
                      className="w-full h-auto aspect-square object-cover rounded-xl shadow-lg hover:scale-110 transition-transform duration-500 hover:shadow-2xl border-2 border-white/20"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/10 text-white text-sm font-semibold rounded-full mb-3 backdrop-blur">
                      Smart Savings
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                      Smart Price Comparison
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 group/item">
                        <div className="mt-1 w-6 h-6 rounded-full bg-white/10 backdrop-blur flex items-center justify-center flex-shrink-0 group-hover/item:bg-white/20 transition-colors duration-300">
                          <span className="text-white text-sm">💰</span>
                        </div>
                        <p className="text-white/90 text-base sm:text-lg">
                          Compare grocery prices across stores automatically in
                          real time.
                        </p>
                      </div>
                      <div className="flex items-start gap-3 group/item">
                        <div className="mt-1 w-6 h-6 rounded-full bg-white/10 backdrop-blur flex items-center justify-center flex-shrink-0 group-hover/item:bg-white/20 transition-colors duration-300">
                          <span className="text-white text-sm">🛒</span>
                        </div>
                        <p className="text-white/90 text-base sm:text-lg">
                          Save money without sacrificing quality or convenience.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <span className="inline-block px-3 py-1 bg-white/10 text-white text-sm font-semibold rounded-full mb-3 backdrop-blur">
                      Delivery Excellence
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                      Seamless Delivery Integration
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 group/item">
                        <div className="mt-1 w-6 h-6 rounded-full bg-white/10 backdrop-blur flex items-center justify-center flex-shrink-0 group-hover/item:bg-white/20 transition-colors duration-300">
                          <span className="text-white text-sm">🚚</span>
                        </div>
                        <p className="text-white/90 text-base sm:text-lg">
                          Get groceries delivered fast and reliably with local
                          partners.
                        </p>
                      </div>
                      <div className="flex items-start gap-3 group/item">
                        <div className="mt-1 w-6 h-6 rounded-full bg-white/10 backdrop-blur flex items-center justify-center flex-shrink-0 group-hover/item:bg-white/20 transition-colors duration-300">
                          <span className="text-white text-sm">📱</span>
                        </div>
                        <p className="text-white/90 text-base sm:text-lg">
                          Place, track, and receive orders directly within the
                          app.
                        </p>
                      </div>
                      <div className="flex items-start gap-3 group/item">
                        <div className="mt-1 w-6 h-6 rounded-full bg-white/10 backdrop-blur flex items-center justify-center flex-shrink-0 group-hover/item:bg-white/20 transition-colors duration-300">
                          <span className="text-white text-sm">⭐</span>
                        </div>
                        <p className="text-white/90 text-base sm:text-lg">
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
              andw
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
              <button className="px-8 py-4 bg-gradient-to-r from-[#FD8100] to-[#00A86B] text-white font-semibold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Start Your Free Trial
              </button>
              <button className="px-8 py-4 bg-white text-black border-2 border-black font-semibold rounded-full hover:bg-black hover:text-white transform hover:scale-105 transition-all duration-300">
                Download App
              </button>
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
