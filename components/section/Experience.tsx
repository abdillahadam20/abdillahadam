"use client";

import ExperienceTimeline from "@/components/base/Experience";

const experiences = [
  {
    id: 1,
    role: "Web Developer Freelancer",
    company: "Self-Employed",
    location: "Lebak, Banten",
    period: "Jan 2024 - Present",
    description: [
      "Led the development of the company's flagship web application using React and TypeScript",
      "Implemented responsive designs and improved performance by 40%",
      "Mentored junior developers and conducted code reviews",
    ],
    skills: [
      "Next",
      "Nuxt",
      "Javascript",
      "TypeScript",
      "Tailwind CSS",
      "Laravel",
      "MySQL",
      "ShadCN UI",
      "Github",
      "Git",
    ],
  },
  {
    id: 2,
    role: "Compliance Support GoTo Financial",
    company: "PT. GoTo Gojek Tokopedia Tbk",
    location: "Blok-M, DKI Jakarta",
    period: "Dec 2023 - Feb 2025",
    description: [
      "Developed and maintained multiple client websites and web applications",
      "Collaborated with designers to implement pixel-perfect UI components",
      "Optimized web performance and implemented SEO best practices",
    ],
    skills: ["Reporting", "Ms. Office"],
    logo: "/experience/goto-logo.svg",
  },
  {
    id: 3,
    role: "Junior Frontend Developer",
    company: "PT. Privy Identitas Digital",
    location: "Bantul, Daerah Istimewa Yogyakarta",
    period: "Feb 2023 - Aug 2023",
    description: [
      "Assisted in developing the company website and internal tools",
      "Created responsive layouts and implemented UI components",
      "Participated in daily stand-ups and sprint planning meetings",
    ],
    skills: ["Nuxt", "Tailwind CSS", "Gitlab"],
    logo: "/experience/privy.png",
  },
  {
    id: 4,
    role: "Junior Web Developer",
    company: "PT. Privy Identitas Digital",
    location: "Kemang, DKI Jakarta",
    period: "Jul 2022 - Feb 2023",
    description: [
      "Assisted in developing the company website and internal tools",
      "Created responsive layouts and implemented UI components",
      "Participated in daily stand-ups and sprint planning meetings",
    ],
    skills: ["Laravel", "MySQL", "Gitlab", "Bootstrap"],
    logo: "/experience/privy.png",
  },
  {
    id: 5,
    role: "Salesforce Operation Officer",
    company: "PT. Privy Identitas Digital",
    location: "Bantul, Daerah Istimewa Yogyakarta",
    period: "Jul 2022 - Feb 2023",
    description: [
      "Assisted in developing the company website and internal tools",
      "Created responsive layouts and implemented UI components",
      "Participated in daily stand-ups and sprint planning meetings",
    ],
    skills: [
      "Salesforce Administrator",
      "Pardot",
      "Ms. Office",
      "Data Loader",
      "Salesforce Trailhead",
    ],
    logo: "/experience/privy.png",
  },
  {
    id: 6,
    role: "Telemarketing Agent",
    company: "PT. Sumber Bina Makmur",
    location: "Sunter, DKI Jakarta",
    period: "Feb 2021 - Apr 2021",
    description: [
      "Assisted in developing the company website and internal tools",
      "Created responsive layouts and implemented UI components",
      "Participated in daily stand-ups and sprint planning meetings",
    ],
    skills: ["Marketing", "Sales", "Ms. Office"],
    logo: "/experience/sbm-logo.png",
  },
  {
    id: 6,
    role: "Customer Care Agent Email",
    company: "PT. Shopee International Indonesia",
    location: "Kuningan, DKI Jakarta",
    period: "Jul 2019 - Nov 2019",
    description: [
      "Assisted in developing the company website and internal tools",
      "Created responsive layouts and implemented UI components",
      "Participated in daily stand-ups and sprint planning meetings",
    ],
    skills: ["Salesforce", "Customer Analystics"],
    logo: "/experience/shopee-logo.png",
  },
];

const Experience = () => {
  return (
    <div>
      <ExperienceTimeline experiences={experiences} />
    </div>
  );
};

export default Experience;
