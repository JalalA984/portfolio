"use client";
import React from "react";
import { motion } from "framer-motion";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-28 max-w-[53rem] mx-auto scroll-mt-28 px-4 md:px-6 lg:px-0 sm:mb-40"
    >
      <h2 className="text-3xl font-medium capitalize mb-12 text-center">My Experience</h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gray-300 dark:bg-gray-700 md:-ml-[1px]"></div>

        <div className="flex flex-col space-y-12 md:space-y-20">
          {experiencesData.map((experience, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row md:items-center ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute h-4 w-4 rounded-full bg-gray-800 border-2 border-white dark:bg-gray-200 dark:border-gray-800 top-2 md:top-1/2 md:-translate-y-1/2 z-10 ${
                    isLeft
                      ? "left-4 md:left-1/2 md:-ml-2"
                      : "left-4 md:left-1/2 md:-ml-2"
                  }`}
                ></div>

                {/* Card container */}
                <div
                  className={`mt-2 md:mt-0 w-full md:max-w-[45%] md:px-6 ${
                    isLeft
                      ? "md:pr-12 md:text-right"
                      : "md:pl-12 md:text-left"
                  } pl-10 md:pl-0`}
                >
                  <h3 className="text-xl font-semibold flex items-center gap-2 flex-wrap">
                    <a
                      href={experience.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-600 dark:text-blue-400 flex items-center gap-1"
                    >
                      {experience.title}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </a>
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400">
                    {experience.company} | {experience.location}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
                    {experience.date}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    {experience.description}
                  </p>

                  <div
                    className={`flex flex-wrap gap-2 ${
                      isLeft ? "justify-end md:justify-end" : "justify-start"
                    }`}
                  >
                    {experience.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 dark:bg-gray-800 px-3 py-1 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
