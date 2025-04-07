"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FreshlyIcon from "../../../public/freshly-icon-square.png";

export default function Sponsors() {
  const sponsors = [
    { name: "Beto", src: FreshlyIcon },
    { name: "Mercedes", src: FreshlyIcon },
    { name: "Audi", src: FreshlyIcon },
    { name: "Hyundai", src: FreshlyIcon },
    { name: "Mercedes", src: FreshlyIcon },
    { name: "Audi", src: FreshlyIcon },
    { name: "Hyundai", src: FreshlyIcon },
    { name: "Mercedes", src: FreshlyIcon },
    { name: "Audi", src: FreshlyIcon },
    { name: "Hyundai", src: FreshlyIcon },
    { name: "Mercedes", src: FreshlyIcon },
    { name: "Audi", src: FreshlyIcon },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="bg-white pb-6">
      <div className="border-b-2 border-gray-300 opacity-75"></div>
      <div className="mx-auto max-w-7xl px-4 text-center my-10">
        <h2 className="mb-4 text-2xl font-semibold">
          Trusted By Top Brands &amp; Platforms
        </h2>

        <Slider
          {...settings}
          className="
            [&_.slick-list]:!mx-auto
            [&_.slick-track]:!flex
            [&_.slick-track]:!justify-center
          "
        >
          {sponsors.map((sponsor, idx) => (
            <div key={idx} className="flex items-center justify-center">
              <img
                src={sponsor.src.src}
                alt={sponsor.name}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="border-b-2 border-gray-300 opacity-75"></div>
    </div>
  );
}
