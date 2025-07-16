'use client'

const data = [
  {
    title: "AI / Machine Learning",
    sections: [
      {
        label: "Languages, Frameworks, Libraries",
        items: ["Python", "PyTorch", "TensorFlow", "NumPy", "Scikit-learn"],
      },
      {
        label: "Models",
        items: [
          "GPT-2",
          "GPT-3",
          "GPT-J",
          "GPT-NeoX",
          "BLOOM",
          "Claude",
          "LLaMA",
        ],
      },
    ],
  },
  {
    title: "Web3 / Blockchain Solutions",
    sections: [
      {
        label: "",
        items: [
          "Smart Contract Development",
          "Wallet Integration",
          "Decentralized App (dApp) Design & Development",
          "Tokenomics & Protocol Design",
        ],
      },
    ],
  },
  {
    title: "Web Development",
    sections: [
      {
        label: "Frontend",
        items: ["React", "React Native", "Flutter", "Redux", "HTML5", "CSS3", "Tailwind CSS", "TypeScript"],
      },
      {
        label: "Backend",
        items: ["Node.js", "Express.js", "Python (Django, Flask)", "PHP (Laravel, Core)", "Java (Spring Boot)", "Ruby on Rails"],
      },
      {
        label: "APIs",
        items: ["REST", "GraphQL", "WebSockets"],
      },
      {
        label: "Databases",
        items: ["MongoDB", "MySQL", "PostgreSQL", "SQL Server", "Firebase Realtime DB"],
      },
    ],
  },
  {
    title: "Mobile Development",
    sections: [
      {
        label: "Languages",
        items: ["Swift", "Kotlin", "Dart", "TypeScript"],
      },
      {
        label: "Frameworks",
        items: ["Flutter", "React Native", "SwiftUI"],
      },
      {
        label: "Platforms",
        items: ["iOS", "Android", "Expo", "Firebase for Push Notifications/Auth"],
      },
    ],
  },
  {
    title: "UX / UI Design",
    sections: [
      {
        label: "Tools",
        items: ["Figma", "Figjam (for collaborative wireframing or workshops)"],
      },
    ],
  },
  {
    title: "UX Research & Analytics",
    sections: [
      {
        label: "Research Tools",
        items: ["Pendo", "Maze", "Hotjar", "Qualtrics", "SurveyMonkey", "Dovetail"],
      },
      {
        label: "Analytics & Monitoring",
        items: ["Tableau", "DataDog", "Google Analytics", "Mixpanel"],
      },
      {
        label: "Session Replay / Heatmaps",
        items: ["DataDog", "Hotjar"],
      },
    ],
  },
  {
    title: "DevOps / Deployment / CI-CD",
    sections: [
      {
        label: "Version Control",
        items: ["Git", "GitHub", "GitLab", "Bitbucket"],
      },
      {
        label: "CI/CD Tools",
        items: ["GitHub Actions", "GitLab CI", "Jenkins", "CircleCI"],
      },
      {
        label: "Deployment Platforms",
        items: ["Heroku", "AWS (EC2, S3, Lambda, RDS, SageMaker)", "Google Cloud Platform (GCP)", "Vercel", "Netlify", "Azure"],
      },
      {
        label: "Containerization & Orchestration",
        items: ["Docker", "Kubernetes", "Helm"],
      },
      {
        label: "Infrastructure-as-Code",
        items: ["Terraform", "AWS CloudFormation"],
      },
    ],
  },
  {
    title: "Microservices & Cloud Architecture",
    sections: [
      {
        label: "Frameworks",
        items: ["Kubernetes", "Docker Compose"],
      },
      {
        label: "Service Mesh",
        items: ["Istio", "Linkerd"],
      },
      {
        label: "Message Brokers",
        items: ["Apache Kafka", "RabbitMQ", "Redis Streams"],
      },
      {
        label: "API Gateways",
        items: ["Kong", "Amazon API Gateway", "NGINX"],
      },
    ],
  },
  {
    title: "Team & Ops Tools",
    sections: [
      {
        label: "",
        items: ["Atlassian Jira", "Confluence", "Aha", "Slack", "Outlook", "Zoom"],
      },
    ],
  },
];

const TechCards = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      {/* Masonry columns layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {data.map((category) => (
          <div
            key={category.title}
            className="break-inside-avoid bg-white dark:bg-gray-950 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-950 w-full inline-block"
          >
            <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-3">{category.title}</h2>
            {category.sections.map((section, i) => (
              <div key={i} className="mb-4">
                {section.label && (
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-200 mb-1">
                    {section.label}:
                  </h3>
                )}
                <ul className="flex flex-wrap gap-2">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="bg-gray-50 dark:bg-gray-900 text-sm text-gray-700 dark:text-white px-3 py-1 rounded-full border dark:border-transparent border-gray-200 hover:bg-gray-100"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};



export default TechCards;