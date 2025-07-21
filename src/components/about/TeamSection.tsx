"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "Morgan Shuler",
    title: "CEO & Chief Technology Officer",
    image: "/team/morgan.jpg",
  },
  {
    name: "Branden Ballew",
    title: "Chief Business Development Officer",
    image: "/team/michael.jpg",
  },
  {
    name: "Netsanet Shamebo",
    title: "Chief Product Officer",
    image: "/team/netsan.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#FFF9EF] dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-20" id="team">
      <div className="max-w-full lg:max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left lg:w-1/2">
          <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-medium text-gray-900 bg-white rounded-full border border-gray-200 w-fit mx-auto md:mx-0">
            <span className="text-red-500"></span> OUR CREATIVE TEAM <span className="text-red-500"></span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white leading-tight">
            Empowered by Servant Leadership
          </h2>
          <p className="text-gray-600 dark:text-gray-200 text-lg max-w-[80%]">
            At Tapplix, our leadership team brings together an abundance of expertise in software engineering, UX strategy, AI innovation, and business development.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-gray-400 dark:bg-blue-300 rounded-full font-medium hover:bg-blue-500 hover:text-white transition">
            <button>
              Join Our Team <span className="ml-2">↘</span>
            </button>
          </Link>
        </div>

        {/* Right Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 lg:w-1/2">
          {teamMembers.map((member) => (
            <div
              key={member.name}
             className="group min-h-[380px] min-w-[300px] w-full sm:w-full md:w-full lg:w-[320px] bg-white dark:bg-black rounded-[500px_500px_10px_10px] border border-[#1212121a] shadow-sm transition-all duration-300 overflow-hidden relative hover:rounded-tl-[20px] hover:rounded-tr-[20px] mx-auto"
            >
              {/* Top Image Section */}
              <div className="relative w-full h-[280px] sm:h-[280px] md:h-[300px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="100vw"
                />
                {/* Social Overlay */}
                <ul className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-blue-500"><FaFacebookF /></a></li>
                  <li><a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-sky-400"><FaTwitter /></a></li>
                  <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-red-400"><FaPinterestP /></a></li>
                  <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-pink-400"><FaInstagram /></a></li>
                </ul>
              </div>

              {/* Bottom Content */}
              <div className="text-center py-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h4>
                <span className="text-sm text-gray-500 dark:text-gray-200">{member.title}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
