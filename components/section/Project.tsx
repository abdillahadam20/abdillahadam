import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const projectFreelance = [
  {
    name: "VoteVerse",
    description:
      "VoteVerse is a decentralized voting platform that leverages blockchain technology to ensure secure and transparent elections. Built with React.js, Tailwind CSS, Chakra UI, Rust, ICP, and Canister it provides a modern interface for users to participate in various voting.",
    image: "/public/project/voteverse.png",
    stack: [
      { name: "React", image: "/public/skills/react.svg" },
      {
        name: "Tailwind CSS",
        image: "/public/skills/tailwindcss.svg",
      },
      { name: "Chakra UI", image: "/public/skills/chakraui.png" },
      { name: "Rust", image: "/public/skills/rust.jpg" },
      { name: "Internet Computer", image: "/public/skills/icp.png" },
    ],
    link: "https://ijgth-6iaaa-aaaam-ael7a-cai.icp0.io/",
    bagde: ["Public", "Web3 App", "Decentralized Voting Apps"],
  },
  {
    name: "KonSultanQ",
    description:
      "KonSultanQ is a real estate platform designed to simplify property searches in areas like Kota Podomoro Tenjo and Bogor. Built with Nuxt JS, Laravel, and Filament, it offers a modern and user-friendly experience for finding homes and commercial properties.",
    image: "/public/project/konsultanq.png",
    stack: [
      { name: "Nuxt JS", image: "/public/stack/icon-green.png" },
      {
        name: "Tailwind CSS",
        image: "/public/stack/tailwindcss-mark.d52e9897.svg",
      },
      { name: "ShadCN UI", image: "/public/stack/shadcn-ui.svg" },
      { name: "Laravel", image: "/public/stack/Laravel.png" },
      { name: "MySQL", image: "/public/stack/mysql-logo.png" },
      { name: "Filament", image: "/public/stack/filament-logo.png" },
    ],
    link: "https://konsultanq.com/",
    bagde: ["Public", "Web App", "Real Estate"],
  },
  {
    name: "Magnabasa",
    description:
      "Magnabasa is a web-based app that helps users learn reading and writing in Indonesian. With a user-friendly interface and various learning features, it supports self-paced and structured learning. Integrated with Midtrans, the platform offers easy access to premium content and subscription services.",
    image: "/public/project/magnabasa.png",
    stack: [
      { name: "Laravel", image: "/public/skills/laravel.png" },
      {
        name: "Tailwind CSS",
        image: "/public/skills/tailwindcss.svg",
      },
      {
        name: "Filament",
        image: "/public/skills/filament.png",
      },
      {
        name: "MySQL",
        image: "/public/skills/mysql-logo.svg",
      },
    ],
    link: "https://magnabasa.com",
    bagde: ["Public", "Web App", "Integration Payment Gateway"],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Project = () => {
  return (
    <section className="bg-white dark:bg-gray-900 border-y border-gray-100">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Projects
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            A collection of real-world freelance and client projects, showcasing
            modern web development using cutting-edge frameworks and tools.
          </p>
        </div>
        <Link href="/project">
          <Badge variant={"emerald"} className="my-2">
            View All {">>"}
          </Badge>
        </Link>
        <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 sm:grid-cols-2">
          {projectFreelance.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              custom={index}
            >
              <Link href={project.link} target="_blank">
                <Card className="max-w-[400px] !py-0">
                  <CardHeader className="!p-0">
                    <Image
                      src={project.image.replace("/public", "")}
                      alt={project.name}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full rounded-t-md object-cover"
                    />
                  </CardHeader>
                  <CardContent className="flex flex-col gap-2">
                    <div className="flex flex-wrap gap-2">
                      {project.bagde.map((badge, i) => (
                        <Badge variant={"emerald"} key={i}>
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    <Link href={project.link} target="_blank">
                      <CardTitle>{project.name}</CardTitle>
                    </Link>
                    <CardDescription className="text-justify">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-start pb-8">
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {project.stack.map((stack, i) => (
                        <div
                          key={i}
                          className="group relative flex items-center gap-2 border rounded-lg p-2 shadow-sm  dark:bg-gray-800"
                        >
                          {stack.image && (
                            <Image
                              src={stack.image.replace("/public", "")}
                              alt={stack.name}
                              width={20}
                              height={20}
                            />
                          )}
                          <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-emerald-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                            {stack.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
