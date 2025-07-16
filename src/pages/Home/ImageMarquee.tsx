import Marquee from "react-fast-marquee";
import Image from "next/image";

const ImageMarquee = () => {
  const images = [
    "/testimonials/b1.jpg",
    "/testimonials/b2.jpg",
    "/testimonials/b3.jpg",
    "/testimonials/b4.jpg",
  ];

  return (
    <section className="pt-20 pb-12 px-4 bg-white dark:bg-gray-900 transition-colors">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          We Worked With the Global Largest Brands
        </h2>
      </div>

      {/* Marquee */}
      <div className="lg:w-2/3 mx-auto">
        <Marquee
          speed={60}
          gradient={false}
          pauseOnHover={true}
          className="overflow-hidden"
        >
          <div className="flex items-center gap-6 sm:gap-10 px-2 sm:px-6">
            {images.map((src, index) => (
              <div
                key={index}
                className="min-w-[120px] sm:min-w-[160px] flex justify-center items-center"
              >
                <Image
                  src={src}
                  alt={`Brand ${index + 1}`}
                  width={160}
                  height={100}
                  className="w-full h-auto rounded-lg object-contain hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default ImageMarquee;
