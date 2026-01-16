"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadComponent: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        const next = prev + Math.floor(Math.random() * 15) + 1;
        
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return next;
      });
    }, 80);

    if (percent === 100) {
      setTimeout(() => {
        setLoading(false);
      }, 500); 
    }

    return () => clearInterval(interval);
  }, [percent]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/0 backdrop-blur-[2px] pointer-events-none select-none"
        >
          
          {/* CENTERED CLUSTER */}
          <div className="flex flex-col items-center gap-4 text-center mix-blend-difference">
            
            {/* Top Label */}
            <span className="text-[10px] sm:text-xs font-mono text-gray-500 animate-pulse tracking-widest uppercase whitespace-nowrap">
               ( SYSTEM_BOOT )
            </span>

            {/* The Big Number */}
            <h1 className="text-6xl sm:text-9xl font-bold font-mono text-gray-900 dark:text-white opacity-100 tabular-nums tracking-tighter leading-none">
              {percent}%
            </h1>

            {/* Bottom Label */}
            <span className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-gray-600 uppercase tracking-widest whitespace-nowrap">
                <span className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full animate-pulse"></span>
                Loading Assets...
            </span>

          </div>

          {/* Progress Bar */}
          <motion.div 
            className="absolute bottom-0 left-0 h-1 bg-gray-900 dark:bg-white"
            initial={{ width: "0%" }}
            animate={{ width: `${percent}%` }}
            transition={{ ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadComponent;