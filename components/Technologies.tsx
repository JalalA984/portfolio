"use client";
import React from "react";
import { motion } from "framer-motion";
import { techData } from '@/lib/data'
import Skill from "./Skill";
import SectionHeading from "./SectionHeading";
type Props = {};

function Technologies({}: Props) {
  return (
    <div className="mb-28 scroll-m-28" id="skills">
        <SectionHeading>Technologies + Interests</SectionHeading>
      <motion.div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center"
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      >
        <div className="grid grid-cols-4 gap-5">
        {
                techData.map((skill, idx) => (
                    <React.Fragment key={idx}>
                    <Skill {...skill}/>
                    </React.Fragment>
                ))
            }
        </div>
        
      </motion.div>
      

    </div>
  );
}

export default Technologies;
