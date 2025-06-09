"use client";

import Typing from "@/components/motion/Typing";
import { Download, Github, Instagram, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes"; // Import useTheme from next-themes
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const Icons = [
  { icon: <Github />, label: "Github", url: "https://github.com/abdillahadam20" },
  {
    icon: <Linkedin />,
    label: "Linkedin",
    url: "https://www.linkedin.com/in/adam-abdillah/",
  },
  {
    icon: <Instagram />,
    label: "Instagram",
    url: "https://www.instagram.com/adamabdillah20/",
  },
];

const Hero = () => {
  const { theme } = useTheme(); // Get the current theme using useTheme
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <section className="bg-white h-full dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          {/* LEFT - Text Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mr-auto order-2 lg:order-none place-self-center lg:col-span-7"
          >
            <div className="flex flex-col gap-4 max-w-screen">
              <div className="flex flex-col gap-4 text-3xl">
                <h1 className="max-w-2xl text-6xl font-extrabold tracking-tight leading-none dark:text-white">
                  Hi 👋, <span className="text-emerald-500">Adam</span> here
                </h1>
                <span className="flex gap-2">
                  <Typing
                    texts={["As Front End Developer"]}
                    typingSpeed={100}
                    deletingSpeed={50}
                    pause={2000}
                    className="text-emerald-500 font-semibold"
                  />
                </span>
              </div>

              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <p className="max-w-2xl font-light text-gray-500 md:text-lg dark:text-gray-400">
                  Fullstack developer who loves building modern and responsive
                  websites. I usually work with Nuxt.js and Tailwind CSS on the
                  frontend, but lately I’ve been exploring Next.js along with
                  Laravel as a RESTful API, and MySQL as the database. I enjoy
                  learning new tech, writing clean code, and making sure
                  everything runs smoothly.
                </p>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {Icons.map(({ icon, label, url }) => (
                  <Link
                    key={label}
                    href={url}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 flex justify-center items-center rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-green-600 hover:text-green-600 duration-300 ease-in-out text-gray-600 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-600 transition-colors"
                  >
                    {icon}
                  </Link>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <Link
                  href="https://drive.google.com/file/d/1WbuzgbuaT2UYnvRBJYGvXgIxrcR53dga/view?usp=sharing"
                  target="_blank"
                >
                  <Button className="cursor-pointer" variant="emerald">
                    Download CV <Download />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
          {/* RIGHT - Image */}
          <motion.div
            className="relative order-1 lg:order-none w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 xl:w-[500px] xl:h-[500px] rounded-full overflow-hidden mx-auto"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {mounted && (
              <Image
                src="/Adam-Abdillah.jpg"
                alt="Adam Abdillah"
                width={500}
                height={500}
                priority
                className={`absolute inset-0 w-full h-full object-cover object-top rounded-full transition-all duration-500 ${
                  theme === "dark"
                    ? "opacity-100 mix-blend-luminosity"
                    : "opacity-100"
                }`}
              />
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
