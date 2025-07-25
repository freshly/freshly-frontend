"use client";

import { Mail, Phone, Users, Utensils, MessageSquare } from "lucide-react";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400"], // extra-light, light, regular
  display: "swap",
});

const ContactPage = () => {
  return (
    <div className={`min-h-screen bg-white ${inter.className}`}>
      <div className="relative bg-grid-black">
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/70 to-white" />

        <div className="container mx-auto px-6 py-20 relative">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Brand Info Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-200 p-10">
              {/* Logo */}
              <div className="flex justify-center mb-12">
                <img
                  src="/favicon.png"
                  alt="Freshly Logo"
                  className="w-24 h-24 object-contain"
                />
              </div>

              {/* Main Content */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-light text-[rgb(21,128,60)] mb-4">
                  Contact Us!
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Have questions or feedback? We'd love to hear from you.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-6 pb-10">
                <div className="text-center">
                  <div className="bg-[rgb(21,128,60)]/10 p-4 rounded-xl mb-3 mx-auto w-fit">
                    <Users className="h-8 w-8 text-[rgb(21,128,60)]" />
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
                  <div className="bg-[rgb(21,128,60)]/10 p-4 rounded-xl mb-3 mx-auto w-fit">
                    <MessageSquare className="h-8 w-8 text-[rgb(21,128,60)]" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    Real Solutions
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gradient-to-r from-[#e9ffe9] via-white to-[#e9ffe9] border border-[rgb(21,128,60)]/30 rounded-2xl p-6 shadow-lg flex items-center space-x-4">
                  <div className="bg-[rgb(21,128,60)]/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-[rgb(21,128,60)]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a
                      href="mailto:dg@joinfreshly.com"
                      className="text-lg font-light text-[rgb(21,128,60)] hover:text-[#018f56] transition-colors"
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
                      className="text-lg font-light text-[#FD8100] hover:text-[#d96c00] transition-colors"
                    >
                      703-473-5256
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-200 p-10">
              {/* Quick Message Form */}
              <div>
                <h3 className="text-2xl font-light text-[rgb(21,128,60)] mb-6 text-center">
                  Send Us a Message
                </h3>
                <div
                  className="bg-gradient-to-br from-white via-[#f0fdf4] to-[#e9ffe9]
                  border border-[rgb(21,128,60)]/30 rounded-3xl p-10 shadow-lg"
                >
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="firstName"
                          className="text-sm font-medium text-[rgb(21,128,60)]"
                        >
                          First Name
                        </label>
                        <input
                          id="firstName"
                          placeholder="First name"
                          className="w-full bg-white/70 border-2 border-[rgb(21,128,60)]/50 
                          focus:border-[rgb(21,128,60)] focus:ring-2 focus:ring-[rgb(21,128,60)]/30 
                          px-4 py-3 rounded-lg outline-none transition-all shadow-sm font-light"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="lastName"
                          className="text-sm font-medium text-[rgb(21,128,60)]"
                        >
                          Last Name
                        </label>
                        <input
                          id="lastName"
                          placeholder="Last name"
                          className="w-full bg-white/70 border-2 border-[rgb(21,128,60)]/50
                          focus:border-[rgb(21,128,60)] focus:ring-2 focus:ring-[rgb(21,128,60)]/30
                          px-4 py-3 rounded-lg outline-none transition-all shadow-sm font-light"
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
                        className="w-full bg-white/70 border-2 border-[#FD8100]/50 
                        focus:border-[#FD8100] focus:ring-2 focus:ring-[#FD8100]/30 px-4 py-3 
                        rounded-lg outline-none transition-all shadow-sm font-light"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-[rgb(21,128,60)]"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        placeholder="Your message..."
                        rows={6}
                        className="w-full bg-white/70 border-2 border-[rgb(21,128,60)]/50
                        focus:border-[rgb(21,128,60)] focus:ring-2 focus:ring-[rgb(21,128,60)]/30
                        px-4 py-3 rounded-lg outline-none transition-all shadow-sm resize-none font-light"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#FD8100] text-white rounded-xl py-3 text-lg
                      font-light transition-colors hover:bg-[#e67600]"
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
      <section
        className="bg-neutral-950
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(21,128,61,0.3),rgba(255,255,255,0))] relative"
      >
        <div className="container mx-auto px-4 py-16 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light mb-8 text-center text-white">
              Join Our Mission
            </h2>
            <p className="text-center text-gray-300 mb-8">
              Help us revolutionize the way people shop for groceries and make
              healthy eating accessible to everyone.
            </p>
            <div className="flex justify-center">
              <div className="flex justify-center">
                <Button
                  className="h-12 text-neutral-300 placeholder-gray-400 bg-transparent border-1 
                border-gray-600 hover:border-none hover:bg-[rgba(21,128,61,0.3)]"
                >
                  Join Waitlist Now
                  <ArrowRight className="w-4 h-4 text-neutral-300" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
