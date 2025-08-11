import React from "react";
import logo from "@/app/J1.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <Link href="/">
      <Image
        src={logo}
        alt="logo"
        width={50}
        height={50}
        className="w-10 h-10 mx-auto opacity-65"
      />
      </Link>
      <small className="mb-2 block text-xs">
        &copy; 2025 Jalal Ahmad. All rights reserved
      </small>
      <p className="text-xs">
        <span className="font-semibold">Website built with: </span>React &
        Next.js, TypeScript, TailwindCSS, Framer-Motion, Vercel Hosting
      </p>

    </footer>
  );
}
