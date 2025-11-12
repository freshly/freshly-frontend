import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Product() {
  return (
    <div
      className={`${inter.className} relative inset-0 min-h-screen w-full bg-gradient-to-b from-white to-[#f7f9f8] pb-8 sm:pb-12 md:pb-16`}
    >
      {/* Header Section */}
      <div className="flex items-center justify-center w-full h-max px-4 sm:px-6">
        <div className="w-full max-w-4xl flex items-center justify-center flex-col">
          <h1 className="text-black text-center pt-6 sm:pt-8 md:pt-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
            Smarter Grocery Shopping. Powered by AI.
          </h1>
          <p className="pt-3 sm:pt-4 text-center text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 font-normal max-w-3xl mx-auto leading-relaxed px-4">
            Plan meals, track your pantry, and shop efficiently - all in one app.
          </p>
        </div>
      </div>

      {/* Feature Section 1 - AI-Powered Personalization */}
      <div className="mt-8 sm:mt-10 md:mt-12 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-20 flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10 bg-white shadow-md rounded-2xl">
        {/* Images */}
        <div className="w-full md:w-1/2 flex gap-3 sm:gap-4 md:gap-6 lg:gap-10 justify-center overflow-x-auto pb-4 md:pb-0">
          <Image
            src="/pantry.png"
            alt="Grocery Cart"
            width={300}
            height={300}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 object-cover flex-shrink-0"
          />
          <Image
            src="/cart.png"
            alt="Cart"
            width={300}
            height={300}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 object-cover flex-shrink-0"
          />
          <Image
            src="/choose-shop.png"
            alt="Choose Shop"
            width={300}
            height={300}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 object-cover flex-shrink-0"
          />
        </div>
        
        {/* Content */}
        <div className="w-full md:w-1/2">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 text-center md:text-left">
            AI-Powered Personalization
          </div>
          <ul className="list-disc pl-5 sm:pl-6 md:pl-8 space-y-2 sm:space-y-3 text-gray-700 leading-relaxed">
            <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-black">
              Personalized weekly meal plans built by AI for your goals and diet.
            </li>
            <li className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-black">
              Smart recipe suggestions using what's already in your pantry.
            </li>
          </ul>
          
          <div className="mt-6 sm:mt-8">
            <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 text-center md:text-left">
              Real-Time Inventory Tracking
            </h4>
            <ul className="list-disc pl-5 sm:pl-6 md:pl-8 space-y-2 sm:space-y-3 text-gray-700 leading-relaxed">
              <li className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                Automatically track what's in stock and what's running low.
              </li>
              <li className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                Organize grocery lists by category for faster shopping.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Feature Section 2 - Pantry-to-Recipe Generator */}
      <div className="mt-8 sm:mt-10 md:mt-12 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-20 flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10 bg-white shadow-md rounded-2xl">
        {/* Images */}
        <div className="w-full md:w-1/2 flex gap-3 sm:gap-4 md:gap-6 lg:gap-10 justify-center overflow-x-auto pb-4 md:pb-0">
          <Image
            src="/freshly-home.png"
            alt="Freshly Home"
            width={300}
            height={300}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 object-cover flex-shrink-0"
          />
          <Image
            src="/cart.png"
            alt="Cart"
            width={300}
            height={300}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 object-cover flex-shrink-0"
          />
          <Image
            src="/choose-shop.png"
            alt="Choose Shop"
            width={300}
            height={300}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 object-cover flex-shrink-0"
          />
        </div>
        
        {/* Content */}
        <div className="w-full md:w-1/2">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 text-center md:text-left">
            Pantry-to-Recipe Generator
          </div>
          <ul className="list-disc pl-5 sm:pl-6 md:pl-8 space-y-2 sm:space-y-3 text-gray-700 leading-relaxed">
            <li className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Turn your pantry into recipes instantly with AI suggestions.
            </li>
            <li className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Discover new dishes, reduce waste, and save money effortlessly.
            </li>
          </ul>
          
          <div className="mt-6 sm:mt-8">
            <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 text-center md:text-left">
              Waste Reduction Metrics
            </h4>
            <ul className="list-disc pl-5 sm:pl-6 md:pl-8 space-y-2 sm:space-y-3 text-gray-700 leading-relaxed">
              <li className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                Track your food usage, expiration dates, and total savings.
              </li>
              <li className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                Cut waste, spend smarter, and live more sustainably over time.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Feature Section 3 - Smart Price Comparison */}
      <div className="mt-8 sm:mt-10 md:mt-12 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-20 flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10 bg-white shadow-md rounded-2xl">
        {/* Images */}
        <div className="w-full md:w-1/2 flex gap-3 sm:gap-4 md:gap-6 lg:gap-10 justify-center overflow-x-auto pb-4 md:pb-0">
          <Image
            src="/34.png"
            alt="Feature 3a"
            width={300}
            height={300}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 object-cover flex-shrink-0"
          />
          <Image
            src="/35.png"
            alt="Feature 3b"
            width={300}
            height={300}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 object-cover flex-shrink-0"
          />
          <Image
            src="/51.png"
            alt="Feature 3c"
            width={300}
            height={300}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 object-cover flex-shrink-0"
          />
        </div>
        
        {/* Content */}
        <div className="w-full md:w-1/2">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 text-center md:text-left">
            Smart Price Comparison
          </div>
          <ul className="list-disc pl-5 sm:pl-6 md:pl-8 space-y-2 sm:space-y-3 text-gray-700 leading-relaxed">
            <li className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Compare grocery prices across stores automatically in real time.
            </li>
            <li className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Save money without sacrificing quality or convenience.
            </li>
          </ul>
          
          <div className="mt-6 sm:mt-8">
            <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 text-center md:text-left">
              Seamless Delivery Integration
            </h4>
            <ul className="list-disc pl-5 sm:pl-6 md:pl-8 space-y-2 sm:space-y-3 text-gray-700 leading-relaxed">
              <li className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                Get groceries delivered fast and reliably with local partners.
              </li>
              <li className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                Place, track, and receive orders directly within the app.
              </li>
              <li className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                Enjoy a smooth, all-in-one shopping and delivery experience.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}