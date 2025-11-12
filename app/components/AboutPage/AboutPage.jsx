import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  display: "swap",
});

const AboutPage = () => {
  return (
    <main
      className={`${inter.className} min-h-screen bg-white mt-16 sm:mt-20 md:mt-24`}
    >
      <div className="relative bg-grid-black flex items-center justify-center">
        {/* Hero Section */}
        <section className="relative w-full px-4 sm:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-[120rem] mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 flex items-center justify-center gap-2 text-neutral-950 font-light">
                Meet The Founders
              </h1>
            </div>

            {/* David Gendy - Founder Card */}
          <div className="w-full mb-12 sm:mb-16 md:mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-stretch">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-gray-200 h-full">
                <div className="flex flex-col sm:flex-row sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
                  <div className="w-full sm:w-1/2 p-8 sm:p-10 lg:p-12 xl:p-16 order-2 sm:order-1">
                    <div className="mb-4 sm:mb-6">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-2 text-neutral-950">
                        David Gendy
                      </h2>
                      <p className="text-base sm:text-lg text-gray-600 font-medium">
                        CEO & Founder
                      </p>
                    </div>

                    <div className="space-y-3 sm:space-y-4 text-neutral-600">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-[rgb(21,128,60)] flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <a
                          href="mailto:david@joinfreshly.com"
                          className="hover:text-[rgb(21,128,60)] transition-colors text-sm sm:text-base break-all"
                        >
                          david@joinfreshly.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-[rgb(21,128,60)] flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <a
                          href="tel:703-473-5256"
                          className="hover:text-[rgb(21,128,60)] transition-colors text-sm sm:text-base"
                        >
                          703-473-5256
                        </a>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-[rgb(21,128,60)] flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        <a
                          href="https://instagram.com/davidgendyy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[rgb(21,128,60)] transition-colors text-sm sm:text-base"
                        >
                          @davidgendyy
                        </a>
                      </div>

                      <div className="pt-6 sm:pt-8 flex justify-center">
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
                          <Image
                            src="/freshly-icon-square.png"
                            alt="Freshly Icon"
                            fill
                            style={{ objectFit: "contain" }}
                            className="opacity-90"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full sm:w-1/2 p-8 sm:p-10 lg:p-12 xl:p-16 order-1 sm:order-2">
                    <div className="relative h-72 sm:h-96 md:h-[440px] lg:h-[500px] xl:h-[540px] w-full rounded-2xl overflow-hidden">
                      <Image
                        src="/Aura .png"
                        alt="David Gendy - Founder of Freshly"
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-gray-200 p-8 sm:p-10 lg:p-12 xl:p-16 flex flex-col justify-center text-neutral-600">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6 text-neutral-950 text-center lg:text-left">
                  A Bit About David
                </h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  I'm a 19-year-old Coptic-Orthodox Egyptian American, born and
                  raised in the U.S. I'm currently pursuing a B.S. in Management
                  Information Systems at George Mason University with a minor in
                  Real Estate Development and Government Contracting. As a proud
                  and practicing Christian, I lead with a relationship-first
                  mindset—placing faith, family, and community at the heart of
                  everything I do. I've always carried the vision of building
                  something of my own, and that entrepreneurial drive is now
                  coming to life. My journey is just beginning, but every step is
                  driven by purpose, faith, and a relentless passion to create
                  impact.
                </p>
              </div>
            </div>
          </div>

          {/* George Abdallah - Co-Founder Card */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-stretch">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-gray-200 h-full">
                <div className="flex flex-col sm:flex-row-reverse sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
                  <div className="w-full sm:w-1/2 p-8 sm:p-10 lg:p-12 xl:p-16 order-2 sm:order-1">
                    <div className="mb-4 sm:mb-6">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-2 text-neutral-950">
                        George Abdallah
                      </h2>
                      <p className="text-base sm:text-lg text-gray-600 font-medium">
                        CTO & Co-Founder
                      </p>
                    </div>

                    <div className="space-y-3 sm:space-y-4 text-neutral-600">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-[rgb(21,128,60)] flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <a
                          href="mailto:ga@joinfreshly.com"
                          className="hover:text-[rgb(21,128,60)] transition-colors text-sm sm:text-base break-all"
                        >
                          ga@joinfreshly.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-[rgb(21,128,60)] flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <a
                          href="tel:703-595-1334"
                          className="hover:text-[rgb(21,128,60)] transition-colors text-sm sm:text-base"
                        >
                          703-595-1334
                        </a>
                      </div>

                      <div className="pt-6 sm:pt-8 flex justify-center">
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
                          <Image
                            src="/freshly-icon-square.png"
                            alt="Freshly Icon"
                            fill
                            style={{ objectFit: "contain" }}
                            className="opacity-90"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full sm:w-1/2 p-8 sm:p-10 lg:p-12 xl:p-16 order-1 sm:order-2">
                    <div className="relative h-72 sm:h-96 md:h-[440px] lg:h-[500px] xl:h-[540px] w-full rounded-2xl overflow-hidden bg-gray-100">
                      {/* Placeholder for George's image */}
                      <div className="flex items-center justify-center h-full">
                        <p className="text-gray-400 text-base sm:text-lg">
                          Photo Coming Soon
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-gray-200 p-8 sm:p-10 lg:p-12 xl:p-16 flex flex-col justify-center text-neutral-600">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6 text-neutral-950 text-center lg:text-left">
                  A Bit About George
                </h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  George's bio will be added here. This section will highlight his
                  background, expertise, and role as CTO & Co-Founder of Freshly.
                </p>
              </div>
            </div>
          </div>
        </div>
        </section>
      </div>

      {/* Vision Section with Gradient */}
      <section
        className={`
          ${inter.className}
          font-light relative py-12 sm:py-16 md:py-20 w-full bg-neutral-950
          bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(21,128,61,0.3),rgba(255,255,255,0))]
        `}
      >
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-8 sm:mb-10 md:mb-12 text-center text-white">
              Turning Frustration Into Innovation
            </h2>

            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-light mb-3 sm:mb-4 text-center md:text-left text-[rgb(21,128,60)]">
                  Problem
                </h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed px-4 sm:px-6 md:px-0 text-gray-300">
                  Grocery shopping is way more stressful than it should be —
                  especially for people like me. As someone who's anemic, I
                  often feel drained and low on energy, so walking through
                  crowded stores, remembering what I need, and planning meals
                  becomes overwhelming fast. I'm not alone either — studies show
                  the average person spends over 6 hours a week just planning,
                  shopping, and prepping meals. That's time and energy many of
                  us don't have. Wasted food, forgotten items, and unhealthy
                  food choices pile up. It's a broken system, and I've felt the
                  effects of it personally. That's why I'm building something
                  better.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-light text-center md:text-left mb-3 sm:mb-4 text-[rgb(21,128,60)]">
                  Idea
                </h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed px-4 sm:px-6 md:px-0 text-gray-300">
                  That's where Freshly comes in — my solution to the chaos of
                  grocery shopping. Freshly helps you track what you have, shows
                  you what to buy, suggests meals based on your diet, and even
                  compares prices to save you money. For people like me who deal
                  with low energy from anemia, it makes grocery shopping easier,
                  faster, and less overwhelming. It's all about saving time,
                  cutting waste, and making healthy eating simple.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-light mb-3 sm:mb-4 text-center md:text-left text-[rgb(21,128,60)]">
                  Solution
                </h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed px-4 sm:px-6 md:px-0 text-gray-300">
                  Freshly solves these everyday challenges through a seamless
                  app experience powered by smart technology. It automates
                  grocery planning, reduces decision fatigue, and brings clarity
                  to an otherwise chaotic process. With a clean interface and
                  real-time syncing, users can manage their meals and grocery
                  lists effortlessly from anywhere. The platform is designed to
                  support those with limited energy or tight schedules, helping
                  them stay organized and make better food choices with minimal
                  effort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
