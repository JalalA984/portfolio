"use client";

// @ts-ignore
import Spline from "@splinetool/react-spline/next";
import "../app/globals.css";

// Spline design credits due to @DesignGabor
// https://app.spline.design/@DesignGabor


export default function SplineHero() {
  return (
    <div className="relative w-screen h-screen z-0">
      <div className="w-full h-full">
        <Spline
          scene="https://prod.spline.design/EXf7Cw1kTSSAlKcM/scene.splinecode"
          className="responsive-spline"
        />
      </div>
    </div>
  );
}
