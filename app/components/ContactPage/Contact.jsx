"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Mail,
  Phone,
  Users,
  Target,
  Sparkles,
  ArrowRight,
  Home,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Inter } from "next/font/google";
import { Button } from "../../../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
});

export default function ContactPage() {
  const router = useRouter();
  const API_BASE = "http://localhost:8000";

  // form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // UI state
  const [messageError, setMessageError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorToast, setErrorToast] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setMessageError("Please enter a message.");
      return;
    }

    setMessageError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first: firstName,
          last: lastName,
          email,
          message,
        }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail || "Failed to send message");
      }
      setSuccess(true);
    } catch (err) {
      setErrorToast(err.message || "Oops — something went wrong.");
      setTimeout(() => setErrorToast(""), 4000);
    } finally {
      setLoading(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Success Overlay
  if (success) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 15 }}
            className="bg-white rounded-3xl p-8 sm:p-10 max-w-sm w-full text-center space-y-6 shadow-2xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-[#00A86B]/10 rounded-full mx-auto flex items-center justify-center"
            >
              <CheckCircle className="w-10 h-10 text-[#00A86B]" />
            </motion.div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-black mb-2">
                Thank you!
              </h3>
              <p className="text-gray-600">
                Your message has been sent successfully.
              </p>
            </div>
            <Button
              onClick={() => router.push("/")}
              className="bg-[#00A86B] text-white px-8 py-3 rounded-full hover:bg-[#00A86B]/90 transition-all duration-300 font-medium"
            >
              Return Home
              <Home className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  if (!mounted) return null;

  return (
    <div className={`min-h-screen bg-white relative ${inter.className}`}>
      {/* Loading Spinner Overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/80"
          >
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-2xl sm:text-3xl text-[#00A86B] font-light text-center"
            >
              Sending Email
            </motion.p>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-3 border-[#00A86B] border-t-transparent rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#00A86B08_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#FD810008_0%,transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center mb-12 sm:mb-16"
            >
              <motion.div variants={fadeInUp} className="mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4">
                  Get in<span className="text-[#00A86B] font-normal">Touch</span>
                </h1>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
                  Have questions or feedback? We'd love to hear from you.
                </p>
              </motion.div>

              {/* Feature Cards */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12"
              >
                {[
                  {
                    icon: Users,
                    text: "Real People",
                    accent: "#00A86B",
                    gradient:
                      "linear-gradient(135deg, rgba(0,168,107,0.15), rgba(255,255,255,0.95))",
                    shadow: "0 15px 35px rgba(0,168,107,0.18)",
                  },
                  {
                    icon: Target,
                    text: "Real Problems",
                    accent: "#FD8100",
                    gradient:
                      "linear-gradient(135deg, rgba(253,129,0,0.18), rgba(255,255,255,0.95))",
                    shadow: "0 15px 35px rgba(253,129,0,0.2)",
                  },
                  {
                    icon: Sparkles,
                    text: "Real Solutions",
                    accent: "#00A86B",
                    gradient:
                      "linear-gradient(135deg, rgba(0,168,107,0.15), rgba(255,255,255,0.95))",
                    shadow: "0 15px 35px rgba(0,168,107,0.18)",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div
                      className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border"
                      style={{
                        background: item.gradient,
                        borderColor: `${item.accent}22`,
                        boxShadow: item.shadow,
                      }}
                    >
                      <item.icon
                        className="h-7 w-7"
                        style={{ color: item.accent }}
                      />
                    </div>
                    <p
                      className="text-base font-semibold text-center"
                      style={{ color: item.accent }}
                    >
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Contact Cards & Form Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Contact Info Column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-1 space-y-4"
              >
                {/* Email Card */}
                <motion.a
                  href="mailto:support@freshly.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-[#00A86B]/10 p-3 rounded-xl group-hover:bg-[#00A86B]/20 transition-colors">
                      <Mail className="h-6 w-6 text-[#00A86B]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-500 mb-1">Email Us</p>
                      <p className="text-[#00A86B] font-medium break-all">
                        support@joinfreshly.com
                      </p>
                    </div>
                  </div>
                </motion.a>

                {/* Phone Card */}
                <motion.a
                  href="tel:703-473-5256"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FD8100]/10 p-3 rounded-xl group-hover:bg-[#FD8100]/20 transition-colors">
                      <Phone className="h-6 w-6 text-[#FD8100]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 mb-1">Call Us</p>
                      <p className="text-[#FD8100] font-medium">703-473-5256</p>
                    </div>
                  </div>
                </motion.a>

                {/* Location Card */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-black/5 p-3 rounded-xl">
                      <MapPin className="h-6 w-6 text-black" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 mb-1">Location</p>
                      <p className="text-black font-medium">Washignton DC</p>
                    </div>
                  </div>
                </motion.div>

              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-2"
              >
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 lg:p-10">
                  <AnimatePresence>
                    {errorToast && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mb-6 px-4 py-3 bg-red-50 text-red-600 border border-red-200 rounded-xl text-sm sm:text-base"
                      >
                        {errorToast}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <h3 className="text-2xl sm:text-3xl font-light text-black mb-8">
                    Send Us a <span className="text-[#00A86B] font-normal">Message</span>
                  </h3>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        className="space-y-2"
                      >
                        <label
                          htmlFor="firstName"
                          className="text-sm font-medium text-gray-700"
                        >
                          First Name
                        </label>
                        <input
                          id="firstName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="John"
                          className="w-full bg-gray-50 border-2 border-gray-200 focus:border-[#00A86B] focus:bg-white px-4 py-3 rounded-xl outline-none transition-all text-gray-700"
                        />
                      </motion.div>

                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        className="space-y-2"
                      >
                        <label
                          htmlFor="lastName"
                          className="text-sm font-medium text-gray-700"
                        >
                          Last Name
                        </label>
                        <input
                          id="lastName"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Doe"
                          className="w-full bg-gray-50 border-2 border-gray-200 focus:border-[#00A86B] focus:bg-white px-4 py-3 rounded-xl outline-none transition-all text-gray-700"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        Email <span className="text-[#FD8100]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        required
                        className="w-full bg-gray-50 border-2 border-gray-200 focus:border-[#FD8100] focus:bg-white px-4 py-3 rounded-xl outline-none transition-all text-gray-700"
                      />
                    </motion.div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-700"
                      >
                        Your Message <span className="text-[#FD8100]">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          if (messageError) setMessageError("");
                        }}
                        placeholder="Tell us how we can help you..."
                        className="w-full bg-gray-50 border-2 border-gray-200 focus:border-[#00A86B] focus:bg-white px-4 py-3 rounded-xl outline-none transition-all resize-none text-gray-700"
                      />
                      <AnimatePresence>
                        {messageError && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="text-red-600 text-sm mt-2"
                          >
                            {messageError}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#FD8100] text-white rounded-xl py-3 text-lg font-medium hover:bg-[#FD8100]/90 transition-all duration-300 disabled:opacity-50"
                      >
                        Send Message
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00A86B15_0%,transparent_50%)]" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 text-white">
              Join Our <span className="text-[#00A86B]">Mission</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Help us revolutionize the way people shop for groceries and make
              healthy eating accessible to everyone.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                className="bg-[#00A86B] text-white px-8 py-3 rounded-full hover:bg-[#00A86B]/90 transition-all duration-300 font-medium"
              >
                <Link href="/#waitlist" className="inline-flex items-center gap-2">
                  Join Waitlist Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
