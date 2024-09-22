"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import {motion} from "framer-motion";

export default function About() {
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-m-28"
    initial={{opacity: 0, y:100}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.175}}
    id="about">
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        After my first year as an undergrad, I discovered my passion for programming
        through my experience with
        <span className="font-medium"> Java and Object-Oriented Design</span>.I
        fell in love with <span className="font-medium">Computer Science</span>{" "}
        and have since developed a particular interest in
        <span className="font-medium"> full-stack applications</span> and a
        growing appreciation for
        <span className="font-medium"> Data Science, Machine Learning, and AI
        </span>
        .<span className="italic"> My favorite part of programming</span> is
        exploring various programming languages and technologies. My current core stack
        includes{" "}
        <span className="font-medium">
          Java, JavaScript/Node, Python, and MongoDB
        </span>
        . I am always eager to <span className="underline">test my limits</span>{" "}
        and tackle challenging tasks. I am currently developing my experience in{" "}
        <span className="font-medium">Go microservices and Data Science</span>.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I love binging TV
        shows, eating snacks, watching movies, exercising, and playing with my cat. Furthermore, I'm always
        on the lookout for the next challenge to push myself further.
      </p>
    </motion.section>
  );
}
