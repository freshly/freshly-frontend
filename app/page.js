import Hero from "./components/LandingPage/Hero";
import Sponsors from "./components/LandingPage/Sponsors";
import Product from "./components/LandingPage/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Phone from "./components/LandingPage/Phone";
import Waitlist from "./components/LandingPage/Waitlist";

export default function Home() {
  return (
    <div className="absolute inset-0">
      <div
        className=" -z-10 h-full w-full bg-white 
      bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] 
      bg-[size:2rem_3rem]"
      >
        <Hero />
      </div>
      <Phone />
      <div className=" ">
        <Sponsors />
        <Product />
        <Waitlist />
        <Footer />
      </div>
    </div>
  );
}
