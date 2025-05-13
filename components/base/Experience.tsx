"use client";

import type React from "react";

import { BriefcaseIcon } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { useRef } from "react";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills?: string[];
  logo?: string;
}

interface ExperienceTimelineProps {
  experiences: ExperienceItem[];
}

export default function ExperienceTimeline({
  experiences,
}: ExperienceTimelineProps) {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Work Experience
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "80px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="h-1 bg-emerald-600 dark:bg-emerald-500 rounded-full"
          />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700" />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center md:justify-between mb-16 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-emerald-600 dark:bg-emerald-500 z-10 flex items-center justify-center">
                <span className="w-3 h-3 bg-white rounded-full" />
              </div>

              {/* Content */}
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? "md:pl-8" : "md:pr-8"
                }`}
              >
                <CardWithScrollAnimation index={index}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                      {experience.logo ? (
                        <Image
                          width={32}
                          height={32}
                          src={experience.logo || "/placeholder.svg"}
                          alt={`${experience.company} logo`}
                          className="w-8 h-8 object-contain"
                        />
                      ) : (
                        <BriefcaseIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {experience.role}
                      </h3>
                      <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <span>{experience.location}</span>
                    <span>{experience.period}</span>
                  </div>

                  {/* <div className="mb-4">
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                      {experience.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                          viewport={{ margin: "-100px" }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div> */}

                  {experience.skills && (
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </CardWithScrollAnimation>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Card component with scroll animation
function CardWithScrollAnimation({
  children,
  index = 0,
}: {
  children: React.ReactNode;
  index?: number;
}) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1], // Custom easing for smooth animation
      }}
      className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      {children}
    </motion.div>
  );
}
