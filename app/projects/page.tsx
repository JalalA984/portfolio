"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

// ANIMATION VARIANTS
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  return (
    <main className="min-h-screen w-full bg-[#E4E4E4] dark:bg-black text-gray-900 dark:text-gray-100 font-sans selection:bg-gray-900 selection:text-white pt-32 pb-20 px-6 sm:px-12">
      
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="relative mb-20 border-b border-gray-900 dark:border-gray-800 pb-8 flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-2">
                ( 03 — SELECTED WORKS )
                </span>
                <h1 className="text-4xl sm:text-7xl font-bold tracking-tighter uppercase leading-[0.9]">
                Project<br />
                Directory
                </h1>
            </div>

            {/* HEADER METADATA */}
            <div className="hidden md:block text-right">
                <div className="font-mono text-[10px] text-gray-400 uppercase tracking-widest space-y-1 opacity-70">
                    <p>repo_count: <span className="text-gray-900 dark:text-gray-200">{projectsData.length}</span></p>
                    <p>visibility: <span className="text-gray-900 dark:text-gray-200">public</span></p>
                    <p>gateway: <span className="text-green-600">active</span></p>
                </div>
            </div>
        </div>

        {/* PROJECT PIPELINE CONTAINER */}
        <div className="relative">
            
            {/* The Continuous Pipeline Trace Line */}
            <div className="absolute left-[7px] top-4 bottom-0 w-px border-l border-dashed border-gray-400 dark:border-gray-800 hidden lg:block"></div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-20 lg:gap-32"
            >
                {projectsData.map((project, index) => (
                    <motion.article 
                        key={index} 
                        variants={itemVariants}
                        className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
                    >
                        
                        {/* DECORATIVE PIPELINE NODE (Desktop Only) */}
                        <div className="hidden lg:block absolute left-0 top-12 w-4 h-4 bg-white dark:bg-black border-2 border-gray-900 dark:border-white rounded-full z-10"></div>

                        {/* LEFT COLUMN: Info (span 5) */}
                        <div className="lg:col-span-5 flex flex-col gap-6 lg:pl-12 pt-2">
                            
                            {/* METADATA HEADER */}
                            <div className="flex flex-col gap-1 border-b border-dashed border-gray-300 dark:border-gray-800 pb-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-4xl font-mono font-bold text-gray-300 dark:text-gray-800 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                                        0{index + 1}
                                    </span>
                                    {/* <span className="text-[9px] font-mono uppercase text-gray-400 tracking-tight">
                                        build: v{index + 1}.0.4
                                    </span> */}
                                </div>
                                <span className="text-[9px] font-mono uppercase text-gray-500 tracking-widest">

                                    {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                                    :: status: stable

                                </span>
                            </div>

                            {/* CONTENT */}
                            <div>
                                <h2 className="text-3xl font-bold uppercase tracking-tight mb-4 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                                    {project.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                                    {project.description}
                                </p>
                            </div>

                            {/* TECH STACK (Styled as Configuration Array) */}
                            <div>
                                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-2">
                                    [ configuration ]
                                </span>
                                <div className="flex flex-wrap gap-2 font-mono text-xs text-gray-600 dark:text-gray-400">
                                    <span className="text-gray-400">[</span>
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="group-hover:text-black dark:group-hover:text-white transition-colors">
                                            "{tag}"{i < project.tags.length - 1 && ","}
                                        </span>
                                    ))}
                                    <span className="text-gray-400">]</span>
                                </div>
                            </div>

                            {/* LINKS (Styled as Commands) */}
                            <div className="flex gap-4 pt-4">
                                <a 
                                    href={project.githubUrl} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest bg-gray-900 text-white dark:bg-white dark:text-black px-6 py-3 hover:bg-gray-700 dark:hover:bg-gray-200 transition-all"
                                >
                                    <FaGithub /> git_checkout
                                </a>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Image (span 7) */}
                        <div className="lg:col-span-7 relative group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                            {/* The Tech "Frame" corners */}
                            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-gray-900 dark:border-white z-20"></div>
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-gray-900 dark:border-white z-20"></div>

                            <div className="relative h-[300px] sm:h-[450px] w-full overflow-hidden bg-gray-200 dark:bg-gray-900 border border-gray-300 dark:border-gray-800">
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                                    quality={90}
                                />
                                
                                {/* Image Overlay Grid (Scanline effect) */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>

                                {/* Overlay Badge */}
                                <div className="absolute top-4 right-4 z-20">
                                    <div className="bg-black/70 backdrop-blur text-white px-2 py-1 text-[8px] font-mono uppercase tracking-widest flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                        PREVIEW
                                    </div>
                                </div>
                            </div>
                        </div>

                    </motion.article>
                ))}
            </motion.div>

        </div>

        {/* FOOTER SYSTEM CHECK */}
        <div className="mt-32 pt-8 border-t border-dashed border-gray-300 dark:border-gray-800 text-center opacity-50">
            <p className="text-[10px] font-mono text-gray-400 uppercase">
                All_Systems_Operational
            </p>
        </div>

      </div>
    </main>
  );
}