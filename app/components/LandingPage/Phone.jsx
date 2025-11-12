"use client";
import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Phone() {
  const handleWaitlistClick = useCallback((e) => {
    e.preventDefault();
    const el = document.getElementById("waitlist");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="relative z-10 flex justify-center items-start mt-[-80px] sm:mt-[-120px] md:mt-[-160px] lg:mt-[-200px] mb-[-120px] sm:mb-[-180px] md:mt-[-220px] lg:mb-[-289px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full px-3 sm:px-5">
      <div className="relative bg-transparent rounded-[20px] p-2 sm:p-3 md:p-4 lg:p-5 flex justify-center items-center">
        <img
          src="/ClearIphone.png"
          alt="Clear iPhone"
          className="relative z-10 w-[250px] sm:w-[320px] md:w-[400px] lg:w-[500px] max-w-[98%] h-auto object-contain"
        />
        
        <motion.div
          className="absolute top-[58%] left-[51%] -translate-x-1/2 -translate-y-1/2 
                     w-[120px] h-[36px] sm:w-[130px] sm:h-[40px] md:w-[140px] md:h-[42px] lg:w-[150px] lg:h-[45px]
                     rounded-[8px] sm:rounded-[9px] md:rounded-[10px] p-[2px] z-20
                     bg-[linear-gradient(270deg,#01AC66,#FFFFFF,#FD8100,#01AC66)]
                     bg-[length:300%_300%]"
          style={{ animation: "gradient 5s ease infinite" }}
        >
          <a
            href="#waitlist"
            onClick={handleWaitlistClick}
            className={`${inter.className} w-full h-full bg-white text-black border-none 
                        rounded-[6px] sm:rounded-[7px] md:rounded-[8px] cursor-pointer 
                        text-xs sm:text-sm md:text-base font-semibold
                        flex items-center justify-center p-0 tracking-[0.3px] sm:tracking-[0.4px] md:tracking-[0.5px] no-underline
                        hover:bg-gray-50 transition-colors duration-200`}
          >
            Join the Waitlist!
          </a>
        </motion.div>

        <style jsx>{`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}</style>
      </div>
    </div>
  );
}