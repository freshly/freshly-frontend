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
        className={`${inter.className} max-w-md mx-auto text-center space-y-6`}
      >
        <div className="bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-light text-white">You're on the list!</h3>
        <p className="text-gray-300">
          We'll notify you as soon as we launch. Thank you for your interest!
        </p>
      </div>
    );
  }

  return (
    <div className={`${inter.className} max-w-md mx-auto space-y-6`}>
      <div className="text-center space-y-2">
        <div className="bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <Mail className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-light text-white pb-5">
          Join the Waitlist
        </h2>
        <p className="text-gray-300">
          Be the first to know when we launch. Get early access and exclusive
          updates.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="relative">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={onEmailChange}
            required
            className="
              pr-24 h-12 text-white placeholder-gray-400 bg-transparent
              border border-gray-600 focus:border-primary focus:ring-0 
            "
          />
          <Button
            type="submit"
            disabled={!email || isLoading}
            variant="outline"
            size="sm"
            className="absolute right-1 top-1 h-10 px-4 !text-white hover:!text-white
              border-white bg-transparent hover:bg-[rgba(21,128,61,0.3)]"
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

      <p className="text-xs text-gray-400 text-center">
        No spam, ever. We respect your privacy.
      </p>
    </div>
  );
}
