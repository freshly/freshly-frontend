"use client";
import React from "react";
import WaitlistForm from "./WaitlistForm";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400"], // extra-light, light, regular
  display: "swap",
});

export default function Waitlist() {
  return (
    <div
      className={`
        ${inter.className}
        font-light relative py-10 h-screen w-screen bg-neutral-950
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(21,128,61,0.3),rgba(255,255,255,0))]
      `}
    >
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-4xl p-8">
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl tracking-tight text-white">
                Something Amazing
                <br />
                <span className="text-white font-light">Coming Soon</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We're building the next generation platform that will transform
                how you work. Join thousands of others waiting for early access.
              </p>
            </div>

            <WaitlistForm />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10">
              <div className="text-center space-y-2">
                <div className="text-2xl font-light text-white">10,000+</div>
                <div className="text-sm text-gray-400">People waiting</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-light text-white">Q1 2024</div>
                <div className="text-sm text-gray-400">Expected launch</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-light text-white">
                  Early Access
                </div>
                <div className="text-sm text-gray-400">
                  For waitlist members
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
