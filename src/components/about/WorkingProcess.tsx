"use client";

interface Step {
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    title: "Discovery & Consultation",
    description:
      "We begin by understanding business needs, goals and/or existing systems.",
  },
  {
    title: "Strategy Planning",
    description:
      "We develop a clear, agile-focused roadmap that outlines features, tech stack, and timelines.",
  },
  {
    title: "Market & User Research",
    description:
      "We identify your market fit using behavior data, competitor analysis, and user research.",
  },
  {
    title: "UX Design & MVP Build",
    description:
      "Designers and devs collaborate in agile sprints to launch a clean, scalable MVP.",
  },
  {
    title: "Testing & Launch",
    description:
      "We rigorously QA test and deploy your product with a stable, high-perf rollout.",
  },
];

export default function TimelineStepsGrid() {
  return (
    <section className="bg-[#f0f6ff] dark:bg-gray-950 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <span className="inline-block px-4 py-1 bg-white text-sm font-medium rounded-full border border-gray-200 shadow text-blue-500">
          Our Process
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-4 text-gray-900 dark:text-white py-4">
          How We Get Things Done
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">
          A streamlined roadmap we follow to build high-performance digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 flex flex-col items-center justify-center bg-white dark:bg-gray-900 border-2 border-blue-500 rounded-full shadow hover:scale-105 transition duration-300 mb-4">
              <span className="text-blue-600 text-2xl font-bold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-xs text-gray-500 dark:text-gray-200 mt-1">Step</p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-200">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
