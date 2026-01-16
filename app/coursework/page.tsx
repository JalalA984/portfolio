"use client";
import React from "react";
import { motion } from "framer-motion";
import { coursesData } from "@/lib/data";
import { HiExternalLink } from "react-icons/hi";

// ANIMATION VARIANTS
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Coursework() {
  return (
    <main className="min-h-screen w-full bg-[#E4E4E4] dark:bg-black text-gray-900 dark:text-gray-100 font-sans selection:bg-gray-900 selection:text-white pt-32 pb-20 px-6 sm:px-12">
      
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="relative mb-20 border-b border-gray-900 dark:border-gray-800 pb-8 flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-2">
                ( 05 — EDUCATION_LOG )
                </span>
                <h1 className="text-4xl sm:text-7xl font-bold tracking-tighter uppercase leading-[0.9]">
                Academic<br />
                Records
                </h1>
            </div>

            {/* HEADER METADATA */}
            <div className="hidden md:block text-right">
                <div className="font-mono text-[10px] text-gray-400 uppercase tracking-widest space-y-1 opacity-70">
                    <p>provider: <span className="text-gray-900 dark:text-gray-200">univ_maryland</span></p>
                    <p>architecture: <span className="text-gray-900 dark:text-gray-200">computer_science</span></p>
                    <p>query_time: <span className="text-gray-900 dark:text-gray-200">0.02ms</span></p>
                </div>
            </div>
        </div>

        {/* DATABASE LIST CONTAINER */}
        <div className="relative">
            
            {/* Continuous Trace Line */}
            <div className="absolute left-[7px] top-4 bottom-0 w-px border-l border-dashed border-gray-400 dark:border-gray-800 hidden lg:block"></div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-12"
            >
                {coursesData.map((course, index) => {
                    // Split "CMSC414 - Name" into ["CMSC414", "Name"]
                    const [code, ...nameParts] = course.title.split(" - ");
                    const name = nameParts.join(" - ");

                    return (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            className="group relative pl-0 lg:pl-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
                        >
                            {/* DECORATIVE NODE DOT (Desktop) */}
                            <div className="hidden lg:block absolute left-0 top-3 w-4 h-4 bg-[#E4E4E4] dark:bg-black border-2 border-gray-900 dark:border-white rounded-full z-10 group-hover:scale-125 transition-transform duration-300"></div>

                            {/* LEFT COL: Code / Package ID */}
                            <div className="lg:col-span-3 flex flex-col gap-1">
                                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                                    :: index: 0{index + 1}
                                </span>
                                <span className="inline-block px-3 py-1 bg-gray-200 dark:bg-gray-900 text-black dark:text-white font-mono text-xs font-bold uppercase tracking-widest w-fit border border-transparent hover:border-black dark:hover:border-white transition-colors cursor-default">
                                    pkg: {code.toLowerCase()}
                                </span>
                            </div>

                            {/* MIDDLE COL: Details */}
                            <div className="lg:col-span-7 flex flex-col gap-2">
                                <h2 className="text-xl font-bold uppercase tracking-tight group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                                    {name}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                                    <span className="text-gray-400 font-mono text-xs mr-2">{`//`}</span>
                                    {course.description}
                                </p>
                            </div>

                            {/* RIGHT COL: Action */}
                            <div className="lg:col-span-2 flex justify-start lg:justify-end opacity-60 group-hover:opacity-100 transition-opacity">
                                <a 
                                    href={course.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest border-b border-transparent hover:border-black dark:hover:border-white transition-all pb-0.5"
                                >
                                    view_manifest <HiExternalLink />
                                </a>
                            </div>

                        </motion.div>
                    );
                })}
            </motion.div>

        </div>

        {/* FOOTER STATS: "SYSTEM RESOURCES" */}
        <div className="mt-24 pt-8 border-t border-dashed border-gray-300 dark:border-gray-800">
            <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-6">
                [ SYSTEM_RESOURCE_SUMMARY ]
            </span>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="border-l-2 border-gray-900 dark:border-white pl-4">
                    <span className="block text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-1">Total_Credits</span>
                    <span className="text-2xl font-bold font-mono">120+</span>
                </div>
                <div className="border-l-2 border-gray-900 dark:border-white pl-4">
                    <span className="block text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-1">Major_GPA</span>
                    <span className="text-2xl font-bold font-mono">3.5</span>
                </div>
                <div className="border-l-2 border-gray-900 dark:border-white pl-4">
                    <span className="block text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-1">Current_Status</span>
                    <span className="text-2xl font-bold font-mono text-green-600">ACTIVE</span>
                </div>
                <div className="border-l-2 border-gray-900 dark:border-white pl-4">
                    <span className="block text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-1">Host_Inst</span>
                    <span className="text-2xl font-bold font-mono">UMD</span>
                </div>
            </div>
        </div>

      </div>
    </main>
  );
}