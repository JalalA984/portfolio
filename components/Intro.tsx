"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-m-28" id="home">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/J1.png"
              alt="profile pic or name"
              width="95"
              height="95"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            ✌️
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="pt-2 mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Jalal Ahmad.</span> I am an{" "}
        <span className="font-bold">aspiring Software/ML Engineer</span> currently
        studying <span className="font-bold"> Computer Science</span> @{" "}
        <span className="font-bold">University of Maryland-College Park</span>.
        I enjoy building <span className="italic">full-stack software</span>!
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{delay: 0.1}}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      >
        <Link
          href="#contact"
          className="flex items-center cursor-pointer bg-gray-700 text-white px-7 py-3 gap-1 rounded-full outline-none hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact{" "}
          <div className="flex items-center bg-white text-gray-700 px-2 py-2 rounded-full">
            <SiGmail />
          </div>{" "}
        </Link>

        <a className="group flex items-center bg-white text-gray-700 px-7 py-3 gap-1 rounded-full
        outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
        href="/resume_jalal.pdf" download>
          Download Resume <HiDownload className="group-hover:translate-y-1 transition"/>{" "}
        </a>

        <a className="flex items-center bg-white text-gray-700 p-4 gap-1 rounded-full
        focus:scale-110 hover:scale-[1.25] active:scale-105 transition cursor-pointer"
        href="https://www.linkedin.com/in/jalalahm/" target="_blank">
          <BsLinkedin />
        </a>

        <a className="flex items-center bg-white text-gray-700 p-4 gap-1 rounded-full
        focus:scale-110 hover:scale-[1.25] active:scale-105 transition cursor-pointer"
        href="https://github.com/JalalA984/" target="_blank">
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
