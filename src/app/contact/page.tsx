"use client";


import ContactSection from "@/pages/Home/Contact/ContactSection";
import { MapPin, Clock } from "lucide-react";


const page = () => {
  return (
    <section id="contact" className="pt-20 scroll-mt-16 bg-white dark:bg-gray-950">

      {/* text address and map */}
      <div className="max-w-7xl mx-auto px-4 lg:py-20 grid lg:grid-cols-12 gap-10">
        {/* Left Column: Office Address */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold uppercase tracking-wide">
              <MapPin size={16} />
              Office Address
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">Our Office <span className="text-blue-600">Locations</span></h2>
            <p className="text-gray-600 dark:text-gray-200 mt-3">
              Feel free to adapt this based on the specific services or features your IT service company provides.
            </p>
          </div>

          {/* Address Details */}
          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">United States</h4>
              <p className="text-gray-500 dark:text-gray-300">Miami</p>
              <p className="text-gray-600 dark:text-gray-200">1680 Michigan Ave Suite #700, Miami Beach, FL 33139</p>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="text-blue-600 mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Working Hours</p>
                <p className="text-gray-600 dark:text-gray-200 text-sm">Mon to Sat: 8am – 9pm</p>
                <p className="text-gray-600 dark:text-gray-200 text-sm">Sunday: <span className="text-red-500">Closed</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Map */}
        <div className="lg:col-span-7">
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.094840725323!2d-80.1412742249051!3d25.792919408129497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b48893c7f63d%3A0x4b1d89859d31b516!2s1680%20Michigan%20Ave%20%23700%2C%20Miami%20Beach%2C%20FL%2033139%2C%20USA!5e0!3m2!1sen!2sbd!4v1721996820411!5m2!1sen!2sbd"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-none"
            ></iframe>
          </div>
        </div>

      </div>

      {/* contact form */}
      <ContactSection />
    </section>
  );
}
export default page