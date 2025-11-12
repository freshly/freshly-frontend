"use client";
import React from "react";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight, Check } from "lucide-react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function WaitlistForm({
  email,
  onEmailChange,
  onSubmit,
  isLoading,
  isSubmitted,
}) {
  if (isSubmitted) {
    return (
      <div
        className={`${inter.className} max-w-md mx-auto text-center space-y-4 sm:space-y-6 px-4`}
      >
        <div className="bg-primary/10 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto">
          <Check className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-light text-white">
          You're on the list!
        </h3>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          We'll notify you as soon as we launch. Thank you for your interest!
        </p>
      </div>
    );
  }

  return (
    <div className={`${inter.className} max-w-md mx-auto space-y-5 sm:space-y-6 px-4`}>
      <div className="text-center space-y-3 sm:space-y-4">
        <div className="bg-primary/10 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto">
          <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white pb-3 sm:pb-5">
          Join the Waitlist
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed px-2 sm:px-0">
          Be the first to know when we launch. Get early access and exclusive
          updates.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="relative">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={onEmailChange}
            required
            className="
              pr-20 sm:pr-24 h-11 sm:h-12 text-sm sm:text-base text-white 
              placeholder-gray-400 bg-transparent
              border border-gray-600 focus:border-primary focus:ring-0 
              rounded-lg
            "
          />
          <Button
            type="submit"
            disabled={!email || isLoading}
            variant="outline"
            size="lg"
            className="absolute right-1 top-1 h-9 sm:h-10 px-3 sm:px-4 
              !text-white hover:!text-white text-sm sm:text-base
              border-white bg-transparent hover:bg-[rgba(21,128,61,0.3)]
              transition-all duration-200"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span className="!text-white">Join</span>
                <ArrowRight className="w-4 h-4 ml-1 !text-white" />
              </>
            )}
          </Button>
        </div>
      </form>

      <p className="text-xs sm:text-sm text-gray-400 text-center px-2">
        No spam, ever. We respect your privacy.
      </p>
    </div>
  );
}