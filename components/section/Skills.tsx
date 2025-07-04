import SkillMarquee from "@/components/base/Marquee";
import { motion } from "motion/react";

const skills = [
  {
    name: "HTML5",
    icon: "/skills/html5.svg",
  },
  {
    name: "CSS3",
    icon: "/skills/css3.svg",
  },
  {
    name: "JavaScript",
    icon: "/skills/javascript.svg",
  },
  {
    name: "TypeScript",
    icon: "/skills/typescript.svg",
  },
  {
    name: "Next.js",
    icon: "/skills/nextjs.svg",
  },
  {
    name: "React.js",
    icon: "/skills/react.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "/skills/tailwindcss.svg",
  },
  {
    name: "Git",
    icon: "/skills/git.svg",
  },
  {
    name: "GitHub",
    icon: "/skills/github.svg",
  },
  {
    name: "VS Code",
    icon: "/skills/vscode.svg",
  },
  {
    name: "Nuxt.js",
    icon: "/skills/nuxt.png",
  },
  {
    name: "Laaravel",
    icon: "/skills/laravel.png",
  },
  {
    name: "MySQL",
    icon: "/skills/mysql.png",
  },
  {
    name: "ShadCN UI",
    icon: "/skills/shadcn-ui.svg",
  },
];

const Skills = () => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-900 border-y border-gray-100 py-8"
      initial={{ opacity: 0, y: 50 }} // Initial state
      animate={{ opacity: 1, y: 0 }} // Final state
      transition={{ duration: 1, ease: "easeOut" }} // Animation timing
    >
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          My Technical Skills
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <SkillMarquee skills={skills} speed={5} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
