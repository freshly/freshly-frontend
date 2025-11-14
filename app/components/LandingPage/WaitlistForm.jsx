"use client";
import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight, Check, Sparkles, Shield, Bell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function WaitlistForm({
  email,
  onEmailChange,
  onSubmit,
  isLoading,
  isSubmitted,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  useEffect(() => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  }, [email]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className={`${inter.className} max-w-md mx-auto text-center space-y-6 px-4`}
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-[#00A86B]/20 backdrop-blur rounded-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mx-auto border border-[#00A86B]/30">
            <Check className="w-10 h-10 sm:w-12 sm:h-12 text-[#00A86B]" />
          </div>
          {/* Celebration particles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute inset-0"
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#00A86B] rounded-full"
                initial={{ x: 0, y: 0 }}
                animate={{
                  x: Math.cos((i * Math.PI) / 3) * 60,
                  y: Math.sin((i * Math.PI) / 3) * 60,
                  opacity: 0,
                }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            ))}
          </motion.div>
        </motion.div>

        <div className="space-y-3">
          <h3 className="text-2xl sm:text-3xl font-medium text-white">
            You're on the list!
          </h3>
          <p className="text-gray-400 leading-relaxed">
            We'll notify you as soon as we launch. Thank you for your interest!
          </p>
        </div>

        {/* Success badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-3"
        >
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
            <Bell className="w-3 h-3" />
            Email confirmed
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
            <Sparkles className="w-3 h-3" />
            Early access
          </span>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className={`${inter.className} max-w-xl mx-auto space-y-8 px-4`}
    >
      {/* Header Section */}
      <div className="text-center space-y-4">
        <motion.div
          variants={scaleIn}
          className="relative inline-block"
        >
          {/* Animated ring */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.2, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-[#00A86B]/20 rounded-full blur-xl"
          />
          
          {/* Icon container */}
          <div className="relative bg-white/5 backdrop-blur border border-white/10 rounded-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
            <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
          </div>
        </motion.div>

        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white">
            Join the <span className="text-[#00A86B] font-normal">Waitlist</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-md mx-auto">
            Be the first to experience the future of grocery shopping. Get early access and exclusive updates.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <form onSubmit={onSubmit} className="space-y-4">
        <motion.div
          whileTap={{ scale: 0.98 }}
          className="relative"
        >
          {/* Input Container */}
          <div className={`
            relative rounded-2xl transition-all duration-300
            ${isFocused ? 'ring-2 ring-[#00A86B]/50' : ''}
          `}>
            {/* Background gradient on focus */}
            <AnimatePresence>
              {isFocused && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-r from-[#00A86B]/10 to-[#FD8100]/10 rounded-2xl blur-xl"
                />
              )}
            </AnimatePresence>

            <div className="relative flex items-center">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={onEmailChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                required
                className={`
                  w-full h-14 sm:h-16 pl-5 pr-32 sm:pr-36 
                  text-base sm:text-lg text-white 
                  placeholder-gray-500 bg-white/5 backdrop-blur
                  border ${isFocused ? 'border-[#00A86B]/50' : 'border-white/10'}
                  focus:border-[#00A86B] focus:ring-0 
                  rounded-2xl transition-all duration-300
                  ${email && !isValidEmail ? 'border-red-500/50' : ''}
                `}
              />
              
              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-2"
              >
                <Button
                  type="submit"
                  disabled={!isValidEmail || isLoading}
                  className={`
                    h-10 sm:h-12 px-4 sm:px-6
                    rounded-xl font-medium
                    ${isValidEmail && !isLoading 
                      ? 'bg-[#00A86B] hover:bg-[#00A86B]/90 text-white' 
                      : 'bg-white/10 text-gray-500 cursor-not-allowed'}
                    transition-all duration-300
                    flex items-center gap-2
                  `}
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <span>Join Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Email validation indicator */}
          <AnimatePresence>
            {email && !isValidEmail && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-red-400 text-sm mt-2 ml-2"
              >
                Please enter a valid email address
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </form>

      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500"
      >
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#00A86B]" />
          <span>privacy guaranteed</span>
        </div>
        <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-[#FD8100]" />
          <span>Instant notifications</span>
        </div>
        <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#00A86B]" />
          <span>Exclusive perks</span>
        </div>
      </motion.div>
    </motion.div>
  );
}