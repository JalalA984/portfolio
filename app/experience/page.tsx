"use client";
import React from "react";
import { motion } from "framer-motion";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  return (
    <main className="min-h-screen w-full bg-[#E4E4E4] dark:bg-black text-gray-900 dark:text-gray-100 font-sans selection:bg-gray-900 selection:text-white pt-32 pb-20 px-6 sm:px-12">
      
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="relative mb-20 border-b border-gray-900 dark:border-gray-800 pb-8 flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-2">
                ( 02 — CAREER_HISTORY )
                </span>
                <h1 className="text-4xl sm:text-7xl font-bold tracking-tighter uppercase leading-[0.9]">
                System<br />
                Logs
                </h1>
            </div>

            {/* HEADER METADATA */}
            <div className="hidden md:block text-right">
                <div className="font-mono text-[10px] text-gray-400 uppercase tracking-widest space-y-1 opacity-70">
                    <p>total_entries: <span className="text-gray-900 dark:text-gray-200">{experiencesData.length}</span></p>
                    <p>sync_status: <span className="text-green-600">up_to_date</span></p>
                    <p>mode: <span className="text-gray-900 dark:text-gray-200">read_only</span></p>
                </div>
            </div>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative max-w-5xl mx-auto">
            
            {/* The Continuous Trace Line */}
            <div className="absolute left-0 top-4 bottom-0 w-px border-l border-dashed border-gray-400 dark:border-gray-800"></div>

            <div className="space-y-16">
                {experiencesData.map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-12 md:pl-24 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 group"
                    >
                        
                        {/* TIMELINE NODE (The "Commit" Dot) */}
                        <div className="absolute left-[-4px] top-2.5 w-2 h-2 bg-gray-900 dark:bg-white rounded-full group-hover:scale-150 transition-transform duration-300 ring-4 ring-[#E4E4E4] dark:ring-black"></div>

                        {/* LEFT COLUMN: Meta Data (Date, Role, Hash) */}
                        <div className="md:col-span-4 flex flex-col justify-start">
                            {/* Date Badge */}
                            <span className="inline-block px-2 py-1 mb-3 text-[10px] font-mono font-bold uppercase tracking-widest bg-gray-200 dark:bg-gray-900 text-black dark:text-white w-fit">
                                {item.date}
                            </span>
                            
                            <h3 className="font-bold text-xl uppercase leading-tight mb-1">
                                {item.title}
                            </h3>
                            
                            <p className="text-sm font-mono text-gray-600 dark:text-gray-400 mb-2">
                                @ {item.company}
                            </p>

                            {/* Faux System Metadata */}
                            <div className="mt-2 pt-2 border-t border-dashed border-gray-300 dark:border-gray-800 opacity-60">
                                <p className="text-[9px] font-mono uppercase text-gray-500">
                                    :: loc: {item.location}
                                </p>
                                <p className="text-[9px] font-mono uppercase text-gray-500">
                                    :: commit: <span className="lowercase">8a2b{index}f</span>
                                </p>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Description & Dependencies */}
                        <div className="md:col-span-8">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                                {item.description}
                            </p>

                            {/* TECH TAGS (Styled as Dependencies) */}
                            <div>
                                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-2">
                                    [ Dependencies ]
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {item.skills.map((skill, i) => (
                                        <span 
                                            key={i} 
                                            className="px-3 py-1 border border-gray-300 dark:border-gray-700 text-[10px] font-mono uppercase tracking-wider text-gray-600 dark:text-gray-400 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-colors cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </motion.div>
                ))}
            </div>

        </div>

        {/* BOTTOM DECORATION */}
        <div className="mt-32 pt-8 border-t border-dashed border-gray-300 dark:border-gray-800 flex justify-between items-center opacity-50">
            <p className="text-[10px] font-mono text-gray-400 uppercase">
                End_Of_Stream
            </p>
            <p className="text-[10px] font-mono text-gray-400 uppercase">
                [ EOF ]
            </p>
        </div>

      </div>
    </main>
  );
}