import Image from "next/image";
import FreshlyIcon from "../../../public/freshly-icon-square.png";
import { Baloo_2 } from "next/font/google";

const baloo2 = Baloo_2({
  subsets: ["latin"],
  display: "swap",
});

export default function Hero() {
  return (
    <div className="relative h-screen w-full bg-white">
      <div
        className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] 
        [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
      >
        <div className="pt-28 relative font-light justify-center flex">
          <Image
            src={FreshlyIcon}
            alt="Freshly Icon"
            width={200}
            height={200}
          />
        </div>
        <div
          className={`pt-2 text-center text-md text-[#9fa0a3] font-light ${baloo2.variable}`}
        >
          Plan, Shop, and Save—Smarter Grocery Shopping with AI.
        </div>
      </div>
    </div>
  );
}
