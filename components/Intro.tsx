"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { SiGmail } from "react-icons/si";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

export default function Intro() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="relative w-full flex justify-center" ref={sectionRef}>
      <div className="w-full relative max-w-[45rem]">
        {/* Glassmorphism Background - Moved inside CardBody */}
        
        <CardContainer containerClassName="intro-container" className="intro-card">
          <CardBody 
            className="relative shadow-lg rounded-2xl p-6 text-black max-w-[90vw] sm:max-w-[50vw] h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-y-auto h-screen"
          >
            {/* Glass background now inside the card body */}
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r transform scale-[0.85] rounded-full blur-3xl" />
            <div className="absolute inset-0 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl" />


            {/* Center the image and peace sign */}
            <CardItem className="flex flex-col items-center justify-center mb-6 z-10">
              <motion.div
                className="relative"
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
              </motion.div>
            </CardItem>

            {/* Center the heading */}
            <CardItem className="text-center mb-6 px-4 z-10">
              <motion.h1
                className="pt-2 mb-10 mt-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="font-bold">Hello, I'm Jalal Ahmad.</span> I am an{" "}
                <span className="font-bold">aspiring Software Engineer</span>{" "}
                currently studying{" "}
                <span className="font-bold">Computer Science</span> @{" "}
                <span className="font-bold">
                  University of Maryland-College Park
                </span>
                . I enjoy building{" "}
                <span className="italic">Full-Stack Software</span>!
              </motion.h1>
            </CardItem>

            {/* Center the buttons */}
            <CardItem className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium mb-4 z-10">
              <Link
                href="#contact"
                className="flex items-center cursor-pointer bg-gray-700 text-white px-7 py-3 gap-1 rounded-full outline-none hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
              >
                Contact{" "}
                <div className="flex items-center bg-white text-gray-700 px-2 py-2 rounded-full">
                  <SiGmail />
                </div>{" "}
              </Link>
              <a
                className="group flex items-center bg-white text-gray-700 px-7 py-3 gap-1 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
                href="/resume_jalal.pdf"
                download
              >
                Download Resume{" "}
                <HiDownload className="group-hover:translate-y-1 transition" />
              </a>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
}
