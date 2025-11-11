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
    <div className={`${inter.className} font-thin relative mb-20 lg:mb-0`}>
      <div className="flex w-full flex-col items-center justify-center px-6 pt-35">
        <Image
          src={lgo}
          alt="Freshly Icon"
          className="h-40 w-40 object-contain md:h-40 md:w-40 "
          priority
        />
        <p className="mt-4 text-5xl font-semibold text-[#01AC66]">Freshly</p>
      </div>
      <div className="pt-2 text-center text-lg md:text-3xl font-semibold text-[#9fa0a3]">
        <span className=" text-[#00A86B]">Smarter Shopping. </span>{" "}
        <span className="text-[#FD8100]">Healthier Living.</span>
      </div>
      <div
        className="
          mx-5 md:mx-20 lg:mx-72 py-8 rounded-[15px] mt-10 bg-neutral-950
        "
      >
        
        <div className="text-center font-normal text-3xl text-white">
         So, what everyday problem does <span className="font-normal text-[#01AC66]">Freshly</span>{" "}
          solve?
        </div>
          <div className="text-center font-light text-2xl text-white mt-10">
            Grocery shopping & meal planning today is...
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 mt-[-10px] px-6 mb-6 lg:mb-12 ">
          {/* Left Column */}
          <motion.div
            className="flex flex-col items-center text-center text-white p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <FiClock size={50} className="text-[#01AC66] mb-3" />
            <div className="text-2xl md:text-3xl font-normal">
              Time consuming &amp; Disorganized
            </div>
            <div className="text-gray-300 font-light mt-2 max-w-md text-2xl">
              Hours wasted deciding what to cook and what to buy. Forgotten items, duplicate purchases, and messy lists. Constantly juggling recipes, preferences, and pantry leftovers.
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="flex flex-col items-center text-center text-white p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <FiShoppingCart size={50} className="text-[#01AC66] mb-3" />
            <div className="text-2xl md:text-3xl font-normal">
              Wasteful & Stressful
            </div>
            <div className="text-gray-300 font-light mt-2 max-w-md text-2xl">
             Up to 30% of groceries end up in the trash each week. Overbuying and unused ingredients drain your budget. The entire process feels repetitive, tiring, and frustrating.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
