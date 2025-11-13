"use client";
import React from "react";
import Image from "next/image";
import FreshlyIcon from "../../../public/freshly-icon-square.png";
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
          mx-5 md:mx-20 lg:mx-72 py-8 rounded-[15px] mt-10 bg-neutral-950
          bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(21,128,61,0.3),rgba(255,255,255,0))]
        "
      >
        <div className="text-center font-thin text-xl text-white">
          What can <span className="font-normal text-[#01AC66]">freshly</span>{" "}
          do for you?
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 mt-2 px-6 mb-6 lg:mb-12">
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

<<<<<<< Updated upstream
          {/* Right Column */}
=======
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
            <div className="relative bg-black rounded-[18px] overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00A86B]/20 via-transparent to-[#FD8100]/20" />
                {ORBITAL_CIRCLES.map(({ left, top }, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-32 h-32 border border-white/5 rounded-full"
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
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                                       Grocery shopping & meal planning today is...
                  </h2>
                </motion.div>


                {/* Enhanced Two Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-10">
                  {/* Time Consuming Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group relative"
                  >
                    {/* Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00A86B]/50 to-[#00A86B]/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300">
                      {/* Icon Container */}
                      <div className="flex justify-center mb-4">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="relative"
                        >
                          <div className="absolute inset-0 bg-[#00A86B]/20 rounded-full blur-xl" />
                          <div className="relative bg-black/50 p-4 rounded-full border border-[#00A86B]/30">
                            <FiClock className="w-8 h-8 sm:w-10 sm:h-10 text-[#00A86B]" />
                          </div>
                        </motion.div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center mb-3">
                        Time Consuming & Disorganized
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm sm:text-base md:text-lg text-center leading-relaxed">
                        Hours wasted deciding what to cook and what to buy. Forgotten
                        items, duplicate purchases, and messy lists. Constantly juggling
                        recipes, preferences, and pantry leftovers.
                      </p>

                      {/* Stats */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                        className="mt-4 pt-4 border-t border-white/10"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <FiTrendingDown className="w-4 h-4 text-red-400" />
                          <span className="text-sm text-gray-400">
                            Average: <span className="text-red-400 font-semibold">3+ hours/week</span> wasted
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Wasteful Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group relative"
                  >
                    {/* Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FD8100]/0 to-[#FD8100]/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300">
                      {/* Icon Container */}
                      <div className="flex justify-center mb-4">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="relative"
                        >
                          <div className="absolute inset-0 bg-[#FD8100]/20 rounded-full blur-xl" />
                          <div className="relative bg-black/50 p-4 rounded-full border border-[#FD8100]/30">
                            <FiShoppingCart className="w-8 h-8 sm:w-10 sm:h-10 text-[#FD8100]" />
                          </div>
                        </motion.div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center mb-3">
                        Wasteful & Stressful
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm sm:text-base md:text-lg text-center leading-relaxed">
                        Up to 30% of groceries end up in the trash each week. Overbuying
                        and unused ingredients drain your budget. The entire process feels
                        repetitive, tiring, and frustrating.
                      </p>

                      {/* Stats */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3, duration: 0.6 }}
                        className="mt-4 pt-4 border-t border-white/10"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <FiAlertCircle className="w-4 h-4 text-orange-400" />
                          <span className="text-sm text-gray-400">
                            Average: <span className="text-orange-400 font-semibold">$1,500/year</span> wasted
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  className="mt-10 text-center"
                >
                  <p className="text-gray-400 mb-6 text-lg">
                    It's time to transform your grocery experience
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-[#00A86B] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Discover the Solution →
                  </motion.button>
                </motion.div>
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
>>>>>>> Stashed changes
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
