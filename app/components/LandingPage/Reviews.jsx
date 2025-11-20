// app/components/LandingPage/Reviews.jsx
"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import { Pause, Play } from "lucide-react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const reviews = [
  {
    id: 1,
    name: "Beto Ishak",
    title: "Beto with a B",
    img: "/pfp.jpg",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    id: 2,
    name: "Justin Saad",
    title: "CEO, Diabetes",
    img: "/pfp.jpg",
    text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.`,
  },
  {
    id: 3,
    name: "David Gendy",
    title: "CEO, SAVR",
    img: "/pfp.jpg",
    text: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.`,
  },
  {
    id: 4,
    name: "Neto Beto",
    title: "CTO, SAVR",
    img: "/pfp.jpg",
    text: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.`,
  },
  {
    id: 5,
    name: "Beto Freako",
    title: "CMO, SAVR",
    img: "/pfp.jpg",
    text: `On the other hand, we denounce with righteous indignation and dislike men who are so beguiled.`,
  },
];

export default function ReviewsCarousel() {
  const [playing, setPlaying] = useState(true);
  const feed = [...reviews, ...reviews];

  return (
    <div className={`${inter.className} bg-neutral-950 text-white py-16`}>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      {/* header */}
      <div className="border-white/25 mb-20 border-b rounded mx-20" />

      <div className="max-w-xl mx-auto text-center px-4">
        <h2 className="text-3xl font-light mb-2">What Our Users Are Saying</h2>
        <p className="text-gray-400 mb-6">
          Hear from those who have trusted with us.
        </p>
        <button
          onClick={() => setPlaying((v) => !v)}
          className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-md mb-12"
        >
          {playing ? <Pause size={20} /> : <Play size={20} />}
        </button>
      </div>

      {/* carousel */}
      <div className="relative overflow-hidden">
        {/* left fade mask */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent z-10" />
        {/* right fade mask */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent z-10" />

        <div
          className="inline-flex whitespace-nowrap space-x-6 px-8 relative z-0"
          style={{
            animation: "scroll 30s linear infinite",
            animationPlayState: playing ? "running" : "paused",
          }}
        >
          {feed.map((r, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-80 rounded-lg p-6 bg-white/10 backdrop-blur-md border border-white/20 text-white whitespace-normal"
            >
              <div className="flex items-center mb-4">
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="font-semibold">{r.name}</p>
                  <p className="text-sm text-gray-300">{r.title}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
