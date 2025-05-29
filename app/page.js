import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/LandingPage/Hero";

export default function Home() {
  return (
    <div
      class="absolute inset-0 -z-10 h-full w-full bg-white 
    bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] 
    bg-[size:2rem_3rem]"
    >
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
