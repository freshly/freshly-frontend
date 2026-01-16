"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start exit animation after loading completes
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2500);

    // Hide splash after exit animation
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 3200);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Logo and content container - slides in and out */}
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ y: -100, opacity: 0 }}
            animate={
              isExiting
                ? { y: -100, opacity: 0 }
                : { y: 0, opacity: 1 }
            }
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: isExiting ? 0 : 0.2,
            }}
          >
            <img src="/rl.png" alt="SAVR" className="h-24 sm:h-32 md:h-40" />
            <motion.span
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#00A86B]"
              initial={{ opacity: 0, y: 20 }}
              animate={
                isExiting
                  ? { opacity: 0, y: -20 }
                  : { opacity: 1, y: 0 }
              }
              transition={{ delay: isExiting ? 0 : 0.6, duration: 0.5 }}
            >
              SAVR
            </motion.span>

            {/* Loading bar */}
            <motion.div
              className="w-48 sm:w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden mt-6"
              initial={{ opacity: 0 }}
              animate={isExiting ? { opacity: 0 } : { opacity: 1 }}
              transition={{ delay: isExiting ? 0 : 0.8, duration: 0.3 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#00A86B] to-[#FD8100] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.5,
                  delay: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
