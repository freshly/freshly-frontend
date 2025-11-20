"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Button } from "../../../components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  display: "swap",
});

const faqData = [
  {
    category: "Basics Of SAVR",
    questions: [
      {
        id: 1,
        question: "What is this app, and how does it work?",
        answer:
          "This app is an AI-powered smart grocery shopping assistant that helps users plan meals, create grocery lists, track pantry inventory, compare prices, and reduce food waste—all in one convenient platform.",
      },
      {
        id: 2,
        question: "Is the app free to use?",
        answer:
          "The app offers a free version with essential features. A premium subscription unlocks advanced features like smart inventory management, personalized meal planning, and price comparisons.",
      },
      {
        id: 3,
        question: "How does the AI personalize my experience?",
        answer:
          "The AI considers your dietary preferences, past grocery purchases, pantry inventory, budget, and food preferences to create tailored meal plans and shopping lists.",
      },
    ],
  },
  {
    category: "Meal Planning & Recipes",
    questions: [
      {
        id: 4,
        question:
          "Can the app create meal plans based on my dietary restrictions?",
        answer:
          "Yes! You can input dietary restrictions (e.g., vegan, gluten-free, keto), allergies, and health goals, and the app will generate meal plans accordingly.",
      },
      {
        id: 5,
        question:
          "What if I don't know what to cook with my current pantry items?",
        answer:
          "The app suggests recipes based on what you already have, helping you reduce waste and save money.",
      },
      {
        id: 6,
        question: "Can I save my favorite recipes?",
        answer:
          "Absolutely! You can bookmark recipes, customize them, and even share them with friends or family.",
      },
    ],
  },
  {
    category: "Grocery Lists & Shopping",
    questions: [
      {
        id: 7,
        question: "How does the automatic grocery list feature work?",
        answer:
          "The app generates a grocery list based on your selected meal plan and current pantry inventory, ensuring you buy only what you need.",
      },
      {
        id: 8,
        question: "Can I manually add or remove items from my grocery list?",
        answer:
          "Yes, you can fully customize your grocery list by adding, removing, or reordering items.",
      },
      {
        id: 9,
        question:
          "Does the app categorize items for a more organized shopping trip?",
        answer:
          "Yes, grocery lists are automatically sorted into categories like produce, dairy, pantry, and frozen foods to streamline shopping.",
      },
    ],
  },
  {
    category: "Inventory & Waste Reduction",
    questions: [
      {
        id: 10,
        question: "How does the smart inventory management work?",
        answer:
          "You can update your pantry manually, use barcode scanning, use reciept scanning, or integrate with a smart fridge (if supported) to track inventory in real time.",
      },
      {
        id: 11,
        question: "Will the app remind me when food is about to expire?",
        answer:
          "Yes, you'll receive notifications when items are nearing their expiration date, along with recipe suggestions to use them up.",
      },
      {
        id: 12,
        question: "Does the app help reduce food waste?",
        answer:
          "Yes! It suggests recipes using ingredients before they expire, tracks what you use most, and provides food storage tips.",
      },
    ],
  },
  {
    category: "Budgeting & Price Comparison",
    questions: [
      {
        id: 13,
        question: "How does the app help me save money?",
        answer:
          "The app compares prices across multiple grocery stores, suggests cheaper alternatives, and helps prevent unnecessary purchases.",
      },
      {
        id: 14,
        question: "Can I set a grocery budget?",
        answer:
          "Yes, you can set a spending limit, and the app will recommend cost-effective options while keeping you within budget.",
      },
      {
        id: 15,
        question: "Does the app offer coupons or discounts?",
        answer:
          "The app integrates with participating stores to show available discounts, promotions, and digital coupons.",
      },
    ],
  },
  {
    category: "Grocery Delivery & Pickup",
    questions: [
      {
        id: 16,
        question: "Can I order groceries directly through the app?",
        answer:
          "Yes! The app integrates with grocery delivery services, allowing you to place orders for pickup or delivery.",
      },
      {
        id: 17,
        question: "Can I schedule recurring grocery deliveries?",
        answer:
          "Yes, you can set up automatic deliveries for regularly purchased items like milk, eggs, and bread.",
      },
      {
        id: 18,
        question: "Does the app work with my favorite grocery store?",
        answer:
          "The app partners with major grocery retailers and delivery services. Availability depends on your location.",
      },
    ],
  },
  {
    category: "Social & Family Features",
    questions: [
      {
        id: 19,
        question: "Can I share my grocery list with family members?",
        answer:
          "Yes! You can sync your grocery list with family members or roommates so everyone stays updated.",
      },
      {
        id: 20,
        question: "Can I see what my friends are cooking?",
        answer:
          "Yes, you can connect with friends, share recipes, and get meal inspiration from your network.",
      },
      {
        id: 21,
        question:
          "Can multiple people edit the same grocery list at the same time?",
        answer:
          "Yes! Everyone you share the list with can make updates in real-time, so the whole household stays synced automatically.",
      },
    ],
  },
  {
    category: "Sustainability & Health",
    questions: [
      {
        id: 22,
        question: "Does the app promote sustainable grocery shopping?",
        answer:
          "Yes! It suggests eco-friendly options, tracks your carbon footprint, and rewards sustainable shopping choices.",
      },
      {
        id: 23,
        question: "How does the app help with healthy eating?",
        answer:
          "The app offers nutrition breakdowns for recipes and ingredients, helping you make healthier choices.",
      },
      {
        id: 24,
        question: "Does the app help reduce food waste?",
        answer:
          "Absolutely. SAVR reminds you when items are about to expire and recommends recipes that use up what you already have.",
      },
    ],
  },
];

// Hook to detect when element is in viewport
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1, ...options }
    );

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

const FlipCard = ({ question, answer, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`relative h-56 sm:h-64 md:h-72 w-full cursor-pointer transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        perspective: "1000px",
        transitionDelay: `${index * 100}ms`,
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-all duration-700 ${
          isFlipped ? "scale-105" : "scale-100"
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 sm:p-5 md:p-6 border-2 border-transparent hover:border-[#FD8100]/20"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="h-full flex flex-col justify-between">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 leading-tight">
              {question}
            </h3>
            <div className="flex items-center gap-2 text-[#00A86B] text-xs sm:text-sm font-medium group">
              <span>Click to reveal</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
        {/* Back of card */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-[#00A86B]/10 to-[#00A86B]/10 rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 overflow-y-auto border-2 border-[#00A86B]/30"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-light">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FaqSection = ({ category, questions, index }) => {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="py-8 sm:py-10 md:py-12 lg:py-16">
      <div
        className={`w-full h-full justify-center items-center flex mb-6 sm:mb-8 md:mb-10 transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="relative inline-block">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#FD8100] text-center px-4 relative z-10">
            {category}
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
        {questions.map((qa, idx) => (
          <FlipCard
            key={qa.id}
            question={qa.question}
            answer={qa.answer}
            index={idx}
          />
        ))}
      </div>
    </section>
  );
};

const FaqPage = () => {
  const [headerRef, headerInView] = useInView();

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-white via-[#FD8100]/5 to-white ${inter.className} mt-16 sm:mt-20 md:mt-24`}
    >
      <div className="relative">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#FD8100]/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-40 right-10 w-96 h-96 bg-[#00A86B]/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/2 w-80 h-80 bg-[#FD8100]/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10">
          {/* Header with Logo */}
          <div
            ref={headerRef}
            className={`text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20 transition-all duration-1000 ${
              headerInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-neutral-950 mb-3 sm:mb-4 md:mb-6 px-4 tracking-tight">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-[#00A86B] font-normal">
                Questions
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-600 max-w-3xl mx-auto px-4 sm:px-6 font-light">
              Find answers to common questions about SAVR's smart grocery
              shopping assistant.
            </p>

            {/* Decorative line */}
            <div className="mt-6 sm:mt-8 flex justify-center">
              <div className="w-32 sm:w-40 h-1 bg-gradient-to-r from-transparent via-[#FD8100] to-transparent rounded-full"></div>
            </div>
          </div>

          {/* FAQ Sections */}
          {faqData.map((section, index) => (
            <FaqSection
              key={index}
              category={section.category}
              questions={section.questions}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Vision Section with Gradient */}
      <section className="font-light relative py-12 sm:py-16 md:py-20 lg:py-24 w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,168,107,0.4),rgba(253,129,0,0.1),rgba(0,0,0,0))] overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-[#00A86B]/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-[#FD8100]/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-center text-white px-4 leading-tight">
              Ready to Transform Your{" "}
              <span className="text-[#FD8100] font-normal">
                Grocery Shopping
              </span>{""} and {""}
                <span className="text-[#00A86B] font-normal">
                meal planning {""}
              </span>
              experience
              ?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center text-neutral-300 mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6 font-light">
              Join SAVR today and experience a smarter way to shop, cook, and
              save.
            </p>
            <div className="flex justify-center px-4">
              <Button
                asChild
                className="h-11 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg text-white bg-gradient-to-r from-[#FD8100] to-[#FD8100]/80 hover:from-[#FD8100]/90 hover:to-[#FD8100]/70 border-none transition-all duration-300 px-6 sm:px-8 md:px-10 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 group"
              >
                <Link
                  href="/#waitlist"
                  className="flex items-center gap-2 sm:gap-3"
                >
                  Join Waitlist Now
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-neutral-400 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00A86B] rounded-full"></div>
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FD8100] rounded-full"></div>
                <span>Save Money</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Reduce Waste</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add custom animations */}
      <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
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

export default FaqPage;
