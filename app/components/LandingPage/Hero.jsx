"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import lgo from "../../../public/lgo.png";
import rl from "../../../public/rl.png";
import { Inter } from "next/font/google";
import {
  FiClock,
  FiShoppingCart,
  FiTrendingDown,
  FiAlertCircle,
} from "react-icons/fi";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const PARTICLE_CONFIGS = Array.from({ length: 20 }, (_, i) => ({
  left: `${(i * 13) % 100}%`,
  top: `${(i * 29) % 100}%`,
  duration: 3 + (i % 5) * 0.3,
  delay: (i % 4) * 0.25,
}));

const ORBITAL_CIRCLES = Array.from({ length: 6 }, (_, i) => ({
  left: `${i * 25}%`,
  top: `${(i * 18) % 90}%`,
}));

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 2500], [1, 0.3]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className={`${inter.className} relative overflow-hidden`}>
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mb-12 sm:mb-16 lg:mb-20"
      >
        {/* Logo and Title Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex w-full flex-col items-center justify-center px-4 sm:px-6 pt-20 sm:pt-28 lg:pt-32"
        >
          <motion.div variants={itemVariants} className="mt-3 sm:mt-4 relative">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-[#00A86B] bg-clip-text text-transparent">
              SAVR
            </h1>
            {/* Animated underline */}
          </motion.div>
        </motion.div>

        {/* Enhanced Tagline with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="pt-6 px-4 text-center"
        >
          <motion.span
            className="inline-block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold"
          >
            <span className="text-[#00A86B]">Smarter Shopping.</span>{" "}
            <span className="text-[#FD8100]">Healthier Living.</span>
          </motion.span>

          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-4 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00A86B]/10 to-[#FD8100]/10 border border-[#00A86B]/30 rounded-full">
              <motion.span
                className="w-2 h-2 bg-[#00A86B] rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-gray-700">
                AI powered Grocery Shopping & Meal Planning
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mx-4 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-32 mt-8 sm:mt-10 md:mt-12"
        >
          {/* Gradient Border Container */}
          <div className="relative p-[2px] rounded-[20px] bg-gradient-to-r from-[#00A86B] via-[#FD8100] to-[#00A86B] animate-gradient-x">
            {/* Inner Card */}
            <div className="relative bg-white rounded-[18px] overflow-hidden shadow-2xl">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00A86B]/20 via-transparent to-[#FD8100]/20" />
                {ORBITAL_CIRCLES.map(({ left, top }, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-32 h-32 border border-gray-200/30 rounded-full"
                    style={{
                      left,
                      top,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10 px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12">
                {/* Problem Statement with Animation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-center"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    Grocery shopping & meal planning today is...{" "}
                  </h2>
                </motion.div>

                {/* Enhanced Subheading */}

                {/* Enhanced Two Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-10">
                  {/* Time Consuming Card */}

                  {/* Wasteful Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02, y: -8 }}
                    className="group relative h-full"
                  >
                    {/* Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FD8100]/30 to-[#FD8100]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

                    <div className="relative bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 hover:bg-gray-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                      {/* Icon Container */}
                      <div className="flex justify-center mb-4">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="relative"
                        >
                          <div className="absolute inset-0 bg-[#FD8100]/20 rounded-full blur-xl" />
                          <div className="relative bg-orange-100 p-4 rounded-full border border-[#FD8100]/30">
                            <FiShoppingCart className="w-8 h-8 sm:w-10 sm:h-10 text-[#FD8100]" />
                          </div>
                        </motion.div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-3">
                        Wasteful & Stressful
                      </h3>

                      {/* Description */}
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg text-center leading-relaxed">
                        Up to 30% of groceries end up in the trash each week.
                        Overbuying and unused ingredients drain your budget. The
                        entire process feels repetitive, tiring, and
                        frustrating.
                      </p>

                      {/* Stats */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3, duration: 0.6 }}
                        className="mt-4 pt-4 border-t border-gray-200"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <FiAlertCircle className="w-4 h-4 text-[#FD8100]" />
                          <span className="text-sm text-gray-700">
                            Average:{" "}
                            <span className="text-[#FD8100] font-semibold">
                              $1,500/year
                            </span>{" "}
                            wasted
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    whileHover={{ scale: 1.02, y: -8 }}
                    className="group relative h-full"
                  >
                    {/* Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00A86B]/30 to-[#00A86B]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

                    <div className="relative bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 hover:bg-gray-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                      {/* Icon Container */}
                      <div className="flex justify-center mb-4">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="relative"
                        >
                          <div className="absolute inset-0 bg-[#00A86B]/20 rounded-full blur-xl" />
                          <div className="relative bg-emerald-100 p-4 rounded-full border border-[#00A86B]/30">
                            <FiClock className="w-8 h-8 sm:w-10 sm:h-10 text-[#00A86B]" />
                          </div>
                        </motion.div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-3">
                        Time Consuming & Disorganized
                      </h3>

                      {/* Description */}
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg text-center leading-relaxed">
                        Hours wasted deciding what to cook and what to buy.
                        Forgotten items, duplicate purchases, and messy lists.
                        Constantly juggling recipes, preferences, and pantry
                        leftovers.
                      </p>

                      {/* Stats */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                        className="mt-4 pt-4 border-t border-gray-200"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <FiTrendingDown className="w-4 h-4 text-[#00A86B]" />
                          <span className="text-sm text-gray-700">
                            Average:{" "}
                            <span className="text-[#00A86B] font-semibold">
                              3+ hours/week
                            </span>{" "}
                            wasted
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Call to Action */}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex justify-center mt-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gray-400 text-sm flex flex-col items-center gap-2"
          >
            <span>Scroll to explore</span>
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Add gradient animation styles */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
