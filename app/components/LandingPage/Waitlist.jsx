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
              Real People
              <br />
              <span className="font-light">Real Grocery Struggles</span>
            </h1>
            <p className="text-xl text-gray-300 mx-auto">
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
          {error && <p className="text-red-400 text-sm">{error}</p>}

          {/* Footer stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10">
            <div className="text-center space-y-2">
              <div className="text-2xl font-light text-white">1,000+</div>
              <div className="text-sm text-gray-400">People waiting</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-light text-white">Q1 2026</div>
              <div className="text-sm text-gray-400">Expected launch</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-light text-white">Early Access</div>
              <div className="text-sm text-gray-400">For waitlist members</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
