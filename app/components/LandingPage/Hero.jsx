"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import lgo from "../../../public/lgo.png";
import rl from "../../../public/rl.png";
import { Inter } from "next/font/google";
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
      </motion.div>

    </div>
  );
}
