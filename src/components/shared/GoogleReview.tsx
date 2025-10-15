"use client";
import Image from "next/image";

const GoogleReview = () => {
  return (
    <div className="text-center lg:text-left">
      <div className="text-gray-700 dark:text-gray-300 font-semibold mb-2 text-sm">
        Review On
      </div>
      <div className="flex justify-start items-center gap-2">
        <div>
          <Image
            src="/icons/google.png"
            alt="google review logo"
            width={60}
            height={60}
            className="block"
          />
        </div>

        <div className="flex text-orange-400">
          <span>★★★★★</span>
        </div>
      </div>
    </div>
  );
};

export default GoogleReview;
