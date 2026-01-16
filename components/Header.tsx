"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { links } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // LOGIC: If we are on the homepage ("/"), DO NOT render this header.
  if (pathname === "/") {
    return null;
  }

  // Filter out "Home" from the menu links since the Logo acts as Home
  const navLinks = links.filter((link) => link.hash !== "/");

  return (
    <>
      {/* MAIN HEADER */}
      <header className="fixed top-0 left-0 w-full z-[999] px-6 py-6 sm:px-12 flex justify-between items-center mix-blend-difference text-white">
        {/* Logo */}
        <Link
          href="/"
          className="font-sans text-base font-bold tracking-tight uppercase hover:opacity-70 transition-opacity "
        >
          Jalal Ahmad
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.hash;
            return (
              <Link
                key={link.hash}
                href={link.hash}
                className="group relative font-mono text-xs uppercase tracking-widest"
              >
                <span
                  className={`absolute -left-3 opacity-0 transition-all duration-300 ${
                    isActive ? "opacity-100" : "group-hover:opacity-100"
                  }`}
                >
                  [
                </span>

                <span
                  className={`${
                    isActive
                      ? "text-white font-bold"
                      : "text-gray-300 group-hover:text-white"
                  } transition-colors`}
                >
                  {link.name}
                </span>

                <span
                  className={`absolute -right-3 opacity-0 transition-all duration-300 ${
                    isActive ? "opacity-100" : "group-hover:opacity-100"
                  }`}
                >
                  ]
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-2xl hover:scale-110 transition-transform"
        >
          <HiMenuAlt4 />
        </button>
      </header>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[1000] bg-[#E4E4E4] dark:bg-black flex flex-col items-center justify-center text-black dark:text-white"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-3xl hover:rotate-90 transition-transform"
            >
              <HiX />
            </button>

            <nav className="flex flex-col gap-8 text-center">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.hash}
                  href={link.hash}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold uppercase tracking-tighter hover:text-gray-500 transition-colors"
                >
                  <span className="text-sm font-mono text-gray-400 block mb-1">
                    0{idx + 1}
                  </span>
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}