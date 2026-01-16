"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  const [textStage, setTextStage] = useState(0);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setTextStage(1), 500),  // Start
      setTimeout(() => setTextStage(2), 1500), // Show Error
      setTimeout(() => setTextStage(3), 2500), // Show Description
      setTimeout(() => setTextStage(4), 3500), // Show Prompt
    ];
    return () => timeouts.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <main className="min-h-screen w-full bg-[#E4E4E4] dark:bg-[#050505] text-gray-900 dark:text-gray-100 font-mono flex flex-col items-center justify-start md:justify-center pt-32 pb-10 px-4 sm:px-8">
      
      {/* TERMINAL WINDOW CONTAINER */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl bg-[#1a1a1a] rounded-lg shadow-2xl overflow-hidden border border-gray-600 relative flex flex-col"
      >
        
        {/* WINDOW TITLE BAR */}
        <div className="bg-[#2a2a2a] px-4 py-2 flex items-center gap-2 border-b border-gray-700 shrink-0">
          <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors"></div>
          <div className="flex-1 text-center text-[10px] text-gray-400 uppercase tracking-widest font-sans truncate ml-2">
            jalal-ahmad-system — -bash — 80x24
          </div>
        </div>

        {/* TERMINAL SCREEN CONTENT */}
        <div className="p-6 sm:p-10 min-h-[300px] sm:min-h-[400px] text-green-400 font-mono text-sm sm:text-base leading-relaxed relative overflow-y-auto max-h-[60vh] scrollbar-hide">
          
          {/* CRT SCANLINE OVERLAY */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] opacity-20 sticky top-0"></div>

          {/* STAGE 1: BOOT */}
          <div className="mb-4 break-words">
            <span className="text-gray-500 mr-2">guest@jalal-system:~$</span>
            <span className="typing-text">navigate --target current_page</span>
          </div>

          {/* STAGE 2: PROCESSING */}
          {textStage >= 1 && (
            <div className="mb-4 text-gray-300 space-y-1">
              <p>[WARN] Path not recognized.</p>
            </div>
          )}

          {/* STAGE 3: ERROR */}
          {textStage >= 2 && (
            <div className="mb-8">
              <h1 className="text-3xl sm:text-6xl font-bold text-red-500 mb-2 glitch-text">
                404 FATAL ERROR
              </h1>
              {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
              <p className="text-red-400 uppercase tracking-widest text-[10px] sm:text-xs">
                // The requested resource could not be found.
              </p>
            </div>
          )}

          {/* STAGE 4: PROMPT */}
          {textStage >= 3 && (
            <div className="mb-6">
              <p className="text-white mb-2">Available recovery options:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-400 text-xs sm:text-sm">
                <li>Check the URL for typos</li>
                <li>Return to the homepage</li>
                <li>Contact system administrator</li>
              </ul>
            </div>
          )}

          {/* STAGE 5: INPUT LINE */}
          {textStage >= 4 && (
             <div className="mt-8 flex flex-wrap items-center gap-2 group">
                <span className="text-gray-500">guest@jalal-system:~$</span>
                
                <Link 
                  href="/"
                  className="bg-green-500/20 text-green-400 hover:bg-green-500 hover:text-black px-2 py-0.5 transition-all animate-pulse hover:animate-none whitespace-nowrap"
                >
                  cd /home
                </Link>
                
                {/* Blinking Cursor */}
                <span className="w-2.5 h-5 bg-green-500 animate-[pulse_1s_infinite]"></span>
             </div>
          )}

        </div>
      </motion.div>

      {/* FOOTER HINT */}
      <p className="mt-8 font-mono text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest opacity-60 text-center">
        [ Press the command above to reboot ]
      </p>

    </main>
  );
}