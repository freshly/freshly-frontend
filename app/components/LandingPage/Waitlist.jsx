"use client";
import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Users, Calendar, Zap, TrendingUp, Sparkles } from "lucide-react";
import WaitlistForm from "./WaitlistForm";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
});

const WAITLIST_STORAGE_KEY = "waitlistUser";

export default function Waitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [storedSignup, setStoredSignup] = useState(null);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;

    try {
      const stored = window.localStorage.getItem(WAITLIST_STORAGE_KEY);
      if (!stored) return;
      const parsed = JSON.parse(stored);
      if (parsed?.name && parsed?.email) {
        setStoredSignup(parsed);
        setIsSubmitted(true);
      }
    } catch (err) {
      console.error("Failed to read waitlist user from localStorage", err);
    }
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setError(null);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const trimmedName = name.trim();
    const normalizedEmail = email.trim().toLowerCase();

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmedName, email: normalizedEmail }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) {
        throw new Error(data?.error || "Unable to join the waitlist. Please try again.");
      }
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          WAITLIST_STORAGE_KEY,
          JSON.stringify({
            name: trimmedName,
            email: normalizedEmail,
            joinedAt: new Date().toISOString(),
          })
        );
      }
      setStoredSignup({
        name: trimmedName,
        email: normalizedEmail,
      });
      setIsSubmitted(true);
      setName("");
      setEmail("");
    } catch (err) {
      console.error(err);
      setError(err.message || "Unable to join the waitlist. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const stats = [
    {
      icon: Users,
      number: "5,000+",
      label: "People waiting",
      color: "from-[#00A86B] to-[#00A86B]/60",
      delay: 0,
    },
    {
      icon: Calendar,
      number: "Q4 2025",
      label: "Expected launch",
      color: "from-[#00A86B] to-[#FD8100]",
      delay: 0.1,
    },
    {
      icon: Zap,
      number: "Early Access",
      label: "For waitlist members",
      color: "from-[#FD8100] to-[#FD8100]/60",
      delay: 0.2,
    },
  ];

  if (!mounted) return null;

  return (
    <div
      id="waitlist"
      className={`${inter.className} relative min-h-screen w-full bg-black overflow-hidden`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#00A86B20_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#FD810020_0%,transparent_50%)]" />
        
        {/* Animated orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-[#00A86B] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-[#FD8100] rounded-full blur-3xl"
        />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {mounted && [...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="w-full max-w-5xl text-center space-y-8 sm:space-y-10 lg:space-y-12"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="space-y-6">
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-[#00A86B]" />
              <span className="text-sm font-medium text-white">Limited Early Access</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-white leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="block text-[#00A86B] font-medium"
              >
                Real People
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="block font-light mt-2"
              >
                Real Grocery Struggles
              </motion.span>
            </h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mx-auto max-w-2xl"
            >
              Help us help you revolutionize the way you shop for groceries!
            </motion.p>
          </motion.div>

          {/* Form Container */}
          <motion.div
            variants={fadeInUp}
            className="relative"
          >
            {/* Success Overlay */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 z-20 flex items-center justify-center"
                >
                  <div className="bg-black/90 backdrop-blur-xl rounded-3xl p-8 border border-[#00A86B]/30 shadow-2xl max-w-md w-full">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="w-16 h-16 bg-[#00A86B]/20 rounded-full mx-auto mb-6 flex items-center justify-center"
                    >
                      <CheckCircle className="w-8 h-8 text-[#00A86B]" />
                    </motion.div>
                    <h3 className="text-2xl font-medium text-white mb-3">
                      You're on the list!
                    </h3>
                    <p className="text-gray-400 mb-6">
                      {storedSignup?.email
                        ? `We'll notify ${storedSignup.email} as soon as early access opens.`
                        : "We'll notify you as soon as early access opens."}
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setName("");
                        setEmail("");
                      }}
                      className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-300"
                    >
                      Join Another Email
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            <div className={isSubmitted ? "opacity-20 pointer-events-none" : ""}>
              <WaitlistForm
                name={name}
                email={email}
                onNameChange={handleNameChange}
                onEmailChange={handleEmailChange}
                onSubmit={handleSubmit}
                isLoading={isLoading}
                isSubmitted={false}
              />
            </div>
          </motion.div>

          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-400 text-sm sm:text-base"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Stats Section */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 lg:gap-6 pt-6 sm:pt-8 lg:pt-10"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -5, scale: 1.05 }}
                onHoverStart={() => setHoveredStat(index)}
                onHoverEnd={() => setHoveredStat(null)}
                className="relative group"
              >
                <div className="relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  {/* Icon */}
                  <motion.div
                    animate={{
                      rotate: hoveredStat === index ? 360 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 mx-auto w-fit"
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} bg-opacity-20`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>

                  {/* Number */}
                  <div className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-2">
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm sm:text-base text-gray-400">
                    {stat.label}
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}

        </motion.div>
      </div>
    </div>
  );
}
