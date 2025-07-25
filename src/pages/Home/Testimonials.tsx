"use client";

import "swiper/css";
import "swiper/css/effect-fade";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import TestimonialCardV2 from "@/components/shared/TestimonialCard";
import ClutchReview from "@/components/shared/ClutchReview";
import GoogleReview from "@/components/shared/GoogleReview";
import Link from "next/link";

export default function Testimonials() {
  const testimonials = [
    {
    authorName: "Alice Smith",
    authorRole: "CTO, StartupX",
    authorImage: "/testimonials/client1.png",
    brandLogo: "/testimonials/clutch.png",
     
    desc: "Tapplix is a true innovation partner — blending deep tech skills with smart strategy. Their team delivers fast, future-ready solutions from MVP to scale, with clear communication and a lean, agile approach.",
    title: "Great Digital Marketing!",
  },
     {
      authorName: "Alice Smith",
      authorRole: "CTO, StartupX",
      authorImage: "/testimonials/client4.png",
      brandLogo: "/testimonials/b1.jpg",
      desc: "The line's length and style can be changed to better fit your document's general layout and style. Stars, dashes, or even a graphical element are some other divider alternatives.",
      title: "Great Digital Marketing!",
    },
    {
      authorName: "Ryan Lee",
      authorRole: "Marketing Head, Nova Inc.",
      authorImage: "/testimonials/client2.png",
      brandLogo: "/testimonials/b2.jpg",
      desc: "You can adjust the length and style of the line to match the overall design and formatting of your document. Some other divider options include dashes, stars, or even a graphical element.",
      title: "Digital Experience Redefined",
    },
    {
      authorName: "Sofia Lim",
      authorRole: "Founder, Flow AI",
      authorImage: "/testimonials/client3.png",
      brandLogo: "/testimonials/b3.jpg",
      desc: "The line's length and style can be changed to better fit your document's general layout and style. Stars, dashes, or even a graphical element are some other divider alternatives.",
      title: "Great Consulting!",
    },
    {
      authorName: "Sofia Lim",
      authorRole: "Founder, Flow AI",
      authorImage: "/testimonials/client4.png",
      brandLogo: "/testimonials/b4.jpg",
      desc: "You can adjust the length and style of the line to match the overall design and formatting of your document. Some other divider options include dashes, stars, or even a graphical element.",
      title: "Marketing With Results",
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
            Real stories from real teams we’ve helped scale, innovate, and succeed. At Tapplix, we don’t just deliver solutions, we build long-term partnerships.
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 text-lg sm:text-xl leading-[inherit]">
            I am wondering if there is a way to add case study pages on our website based on our reviews on <Link href={'http://Clutch.co'} className="text-blue-600 underline" target="_blank">Clutch.co</Link>
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
        <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:w-full h-[340px]">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full h-full"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center h-full px-2 md:px-4"
              >
                <TestimonialCardV2
                  title={t.title}
                  desc={t.desc}
                  authorName={t.authorName}
                  authorRole={t.authorRole}
                  authorImg={t.authorImage}
                  brandLogo={t.brandLogo}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}