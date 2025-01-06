import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import Image from "next/image";

type SkillProps = (typeof skillsData)[number];

function Skill({ name, percentage, imageUrl }: SkillProps) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-24 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={imageUrl}
        alt={name}
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-24 md:h-28 xl:w-32 xl:h-32 rounded-full z-0 overflow-hidden">
    
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-xl md:text-2xl xl:text-3xl opacity-100">
            {name}
          </p>
          <p className="text-lg md:text-xl xl:text-2xl opacity-100">
            {percentage}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
