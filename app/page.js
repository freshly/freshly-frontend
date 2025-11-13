import Hero from "./components/LandingPage/Hero";
import Sponsors from "./components/LandingPage/Sponsors";
import Product from "./components/LandingPage/Product";
import Phone from "./components/LandingPage/Phone";
import Waitlist from "./components/LandingPage/Waitlist";
import Reviews from "./components/LandingPage/Reviews";

export default function Home() {
  return (
    <div className="relative">
      {/* fixed grid background */}

      {/* Hero on top of grid */}
      <section className="relative z-10">
        <Hero />
      </section>

      {/*<section className="relative z-20 pt-24 lg:block hidden">
        <Phone />
      </section>*/}

      {/* Everything below sits on a solid white bg at z-10 */}
      <section className="relative z-10 bg-white">
        {/*<Sponsors />*/}
        <Product />
        <Waitlist />
        {/*<Reviews />*/}
      </section>
    </div>
  );
}
