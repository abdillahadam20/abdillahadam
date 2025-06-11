"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

const projectFreelance = [
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
  {
    name: "SIMPUS Health Care",
    description:
      "SIMPUS Health Care is a web-based system for community health centers (puskesmas), streamlining patient data and health service management. As a front-end developer, I helped create responsive, user-friendly interfaces to improve staff experience.",
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
    bagde: ["Private", "Web App", "System Information Management for Health"],
  },
  {
    name: "Kota Podomoro Tenjo",
    description:
      "Kota Podomoro Tenjo is a web app to manage real estate and housing info for the Kota Podomoro Tenjo area. It offers features for property listings, customer inquiries, and administrative management, making it easier for both developers and buyers.",
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
    bagde: ["Public", "Web App", "Real Estate"],
  },
  {
    name: "Privy Identitas Digital",
    description:
      "Privy Identitas Digital is a digital identity verification platform that provides secure and reliable identity verification services. It offers a user-friendly interface and various features to enhance the identity verification experience.",
    image: "/public/project/privyid.png",
    stack: [
      { name: "Nuxt JS", image: "/public/stack/icon-green.png" },
      {
        name: "Tailwind CSS",
        image: "/public/stack/tailwindcss-mark.d52e9897.svg",
      },
      { name: "ShadCN UI", image: "/public/stack/shadcn-ui.svg" },
    ],
    link: "https://privy.id",
    bagde: ["Public", "Web App", "Integration Payment Gateway"],
  },
];

const Project = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = projectFreelance.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(projectFreelance.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
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
        <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 sm:grid-cols-2">
          {currentItems.map((project, index) => (
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
      <Pagination>
        <PaginationContent>
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => handlePageChange(currentPage - 1)}
              />
            </PaginationItem>
          )}

          {[...Array(totalPages)].map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                isActive={currentPage === i + 1}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          {currentPage < totalPages && (
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() => handlePageChange(currentPage + 1)}
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default Project;
