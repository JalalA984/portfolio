"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { SiGmail } from "react-icons/si";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"; // Import the CanvasRevealEffect

export default function Intro() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Check if the section is in the viewport
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false); // Reset when the section is out of view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="relative" ref={sectionRef}>
      <CardContainer
        containerClassName="intro-container"
        className="intro-card"
      >
        {/* Ensure CardBody is full width and height, center its content */}
        <CardBody className="bg-gradient-to-r from-gray-100 via-gray-200 to-white bg-opacity-50 backdrop-blur-2xl shadow-2xl rounded-lg p-6 text-gray-800 max-w-[90vw] sm:max-w-[50vw] h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-y-auto h-screen relative">
          {/* CanvasRevealEffect Wrapper - Only show when the section is in view */}
          {isInView && (
            <CanvasRevealEffect
              animationSpeed={1.5} // Adjust the speed of the effect
              containerClassName="absolute inset-0"
              colors={[
                [173, 216, 230], // Light blue
                [240, 248, 255], // Alice blue
                [176, 224, 230], // Powder blue
              ]}
              dotSize={3} // Increased dot size to make pixels bigger
              showGradient={false} // Set this to false for no gradient effect
            />
          )}

          {/* Center the image and peace sign */}
          <CardItem className="flex flex-col items-center justify-center mb-6">
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
          <CardItem className="text-center mb-6 px-4">
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
          <CardItem className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium mb-4">
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
    </section>
  );
}
