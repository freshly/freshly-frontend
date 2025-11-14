"use client";

import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
});

const AboutPage = () => {
  const controls = useAnimation();
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
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

  return (
    <main className={`${inter.className} min-h-screen bg-white`}>
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00A86B08_0%,transparent_70%)]" />
      </div>

      {/* Hero Section */}
      <section className="relative w-full px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Animated Header */}
          <motion.div
            ref={headerRef}
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[2px] bg-[#00A86B] max-w-[100px] mx-auto mb-6"
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 font-light text-black">
              Meet The{" "}
              <span className="text-[#00A86B] font-normal">Founders</span>
            </h1>
          </motion.div>

          {/* David Gendy - Founder Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full mb-16 sm:mb-20 md:mb-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
              {/* Main Card */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  {/* Info Section */}
                  <div className="p-6 sm:p-8 lg:p-10 xl:p-12 order-2 md:order-1 flex flex-col justify-between">
                    <div>
                      <div className="mb-6">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-2 text-black">
                          David <span className="text-[#00A86B]">Gendy</span>
                        </h2>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="inline-block px-3 py-1 bg-[#FD8100]/10 text-[#FD8100] text-sm font-medium rounded-full">
                            CEO & Founder
                          </span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <motion.a
                          href="mailto:david@joinfreshly.com"
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-3 text-gray-600 hover:text-[#00A86B] transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-full bg-[#00A86B]/10 flex items-center justify-center group-hover:bg-[#00A86B]/20 transition-colors">
                            <svg
                              className="w-5 h-5 text-[#00A86B]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <span className="text-sm sm:text-base">
                            david@joinfreshly.com
                          </span>
                        </motion.a>

                        <motion.a
                          href="tel:703-473-5256"
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-3 text-gray-600 hover:text-[#00A86B] transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-full bg-[#00A86B]/10 flex items-center justify-center group-hover:bg-[#00A86B]/20 transition-colors">
                            <svg
                              className="w-5 h-5 text-[#00A86B]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                          </div>
                          <span className="text-sm sm:text-base">
                            703-473-5256
                          </span>
                        </motion.a>

                        <motion.a
                          href="https://www.linkedin.com/in/davidgendy/"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-3 text-gray-600 hover:text-[#00A86B] transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-full bg-[#00A86B]/10 flex items-center justify-center group-hover:bg-[#00A86B]/20 transition-colors">
                            <svg
                              className="w-5 h-5 text-[#00A86B]"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M4.98 3.5C4.98 5 3.9 6 2.5 6S0 5 0 3.5 1.08 1 2.5 1s2.48 1 2.48 2.5zM.24 8h4.52v14H.24V8zM8.75 8h4.33v1.92h.06c.6-1.14 2.06-2.35 4.24-2.35 4.53 0 5.37 2.98 5.37 6.85V22h-4.52v-6.45c0-1.54-.03-3.52-2.15-3.52-2.15 0-2.48 1.67-2.48 3.4V22H8.75V8z" />
                            </svg>
                          </div>
                          <span className="text-sm sm:text-base">
                            David-Gendy
                          </span>
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div
                    className="relative order-1 md:order-2 overflow-hidden group"
                    style={{ aspectRatio: "3168 / 4752", minHeight: "400px" }}
                  >
                    <Image
                      src="/Aura .png"
                      alt="David Gendy - Founder of Freshly"
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Bio Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 lg:p-10 xl:p-12 border border-gray-100"
              >
                <div className="mb-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 text-black">
                    A Bit About <span className="text-[#00A86B]">David</span>
                  </h2>
                </div>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  I’m a 19-year-old Coptic-Orthodox Egyptian American, born and
                  raised in the U.S.. I'm currently pursuing a B.S. in business
                  with a double concentration in management information systems
                  & business analytics at George Mason University. I am planning
                  to pursue a masters degree in AI and Machine Learning post
                  undergrad. As a proud and practicing Christian, I lead with a
                  relationship-first mindset—placing faith, family, and
                  community at the heart of everything I do. I’ve always carried
                  the vision of building something of my own, and that
                  entrepreneurial drive is now coming to life. My journey is
                  just beginning, but every step is driven by purpose, faith,
                  and a relentless passion to create impact.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-[#00A86B]">
                      CEO
                    </div>
                    <div className="text-xs text-gray-500">Role</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-[#FD8100]">
                      Growth & Innovation
                    </div>
                    <div className="text-xs text-gray-500">Focus</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-[#00A86B]">
                      Marketing
                    </div>
                    <div className="text-xs text-gray-500">Expertise</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* George Abdallah - Co-Founder Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
              {/* Bio Card - Reversed Order on Desktop */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 lg:p-10 xl:p-12 border border-gray-100 order-2 lg:order-1"
              >
                <div className="mb-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 text-black">
                    A Bit About <span className="text-[#FD8100]">George</span>
                  </h2>
                </div>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  I’m a 17-year-old Coptic Orthodox Egyptian and a junior at
                  Oakton High School with a strong passion for technology,
                  problem-solving, and building meaningful products. My
                  interests in sports, math, programming, and AI grew into a
                  desire to create tools that improve people’s lives. My faith
                  has always been a steady part of who I am, and being a
                  committed Christian shapes the way I work, lead, and make
                  decisions. As the CTO and Co-Founder of Freshly, I focus on
                  bringing technical vision, creativity, and leadership to a
                  platform built to transform the grocery-shopping experience
                  through AI. I’m driven by ambition, faith, purpose, and a
                  long-term goal of building a career rooted in innovation,
                  integrity, and impact.
                </p>

                {/* Placeholder Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-[#FD8100]">
                      CTO
                    </div>
                    <div className="text-xs text-gray-500">Role</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-[#00A86B]">
                      Tech
                    </div>
                    <div className="text-xs text-gray-500">Focus</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-[#FD8100]">
                      AI
                    </div>
                    <div className="text-xs text-gray-500">Expertise</div>
                  </div>
                </div>
              </motion.div>

              {/* Main Card */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100 order-1 lg:order-2"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  {/* Image Section */}
                  <div className="relative h-64 sm:h-80 md:h-full min-h-[400px] bg-gray-50">
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[#FD8100]/10 flex items-center justify-center">
                          <svg
                            className="w-16 h-16 text-[#FD8100]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-400 text-sm">
                          Photo Coming Soon
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between">
                    <div>
                      <div className="mb-6">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-2 text-black">
                          George{" "}
                          <span className="text-[#FD8100]">Abdallah</span>
                        </h2>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="inline-block px-3 py-1 bg-[#00A86B]/10 text-[#00A86B] text-sm font-medium rounded-full">
                            CTO & Co-Founder
                          </span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <motion.a
                          href="mailto:george@joinfreshly.com"
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-3 text-gray-600 hover:text-[#FD8100] transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-full bg-[#FD8100]/10 flex items-center justify-center group-hover:bg-[#FD8100]/20 transition-colors">
                            <svg
                              className="w-5 h-5 text-[#FD8100]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <span className="text-sm sm:text-base">
                            george@joinfreshly.com
                          </span>
                        </motion.a>

                        <motion.a
                          href="tel:703-595-1334"
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-3 text-gray-600 hover:text-[#FD8100] transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-full bg-[#FD8100]/10 flex items-center justify-center group-hover:bg-[#FD8100]/20 transition-colors">
                            <svg
                              className="w-5 h-5 text-[#FD8100]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                          </div>
                          <span className="text-sm sm:text-base">
                            703-595-1334
                          </span>
                        </motion.a>

                        <motion.a
                          href="https://www.linkedin.com/in/george-abdallah-226358397/"
                          target="_blank"
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-3 text-gray-600 hover:text-[#FD8100] transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-full bg-[#FD8100]/10 flex items-center justify-center group-hover:bg-[#FD8100]/20 transition-colors">
                            <svg
                              className="w-5 h-5 text-[#FD8100]"
                              fill="currentColor"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M4.98 3.5C4.98 5 3.9 6 2.5 6S0 5 0 3.5 1.08 1 2.5 1s2.48 1 2.48 2.5zM.24 8h4.52v14H.24V8zM8.75 8h4.33v1.92h.06c.6-1.14 2.06-2.35 4.24-2.35 4.53 0 5.37 2.98 5.37 6.85V22h-4.52v-6.45c0-1.54-.03-3.52-2.15-3.52-2.15 0-2.48 1.67-2.48 3.4V22H8.75V8z" />
                            </svg>
                          </div>
                          <span className="text-sm sm:text-base">
                            George-Abdallah
                          </span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 w-full bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00A86B15_0%,transparent_50%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="h-[2px] bg-[#00A86B] max-w-[100px] mx-auto mb-6"
              />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white">
                Turning <span className="text-[#FD8100]">Frustration</span> Into{" "}
                <span className="text-[#00A86B]">Innovation</span>
              </h2>
            </motion.div>

            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {[
                {
                  title: "Problem",
                  color: "text-[#FD8100]",
                  bgColor: "bg-[#FD8100]/10",
                  borderColor: "border-[#FD8100]/20",
                  icon: "🤔",
                  content: `
It was 2020, during the Covid lockdown. It was 3 A.M., I was 14, tired, hungry, and stuck at home. My parents couldn’t go out, groceries were running low, and I kept opening the fridge and pantry hoping something new would magically appear. There was food, I just didn’t know what to do with any of it.

That night, I made what I now call a “struggle meal”: two end pieces of bread, ketchup, mayo, and crushed potato chips in the middle. It looked miserable, but the first bite hit. And as I ate it, one thought kept circling in my mind: Why isn’t there something that can just tell me what I can make with what I already have? Something that understands culture, personal tastes, and how people actually eat.

Years later, talking with friends, I realized everyone felt the same way. Grocery shopping and meal planning are way more stressful than they should be. We walk through crowded stores trying to remember what we need, guessing what we’ll cook, and still end up wasting food or grabbing unhealthy options. On top of that, studies show we spend over six hours every week just planning, shopping, and prepping meals. Time and energy most of us don’t have!`,
                },
                {
                  title: "Idea",

                  color: "text-[#00A86B]",
                  bgColor: "bg-[#00A86B]/10",
                  borderColor: "border-[#00A86B]/20",
                  icon: "💡",
                  content: `After seeing how time consuming and disorganized the grocery process has become, our idea is to build one intelligent system that finally brings everything together. Instead of relying on scattered notes, half-functioning apps, and guesswork, we imagine a connected platform that understands our habits, keeps track of what’s in our kitchen, and helps us make smarter decisions every day.

We want to eliminate the chaos, reduce the hours spent planning meals, stop duplicate purchases, and help households cut down on weekly food waste. Current apps only solve small pieces of the journey; none address the full cycle of planning, tracking, organizing, and saving. Our idea fills that gap with an all-in-one approach that makes grocery shopping feel clear, structured, and effortless instead of stressful and repetitive.

At its core, the idea is simple: a smarter way for households to manage food. A unified system that helps us stay organized, spend less, waste less, and make grocery planning feel modern, efficient, and actually enjoyable.`,
                },
                {
                  title: "Solution",
                  color: "text-[#FD8100]",
                  bgColor: "bg-[#FD8100]/10",
                  borderColor: "border-[#FD8100]/20",
                  icon: "🚀",
                  content: `
Freshly solves these everyday challenges with a simple, seamless app that takes the stress out of planning and shopping. It cuts down decision fatigue by helping users know what meals they can make, what groceries they need, and what they already have at home. All in one clean, easy-to-use interface.

With smart features like pantry tracking, automatic grocery lists, and price comparison, Freshly brings clarity to a process that usually feels chaotic. The app updates in real time, so users always know what’s running low, what’s about to expire, and where they can save money. This prevents waste, stops duplicate purchases, and helps families stretch their budgets further.

Freshly is especially helpful for anyone with limited time, energy, or a packed schedule. With just a few taps, users can stay on top of meals, find affordable options, and keep their kitchens organized with almost no effort. It turns grocery shopping and meal planning into a smoother, simpler part of everyday life. Freshly helps you save time, save money, and make better food choices feel effortless.`,
                },
              ].map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${section.bgColor} ${section.borderColor} border rounded-2xl p-6 sm:p-8 md:p-10`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{section.icon}</span>
                    <h3
                      className={`text-xl sm:text-2xl md:text-3xl font-medium ${section.color}`}
                    >
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 sm:mt-16 text-center"
            >
              <p className="text-gray-400 mb-6 text-lg">
                Ready to join our mission?
              </p>
              <Link href="/#waitlist" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-[#00A86B] text-white font-medium rounded-full hover:bg-[#00A86B]/90 transition-colors duration-300"
                >
                  Get Started with Freshly
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
