"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 relative w-full flex justify-center"
    >
      <div className="w-full relative max-w-[42rem]">
        {/* Glassmorphism Background */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r transform scale-[0.85] rounded-full blur-3xl" />
        
        <section 
          className="relative shadow-lg backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl overflow-hidden sm:pr-8 sm:h-[20rem] hover:bg-white/20 transition sm:group-even:pl-8"
          style={{
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold text-black dark:text-white">{title}</h3>
            <p className="mt-2 leading-relaxed text-black/80 dark:text-white/70">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <a href={githubUrl} target="_blank">
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
              className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                transition 
                group-hover:scale-[1.04]
                group-hover:-translate-x-3
                group-hover:translate-y-3
                group-hover:-rotate-2

                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-2

                group-even:right-[initial] group-even:-left-40"
            />
          </a>
          
          {/* Mobile image */}
          <a href={githubUrl} target="_blank" className="sm:hidden mt-4 block">
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </a>
        </section>
      </div>
    </motion.div>
  )
}
