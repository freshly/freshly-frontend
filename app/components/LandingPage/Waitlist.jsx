"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import WaitlistForm from "./WaitlistForm";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  display: "swap",
});

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const API_BASE = "http://localhost:8000";

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/waitlist/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error(await res.text());
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("Unable to join the waitlist. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      id="waitlist"
      className={`
        ${inter.className}
        font-light relative py-10 h-screen w-screen bg-neutral-950
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(21,128,61,0.3),rgba(255,255,255,0))]
      `}
    >
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-4xl p-8 text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl tracking-tight text-white">
              Something Amazing
              <br />
              <span className="font-light">Coming Soon</span>
            </h1>
            <p className="text-xl text-gray-300 mx-auto">
              We're building the next generation platform that will transform
              how you work.
            </p>
          </div>

          {/* Form */}
          <WaitlistForm
            email={email}
            onEmailChange={handleEmailChange}
            onSubmit={handleSubmit}
            isLoading={isLoading}
            isSubmitted={isSubmitted}
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}

          {/* Footer stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10">
            <div className="text-center space-y-2">
              <div className="text-2xl font-light text-white">10,000+</div>
              <div className="text-sm text-gray-400">People waiting</div>
            </div>
<<<<<<< Updated upstream
            <div className="text-center space-y-2">
              <div className="text-2xl font-light text-white">Q1 2024</div>
              <div className="text-sm text-gray-400">Expected launch</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-light text-white">Early Access</div>
              <div className="text-sm text-gray-400">For waitlist members</div>
            </div>
          </div>
        </div>
=======
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
>>>>>>> Stashed changes
      </div>
    </div>
  );
}
