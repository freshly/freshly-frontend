"use client";
import React from "react";
import Image from "next/image";
import FreshlyIcon from "../../../public/freshly-icon-square.png";
import { Inter } from "next/font/google";
import Phone3D from "./Phone";
import { FiClock, FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion";

// Load Inter at the thin weights
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
  display: "swap",
});

export default function Hero() {
  return (
    <div className={`${inter.className} font-thin relative`}>
      <div className="pt-10 md:pt-20 flex justify-center">
        <Image
          src={FreshlyIcon}
          alt="Freshly Icon"
          className="w-[125px] h-[125px] md:w-[200px] md:h-[200px]"
        />
      </div>

      <div className="pt-2 text-center text-xs md:text-[11pt] font-normal text-[#9fa0a3]">
        Plan, Shop, and Save—Smarter Grocery Shopping with AI.
      </div>

      <div
        className="
          mx-5 md:mx-20 lg:mx-72
          py-8
          rounded-[15px]
          mt-10
          bg-neutral-950
          bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(21,128,61,0.3),rgba(255,255,255,0))]
        "
      >
        <div className="text-center font-thin text-xl text-white">
          What can <span className="font-normal text-[#01AC66]">freshly</span>{" "}
          do for you?
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 mt-2 px-6 mb-12">
          {/* Left Column */}
          <motion.div
            className="flex flex-col items-center text-center text-white p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <FiClock size={40} className="text-[#01AC66] mb-3" />
            <div className="text-lg md:text-2xl font-light">
              Save Time &amp; Money
            </div>
            <div className="text-gray-300 font-light mt-2 max-w-md text-sm">
              The AI-powered app automates meal planning, creates smart shopping
              lists, and compares prices to simplify grocery shopping and cut
              costs.
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="flex flex-col items-center text-center text-white p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <FiShoppingCart size={40} className="text-[#01AC66] mb-3" />
            <div className="text-lg md:text-2xl font-light">
              Personalized Shopping
            </div>
            <div className="text-gray-300 font-light mt-2 max-w-md text-sm">
              Get tailored recipes, track pantry items, reduce waste, and choose
              eco-friendly options for smarter, healthier shopping.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
