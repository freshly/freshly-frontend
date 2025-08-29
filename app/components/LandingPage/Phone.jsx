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
    <div className="relative z-10 flex justify-center items-start mt-[-200px] mb-[-289px] h-[600px] w-full px-5">
      <div className="relative bg-transparent rounded-[20px] p-5 flex justify-center items-center">
        <img
          src="/ClearIphone.png"
          alt="Clear iPhone"
          className="relative z-10 w-[500px] max-w-[98%] h-auto object-contain"
        />

        <motion.div
          className="absolute top-[58%] left-[51%] -translate-x-1/2 -translate-y-1/2 
                     w-[150px] h-[45px] rounded-[10px] p-[2px] z-20
                     bg-[linear-gradient(270deg,#01AC66,#FFFFFF,#FD8100,#01AC66)]
                     bg-[length:300%_300%]"
          style={{ animation: "gradient 5s ease infinite" }}
        >
          <a
            href="#waitlist"
            onClick={handleWaitlistClick}
            className={`${inter.className} w-full h-full bg-white text-black border-none 
                        rounded-[8px] cursor-pointer text-base font-semibold
                        flex items-center justify-center p-0 tracking-[0.5px] no-underline`}
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

