"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="py-10 sm:py-12 px-4 sm:px-6 md:px-10 lg:px-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto bg-white p-5 sm:p-8 md:p-10 rounded-2xl shadow-lg border border-gray-200">
        {/* Heading */}
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Your Success Starts Here!
          </h3>
          <p className="text-gray-600 mt-2 max-w-lg mx-auto">
            Tell us about your goals. We’ll reach out to schedule a free
            discovery call.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
        >
          {/* Full Name */}
          <div className="flex flex-col">
            <label
              htmlFor="fullName"
              className="text-sm font-medium mb-1 text-gray-700"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="px-4 py-2.5 rounded-md border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <label
              htmlFor="company"
              className="text-sm font-medium mb-1 text-gray-700"
            >
              Company / Organization <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              required
              placeholder="UI Surgeon"
              className="px-4 py-2.5 rounded-md border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone + Company Email (side by side on all screens) */}
          <div className="grid grid-cols-2 gap-4 md:col-span-2">
            {/* Phone */}
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="text-sm font-medium mb-1 text-gray-700"
              >
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="Your Phone"
                className="px-4 py-2.5 rounded-md border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Company Email */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-medium mb-1 text-gray-700"
              >
                Company Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Company email"
                className="px-4 py-2.5 rounded-md border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col md:col-span-2">
            <label
              htmlFor="subject"
              className="text-sm font-medium mb-1 text-gray-700"
            >
              Your Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              placeholder="Website redesign project"
              className="px-4 py-2.5 rounded-md border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label
              htmlFor="message"
              className="text-sm font-medium mb-1 text-gray-700"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              placeholder="Write your message here..."
              className="px-4 py-2.5 rounded-md border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md w-full sm:w-auto transition duration-300"
            >
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
