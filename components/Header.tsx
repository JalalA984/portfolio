"use client";
import React, { useState } from "react";
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
} from "@heroicons/react/solid";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
          className="fixed top-4 sm:top-8 w-full max-w-[48rem] rounded-[16px] bg-[rgba(220, 232, 255, 0.27)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[8.8px] flex items-center justify-between px-4 py-2 sm:px-6 sm:py-3"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-gray-700 hover:text-gray-950 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>

          {/* Navbar Links */}
          <nav
            className={`${
              isOpen ? "flex" : "hidden"
            } sm:flex flex-col sm:flex-row w-full items-center sm:justify-center sm:gap-6 text-[0.8rem] sm:text-[0.9rem] font-medium text-gray-700`}
          >
            <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
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

              {/* LinkedIn and GitHub Icons */}
              <motion.li
                className="flex items-center justify-center"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: links.length * 0.1 }}
              >
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  <a
                    href="https://www.linkedin.com/in/jalalahm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center w-10 h-10 sm:w-12 sm:h-12 hover:text-gray-950 transition"
                  >
                    <FaLinkedin className="h-5 w-5" />
                    <span className="text-[10px] sm:text-xs mt-1">LinkedIn</span>
                  </a>
                </motion.div>
              </motion.li>
              <motion.li
                className="flex items-center justify-center"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: (links.length + 1) * 0.1 }}
              >
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  <a
                    href="https://github.com/JalalA984/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center w-10 h-10 sm:w-12 sm:h-12 hover:text-gray-950 transition"
                  >
                    <FaGithub className="h-5 w-5" />
                    <span className="text-[10px] sm:text-xs mt-1">GitHub</span>
                  </a>
                </motion.div>
              </motion.li>
            </ul>
          </nav>
        </motion.div>
      </header>
    </div>
  );
}
