"use client";

import React, { useState } from "react";
import { Play, Star } from "lucide-react";
import Marquee from "react-fast-marquee";
import ModalVideo from "react-modal-video";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "react-modal-video/css/modal-video.min.css";
import Image from "next/image";

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const heroImages = [
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=60",
  ];

  const marqueeItems = [
    "BUILT FOR USERS, DESIGNED TO WIN",
    "YOUR TECH. OUR TALENT. ONE VISION",
    "MOBILE FIRST",
    "HUMAN-CENTERED DESIGN",
    "SMART CODE THAT DELIVERS",
  ];

  return (
    <div className="relative bg-white dark:bg-gray-900 overflow-hidden">
      <div className="relative overflow-hidden pt-8 pl-4 md:pt-24 md:pl-[12%] bg-[linear-gradient(180deg,_rgba(48,_103,_255,_0.08),_rgba(48,_103,_255,_0))] bg-cover bg-no-repeat">
        {/* Content */}
        <div className="mx-auto px-4 py-8 lg:py-16">
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
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight max-w-full md:max-w-[80%]">
                  Build Smarter. Scale Faster. Tap Into Tomorrow.
                </h1>

                <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Technology moves fast. So should you. At Tapplix, we help bold
                  startups and future-focused companies launch scalable
                  software, integrate AI, and solve big challenges with smart
                  code and smarter strategy.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md">
                    Let&apos;s Talk
                  </button>

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

                {/* Play Button with Rotating Text */}
                <div className="absolute bg-white bottom-8 left-[-4rem] flex items-center justify-center z-50 rounded-full">
                  <div className="relative pointer-events-auto w-32 h-32">
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: "20s" }}>
                      <svg className="w-full h-full" viewBox="0 0 120 120">
                        <defs>
                          <path id="circle" d="M 60, 60 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
                        </defs>
                        <text className="text-sm fill-[#0b0c0c79] dark:fill-gray-200 font-bold tracking-widest">
                          <textPath href="#circle">
                            DESIGN • SCALE • STRATEGY • DESIGN • SCALE • STRATEGY •
                          </textPath>
                        </text>
                      </svg>
                    </div>
                    <button
                      onClick={() => setIsVideoOpen(true)}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full text-gray-800 flex items-center justify-center"
                    >
                      <Play className="w-8 h-8 fill-current" />
                    </button>
                  </div>
                </div>

                {/* Decorative Circle */}
                <div className="absolute bottom-6 right-6 w-20 h-20 border-2 border-red-600 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 border border-white/30 dark:border-white/10 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 border border-white/20 dark:border-white/5 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-white/20 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Video */}
        <ModalVideo
          channel="youtube"
          youtube={{ mute: 0, autoplay: 1 }}
          isOpen={isVideoOpen}
          videoId="r4KpWiK08vM"
          onClose={() => setIsVideoOpen(false)}
        />
      </div>

      {/* Marquee */}
      <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 py-4">
        <Marquee speed={50} gradient={false}>
          {marqueeItems.map((text, i) => (
            <div key={i} className="flex items-center mx-8">
              <span className="text-lg font-semibold whitespace-nowrap">{text}</span>
              <div className="w-2 h-2 bg-blue-400 dark:bg-blue-600 rounded-full mx-8" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Hero;
