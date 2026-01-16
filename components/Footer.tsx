"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // LOGIC: Hide this global footer on the homepage because 
  // the homepage has its own custom HUD footer layout.
  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="w-full py-8 px-6 sm:px-12 bg-[#E4E4E4] dark:bg-black text-gray-500 dark:text-gray-400 border-t border-gray-300 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Left: Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-center sm:text-left">
          <span>© 2026 Jalal Ahmad</span>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-700">|</span>
          <span>[ All_Rights_Reserved ]</span>
        </div>

        {/* Right: Tech Stack / System Info */}
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-center sm:text-right">
          <span className="opacity-50">System_Build:</span>
          <span className="font-bold text-gray-900 dark:text-gray-200">
            Next.js / Tailwind / Framer
          </span>
        </div>

      </div>
    </footer>
  );
}