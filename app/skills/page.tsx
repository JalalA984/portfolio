"use client";
import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";

// Animation Variants
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
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <main className="min-h-screen w-full bg-[#E4E4E4] dark:bg-black text-gray-900 dark:text-gray-100 font-sans selection:bg-gray-900 selection:text-white pt-32 pb-20 px-6 sm:px-12">
      
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="relative mb-20 border-b border-gray-900 dark:border-gray-800 pb-8 flex flex-col xl:flex-row justify-between items-end gap-12">
            
            {/* Title Block */}
            <div className="w-full xl:w-auto">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-2">
                ( 04 — ARSENAL )
                </span>
                <h1 className="text-4xl sm:text-7xl font-bold tracking-tighter uppercase leading-[0.9]">
                Technical<br />
                Capabilities
                </h1>
            </div>

            {/* THE QUOTE - STYLED AS SYSTEM MOTD (Message of the Day) */}
            <div className="w-full xl:max-w-xl">
                <div className="font-mono text-xs text-gray-600 dark:text-gray-400 bg-white dark:bg-[#0A0A0A] p-6 border border-dashed border-gray-400 dark:border-gray-800 relative">
                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-3 h-3 bg-gray-900 dark:bg-white"></div>
                    
                    <span className="block text-[9px] uppercase tracking-widest text-gray-400 mb-2">
                        root@system:~# cat /etc/philosophy.txt
                    </span>
                    <p className="leading-relaxed italic">
                        "A jack of all trades is a master of none, but oftentimes better than a master of one."
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-[9px] uppercase tracking-widest text-gray-500">
                            Status: Generalist_Who_Loves_To_Learn
                        </span>
                    </div>
                </div>
            </div>
        </div>

        {/* SKILLS MONITOR CONTAINER */}
        <div className="relative">
            
            {/* Continuous Trace Line */}
            <div className="absolute left-[7px] top-4 bottom-0 w-px border-l border-dashed border-gray-400 dark:border-gray-800 hidden lg:block"></div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-20"
            >
                {skillsData.map((category, idx) => (
                    <motion.div 
                        key={idx} 
                        variants={itemVariants}
                        className="relative pl-0 lg:pl-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                    >
                        
                        {/* DECORATIVE NODE DOT (Desktop) */}
                        <div className="hidden lg:block absolute left-0 top-6 w-4 h-4 bg-[#E4E4E4] dark:bg-black border-2 border-gray-900 dark:border-white rounded-full z-10"></div>

                        {/* LEFT COLUMN: Category Header (Span 4) */}
                        <div className="lg:col-span-4 sticky top-32">
                            <h2 className="text-2xl font-bold uppercase tracking-tight mb-2">
                                {category.category}
                            </h2>
                            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                                [ LAYER_0{idx + 1}_INIT ]
                            </span>
                            
                            {/* Decorative ASCII Graph */}
                            <div className="mt-4 text-[9px] font-mono text-gray-400 leading-none opacity-50 hidden lg:block">
                                <div>▀▄▀▄▀▄▀▄▀▄</div>
                                <div>load_balance: ok</div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Skills Grid (Span 8) */}
                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                            {category.items.map((skill, sIdx) => (
                                <div key={sIdx} className="group">
                                    
                                    {/* Skill Header */}
                                    <div className="flex justify-between items-end mb-2">
                                        <div className="flex items-center gap-3">
                                            {/* Icon - Grayscale to Color on Hover */}
                                            {skill.image && (
                                                <div className="w-5 h-5 relative grayscale group-hover:grayscale-0 transition-all duration-300">
                                                    <img 
                                                        src={skill.image} 
                                                        alt={skill.name} 
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                            )}
                                            <span className="font-mono text-sm uppercase tracking-wider font-bold">
                                                {skill.name}
                                            </span>
                                        </div>
                                        <span className="text-[10px] font-mono text-gray-400">
                                            {skill.percentage}% ALLOC
                                        </span>
                                    </div>

                                    {/* RESOURCE BAR (The "System" Look) */}
                                    <div className="relative w-full h-2 bg-gray-300 dark:bg-gray-800 overflow-hidden">
                                        {/* The Fill */}
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.percentage}%` }}
                                            transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
                                            className="h-full bg-gray-900 dark:bg-white relative"
                                        >
                                            {/* Scanline texture overlay on the bar itself */}
                                            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:4px_100%] opacity-20"></div>
                                        </motion.div>
                                    </div>

                                    {/* Metadata Footer */}
                                    <div className="mt-1 flex justify-between text-[8px] font-mono text-gray-400 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span>v.latest</span>
                                        <span>pid: {Math.floor(Math.random() * 9000) + 1000}</span>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </motion.div>
                ))}
            </motion.div>

        </div>

        {/* FOOTER SYSTEM CHECK */}
        <div className="mt-32 pt-8 border-t border-dashed border-gray-300 dark:border-gray-800 text-center opacity-50">
            <p className="text-[10px] font-mono text-gray-400 uppercase">
                System_Resources_Optimal
            </p>
        </div>

      </div>
    </main>
  );
}