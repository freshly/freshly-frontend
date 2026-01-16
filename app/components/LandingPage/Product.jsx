"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useRef, useCallback } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Product() {
  const featuresRef = useRef([]);
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
      {/* Content Container */}
      <div className="relative z-10">
        {/* Feature Section 1 - AI-Powered Personalization */}
        <div
          ref={(el) => (featuresRef.current[0] = el)}
          className="feature-card opacity-0 mx-2 sm:mx-4 xl:mx-auto max-w-[110rem] w-full"
        >
          <div className="relative rounded-3xl bg-white shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FD8100]/15 via-transparent to-[#00A86B]/10" />

            <div className="relative p-6 sm:p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-20">
                {/* Images Gallery */}
                <div className="w-full lg:w-1/2 xl:w-5/12">
                  <div className="grid grid-cols-3 gap-3 sm:gap-5">
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
                <div className="w-full lg:w-1/2 xl:w-7/12 space-y-8">
                  <div className="text-center lg:text-left">
                    <span className="inline-block px-3 py-1 bg-[#FD8100]/10 text-[#B45309] text-base font-semibold rounded-full mb-4">
                      AI Intelligence
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                      AI-Powered Personalization
                    </h2>
                    <div className="space-y-5">
                      <div className="flex items-start gap-4 group/item">
                        <div className="mt-1 w-7 h-7 rounded-full bg-[#FD8100]/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#FD8100] transition-colors duration-300">
                          <span className="text-[#B45309] group-hover/item:text-white text-lg">
                            ✓
                          </span>
                        </div>
                        <p className="text-gray-700 text-lg sm:text-xl">
                          Personalized weekly meal plans built by AI for your goals and diet.
                        </p>
                      </div>
                      <div className="flex items-start gap-4 group/item">
                        <div className="mt-1 w-7 h-7 rounded-full bg-[#FD8100]/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#FD8100] transition-colors duration-300">
                          <span className="text-[#B45309] group-hover/item:text-white text-lg">
                            ✓
                          </span>
                        </div>
                        <p className="text-gray-700 text-lg sm:text-xl">
                          Smart recipe suggestions using what's already in your pantry.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-[#FD8100]/15 text-center lg:text-left">
                    <span className="inline-block px-3 py-1 bg-[#00A86B]/15 text-[#00A86B] text-base font-semibold rounded-full mb-4">
                      Inventory Management
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                      Real-Time Inventory Tracking
                    </h3>
                    <div className="space-y-5">
                      <div className="flex items-start gap-4 group/item">
                        <div className="mt-1 w-7 h-7 rounded-full bg-[#00A86B]/15 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#00A86B] transition-colors duration-300">
                          <span className="text-[#00A86B] group-hover/item:text-white text-lg">
                            ✓
                          </span>
                        </div>
                        <p className="text-gray-700 text-lg sm:text-xl">
                          Automatically track what's in stock and what's running low.
                        </p>
                      </div>
                      <div className="flex items-start gap-4 group/item">
                        <div className="mt-1 w-7 h-7 rounded-full bg-[#00A86B]/15 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#00A86B] transition-colors duration-300">
                          <span className="text-[#00A86B] group-hover/item:text-white text-lg">
                            ✓
                          </span>
                        </div>
                        <p className="text-gray-700 text-lg sm:text-xl">
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
          className="feature-card opacity-0 mt-16 mx-2 sm:mx-4 xl:mx-auto max-w-[110rem] w-full"
        >
          <div className="relative rounded-3xl bg-[#F1FFF7] shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00A86B]/30 via-transparent to-transparent" />

            <div className="relative p-6 sm:p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-20">
                {/* Images Gallery */}
                <div className="w-full lg:w-1/2 xl:w-5/12">
                  <div className="grid grid-cols-3 gap-3 sm:gap-5">
                    {[
                      { src: "/home.png", alt: "SAVR Home", ratio: "750 / 1624" },
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
                          sizes="(min-width: 1280px) 13vw, (min-width: 1024px) 18vw, (min-width: 768px) 24vw, 90vw"
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 xl:w-7/12 space-y-8">
                  <div className="text-center lg:text-left">
                    <span className="inline-block px-3 py-1 bg-[#00A86B]/15 text-[#00A86B] text-base font-semibold rounded-full mb-4">
                      Recipe Magic
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                      Pantry-to-Recipe Generator
                    </h2>
                    <div className="space-y-5">
                      <div className="flex items-start gap-4 group/item">
                        <div className="mt-1 w-7 h-7 rounded-full bg-[#00A86B]/15 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#00A86B] transition-colors duration-300">
                          <span className="text-[#00A86B] group-hover/item:text-white text-lg">
                             ✓
                          </span>
                        </div>
                        <p className="text-gray-700 text-lg sm:text-xl">
                          Turn your pantry into recipes instantly with AI suggestions.
                        </p>
                      </div>
                      <div className="flex items-start gap-4 group/item">
                        <div className="mt-1 w-7 h-7 rounded-full bg-[#00A86B]/15 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#00A86B] transition-colors duration-300">
                          <span className="text-[#00A86B] group-hover/item:text-white text-lg">
                            ✓
                          </span>
                        </div>
                        <p className="text-gray-700 text-lg sm:text-xl">
                          Discover new dishes, reduce waste, and save money effortlessly.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-[#00A86B]/20 text-center lg:text-left">
                    <span className="inline-block px-3 py-1 bg-[#00A86B]/15 text-[#00A86B] text-base font-semibold rounded-full mb-4">
                      Sustainability
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                      Waste Reduction Metrics
                    </h3>
                    <div className="space-y-5">
                      <div className="flex items-start gap-4 group/item">
                        <div className="mt-1 w-7 h-7 rounded-full bg-[#00A86B]/15 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#00A86B] transition-colors duration-300">
                          <span className="text-[#00A86B] group-hover/item:text-white text-lg">
                            ✓
                          </span>
                        </div>
                        <p className="text-gray-700 text-lg sm:text-xl">
                          Track your food usage, expiration dates, and total savings.
                        </p>
                      </div>
                      <div className="flex items-start gap-4 group/item">
                        <div className="mt-1 w-7 h-7 rounded-full bg-[#00A86B]/15 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#00A86B] transition-colors duration-300">
                          <span className="text-[#00A86B] group-hover/item:text-white text-lg">
                             ✓
                          </span>
                        </div>
                        <p className="text-gray-700 text-lg sm:text-xl">
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
          className="feature-card opacity-0 mt-16 mx-2 sm:mx-4 xl:mx-auto max-w-[110rem] w-full mb-20"
        >
          <div className="relative bg-[#FFFCF9] rounded-3xl shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FD8100]/20 via-transparent to-[#00A86B]/15 opacity-70" />

            <div className="relative p-6 sm:p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-20">
                {/* Images Gallery */}
                <div className="w-full lg:w-1/2 xl:w-5/12">
                  <div className="grid grid-cols-3 gap-3 sm:gap-5">
                    <div
                      className="relative w-full overflow-hidden rounded-xl border-2 border-[#FD8100]/15 shadow-lg transition-transform duration-500 hover:scale-110 hover:shadow-2xl bg-white"
                      style={{ aspectRatio: "375 / 812" }}
                    >
                      <Image
                        src="/34.png"
                        alt="Price Comparison"
                        fill
                        sizes="(min-width: 1280px) 13vw, (min-width: 1024px) 18vw, (min-width: 768px) 24vw, 90vw"
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
                        sizes="(min-width: 1280px) 13vw, (min-width: 1024px) 18vw, (min-width: 768px) 24vw, 90vw"
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
                        sizes="(min-width: 1280px) 13vw, (min-width: 1024px) 18vw, (min-width: 768px) 24vw, 90vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 xl:w-7/12 space-y-8">
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
                             ✓
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
                             ✓
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
                             ✓
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
                             ✓
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
                             ✓
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
