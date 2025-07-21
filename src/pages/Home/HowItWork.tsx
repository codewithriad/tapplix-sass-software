"use client";

import React from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

const steps = [
  {
    icon: "/icons/step1.png",
    title: "Stakeholder Alignment",
    description:
      "We listen first. Through collaborative discovery sessions, we gather requirements, understand pain points, and define what success looks like.",
    points: [
      "Rapid stakeholder alignment",
      "Business & tech requirements clarified",
      "Shared vision for outcomes",
    ],
  },
  {
    icon: "/icons/step2.png",
    title: "Strategic Solution Mapping",
    description:
      "We propose with purpose. We design tailored solutions that align with your goals from product architecture to ML use cases.",
    points: [
      "Custom AI/ML opportunities scoped",
      "MVP or feature roadmap planned",
      "Scalable tech stack selected",
    ],
  },
  {
    icon: "/icons/step3.png",
    title: "UX Research & Product Design",
    description:
      "We validate before we build. Our UX-led process ensures every design decision is backed by insight and focused on impact and value.",
    points: [
      "User flows + wireframe created",
      "Data-informed UI/UX decisions",
      "Accessibility + usability prioritized",
    ],
  },
  {
    icon: "/icons/step4.png",
    title: "Agile Development & Launch",
    description:
      "We ship fast, learn fast. Using agile sprints, we develop, test, and deploy in cycles building iteratively with real-time client input.",
    points: [
      "Full-stack + ML development",
      "Weekly sprint demos + progress syncs",
      "Launch-ready with built-in scalability",
    ],
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="lg:max-w-[80vw] w-full mx-auto px-4 sm:px-8 py-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div>
            <span className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-semibold tracking-widest uppercase">
              ✹ How We Work ✹
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-gray-900 dark:text-white leading-tight max-w-2xl">
              Our Lean, Agile Blueprint
            </h2>
          </div>

          {/* Custom Swiper Arrows */}
          <div className="flex items-center gap-2 swiper-custom-buttons">
            <button
              className="swiper-button-prev w-10 h-10 border rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              className="swiper-button-next w-10 h-10 border rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Swiper Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group h-full border-t-4 border-transparent hover:border-blue-600 pt-10 px-6 pb-8 rounded-xl bg-white dark:bg-gray-800 shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col h-full items-start space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900 rounded-full p-3">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={50}
                    height={50}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
                <div className="text-gray-700 dark:text-gray-400 list-disc list-inside space-y-1 mt-auto">
                  {step.points.map((point, i) => (
                    <p key={i} className="flex items-center justify-start gap-2"><Check/> {point}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
