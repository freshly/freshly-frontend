"use client";

import { Mail, Phone, Users, Utensils, MessageSquare } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="min-h-screen py-20 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:2rem_3rem]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Left Side - Brand Info */}
          <div className="space-y-8 bg-white/90 rounded-2xl shadow-lg p-10">
            {/* Logo and Tagline */}
            <div className="flex items-center space-x-4">
              <img
                src="/freshly-icon-square.png"
                alt="Freshly Logo"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h1 className="text-4xl font-bold text-[#01AC66]">freshly</h1>
                <p className="text-[#01AC66] text-lg font-semibold">
                  Your Fresh Food Partner
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-[#FD8100] mb-2">
                  Real People.
                </h2>
                <h2 className="text-3xl font-bold text-[#01AC66] mb-4">
                  Real Grocery Struggles.
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Help us help you on the issues of{" "}
                  <span className="text-[#01AC66] font-semibold underline decoration-wavy decoration-[#01AC66]/50">
                    grocery shopping!
                  </span>
                </p>
              </div>

   
            </div>
            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-[#01AC66]/10 p-4 rounded-xl mb-3 mx-auto w-fit">
                  <Users className="h-8 w-8 text-[#01AC66]" />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Real People
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#FD8100]/10 p-4 rounded-xl mb-3 mx-auto w-fit">
                  <Utensils className="h-8 w-8 text-[#FD8100]" />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Fresh Food
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#01AC66]/10 p-4 rounded-xl mb-3 mx-auto w-fit">
                  <MessageSquare className="h-8 w-8 text-[#01AC66]" />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Real Solutions
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Section */}
          <div className="space-y-8 bg-white/90 rounded-2xl shadow-lg p-10">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#01AC66] mb-4">
                Contact Us!
              </h2>
              <p className="text-gray-600 text-lg">
                Have questions or feedback? We'd love to hear from you.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-[#e9ffe9] via-white to-[#e9ffe9] border-2 border-[#01AC66]/30 rounded-2xl p-6 shadow-xl flex items-center space-x-4">
                <div className="bg-[#01AC66]/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-[#01AC66]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a
                    href="mailto:dg@joinfreshly.com"
                    className="text-lg font-semibold text-[#01AC66] hover:text-[#018f56] transition-colors"
                  >
                    dg@joinfreshly.com
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#fff6e9] via-white to-[#fff6e9] border-2 border-[#FD8100]/30 rounded-2xl p-6 shadow-xl flex items-center space-x-4">
                <div className="bg-[#FD8100]/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-[#FD8100]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a
                    href="tel:703-473-5256"
                    className="text-lg font-semibold text-[#FD8100] hover:text-[#d96c00] transition-colors"
                  >
                    703-473-5256
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Message Form - Updated & Larger */}
            <div className="pt-4">
              <h3 className="text-2xl font-semibold text-[#01AC66] mb-4">
                Message
              </h3>
              <div className="bg-gradient-to-br from-white via-[#f0fdf4] to-[#e9ffe9] border-2 border-[#01AC66]/30 rounded-3xl p-10 shadow-xl">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-medium text-[#01AC66]"
                      >
                        First Name
                      </label>
                      <input
                        id="firstName"
                        placeholder="First name"
                        className="w-full bg-white/70 border-2 border-[#01AC66]/50 focus:border-[#01AC66] focus:ring-2 focus:ring-[#01AC66]/30 px-4 py-3 rounded-lg outline-none transition-all shadow-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="lastName"
                        className="text-sm font-medium text-[#01AC66]"
                      >
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        placeholder="Last name"
                        className="w-full bg-white/70 border-2 border-[#01AC66]/50 focus:border-[#01AC66] focus:ring-2 focus:ring-[#01AC66]/30 px-4 py-3 rounded-lg outline-none transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-[#FD8100]"
                    >
                      Email <span className="text-[#FD8100]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-white/70 border-2 border-[#FD8100]/50 focus:border-[#FD8100] focus:ring-2 focus:ring-[#FD8100]/30 px-4 py-3 rounded-lg outline-none transition-all shadow-sm"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-[#01AC66]"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Your message..."
                      rows={6}
                      className="w-full bg-white/70 border-2 border-[#01AC66]/50 focus:border-[#01AC66] focus:ring-2 focus:ring-[#01AC66]/30 px-4 py-3 rounded-lg outline-none transition-all shadow-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full backdrop-blur-md bg-[#FD8100]/90 border border-[#FD8100]/30 shadow-lg text-white rounded-xl py-3 text-lg font-semibold transition hover:bg-[#fd8100] hover:shadow-2xl hover:border-white/50"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
