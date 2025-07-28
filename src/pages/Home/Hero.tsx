"use client";

import { Star } from "lucide-react";
import Marquee from "react-fast-marquee";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "react-modal-video/css/modal-video.min.css";
import Image from "next/image";

const Hero = () => {

  const heroImages = [
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=60",
  ];

  const marqueeItems = [
    "MOBILE FIRST",
    "HUMAN-CENTERED DESIGN",
    "SMART CODE THAT DELIVERS",
    "SCALE FAST WITH CONFIDENCE",
    "BUILT FOR USERS, DESIGN TO WIN",
    "YOUR TECH. OUR TALENT. ONE VISION"
  ];

  return (
    <div className="relative bg-white dark:bg-gray-900 overflow-hidden">
      <div className="relative overflow-hidden pt-8 pl-4 md:pt-24 md:pl-[12%] bg-[linear-gradient(180deg,_rgba(48,_103,_255,_0.08),_rgba(48,_103,_255,_0))] bg-cover bg-no-repeat">
        {/* Content */}
        <div className="mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Text */}
            <div>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                {["AI-POWERED SOLUTIONS", "ENTERPRISE SOFTWARE", "WEB DEVELOPMENT", "MOBILE APPS"].map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl lg:text-[58px] leading-[initial] font-bold text-gray-900 dark:text-white">
                  Tap Into Tomorrow with Cutting-Edge Technology
                </h1>
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <a href="mailto:info@tapplix.tech?subject=Let%27s%20Work%20Together&body=Hi%20Tapplix%20Team%2C%0A%0AI%20am%20interested%20in%20working%20with%20you!">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md">
                      Let&apos;s Talk
                    </button>
                  </a>

                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                      Review On
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900 dark:text-white">Clutch</span>
                      <div className="flex items-center">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-red-400 fill-red-400" />
                        ))}
                        <Star className="w-4 h-4 text-red-400 fill-red-400/50" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Swiper + Play */}
            <div className="relative">
              <div className="relative w-full h-[400px] lg:h-[500px] shadow-2xl">
                <Swiper
                  modules={[Autoplay, EffectFade]}
                  effect="fade"
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  loop={true}
                  className="w-full h-full rounded-md"
                >
                  {heroImages.map((img, i) => (
                    <SwiperSlide key={i} className="w-full h-full">
                      <Image src={img} alt={`Hero ${i + 1}`} fill className="object-cover" />
                    </SwiperSlide>
                  ))}
                </Swiper>


              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Marquee */}
      <div className="bg-gray-900 dark:bg-black text-white dark:text-gray-300 py-4">
        <Marquee speed={50} gradient={false}>
          {marqueeItems.map((text, i) => (
            <div key={i} className="flex items-center mx-8">
              <div className="w-2 h-2 bg-blue-400 dark:bg-blue-600 rounded-full mx-4" />
              <span className="text-lg font-semibold whitespace-nowrap">{text}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Hero;
