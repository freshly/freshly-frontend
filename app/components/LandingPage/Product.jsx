import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Product() {
  return (
    <div
      className={`${inter.className} relative inset-0 -z-10 h-full w-full bg-white 
        bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]
        bg-[size:2rem_3rem] pb-10`}
    >
      {/* bg-[radial-gradient(circle_500px_at_50%_200px,#E4FDF3,transparent)]" */}
      <div className="absolute bottom-0 left-0 right-0 top-0 -z-50 " />

      <h1 className="text-black text-center pt-10 text-4xl font-light">
        What we offer
      </h1>
      <p className="pt-2 text-center text-2xl md:text-[16pt] text-[#9fa0a3] font-light">
        Plan your meals, shop for groceries, discover new recipes, and get
        everything delivered — all from one intelligent app.
      </p>

      <div className="mt-8 flex flex-col md:flex-row items-center gap-14 px-20">
        <div className="flex md:w-1/2 gap-4 justify-center md:justify-start">
          <Image
            src="/pantry.png"
            alt="Grocery Cart"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/cart.png"
            alt="Cart"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/choose-shop.png"
            alt="Choose Shop"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <div className="text-xl font-semibold mb-2">
            AI-Powered Personalization
          </div>
          <p className="text-sm md:text-base text-gray-600">
            Freshly uses advanced AI to make every part of your experience
            smarter and more personalized. From creating weekly meal plans and
            grocery lists to suggesting recipes that fit your lifestyle, Freshly
            adapts to you. The AI even helps you order ingredients and restock
            your pantry automatically — so you spend less time planning and more
            time enjoying your meals.
          </p>
          <div className="mt-4">
            <h4 className="text-xl font-semibold mb-2">
              Real-Time Inventory Tracking
            </h4>
            <p className="text-sm md:text-base text-gray-600 mt-1">
              Keep your kitchen organized with automatic inventory tracking. The
              app updates your pantry as you scan, shop, or cook — showing you
              exactly what’s in stock and what’s running low. No more guessing,
              overbuying, or forgetting essentials.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row items-center gap-14 px-20">
        <div className="md:w-1/2">
          <div className="text-xl font-semibold mb-2">
            Pantry-to-Recipe Generator
          </div>
          <p className="text-sm md:text-base text-gray-600">
            Turn what you already have into creative meals. Freshly’s generator
            instantly suggests recipes based on your available ingredients and
            dietary preferences. It’s a simple way to reduce waste, save money,
            and discover new dishes without another grocery trip.
          </p>
          <div className="mt-4">
            <h4 className="text-xl font-semibold mb-2">
              Waste Reduction Metrics
            </h4>
            <p className="text-sm md:text-base text-gray-600 mt-1">
              See the real impact of your habits. Freshly tracks your food usage
              and expiration dates to help you cut waste and shop smarter. Over
              time, you’ll see insights into how much you’ve saved — in both
              money and food — promoting a more sustainable lifestyle.
            </p>
          </div>
        </div>
        <div className="flex md:w-1/2 gap-4 justify-center md:justify-start">
          <Image
            src="/freshly-home.png"
            alt="Freshly Home"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/cart.png"
            alt="Cart"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/choose-shop.png"
            alt="Choose Shop"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row items-center gap-14 px-20">
        <div className="flex md:w-1/2 gap-4 justify-center md:justify-start">
          <Image
            src="/34.png"
            alt="Feature 3a"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/35.png"
            alt="Feature 3b"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/51.png"
            alt="Feature 3c"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <div className="text-xl font-semibold mb-2">
            Smart Price Comparison
          </div>
          <p className="text-sm md:text-base text-gray-600">
            Stop overpaying for groceries. Freshly automatically compares prices
            across local stores in real time, helping you find the best deals
            for everything on your list. Whether it’s weekly staples or
            specialty items, you’ll always know where to shop for the best value
            — without sacrificing quality.
          </p>
          <div className="mt-4">
            <h4 className="text-xl font-semibold mb-2">
              Seamless Delivery Integration
            </h4>
            <p className="text-sm md:text-base text-gray-600 mt-1">
              Get your groceries delivered straight to your door — fast, easy,
              and reliable. Freshly connects you directly with trusted local
              partners, letting you place, track, and receive your order all
              within the app. No extra tabs, no third-party services — just one
              smooth shopping experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
