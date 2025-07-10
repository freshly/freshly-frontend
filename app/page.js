import Hero from "./components/LandingPage/Hero";
import Sponsors from "./components/LandingPage/Sponsors";
import Product from "./components/LandingPage/Product";
import Phone from "./components/LandingPage/Phone";
import Waitlist from "./components/LandingPage/Waitlist";

export default function Home() {
  return (
    <div className="relative">
      {/* fixed grid background */}
      <div
        className="fixed inset-0 -z-20 
        bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] 
        bg-[size:2rem_3rem] bg-fixed"
      />

      {/* Hero on top of grid */}
      <section className="relative z-10">
        <Hero />
      </section>

      <section className="relative z-20 pt-24 lg:block hidden">
        <Phone />
      </section>

      {/* Everything below sits on a solid white bg at z-10 */}
      <section className="relative z-10 bg-white">
        <Sponsors />
        <Product />
        <Waitlist />
      </section>
    </div>
  );
}
