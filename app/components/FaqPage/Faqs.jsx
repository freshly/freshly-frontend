'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const faqData = [
  {
    category: "Basics Of Freshly",
    questions: [
      {
        id: 1,
        question: "What is this app, and how does it work?",
        answer: "This app is an AI-powered smart grocery shopping assistant that helps users plan meals, create grocery lists, track pantry inventory, compare prices, and reduce food waste—all in one convenient platform."
      },
      {
        id: 2,
        question: "Is the app free to use?",
        answer: "The app offers a free version with essential features. A premium subscription unlocks advanced features like smart inventory management, personalized meal planning, and price comparisons."
      },
      {
        id: 3,
        question: "How does the AI personalize my experience?",
        answer: "The AI considers your dietary preferences, past grocery purchases, pantry inventory, budget, and food preferences to create tailored meal plans and shopping lists."
      }
    ]
  },
  {
    category: "Meal Planning & Recipes",
    questions: [
      {
        id: 4,
        question: "Can the app create meal plans based on my dietary restrictions?",
        answer: "Yes! You can input dietary restrictions (e.g., vegan, gluten-free, keto), allergies, and health goals, and the app will generate meal plans accordingly."
      },
      {
        id: 5,
        question: "What if I don't know what to cook with my current pantry items?",
        answer: "The app suggests recipes based on what you already have, helping you reduce waste and save money."
      },
      {
        id: 6,
        question: "Can I save my favorite recipes?",
        answer: "Absolutely! You can bookmark recipes, customize them, and even share them with friends or family."
      }
    ]
  },
  {
    category: "Grocery Lists & Shopping",
    questions: [
      {
        id: 7,
        question: "How does the automatic grocery list feature work?",
        answer: "The app generates a grocery list based on your selected meal plan and current pantry inventory, ensuring you buy only what you need."
      },
      {
        id: 8,
        question: "Can I manually add or remove items from my grocery list?",
        answer: "Yes, you can fully customize your grocery list by adding, removing, or reordering items."
      },
      {
        id: 9,
        question: "Does the app categorize items for a more organized shopping trip?",
        answer: "Yes, grocery lists are automatically sorted into categories like produce, dairy, pantry, and frozen foods to streamline shopping."
      }
    ]
  },
  {
    category: "Inventory & Waste Reduction",
    questions: [
      {
        id: 10,
        question: "How does the smart inventory management work?",
        answer: "You can update your pantry manually, use barcode scanning, or integrate with a smart fridge (if supported) to track inventory in real time."
      },
      {
        id: 11,
        question: "Will the app remind me when food is about to expire?",
        answer: "Yes, you'll receive notifications when items are nearing their expiration date, along with recipe suggestions to use them up."
      },
      {
        id: 12,
        question: "Does the app help reduce food waste?",
        answer: "Yes! It suggests recipes using ingredients before they expire, tracks what you use most, and provides food storage tips."
      }
    ]
  },
  {
    category: "Budgeting & Price Comparison",
    questions: [
      {
        id: 13,
        question: "How does the app help me save money?",
        answer: "The app compares prices across multiple grocery stores, suggests cheaper alternatives, and helps prevent unnecessary purchases."
      },
      {
        id: 14,
        question: "Can I set a grocery budget?",
        answer: "Yes, you can set a spending limit, and the app will recommend cost-effective options while keeping you within budget."
      },
      {
        id: 15,
        question: "Does the app offer coupons or discounts?",
        answer: "The app integrates with participating stores to show available discounts, promotions, and digital coupons."
      }
    ]
  },
  {
    category: "Grocery Delivery & Pickup",
    questions: [
      {
        id: 16,
        question: "Can I order groceries directly through the app?",
        answer: "Yes! The app integrates with grocery delivery services, allowing you to place orders for pickup or delivery."
      },
      {
        id: 17,
        question: "Can I schedule recurring grocery deliveries?",
        answer: "Yes, you can set up automatic deliveries for regularly purchased items like milk, eggs, and bread."
      },
      {
        id: 18,
        question: "Does the app work with my favorite grocery store?",
        answer: "The app partners with major grocery retailers and delivery services. Availability depends on your location."
      }
    ]
  },
  {
    category: "Social & Family Features",
    questions: [
      {
        id: 19,
        question: "Can I share my grocery list with family members?",
        answer: "Yes! You can sync your grocery list with family members or roommates so everyone stays updated."
      },
      {
        id: 20,
        question: "Can I see what my friends are cooking?",
        answer: "Yes, you can connect with friends, share recipes, and get meal inspiration from your network."
      }
    ]
  },
  {
    category: "Sustainability & Health",
    questions: [
      {
        id: 21,
        question: "Does the app promote sustainable grocery shopping?",
        answer: "Yes! It suggests eco-friendly options, tracks your carbon footprint, and rewards sustainable shopping choices."
      },
      {
        id: 22,
        question: "How does the app help with healthy eating?",
        answer: "The app offers nutrition breakdowns for recipes and ingredients, helping you make healthier choices."
      }
    ]
  }
];

const FlipCard = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-64 w-full cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        {/* Front of card */}
        <div 
          className="absolute w-full h-full bg-white rounded-xl shadow-lg p-6"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="h-full flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-gray-900">{question}</h3>
            <div className="text-emerald-600 text-sm">Click to flip</div>
          </div>
        </div>

        {/* Back of card */}
        <div 
          className="absolute w-full h-full bg-emerald-50 rounded-xl shadow-lg p-6"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FaqSection = ({ category, questions }) => {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {questions.map((qa) => (
          <FlipCard key={qa.id} question={qa.question} answer={qa.answer} />
        ))}
      </div>
    </section>
  );
};

const FaqPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-grid-black">
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/70 to-white" />
        
        <div className="container mx-auto px-4 py-16 relative">
          {/* Header with Logo */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="relative w-24 h-24">
                <Image
                  src="/freshly-icon-square.png"
                  alt="Freshly Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="opacity-90"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about Freshly's smart grocery shopping assistant.
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
      <section className="bg-gradient-to-t from-black via-black to-emerald-900/90 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent" />
        <div className="container mx-auto px-4 py-16 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">
              Ready to Transform Your Grocery Shopping?
            </h2>
            <p className="text-center text-gray-300 mb-8">
              Join Freshly today and experience a smarter way to shop, cook, and save.
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

export default FaqPage;
