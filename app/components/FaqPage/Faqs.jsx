"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  display: "swap",
});

const faqData = [
  {
    category: "Basics Of Freshly",
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
          "You can update your pantry manually, use barcode scanning, or integrate with a smart fridge (if supported) to track inventory in real time.",
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
    ],
  },
  {
    category: "Sustainability & Health",
    questions: [
      {
        id: 21,
        question: "Does the app promote sustainable grocery shopping?",
        answer:
          "Yes! It suggests eco-friendly options, tracks your carbon footprint, and rewards sustainable shopping choices.",
      },
      {
        id: 22,
        question: "How does the app help with healthy eating?",
        answer:
          "The app offers nutrition breakdowns for recipes and ingredients, helping you make healthier choices.",
      },
    ],
  },
];

const FlipCard = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-56 sm:h-64 md:h-72 w-full cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full bg-white rounded-xl shadow-lg p-4 sm:p-5 md:p-6"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="h-full flex flex-col justify-between">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 leading-tight">
              {question}
            </h3>
            <div className="text-emerald-600 text-xs sm:text-sm font-medium">
              Click to flip
            </div>
          </div>
        </div>
        {/* Back of card */}
        <div
          className="absolute w-full h-full bg-emerald-50 rounded-xl shadow-lg p-4 sm:p-5 md:p-6 overflow-y-auto"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FaqSection = ({ category, questions }) => {
  return (
    <section className="py-8 sm:py-10 md:py-12">
      <div className="w-full h-full justify-center items-center flex mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FD8100] text-center px-4">
          {category}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {questions.map((qa) => (
          <FlipCard key={qa.id} question={qa.question} answer={qa.answer} />
        ))}
      </div>
    </section>
  );
};

const FaqPage = () => {
  return (
    <div className={`min-h-screen bg-white ${inter.className} mt-16 sm:mt-20 md:mt-24`}>
      <div className="relative bg-grid-black">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative">
          {/* Header with Logo */}
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
                <Image
                  src="/freshly-icon-square.png"
                  alt="Freshly Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  className="opacity-90"
                />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-neutral-950 mb-3 sm:mb-4 px-4">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto px-4 sm:px-6">
              Find answers to common questions about Freshly's smart grocery
              shopping assistant.
            </p>
          </div>

          {/* FAQ Sections */}
          {faqData.map((section, index) => (
            <FaqSection
              key={index}
              category={section.category}
              questions={section.questions}
            />
          ))}
        </div>
      </div>

      {/* Vision Section with Gradient */}
      <section
        className="font-light relative py-10 sm:py-12 md:py-16 w-full bg-neutral-950
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(21,128,61,0.3),rgba(255,255,255,0))]"
      >
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-4 sm:mb-6 text-center text-white px-4">
              Ready to Transform Your Grocery Shopping?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-center text-neutral-300 mb-6 sm:mb-8 px-4 sm:px-6">
              Join Freshly today and experience a smarter way to shop, cook, and
              save.
            </p>
            <div className="flex justify-center px-4">
              <Button
                asChild
                className="h-10 sm:h-12 text-sm sm:text-base text-neutral-300 bg-transparent border border-gray-600 hover:border-transparent hover:bg-[rgba(21,128,61,0.3)] transition-all duration-200 px-4 sm:px-6"
              >
                <Link href="/#waitlist" className="flex items-center gap-2">
                  Join Waitlist Now
                  <ArrowRight className="w-4 h-4 text-neutral-300" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqPage;