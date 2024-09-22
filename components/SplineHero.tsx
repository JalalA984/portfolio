"use client";
import Spline from "@splinetool/react-spline/next";
import React, { Suspense } from "react";

// Spline design credits due to @mkhtr7
// https://app.spline.design/@mkhtr7

export default function SplineHero() {

  return (
    <div className="relative w-screen h-screen z-0">
      <Spline
        scene="https://prod.spline.design/gA6rZCmuKpLnFw5z/scene.splinecode"
      />

    </div>
  );
}
