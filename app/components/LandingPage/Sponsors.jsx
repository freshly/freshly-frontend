"use client";
import React from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";

// Load Inter
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Sponsors() {
  // Now each item has its own height in pixels
  const items = [
    { id: 1, src: "/costco.png", alt: "Costco", height: 48 },
    { id: 2, src: "/instacart.png", alt: "Instacart", height: 40 },
    { id: 3, src: "/walmart.png", alt: "Walmart", height: 48 },
    { id: 4, src: "/target.png", alt: "Target", height: 72 },
    { id: 5, src: "/hmart.png", alt: "Hmart", height: 32 },
    { id: 6, src: "/tjoes.png", alt: "Trader Joe's", height: 32 },
    { id: 7, src: "/wfoods.png", alt: "Whole Foods", height: 64 },
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
              key={`${item.id}-${i}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <div className="min-w-[120px] flex items-center justify-center p-2">
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{ height: `${item.height}px` }}
                  className="w-auto object-contain"
                />
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
