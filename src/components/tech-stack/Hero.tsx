import React from "react";
import { MoveDown } from "lucide-react";
import Link from "next/link";

const Hero = () => {
    const handleScroll = () => {
        window.scrollBy({ top: 600, behavior: "smooth" });
    };

    return (
        <section className="relative w-full h-[400px] md:h-[700px] flex flex-col justify-center items-center bg-gradient-to-br from-[#0a0a0a] to-[#0d1027] overflow-hidden">

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-full bg-grid-pattern opacity-[0.03]" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl px-4 md:px-8 flex flex-col items-center md:items-start">

                {/* Breadcrumb */}
                <div className="mb-4 w-full md:w-auto">
                    <div className="flex justify-center items-center gap-1 px-4 py-2 border border-white/20 text-white/70 rounded-full backdrop-blur-md text-sm">
                        <Link href="/" className="text-green-500 font-bold">HOME</Link> — <span className="text-amber-400">Tech Stack</span>
                    </div>
                </div>

                {/* Title */}
                <div className="max-w-xl lg:max-w-2xl text-center md:text-left space-y-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug">
                        Technology & Tools We Trust
                    </h1>
                    <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                        The programming languages, frameworks, and platforms that power our solutions and drive successful project delivery.
                    </p>
                </div>
            </div>

            {/* Scroll Down Button */}
            <div
                onClick={handleScroll}
                className="absolute bottom-6 z-10 cursor-pointer"
            >
                <div className="w-9 h-16 border border-white/30 rounded-full flex items-center justify-center animate-bounce">
                    <MoveDown className="text-white" size={18} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
