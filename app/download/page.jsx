
"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { ArrowRight, Apple, Smartphone, Bell, CheckCircle2 } from "lucide-react";
import { Button } from "../../components/ui/button";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  display: "swap",
});

// Hook to detect when element is in viewport
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isInView];
};

const FeatureCard = ({ icon: Icon, title, description, index }) => {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 sm:p-8 border-2 border-transparent hover:border-[#FD8100]/20 group ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#FD8100]/20 to-[#00A86B]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#FD8100]" />
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const PlatformCard = ({ platform, icon: Icon, comingSoon, index }) => {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-8 sm:p-10 md:p-12 border-2 border-gray-100 hover:border-[#00A86B]/30 transition-all duration-500 group overflow-hidden ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#FD8100]/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#FD8100] to-[#FD8100]/80 rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
        </div>
        
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {platform}
          </h3>
          <p className="text-lg sm:text-xl text-[#00A86B] font-medium">
            {comingSoon}
          </p>
        </div>
        
        <div className="pt-4">
          <Button
            disabled
            className="h-12 sm:h-14 text-base sm:text-lg px-8 sm:px-10 bg-gray-200 text-gray-500 cursor-not-allowed rounded-full"
          >
            Coming Soon
          </Button>
        </div>
      </div>
    </div>
  );
};

const DownloadPage = () => {
  const [headerRef, headerInView] = useInView();
  const [notifyRef, notifyInView] = useInView();

  const features = [
    {
      icon: Bell,
      title: "Get Notified First",
      description: "Join our waitlist & be among the first to know when Savr launches on your platform.",
    },
    {
      icon: CheckCircle2,
      title: "Exclusive Early Access",
      description: "Waitlist members get priority access & exclusive launch day benefits.",
    },
    {
      icon: Smartphone,
      title: "Universal Experience",
      description: "Seamless experience across both iOS & Android devices when we launch.",
    },
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-white via-[#FD8100]/5 to-white ${inter.className} mt-16 sm:mt-20 md:mt-24`}>
      <div className="relative">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#FD8100]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-[#00A86B]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-[#FD8100]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10">
          {/* Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 transition-all duration-1000 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
          >
            <div className="inline-block mb-4 sm:mb-6">
              <span className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#FD8100]/10 to-[#00A86B]/10 rounded-full text-sm sm:text-base font-medium text-[#FD8100] border border-[#FD8100]/20">
                Coming Very Soon
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-neutral-950 mb-4 sm:mb-6 px-4 tracking-tight leading-tight">
              Download{" "}
              <span className="text-transparent bg-clip-text bg-[#00A86B] font-normal">
                Savr
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-600 max-w-4xl mx-auto px-4 sm:px-6 font-light mb-6 sm:mb-8">
              Your favourite AI powered grocery shopping & meal planning all in one app will be available later this year on both iOS & Android
            </p>
            
            {/* Decorative line */}
            <div className="flex justify-center">
              <div className="w-32 sm:w-40 h-1 bg-gradient-to-r from-transparent via-[#FD8100] to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Platform Cards */}
          <div className="max-w-5xl mx-auto mb-16 sm:mb-20 md:mb-24 lg:mb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              <PlatformCard
                platform="iOS"
                icon={Apple}
                comingSoon="Available Later This Year"
                index={0}
              />
              <PlatformCard
                platform="Android"
                icon={Smartphone}
                comingSoon="Available Later This Year"
                index={1}
              />
            </div>
          </div>

          {/* Features Section */}
          <div className="max-w-6xl mx-auto mb-16 sm:mb-20 md:mb-24">
            <div 
              ref={notifyRef}
              className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-1000 ${
                notifyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-neutral-950 mb-4 sm:mb-6 px-4">
                Why Join the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD8100] to-[#00A86B] font-normal">
                  Waitlist
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto px-4 font-light">
                Be part of the Savr community from day one
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Coming Soon Details */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-8 sm:p-10 md:p-12 lg:p-16 border-2 border-gray-100">
              <div className="text-center space-y-6 sm:space-y-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
                  Launching Later This Year
                </h3>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
                  We're putting the finishing touches on Savr to ensure you get the best AI powered grocery shopping & meal planning experience. Both iOS &Android apps will launch simultaneously later this year.
                </p>
                
                <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    asChild
                    className="w-full sm:w-auto h-12 sm:h-14 text-base sm:text-lg text-white bg-gradient-to-r from-[#FD8100] to-[#FD8100]/80 hover:from-[#FD8100]/90 hover:to-[#FD8100]/70 border-none transition-all duration-300 px-8 sm:px-10 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 group"
                  >
                    <Link href="/#waitlist" className="flex items-center justify-center gap-2 sm:gap-3">
                      Join the Waitlist
                      <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                  
                  <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto h-12 sm:h-14 text-base sm:text-lg text-[#00A86B] bg-transparent border-2 border-[#00A86B] hover:bg-[#00A86B]/10 transition-all duration-300 px-8 sm:px-10 rounded-full"
                  >
                    <Link href="/">
                      Learn More
                    </Link>
                  </Button>
                </div>
                
                {/* Trust indicators */}
                <div className="pt-6 sm:pt-8 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-gray-500 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#00A86B] rounded-full"></div>
                    <span>AI-Powered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#FD8100] rounded-full"></div>
                    <span>Free to Download</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>iOS & Android</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
<section
  className="font-light relative py-12 sm:py-16 md:py-20 lg:py-24 w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,168,107,0.4),rgba(253,129,0,0.1),rgba(0,0,0,0))] overflow-hidden"
>
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-[#00A86B]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-[#FD8100]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-white px-4 leading-tight">
              Don't Miss the{" "}
              <span className="text-[#FD8100] font-normal">Launch</span>
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6 font-light">
              Join thousands of others waiting for Savr. Get notified the moment we launch on your platform.
            </p>
            
            <Button
              asChild
              className="h-11 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg text-neutral-950 bg-white hover:bg-gray-100 border-none transition-all duration-300 px-6 sm:px-8 md:px-10 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 group font-medium"
            >
              <Link href="/#waitlist" className="flex items-center gap-2 sm:gap-3">
                Get Early Access
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-950 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            
          </div>
        </div>
      </section>

      {/* Add custom animations */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default DownloadPage;