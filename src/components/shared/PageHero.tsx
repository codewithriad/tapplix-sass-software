import React from "react";
import { MoveDown } from "lucide-react";
import Link from "next/link";

interface HeroProps {
    title: string,
    page: string,
}

const PageHero = ({title,page}:HeroProps) => {
    const handleScroll = () => {
    window.scrollBy({ top: 600, behavior: "smooth" }); // scroll down by 500px
  };
    return (
        <section className="relative w-full h-[400px] md:h-[700px] flex flex-col justify-center items-center bg-gradient-to-br from-[#0a0a0a] to-[#0d1027] overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-full bg-grid-pattern opacity-[0.03]" />
                
            </div>

            {/* Breadcrumb */}
            <div className="z-10 mb-4 px-4 mr-auto ml-[12%]">
                <div className=" px-4 py-1 border border-white/20 text-base
                 text-white/70 rounded-full backdrop-blur-md">
                    <Link href={'/'} className="text-blue-500 font-semibold">HOME</Link> — {page}
                </div>
            </div>

            {/* Title */}
            <div className="z-10 text-center md:text-left px-4 lg:ml-[12%]">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[70px] font-bold text-white leading-snug sm:leading-snug lg:max-w-[40%]">
                    {title}
                </h1>
            </div>

            {/* Scroll indicator */}
            <div
            onClick={handleScroll}
            className="absolute bottom-8 z-10">
                <div className="w-9 h-16 border border-white/30 rounded-full flex items-center justify-center animate-bounce">
                    <MoveDown className="text-white" size={18} />
                </div>
            </div>
        </section>
    );
};

export default PageHero;
