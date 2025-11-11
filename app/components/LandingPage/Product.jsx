import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Product() {
  return (
    <div
      className={`${inter.className} relative inset-0 min-h-screen w-full bg-gradient-to-b from-white to-[#f7f9f8] pb-16`}
    >
      {/* bg-[radial-gradient(circle_500px_at_50%_200px,#E4FDF3,transparent)]" */}
      <div className="absolute bottom-0 left-0 right-0 top-0 -z-50 " />

      <h1 className="text-black text-center pt-10 text-3xl md:text-5xl font-medium">
        Smarter Grocery Shopping, Powered by AI.
      </h1>
      <p className="pt-4 text-center text-xl md:text-2xl text-gray-500 font-normal max-w-2xl mx-auto md:mx-0 leading-relaxed">
        Plan meals, track your pantry, and shop efficiently - all in one app.
      </p>

      <div className="mt-12 flex flex-col md:flex-row items-center gap-100 px-8 md:px-20 py-10 bg-white shadow-md rounded-2xl">
        <div className="flex md:w-1/2 gap-6 md:gap-10 justify-center md:justify-start">
          <Image
            src="/pantry.png"
            alt="Grocery Cart"
            width={300}
            height={300}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <Image
            src="/cart.png"
            alt="Cart"
            width={300}
            height={300}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <Image
            src="/choose-shop.png"
            alt="Choose Shop"
            width={300}
            height={300}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="md:w-1/2">
          <div className="text-3xl md:text-4xl font-semibold mb-2 text-center md:text-left">
            AI-Powered Personalzation
          </div>
          <ul className="list-disc pl-8 space-y-2 text-gray-700 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            <li className="text-sm md:text-3xl text-black">Personalized weekly meal plans built by AI for your goals and diet.</li>
            <li className="text-sm md:text-3xl text-black">Smart recipe suggestions using what’s already in your pantry.</li>
          </ul>
          <div className="mt-4">
            <h4 className="text-3xl md:text-4xl font-semibold mb-2 text-center md:text-left">
              Real-Time Inventory Tracking
            </h4>
            <ul className="list-disc pl-8 space-y-2 text-gray-700 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              <li className="text-black text-sm md:text-3xl"> Automatically track what’s in stock and what’s running low.</li>
              <li className="text-black text-sm md:text-3xl"> Organize grocery lists by category for faster shopping.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-center gap-12 px-8 md:px-20 py-10 bg-white shadow-md rounded-2xl">
        <div className="md:w-1/2">
          <div className="text-3xl md:text-4xl font-semibold mb-2 text-center md:text-left">
            Pantry-to-Recipe Generator
          </div>
          <ul className="list-disc pl-8 space-y-2 text-gray-700 max-w-2xl mx-auto md:mx-0 leading-relaxed text-sm md:text-base">
            <li className="text-black text-sm md:text-3xl">Turn your pantry into recipes instantly with AI suggestions.</li>
            <li className="text-black text-sm md:text-3xl">Discover new dishes, reduce waste, and save money effortlessly.</li>
          </ul>
          <div className="mt-4">
            <h4 className="text-3xl md:text-4xl font-semibold mb-2 text-center md:text-left">
              Waste Reduction Metrics
            </h4>
            <ul className="list-disc pl-8 space-y-2 text-gray-700 max-w-2xl mx-auto md:mx-0 leading-relaxed text-sm md:text-base mt-1">
              <li className="text-black text-sm md:text-3xl">Track your food usage, expiration dates, and total savings.</li>
              <li className="text-black text-sm md:text-3xl">Cut waste, spend smarter, and live more sustainably over time.</li>
            </ul>
          </div>
        </div>
        <div className="flex md:w-1/2 gap-6 md:gap-10 justify-center md:justify-start">
          <Image
            src="/freshly-home.png"
            alt="Freshly Home"
            width={300}
            height={300}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <Image
            src="/cart.png"
            alt="Cart"
            width={300}
            height={300}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <Image
            src="/choose-shop.png"
            alt="Choose Shop"
            width={300}
            height={300}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-center gap-100 px-8 md:px-20 py-10 bg-white shadow-md rounded-2xl">
        <div className="flex md:w-1/2 gap-6 md:gap-10 justify-center md:justify-start">
          <Image
            src="/34.png"
            alt="Feature 3a"
            width={300}
            height={300}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <Image
            src="/35.png"
            alt="Feature 3b"
            width={300}
            height={300}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <Image
            src="/51.png"
            alt="Feature 3c"
            width={300}
            height={300}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="md:w-1/2">
          <div className="text-3xl md:text-4xl font-semibold mb-2 text-center md:text-left">
            Smart Price Comparison
          </div>
          <ul className="list-disc pl-8 space-y-2 text-gray-700 max-w-2xl mx-auto md:mx-0 leading-relaxed text-sm md:text-base">
            <li className="text-black text-sm md:text-3xl">Compare grocery prices across stores automatically in real time.</li>
            <li className="text-black text-sm md:text-3xl"> Save money without sacrificing quality or convenience.</li>
          </ul>
          <div className="mt-4">
            <h4 className="text-3xl md:text-4xl font-semibold mb-2 text-center md:text-left">
              Seamless Delivery Integration
            </h4>
            <ul className="list-disc pl-8 space-y-2 text-gray-700 max-w-2xl mx-auto md:mx-0 leading-relaxed text-sm md:text-base mt-1">
              <li className="text-black text-sm md:text-3xl">Get groceries delivered fast and reliably with local partners.</li>
              <li className="text-black text-sm md:text-3xl">Place, track, and receive orders directly within the app.</li>
              <li className="text-black text-sm md:text-3xl">Enjoy a smooth, all-in-one shopping and delivery experience.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
