"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

interface TestimonialCardV2Props {
  title: string;
  desc: string;
  authorName: string;
  authorRole: string;
  authorImg: string | StaticImageData;
  brandLogo: string | StaticImageData;
}

const TestimonialCardV2 = ({
  title,
  desc,
  authorName,
  authorRole,
  authorImg,
  brandLogo,
}: TestimonialCardV2Props) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between h-full w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <span className="text-sm font-semibold text-indigo-600 mb-2">
        {title}!
      </span>
      <p className="text-lg text-gray-600 italic mb-6">“{desc}”</p>

      {/* Bottom area: Author and Brand */}
      <div className="flex items-center justify-between">
        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={authorImg}
              alt={authorName}
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h6 className="font-semibold text-gray-900">{authorName}</h6>
            <span className="text-sm text-gray-500">{authorRole}</span>
          </div>
        </div>

        {/* Brand logo */}
        <div className="w-32 h-auto">
          <Image
            src={brandLogo}
            alt="Brand Logo"
            width={100}
            height={30}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCardV2;
