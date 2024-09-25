"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  CodeIcon,
  BookOpenIcon,
  MailIcon,
} from "@heroicons/react/solid"; // Import icons

export default function Header() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Home":
        return <HomeIcon className="h-5 w-5" />;
      case "About":
        return <UserIcon className="h-5 w-5" />;
      case "Projects":
        return <BriefcaseIcon className="h-5 w-5" />;
      case "Skills":
        return <CodeIcon className="h-5 w-5" />;
      case "Coursework":
        return <BookOpenIcon className="h-5 w-5" />;
      case "Contact":
        return <MailIcon className="h-5 w-5" />;
      default:
        return <HomeIcon className="h-5 w-5" />;
    }
  };

  return (
    <div>
      <header className="z-[999] relative w-full flex justify-center">
        <motion.div
          className="fixed top-4 sm:top-8 w-full max-w-[36rem] rounded-[16px] bg-[rgba(220, 232, 255, 0.27)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[8.8px] flex items-center justify-center px-2 sm:px-4 py-2"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <nav className="flex w-full justify-center">
            <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[0.8rem] sm:text-[0.9rem] font-medium text-gray-700">
              {links.map((link, idx) => (
                <motion.li
                  key={link.hash}
                  className="flex items-center justify-center"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={link.hash}
                      className="flex flex-col items-center justify-center w-10 h-10 sm:w-12 sm:h-12 hover:text-gray-950 transition"
                    >
                      {getIcon(link.name)}
                      <span className="text-[10px] sm:text-xs mt-1">{link.name}</span>
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </header>
    </div>
  );
}
