"use client"

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
              Meet The <span className="text-[#00A86B] font-normal">Founders</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
              The minds behind the revolution in grocery shopping
            </p>
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
                          <span className="text-sm sm:text-base">david@joinfreshly.com</span>
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
                          <span className="text-sm sm:text-base">703-473-5256</span>
                        </motion.a>

                        <motion.a
                          href="https://instagram.com/davidgendyy"
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
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                          </div>
                          <span className="text-sm sm:text-base">@davidgendyy</span>
                        </motion.a>
                      </div>
                    </div>

                    <div className="pt-6 flex justify-center md:justify-start">
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-20 h-20"
                      >
                        <Image
                          src="/freshly-icon-square.png"
                          alt="Freshly Icon"
                          fill
                          style={{ objectFit: "contain" }}
                          className="opacity-80"
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="relative h-64 sm:h-80 md:h-full min-h-[400px] order-1 md:order-2">
                    <Image
                      src="/Aura .png"
                      alt="David Gendy - Founder of Freshly"
                      fill
                      style={{ objectFit: "cover" }}
                      className="hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#00A86B]/10 hover:bg-transparent transition-colors duration-300" />
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
                  <span className="inline-block px-3 py-1 bg-[#00A86B]/10 text-[#00A86B] text-sm font-medium rounded-full mb-4">
                    About
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 text-black">
                    A Bit About <span className="text-[#00A86B]">David</span>
                  </h2>
                </div>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  I'm a 19-year-old Coptic-Orthodox Egyptian American, born and
                  raised in the U.S. I'm currently pursuing a B.S. in Management
                  Information Systems at George Mason University with a minor in
                  Real Estate Development and Government Contracting. As a proud
                  and practicing Christian, I lead with a relationship-first
                  mindset—placing faith, family, and community at the heart of
                  everything I do. I've always carried the vision of building
                  something of my own, and that entrepreneurial drive is now
                  coming to life. My journey is just beginning, but every step is
                  driven by purpose, faith, and a relentless passion to create
                  impact.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-[#00A86B]">19</div>
                    <div className="text-xs text-gray-500">Age</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-[#FD8100]">GMU</div>
                    <div className="text-xs text-gray-500">University</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-[#00A86B]">MIS</div>
                    <div className="text-xs text-gray-500">Major</div>
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
                  <span className="inline-block px-3 py-1 bg-[#FD8100]/10 text-[#FD8100] text-sm font-medium rounded-full mb-4">
                    About
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 text-black">
                    A Bit About <span className="text-[#FD8100]">George</span>
                  </h2>
                </div>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  George's bio will be added here. This section will highlight his
                  background, expertise, and role as CTO & Co-Founder of Freshly.
                  His technical vision and leadership are instrumental in building
                  the innovative platform that powers Freshly's AI-driven grocery
                  shopping experience.
                </p>
                
                {/* Placeholder Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-[#FD8100]">CTO</div>
                    <div className="text-xs text-gray-500">Role</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-[#00A86B]">Tech</div>
                    <div className="text-xs text-gray-500">Focus</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-[#FD8100]">AI</div>
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
                        <p className="text-gray-400 text-sm">Photo Coming Soon</p>
                      </div>
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between">
                    <div>
                      <div className="mb-6">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-2 text-black">
                          George <span className="text-[#FD8100]">Abdallah</span>
                        </h2>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="inline-block px-3 py-1 bg-[#00A86B]/10 text-[#00A86B] text-sm font-medium rounded-full">
                            CTO & Co-Founder
                          </span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <motion.a
                          href="mailto:ga@joinfreshly.com"
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
                          <span className="text-sm sm:text-base">ga@joinfreshly.com</span>
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
                          <span className="text-sm sm:text-base">703-595-1334</span>
                        </motion.a>
                      </div>
                    </div>

                    <div className="pt-6 flex justify-center md:justify-start">
                      <motion.div
                        animate={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="relative w-20 h-20"
                      >
                        <Image
                          src="/freshly-icon-square.png"
                          alt="Freshly Icon"
                          fill
                          style={{ objectFit: "contain" }}
                          className="opacity-80"
                        />
                      </motion.div>
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
                  content: `Grocery shopping is way more stressful than it should be —
                    especially for people like me. As someone who's anemic, I
                    often feel drained and low on energy, so walking through
                    crowded stores, remembering what I need, and planning meals
                    becomes overwhelming fast. I'm not alone either — studies show
                    the average person spends over 6 hours a week just planning,
                    shopping, and prepping meals. That's time and energy many of
                    us don't have. Wasted food, forgotten items, and unhealthy
                    food choices pile up. It's a broken system, and I've felt the
                    effects of it personally. That's why I'm building something
                    better.`,
                },
                {
                  title: "Idea",
                  color: "text-[#00A86B]",
                  bgColor: "bg-[#00A86B]/10",
                  borderColor: "border-[#00A86B]/20",
                  icon: "💡",
                  content: `That's where Freshly comes in — my solution to the chaos of
                    grocery shopping. Freshly helps you track what you have, shows
                    you what to buy, suggests meals based on your diet, and even
                    compares prices to save you money. For people like me who deal
                    with low energy from anemia, it makes grocery shopping easier,
                    faster, and less overwhelming. It's all about saving time,
                    cutting waste, and making healthy eating simple.`,
                },
                {
                  title: "Solution",
                  color: "text-[#00A86B]",
                  bgColor: "bg-[#00A86B]/10",
                  borderColor: "border-[#00A86B]/20",
                  icon: "🚀",
                  content: `Freshly solves these everyday challenges through a seamless
                    app experience powered by smart technology. It automates
                    grocery planning, reduces decision fatigue, and brings clarity
                    to an otherwise chaotic process. With a clean interface and
                    real-time syncing, users can manage their meals and grocery
                    lists effortlessly from anywhere. The platform is designed to
                    support those with limited energy or tight schedules, helping
                    them stay organized and make better food choices with minimal
                    effort.`,
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
                    <h3 className={`text-xl sm:text-2xl md:text-3xl font-medium ${section.color}`}>
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
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
              <p className="text-gray-400 mb-6 text-lg">Ready to join our mission?</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#00A86B] text-white font-medium rounded-full hover:bg-[#00A86B]/90 transition-colors duration-300"
              >
                Get Started with Freshly
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;