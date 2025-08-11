"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { Meteors } from "./ui/meteors";

export default function About() {
  return (
    <div className="relative w-full flex justify-center mb-28 scroll-m-28" id="about">
      <div className="w-full relative max-w-[45rem]">
        {/* Glassmorphism Background with More Subtle Gradient */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to- transform scale-[0.85] rounded-full blur-3xl" />
        <div
          className="relative shadow-lg backdrop-blur-lg bg-white/10 border border-white/20 px-6 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-start items-start"
          style={{
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Decorative Circle Icon */}
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-white/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-white/60"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          {/* Content Section */}
          <motion.section
            className="text-center leading-8 text-black"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
          >
            <SectionHeading>About Me</SectionHeading>
            <p className="mb-3 px-4 sm:px-8">
              After my first year as an undergrad, I discovered my passion for
              software through my experience with{" "}
              <span className="font-medium text-black">
                Java and Object-Oriented Design
              </span>
              . I fell in love with{" "}
              <span className="font-medium text-black">
                Computer Science
              </span>{" "}
              and have since developed a particular interest in{" "}
              <span className="font-medium text-black">
                Full-Stack applications
              </span>{" "}
              along with a growing appreciation for{" "}
              <span className="font-medium text-black">
              Machine Learning, AI, and Computer Security
              </span>
              .{" "}
              <span className="italic text-black/80">
                My favorite part of development
              </span>{" "}
              is exploring various programming languages and software technologies. My
              current core stack includes{" "}
              <span className="font-medium text-black">
                Java, Node.js, Python, and PostgreSQL
              </span>
              . I am always eager to{" "}
              <span className="underline">test my limits</span> and tackle
              challenging tasks. I am currently developing my experience in{" "}
              <span className="font-medium text-black">
                Cloud Computing/Microservices, Deep Learning, and HPC
              </span>
              .
            </p>
            <p className="text-black/80 px-4 sm:px-8">
              <span className="italic">When I'm not coding</span>, I love
              binging TV shows and watching movies, exercising, and
              playing with my cat. Furthermore, I'm always on the lookout for
              the next challenge to push myself further.
            </p>
          </motion.section>

          {/* Meteor Effect */}
          <Meteors
            number={20}
            className="bg-green-500 before:from-green-500 shadow-[0_0_0_1px_#00000010]"
          />
        </div>
      </div>
    </div>
  );
}
