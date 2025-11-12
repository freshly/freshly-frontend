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
        font-light relative py-10 sm:py-12 md:py-16 min-h-screen w-full bg-neutral-950
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(21,128,61,0.3),rgba(255,255,255,0))]
      `}
    >
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-5xl p-4 sm:p-6 md:p-8 text-center space-y-8 sm:space-y-10 md:space-y-12">
          {/* Header */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-white leading-tight">
              Real People
              <br />
              <span className="font-light">Real Grocery Struggles</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mx-auto max-w-2xl px-4">
              Help us help you on the issues of grocery shopping!
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

          {error && (
            <p className="text-red-400 text-sm sm:text-base">{error}</p>
          )}

          {/* Footer stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 md:gap-6 pt-6 sm:pt-8 md:pt-10">
            <div className="text-center space-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-light text-white">
                5,000+
              </div>
              <div className="text-base sm:text-lg md:text-xl text-gray-400">
                People waiting
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-light text-white">
                EOY 2025
              </div>
              <div className="text-base sm:text-lg md:text-xl text-gray-400">
                Expected launch
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-light text-white">
                Early Access
              </div>
              <div className="text-base sm:text-lg md:text-xl text-gray-400">
                For waitlist members
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}