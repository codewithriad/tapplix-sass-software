"use client";
/* eslint-disable react/no-unescaped-entities */
import { Phone, MapPin, Send, ArrowUp } from "lucide-react";
import Image from "next/image";
import ClutchReview from "./ClutchReview";
import Link from "next/link";

const Footer = () => {


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <footer className="bg-slate-50 dark:bg-black pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Left Section - Our Solutions */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-6 border-b-2 border-gray-900 pb-2 inline-block">
                Our Solutions
              </h2>
              <ul className="space-y-3 text-gray-600 dark:text-white">
                <li>Custom Software Development</li>
                <li>AI & Machine Learning Integration</li>
                <li>UX/UI Research & Design</li>
                <li>Mobile App Development (iOS & Android)</li>
                <li>IT Consulting & Strategy</li>
                <li>Web Development</li>
              </ul>
            </div>
          </div>

          {/* Center Section - Logo */}
          <div className="flex justify-center items-start">
            <div className="text-center">
              <Image
                src="/logo.png"
                alt="Tapplix Logo"
                width={192}
                height={48}
                className="w-48 h-auto mx-auto mb-4 dark:hidden"
              />
            </div>
          </div>

          {/* Right Section - What Sets Us Apart */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <div className="text-sm text-blue-500 font-medium mb-2">
                ✦ THEY TOLD ABOUT ✦
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200 my-4">
                What Sets Us Apart
              </h2>
              <p className="text-gray-600 dark:text-white leading-relaxed">
                At Tapplix, innovation meets execution. We're a Miami-based
                technology partner helping startups and enterprises turn complex
                ideas into scalable digital products built with speed, clarity,
                and real results in mind.
              </p>
            </div>

            {/* Clutch Review */}
            <div>
              <ClutchReview/>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-blue-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Phone */}
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="p-2 bg-blue-100 rounded-full">
                <Phone className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-blue-600 font-medium">
                  Call Any Time
                </div>
                <div className="text-gray-900 dark:text-white font-semibold">
                 +1 (305) 986-6855
                </div>
              </div>
            </div>

            {/* Address */}
            <Link href={'/contact'} className="flex items-center justify-center md:justify-start space-x-3">
              <div className="p-2 bg-blue-100 rounded-full">
                <MapPin className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-blue-600 font-medium">Address</div>
                <div className="text-gray-900 dark:text-white font-semibold">
                  1680 Michigan Ave Suite#700 Miami Beach, FL 33139
                </div>
              </div>
            </Link>

            {/* Email */}
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="p-2 bg-blue-100 rounded-full">
                <Send className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-blue-600 font-medium">
                  Say Hello
                </div>
                <div className="text-gray-900 dark:text-white font-semibold">
                  info@tapplix.tech
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-600 dark:text-white text-sm text-center md:text-left">
            Copyright 2024 <span className="font-semibold">Tapplix</span> |
            Design By <span className="font-semibold">Tapplix</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-gray-600 dark:text-white">
            <a href="#" className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
              Support Policy
            </a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
