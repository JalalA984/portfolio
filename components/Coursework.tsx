"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { HoverEffect } from "./ui/card-hover-effect";
import { coursesData } from "@/lib/data"; 

export default function Project() {
  return (
    <section id="coursework" className="mb-28 scroll-m-28">
      <SectionHeading>Coursework</SectionHeading>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={coursesData} />
      </div>
    </section>
  );
}
