"use client";

import { FC } from "react";
import { Sparkles } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: "/icons/about-feature-card-icon1.png",
    title: "AI-Driven Transformation",
    description:
      "Seamlessly integrate AI and automation to scale operations, increase productivity, and reduce overhead.",
  },
  {
    icon: "/icons/about-feature-card-icon2.png",
    title: "Enterprise-Grade Software",
    description:
      "Custom CRMs, admin portals, and apps built to scale secure, performant, and tailored to your team.",
  },
  {
    icon: "/icons/about-feature-card-icon3.png",
    title: "Generative AI Engineering",
    description:
      "We design and train AI tools that think, recommend, and execute so your product works smarter, not harder.",
  },
  {
    icon: "/icons/about-feature-card-icon4.png",
    title: "Data-Driven Insights",
    description:
      "Turn your data into a decision-making engine with intuitive dashboards and real-time analytics.",
  },
];

const FeatureSection: FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Heading & Badge Section */}
      <div className="pt-8 sm:pt-12 md:pt-24 px-4 sm:px-6 lg:px-[12%]">
        {/* Badge */}
        <div className="flex justify-center lg:justify-start mb-4">
          <span className="text-xs sm:text-sm font-medium text-blue-600 bg-blue-50 dark:bg-blue-950 dark:text-blue-300 px-4 py-1 rounded-full inline-flex items-center gap-1">
            <Sparkles className="w-4 h-4" />
            TRUSTED BY INNOVATORS, BACKED BY RESULTS
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold 
          text-gray-900 dark:text-white leading-snug sm:leading-snug lg:leading-tight 
          mb-8 text-center lg:text-left max-w-full lg:max-w-[65%] mx-auto lg:mx-0">
          We Help Startups and Visionaries Build
          <br className="hidden lg:block" />
          Powerful, Scalable Technology
        </h2>

        {/* Description */}
        <div className="text-center lg:text-left space-y-4 max-w-full lg:max-w-[55%] mx-auto md:mx-0">
          <p className="text-base sm:text-[17px] md:text-lg text-gray-600 dark:text-gray-300">
            Tapplix is a Miami Beach-based software development and AI solutions
            company that believes great technology should move fast and make
            sense. From concept to code, we help startups, small businesses, and
            large businesses bring bold digital products to life through smart
            strategy, custom web and mobile development, and advanced generative
            AI.
          </p>
          <p className="text-base sm:text-[17px] md:text-lg text-gray-600 dark:text-gray-300">
            With over 50 successful projects and a 95%+ client satisfaction
            rate, Tapplix delivers fast, scalable, and human-centered tech
            solutions that drive real business results.
          </p>
        </div>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8 lg:px-28 py-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 
            p-5 sm:p-6 flex flex-col items-center text-center border border-gray-100 dark:border-gray-700"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 flex items-center justify-center rounded-full text-blue-600">
              <Image
                src={feature.icon}
                alt="feature-icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className="font-semibold text-base sm:text-lg mb-2 text-gray-900 dark:text-white">
              {feature.title}
            </h3>
            <p className="text-sm sm:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
