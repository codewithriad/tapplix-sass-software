"use client";
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";

const stats = [
    { number: 50, suffix: "+", label: "Project Completed" },
    { number: 40, suffix: "+", label: "Global Clients" },
    { number: 6, suffix: "", label: "Years of Experience" },

];

export default function DiscoverSection() {
    return (
        <section className="bg-white dark:bg-gray-900 py-20 px-4">
            <div className="max-w-screen-xl mx-auto">
                {/* Title & Subtitle */}
                <div className="text-center md:text-left mb-16">
                    <div className="text-blue-500 font-bold text-sm">
                        <h3>Discover the Advantage</h3>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mt-4 md:max-w-[60%] text-black dark:text-white">
                        We’re a Miami Beach–Based Tech Company Powering Bold Digital Innovation
                    </h2>
                    <p className="max-w-3xl mx-auto md:mx-0 mt-4 text-gray-600 dark:text-gray-200 text-sm md:text-base">
                        At Tapplix, we specialize in delivering high-impact software solutions for startups, enterprises, and visionary founders. From scalable web apps and mobile platforms to AI-integrated systems, we transform complex ideas into powerful digital experiences.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Left Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="rounded-[40px] overflow-hidden"
                    >
                        <div className="rounded-[20px] overflow-hidden">
                            <Image
                                src="/icons/texture.webp"
                                alt="Discover Image"
                                width={420}
                                height={680}
                                className="object-cover rounded-tr-[40px] rounded-br-[40px]"
                            />
                        </div>
                    </motion.div>

                    {/* Right Content */}
                    <div className="space-y-6">
                        <p className="text-gray-600 dark:text-gray-200 text-sm md:text-base">
                            Where innovation meets passion in a journey that started with a simple idea and a shared goal.
                            From humble beginnings to our current aspirations — we’re driven to build experiences that matter.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm"
                                >
                                    <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
                                        <CountUp end={stat.number} duration={2} />{stat.suffix}
                                    </h3>
                                    <h4 className="text-gray-700 dark:text-gray-200 mt-2 text-sm md:text-lg font-semibold">{stat.label}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


