"use client";

import "swiper/css";
import "swiper/css/effect-fade";

import ClutchReview from "@/components/shared/ClutchReview";
import GoogleReview from "@/components/shared/GoogleReview";
import TestimonialCardV2 from "@/components/shared/TestimonialCard";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  const testimonials = [
    {
      authorName: "Stuart Loggie",
      authorRole: "CEO & Founder, Cube RE",
      authorImage: "/testimonials/client1.png",

      desc: "Thanks to Tapplix Applications & Web Design LLC's work, the client noticed a significant increase in user engagement. The app was accessible, and the integration with the backend system improved client satisfaction. The team was proactive, responsive, and timely, ensuring a smooth development process.",
      title: "Mobile App Dev for Real Estate Company",
    },
    {
      authorName: "John Herman",
      authorRole: "CEO & Co-Founder, BERO",
      authorImage: "/testimonials/client2.png",
      desc: "Tapplix Applications & Web Design LLC improved the client's operational efficiency, customer insights, and online engagement through their solutions. They impressed the client with their organization, efficiency, and responsiveness. Their deep expertise stood out in the partnership.",
      title: "AI System Integration for Food & Beverage Company",
    },
    {
      authorName: "George LaPierre",
      authorRole: "Founder & CEO, Verity",
      authorImage: "/testimonials/client3.png",

      desc: "With Tapplix Applications & Web Design LLC's solution, the client saw increased operational efficiency and reduced manual mistake rates. The team showcased excellent project management, meeting all milestones within the predetermined budget and responding promptly to the client's requests.",
      title: "Custom Software Development for Hospitality Company",
    },
  ];

  return (
    <section className="py-20 bg-indigo-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6">
        {/* Left Side */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            What Our Clients Are Saying
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 text-lg sm:text-xl leading-[inherit]">
            Real stories from real teams we’ve helped scale, innovate, and
            succeed. At Tapplix, we don’t just deliver solutions, we build
            long-term partnerships.
          </p>

          {/* Reviewed Brands */}
          <div className="flex gap-12 flex-wrap mt-6">
            {/* Clutch */}
            <div className="border-r-2 border-neutral-400/50 pr-10 dark:border-neutral-600/50">
              <ClutchReview />
            </div>

            {/* Google */}
            <div>
              <GoogleReview />
            </div>
          </div>
        </div>

        {/* Right Side - Swiper */}
        <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:w-full h-fit">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full h-[420px]"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center h-[420px] px-2 md:px-4"
              >
                <TestimonialCardV2
                  title={t.title}
                  desc={t.desc}
                  authorName={t.authorName}
                  authorRole={t.authorRole}
                  authorImg={t.authorImage}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
