import Image from "next/image";

export default function Product() {
  return (
    <div className="bg-white flex flex-col items-center justify-center py-10">
      <div className="text-black text-center text-4xl font-semibold">
        What we offer
      </div>
      <div
        className={`pt-2 text-center text-xs md:text-[11pt] text-[#9fa0a3] font-light`}
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
    </div>
  );
}
