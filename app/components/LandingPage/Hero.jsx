"use client";
import Image from "next/image";
import FreshlyIcon from "../../../public/freshly-icon-square.png";
import { Baloo_2 } from "next/font/google";
import Phone3D from "./Phone";
import { FiClock, FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion";

const baloo2 = Baloo_2({
  subsets: ["latin"],
  display: "swap",
});

export default function Hero() {
  return (
    <div className="relative">
      <div className="pt-10 md:pt-20 relative font-light justify-center flex">
        <Image
          src={FreshlyIcon}
          alt="Freshly Icon"
          className="w-[125px] h-[125px] md:w-[200px] md:h-[200px]"
        />
      </div>
      <div
        className={`pt-2 text-center text-xs md:text-[11pt] text-[#9fa0a3] font-light ${baloo2.variable}`}
      >
        Plan, Shop, and Save—Smarter Grocery Shopping with AI.
      </div>

      {/* <Phone3D /> */}

      <div className="bg-gradient-to-br from-[#111111] via-[#111111] to-[#01673c] mx-5 md:mx-20 lg:mx-72 py-8 rounded-[15px] mt-10 opacity-90">
        <div
          className={`text-center font-semibold text-xl text-white ${baloo2.variable}`}
        >
          What can <span className="text-[#01AC66]">freshly</span> do for you?
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 mt-2 px-6">
          {/* Left Column */}
          <motion.div
            className="flex flex-col items-center text-center text-white p-6 rounded-lg"
            whileHover={{ scale: 1.05 }} // Slight zoom-in effect on hover
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <FiClock size={40} className="text-green-400 mb-3" />
            <div className="text-lg md:text-2xl font-semibold">
              Save Time & Money
            </div>
            <div className="text-gray-300 mt-2 max-w-md text-sm">
              The AI-powered app automates meal planning, creates smart shopping
              lists, and compares prices to simplify grocery shopping and cut
              costs.
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="flex flex-col items-center text-center text-white p-6 rounded-lg"
            whileHover={{ scale: 1.05 }} // Same zoom-in effect on hover
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <FiShoppingCart size={40} className="text-green-400 mb-3" />
            <div className="text-lg md:text-2xl font-semibold">
              Personalized Shopping
            </div>
            <div className="text-gray-300 mt-2 max-w-md text-sm">
              Get tailored recipes, track pantry items, reduce waste, and choose
              eco-friendly options for smarter, healthier shopping.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
