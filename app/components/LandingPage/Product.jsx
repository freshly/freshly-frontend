import Image from "next/image";
import { Baloo_2 } from "next/font/google";

const baloo2 = Baloo_2({
  subsets: ["latin"],
  display: "swap",
});

export default function Product() {
  return (
    <div
      className="relative inset-0 -z-10 h-full w-full bg-white 
      bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]
      bg-[size:2rem_3rem] pb-10"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 -z-50 bg-[radial-gradient(circle_500px_at_50%_200px,#E4FDF3,transparent)]"></div>
      <div
        className={`text-black text-center pt-10 text-4xl font-semibold ${baloo2.variable}`}
      >
        What we offer
      </div>
      <div
        className={`pt-2 text-center text-xs md:text-[11pt] text-[#9fa0a3] font-light ${baloo2.variable}`}
      >
        Freshly brings cutting-edge AI technology to your fingertips, with the
        personal touch you expect and deserve.
      </div>

      <div className="mt-8 flex flex-col md:flex-row items-center gap-14 px-20">
        <div className="flex md:w-1/2 gap-4 justify-center md:justify-start">
          <Image
            src="/grocery-cart.png"
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
          <div className="text-lg font-semibold mb-2">AI-Native</div>
          <div className="text-xl font-semibold mb-2">
            Transparency and Insights
          </div>
          <p className="text-sm md:text-base text-gray-600">
            Gain full visibility into your dealership’s performance with the Pam
            dashboard. Track every customer interaction in real-time, analyze
            call trends, and monitor customer satisfaction — all in one place.
            More data, better decisions.
          </p>
          <div className="mt-4">
            <h4 className="text-sm md:text-base font-semibold">
              One Dashboard to Rule Them All
            </h4>
            <p className="text-sm md:text-base text-gray-600 mt-1">
              An all-in-one hub for your data. Easy to use and packed with
              features to help you streamline operations and drive revenue.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row items-center gap-14 px-20">
        <div className="md:w-1/2">
          <div className="text-lg font-semibold mb-2">AI-Native</div>
          <div className="text-xl font-semibold mb-2">
            Transparency and Insights
          </div>
          <p className="text-sm md:text-base text-gray-600">
            Gain full visibility into your dealership’s performance with the Pam
            dashboard. Track every customer interaction in real-time, analyze
            call trends, and monitor customer satisfaction — all in one place.
            More data, better decisions.
          </p>
          <div className="mt-4">
            <h4 className="text-sm md:text-base font-semibold">
              One Dashboard to Rule Them All
            </h4>
            <p className="text-sm md:text-base text-gray-600 mt-1">
              An all-in-one hub for your data. Easy to use and packed with
              features to help you streamline operations and drive revenue.
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
            alt="Grocery Cart"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/35.png"
            alt="Cart"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/51.png"
            alt="Choose Shop"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="md:w-1/2">
          <div className="text-lg font-semibold mb-2">AI-Native</div>
          <div className="text-xl font-semibold mb-2">
            Transparency and Insights
          </div>
          <p className="text-sm md:text-base text-gray-600">
            Gain full visibility into your dealership’s performance with the Pam
            dashboard. Track every customer interaction in real-time, analyze
            call trends, and monitor customer satisfaction — all in one place.
            More data, better decisions.
          </p>
          <div className="mt-4">
            <h4 className="text-sm md:text-base font-semibold">
              One Dashboard to Rule Them All
            </h4>
            <p className="text-sm md:text-base text-gray-600 mt-1">
              An all-in-one hub for your data. Easy to use and packed with
              features to help you streamline operations and drive revenue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
