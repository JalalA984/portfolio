"use client";
import { useEffect, useState } from "react";
// @ts-ignore
import Spline from "@splinetool/react-spline/next";
import "../app/globals.css";

// Spline design credits due to @mkhtr7
// https://app.spline.design/@mkhtr7

// Function to check for WebGL support
function isWebGLAvailable() {
  try {
    const canvas = document.createElement("canvas");
    return !!window.WebGLRenderingContext && 
           (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
  } catch (e) {
    return false;
  }
}

export default function SplineHero() {
  const [canRenderSpline, setCanRenderSpline] = useState(false);

  useEffect(() => {
    if (isWebGLAvailable()) {
      setCanRenderSpline(true);
    }
  }, []);

  if (!canRenderSpline) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        {/* Optional Fallback Content */}
        <p>3D content is not supported on your device.</p>
      </div>
    );
  }

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
