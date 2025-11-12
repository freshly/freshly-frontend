"use client";
import React from "react";
import Image from "next/image";
import lgo from "../../../public/lgo.png";
import { Inter } from "next/font/google";
import { FiClock, FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
  display: "swap",
});

export default function Hero() {
  return (
    <div className={`${inter.className} font-thin relative mb-12 sm:mb-16 lg:mb-20`}>
      {/* Logo and Title Section */}
      <div className="flex w-full flex-col items-center justify-center px-4 sm:px-6 pt-20 sm:pt-28 lg:pt-35">
        <Image
          src={lgo}
          alt="Freshly Icon"
          className="h-28 w-28 sm:h-36 sm:w-36 md:h-40 md:w-40 object-contain"
          priority
        />
        <p className="mt-3 sm:mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold text-[#01AC66]">
          Freshly
        </p>
      </div>

      {/* Tagline */}
      <div className="pt-2 px-4 text-center text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold text-[#9fa0a3]">
        <span className="text-[#00A86B]">Smarter Shopping. </span>{" "}
        <span className="text-[#FD8100]">Healthier Living.</span>
      </div>

      {/* Main Content Card */}
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-72 py-6 sm:py-8 md:py-10 rounded-[15px] mt-6 sm:mt-8 md:mt-10 bg-neutral-950">
        {/* Problem Statement */}
        <div className="text-center font-normal text-xl sm:text-2xl md:text-3xl text-white px-4 sm:px-6">
          So, what everyday problem does{" "}
          <span className="font-normal text-[#01AC66]">Freshly</span> solve?
        </div>

        {/* Subheading */}
        <div className="text-center font-light text-lg sm:text-xl md:text-2xl text-white mt-6 sm:mt-8 md:mt-10 px-4">
          Grocery shopping & meal planning today is...
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 md:mt-8 px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 lg:pb-12">
          {/* Left Column - Time consuming */}
          <motion.div
            className="flex flex-col items-center text-center text-white p-4 sm:p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <FiClock 
              size={40} 
              className="text-[#01AC66] mb-3 sm:mb-4 sm:w-12 sm:h-12 md:w-14 md:h-14" 
            />
            <div className="text-xl sm:text-2xl md:text-3xl font-normal">
              Time consuming &amp; Disorganized
            </div>
            <div className="text-gray-300 font-light mt-2 sm:mt-3 max-w-md text-sm sm:text-base md:text-lg lg:text-xl">
              Hours wasted deciding what to cook and what to buy. Forgotten
              items, duplicate purchases, and messy lists. Constantly juggling
              recipes, preferences, and pantry leftovers.
            </div>
          </motion.div>

          {/* Right Column - Wasteful */}
          <motion.div
            className="flex flex-col items-center text-center text-white p-4 sm:p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <FiShoppingCart 
              size={40} 
              className="text-[#01AC66] mb-3 sm:mb-4 sm:w-12 sm:h-12 md:w-14 md:h-14" 
            />
            <div className="text-xl sm:text-2xl md:text-3xl font-normal">
              Wasteful & Stressful
            </div>
            <div className="text-gray-300 font-light mt-2 sm:mt-3 max-w-md text-sm sm:text-base md:text-lg lg:text-xl">
              Up to 30% of groceries end up in the trash each week. Overbuying
              and unused ingredients drain your budget. The entire process feels
              repetitive, tiring, and frustrating.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}