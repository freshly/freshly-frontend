import ProductHero from "./components/LandingPage/ProductHero";
import Product from "./components/LandingPage/Product";
import Problem from "./components/LandingPage/Problem";
import DownloadCTA from "./components/LandingPage/DownloadCTA";
import Sponsors from "./components/LandingPage/Sponsors";
import Phone from "./components/LandingPage/Phone";
import Waitlist from "./components/LandingPage/Waitlist";
import Reviews from "./components/LandingPage/Reviews";

export default function Home() {
  return (
    <div className="relative">
      {/* Unified Background for Hero and Product sections */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-br from-white via-orange-50 to-emerald-50 opacity-50" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-tr from-transparent via-[#FD8100]/5 to-[#00A86B]/5" />

      {/* Floating Orbs Animation */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FD8100]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#00A86B]/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Product Hero section */}
      <section className="relative z-10">
        <ProductHero />
      </section>

      {/*<section className="relative z-20 pt-24 lg:block hidden">
        <Phone />
      </section>*/}

      {/* Product and other sections */}
      <section className="relative z-10">
        {/*<Sponsors />*/}
        <Product />
        <Problem />
        <DownloadCTA />
        <Waitlist />
        {/*<Reviews />*/}
      </section>
    </div>
  );
}
