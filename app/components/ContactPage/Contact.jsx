"use client";

import { Mail, Phone, Users, Utensils, MessageSquare } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-grid-black">
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/70 to-white" />
        
        <div className="container mx-auto px-6 py-20 relative">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Brand Info Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-200 p-10">
              {/* Logo */}
              <div className="flex justify-center mb-12">
                <img
                  src="/freshly-icon-square.png"
                  alt="Freshly Logo"
                  className="w-40 h-40 object-contain"
                />
              </div>

              {/* Main Content */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#01AC66] mb-4">
                  Contact Us!
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Have questions or feedback? We'd love to hear from you.
                </p>
              </div>
              
              {/* Features */}
              <div className="grid grid-cols-3 gap-6">
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

            {/* Contact Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-200 p-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#01AC66] mb-4">
                  Contact Us!
                </h2>
                <p className="text-gray-600 text-lg">
                  Have questions or feedback? We'd love to hear from you.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                <div className="bg-gradient-to-r from-[#e9ffe9] via-white to-[#e9ffe9] border border-[#01AC66]/30 rounded-2xl p-6 shadow-lg flex items-center space-x-4">
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

                <div className="bg-gradient-to-r from-[#fff6e9] via-white to-[#fff6e9] border border-[#FD8100]/30 rounded-2xl p-6 shadow-lg flex items-center space-x-4">
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

              {/* Quick Message Form */}
              <div>
                <h3 className="text-2xl font-semibold text-[#01AC66] mb-6 text-center">
                  Send Us a Message
                </h3>
                <div className="bg-gradient-to-br from-white via-[#f0fdf4] to-[#e9ffe9] border border-[#01AC66]/30 rounded-3xl p-10 shadow-lg">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
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
                      className="w-full bg-[#FD8100] text-white rounded-xl py-3 text-lg font-semibold transition-colors hover:bg-[#e67600]"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section with Gradient */}
      <section className="bg-gradient-to-t from-black via-black to-emerald-900/90 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent" />
        <div className="container mx-auto px-4 py-16 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">
              Join Our Mission
            </h2>
            <p className="text-center text-gray-300 mb-8">
              Help us revolutionize the way people shop for groceries and make healthy eating accessible to everyone.
            </p>
            <div className="flex justify-center">
              <button className="bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors">
                Join Waitlist Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
