"use client";
import React from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";

// Load Inter
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function FlowingCarousel() {
  const items = [
    { id: 1, name: "Beto", color: "bg-blue-500" },
    { id: 2, name: "Beto", color: "bg-green-500" },
    { id: 3, name: "Beto", color: "bg-purple-500" },
    { id: 4, name: "Beto", color: "bg-red-500" },
    { id: 5, name: "Beto", color: "bg-yellow-500" },
    { id: 6, name: "Beto", color: "bg-pink-500" },
    { id: 7, name: "Beto", color: "bg-indigo-500" },
    { id: 8, name: "Beto", color: "bg-orange-500" },
    { id: 9, name: "Beto", color: "bg-teal-500" },
    { id: 10, name: "Beto", color: "bg-cyan-500" },
  ];

  const duplicated = [...items, ...items];

  return (
    <div className={`${inter.className} bg-white`}>
      <div className="border-b-2 border-gray-300 opacity-75" />
      <div className="relative w-full overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 text-center my-8">
          <div className="text-2xl font-light">
            Trusted By Top Brands &amp; Platforms
          </div>
        </div>

        <motion.div
          className="inline-flex whitespace-nowrap pb-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {duplicated.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <div
                className={`${item.color} rounded-lg p-6 shadow-lg hover:shadow-xl 
                transition-shadow duration-300 min-w-[120px] h-16 flex items-center justify-center`}
              >
                <span className="text-white font-light text-sm">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* fade overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
        <div className="border-b-2 border-gray-300 opacity-75" />
      </div>
    </div>
  );
}
