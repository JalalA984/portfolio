"use client"
import Link from "next/link";
import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    const pointer = document.getElementById("pointer");

    if (pointer) {
      window.onmousemove = function (e) {
        pointer.style.left = (e.x - pointer.offsetWidth / 2) + "px";
        pointer.style.top = (e.y - pointer.offsetHeight / 2) + "px";
      };
    }
  }, []);

  return (
    <section className="w-full h-screen flex justify-center items-center bg-[#E4E4E4] overflow-hidden relative">
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-[10rem] sm:text-[14rem] md:text-[18rem] lg:text-[22rem] font-bold text-center text-black">
          4 <span className="text-transparent stroke-4 text-cyan-200">X</span> 4
        </h1>
      </div>
      <div
        id="pointer"
        className="absolute z-10 w-[200px] h-[200px] bg-white rounded-full pointer-events-none mix-blend-difference"
      ></div>

      <Link href="/" className="absolute bottom-10 text-2xl bg-cyan-500 text-white py-2 px-6 rounded-md shadow-lg hover:bg-cyan-600 transition duration-300">
        
          Go Back Home
        
      </Link>
    </section>
  );
};

export default NotFound;
