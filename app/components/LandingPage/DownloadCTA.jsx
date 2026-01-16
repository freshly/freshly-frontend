"use client";

import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function DownloadCTA() {
  return (
    <div className={`${inter.className} relative py-20 px-4 sm:px-6`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
          Are you ready to revolutionize your
          <span className="bg-[#FD8100] bg-clip-text text-transparent">
            {" "}
            grocery shopping{" "}
          </span>
          and
          <span className="bg-[#00A86B] bg-clip-text text-transparent">
            {" "}
            meal planning{" "}
          </span>
          experience?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Join thousands of users who save time and money every week.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/download"
            className="px-8 py-4 bg-gradient-to-r from-[#FD8100] to-[#00A86B] text-white font-semibold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center"
          >
            Download
          </Link>
        </div>
      </div>
    </div>
  );
}

