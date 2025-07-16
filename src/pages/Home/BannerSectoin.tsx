"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

const BannerSection = () => {
  const cardData = [
    {
      image: "/Home/1.jpg",
      subheading: "Our leadership",
      heading:
        "Tapplix Leadership in Forbes: Expert Insights from Morgan Shuler",
      desc: "Tapplix leveraged AI tools to streamline client workflows, cutting process times in half.",
      link: "https://councils.forbes.com/profile/Morgan-Shuler-Founder-Chief-Technology-Officer-Tapplix-Applications-Web-Design/c7ba1203-6c48-4c60-bc5c-d8cdecfe27c5",
    },
    {
      image: "/Home/3.jpg",
      subheading: "Mobility tech | ai + web3",
      heading: "Ride share Reinvented: The CocheVia Platform",
      desc: "This case study reveals how Tapplix built CocheVia, an AI-powered, driver-first ride share platform with integrated Web3, AI, and advanced mobility for all users.",
      link: "https://councils.forbes.com/profile/Morgan-Shuler-Founder-Chief-Technology-Officer-Tapplix-Applications-Web-Design/c7ba1203-6c48-4c60-bc5c-d8cdecfe27c5",
    },
    {
      image: "/Home/2.jpg",
      subheading: "ai platform | culture-first intelligence",
      heading: "Building Culturally Fluent AI: The Ebonix Experience",
      desc: "This case study explores how Tapplix brought Ebonix AI to life,a generative AI platform designed to reflect diverse cultural identities. Built using GPT-2, TensorFlow, Hugging Face and a custom prompt engine.",
      link: "https://councils.forbes.com/profile/Morgan-Shuler-Founder-Chief-Technology-Officer-Tapplix-Applications-Web-Design/c7ba1203-6c48-4c60-bc5c-d8cdecfe27c5",
    },
  ];
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white dark:bg-gray-900">
      {/* Left Side Banner */}
      <div className="lg:col-span-5 xl:col-span-4">
        <div className="relative w-full h-[300px] md:h-[900px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1706466614967-f4f14a3d9d08?w=1000&auto=format&fit=crop&q=60"
            alt="Banner Image"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 pt-6 px-4 md:pt-16 md:px-8 flex flex-col text-white bg-black/40">
            <div className="flex flex-col justify-between h-full space-y-6">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-500">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M6.63.34a.5.5 0 0 1 .74 0l.36 4.05a.5.5 0 0 0 .87.3l3.11-2.61a.5.5 0 0 1 .7.7L9.36 5.67a.5.5 0 0 0 .25.8l4.05.36a.5.5 0 0 1 0 .74l-4.05.36a.5.5 0 0 0-.25.8l2.61 3.11a.5.5 0 0 1-.7.7L8.33 9.36a.5.5 0 0 0-.8.25l-.36 4.05a.5.5 0 0 1-.74 0l-.36-4.05a.5.5 0 0 0-.8-.25L2.55 11.97a.5.5 0 0 1-.7-.7L4.64 8.33a.5.5 0 0 0-.25-.8l-4.05-.36a.5.5 0 0 1 0-.74l4.05-.36a.5.5 0 0 0 .25-.8L1.85 2.55a.5.5 0 0 1 .7-.7l3.11 2.61a.5.5 0 0 0 .8-.25L6.63.34Z" />
                  </svg>
                  Business Transformations
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M6.63.34a.5.5 0 0 1 .74 0l.36 4.05a.5.5 0 0 0 .87.3l3.11-2.61a.5.5 0 0 1 .7.7L9.36 5.67a.5.5 0 0 0 .25.8l4.05.36a.5.5 0 0 1 0 .74l-4.05.36a.5.5 0 0 0-.25.8l2.61 3.11a.5.5 0 0 1-.7.7L8.33 9.36a.5.5 0 0 0-.8.25l-.36 4.05a.5.5 0 0 1-.74 0l-.36-4.05a.5.5 0 0 0-.8-.25L2.55 11.97a.5.5 0 0 1-.7-.7L4.64 8.33a.5.5 0 0 0-.25-.8l-4.05-.36a.5.5 0 0 1 0-.74l4.05-.36a.5.5 0 0 0 .25-.8L1.85 2.55a.5.5 0 0 1 .7-.7l3.11 2.61a.5.5 0 0 0 .8-.25L6.63.34Z" />
                  </svg>
                </span>
                <h1 className="text-xl md:text-2xl xl:text-4xl font-bold max-w-xl leading-snug">
                  Success in the Field: Case Studies & Thought Leadership
                </h1>
              </div>
              <div className="pb-10">
                <p className="text-sm md:text-base max-w-lg mb-4">
                  Explore how Tapplix delivers powerful results through
                  custom-built software, AI-driven innovation, and expert
                  insight published on Forbes Technology Council.
                </p>
                <Link
                  href="https://councils.forbes.com/profile/Morgan-Shuler-Founder-Chief-Technology-Officer-Tapplix-Applications-Web-Design/c7ba1203-6c48-4c60-bc5c-d8cdecfe27c5" target="_blank"
                  className="bg-blue-500 text-white text-base font-semibold rounded px-4 py-2 inline-flex items-center justify-center hover:bg-blue-600 transition w-40 h-12"
                >
                  View All Stories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Swiper with 2 Cards at a time */}
      <div className="lg:col-span-7 xl:col-span-8 px-4 md:px-6 lg:px-10 bg-black">
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl overflow-hidden max-w-[510px] min-h-[720px] md:min-h-[830px] mx-auto mt-10">
                <Image
                  src={card.image}
                  alt={card.heading}
                  width={510}
                  height={320}
                  className="w-full h-fit object-cover"
                />
                <div className="p-6 flex flex-col justify-between h-[calc(100%-320px)]">
                  <p className="text-base uppercase font-medium text-blue-500 mb-2">
                    {card.subheading}
                  </p>
                  <h3 className="text-xl xl:text-3xl font-semibold text-gray-800 dark:text-white mb-4">
                    {card.heading}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-300 mb-6">
                    {card.desc}
                  </p>
                  <Link href={card.link} target="_blank" className="mt-auto text-blue-600 hover:underline text-sm font-semibold">
                    <button>
                      Learn More →
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BannerSection;
