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
    name: "Magnabasa",
    description:
      "Magnabasa is a web-based application designed to help users learn reading and writing in the Indonesian language. With its user-friendly interface and a variety of learning features, it supports both self-paced and structured learning experiences. The platform is also integrated with Midtrans payment gateway, allowing users to easily make transactions for premium content and subscription services.",
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
    bagde: ["Web App", "Integration Payment Gateway"],
  },
  {
    name: "SIMPUS Helth Care",
    description:
      "SIMPUS Health Care is a web-based information system designed for community health centers (puskesmas) to efficiently manage patient data and health services. The application features a user-friendly interface and supports various modules for administrative and clinical processes. As a front-end developer, I contributed to building responsive and intuitive user interfaces that enhance the overall user experience for health care staff.",
    image: "/public/project/simpus.png",
    stack: [
      { name: "Nuxt JS", image: "/public/skills/nuxt.png" },
      {
        name: "Tailwind CSS",
        image: "/public/skills/tailwindcss.svg",
      },
      { name: "ShadCN UI", image: "/public/skills/shadcn.svg" },
    ],
    link: "",
    bagde: ["Web App", "System Information Management for Health"],
  },
  {
    name: "Kota Podomoro Tenjo",
    description:
      "Kota Podomoro Tenjo is a web-based application developed to manage real estate and housing information for the Kota Podomoro Tenjo residential area located in Tenjo. The platform provides a user-friendly interface and features that support property listing, customer inquiries, and administrative management—enhancing the overall experience for both property developers and prospective buyers.",
    image: "/public/project/kota-podomoro-tenjo.png",
    stack: [
      { name: "Nuxt JS", image: "/public/skills/nuxt.png" },
      {
        name: "Tailwind CSS",
        image: "/public/skills/tailwindcss.svg",
      },
      { name: "ShadCN UI", image: "/public/skills/shadcn.svg" },
      { name: "Laravel", image: "/public/skills/laravel.png" },
      { name: "MySQL", image: "/public/skills/mysql-logo.svg" },
      { name: "Filament", image: "/public/skills/filament.png" },
    ],
    link: "https://kotapodomorotenjo.com",
    bagde: ["Web App", "Real Estate"],
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
                  <div className="flex md:flex-row flex-col gap-2">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
