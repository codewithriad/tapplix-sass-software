"use client";
import Image from "next/image";
import Link from "next/link";

const ClutchReview = () => {
  return (
    <>
      <Link
        href={"https://clutch.co/profile/tapplix-applications-web-design"}
        className="cursor-pointer"
        target="_blank"
      >
        <div className="text-center lg:text-left">
          <div className="text-gray-700 dark:text-gray-300 font-semibold mb-2 text-sm">
            Review On
          </div>

          {/* clutch icon */}
          <div className="flex justify-start items-center gap-2">
            <div>
              <Image
                src="/icons/clutch-1.png"
                alt="footer-logo-light"
                width={60}
                height={60}
                className="block dark:hidden"
              />
              <Image
                src="/icons/clutch-2.png"
                alt="footer-logo-dark"
                width={60}
                height={60}
                className="hidden dark:block"
              />
            </div>

            <div className="flex text-orange-400">
              <span>★★★★★</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ClutchReview;
