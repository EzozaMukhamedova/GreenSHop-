"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const banners = [
  {
    title: "LET'S MAKE A BETTER ",
    highlight: "PLANET",
    image: "/headerBg.png",
  },
  {
    title: "GREEN LIFE FOR EVERYONE ",
    highlight: "EVERYWHERE",
    image: "/headerBg2.png",
  },
  {
    title: "SUSTAINABLE LIVING WITH ",
    highlight: "NATURE",
    image: "/headerBg3.png",
  },
];

export default function GreenShopSwiperBanner() {
  return (
    <div className="">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full h-[400px] bg-gray-100"
      >
        {banners.map((banner, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-between p-10 "
          >
            <div className="flex">
              <div className="max-w-lg">
                <h3 className="text-sm text-gray-600 uppercase">
                  Welcome to GreenShop
                </h3>
                <h1 className="text-5xl font-bold text-gray-900 mt-2">
                  {banner.title}
                  <span className="text-green-600">{banner.highlight}</span>
                </h1>
                <p className="text-gray-600 mt-4">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create a unique Urban Jungle.
                  Order your favorite plants!
                </p>
                <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-green-700">
                  SHOP NOW
                </button>
              </div>
              <div className="relative w-85 h-85 ml-[200px]">
                <Image
                  src={banner.image}
                  alt="Large Plant"
                  layout="fill"
                  objectFit="contain"
                />

                <div className="absolute bottom-0 left-0 w-30 h-30">
                  <Image
                    src="/headerBg.png"
                    alt="Small Plant"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
