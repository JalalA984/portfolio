"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function KmTerminal() {
  const [textStage, setTextStage] = useState(0);
  const [eyesOpen, setEyesOpen] = useState(true);
  const [step, setStep] = useState(false);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setTextStage(1), 500),  // Start
      setTimeout(() => setTextStage(2), 1500), // Show Error
      setTimeout(() => setTextStage(3), 2500), // Show Description
      setTimeout(() => setTextStage(4), 3500), // Show Cat
      setTimeout(() => setTextStage(5), 4500), // Show Prompt
    ];
    return () => timeouts.forEach((t) => clearTimeout(t));
  }, []);

  // Blink: eyes stay open, then snap shut briefly on a loop
  useEffect(() => {
    let blinkTimeout: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setEyesOpen(false);
      blinkTimeout = setTimeout(() => setEyesOpen(true), 160);
    }, 2600);
    return () => {
      clearInterval(interval);
      clearTimeout(blinkTimeout);
    };
  }, []);

  // Stepping paws for the strolling cat
  useEffect(() => {
    const interval = setInterval(() => setStep((s) => !s), 260);
    return () => clearInterval(interval);
  }, []);

  const eye = eyesOpen ? "o" : "-";
  const cat = `      /\\_____/\\
     (  ${eye}   ${eye}  )
     (   =^=   )
      )       (
     (  )   (  )
      (  ) (  )
       \`-----'`;

  const paws = step ? " U   U" : "  U U ";
  const walker = ` /\\_/\\
( o.o )
${paws}`;

  return (
    <main className="min-h-screen w-full bg-[#E4E4E4] dark:bg-[#050505] text-gray-900 dark:text-gray-100 font-mono flex flex-col items-center justify-start md:justify-center pt-32 pb-10 px-4 sm:px-8">

      {/* TERMINAL WINDOW CONTAINER */}
      <div
        className="w-full max-w-3xl bg-[#1a1a1a] rounded-lg shadow-2xl overflow-hidden border border-gray-600 relative flex flex-col animate-in fade-in zoom-in-95 duration-500"
      >

        {/* WINDOW TITLE BAR */}
        <div className="bg-[#2a2a2a] px-4 py-2 flex items-center gap-2 border-b border-gray-700 shrink-0">
          <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors"></div>
          <div className="flex-1 text-center text-[10px] text-gray-400 uppercase tracking-widest font-sans truncate ml-2">
            jalal-ahmad-system — -bash — 80x24
          </div>
        </div>

        {/* TERMINAL SCREEN CONTENT */}
        <div className="p-6 sm:p-10 min-h-[300px] sm:min-h-[400px] text-green-400 font-mono text-sm sm:text-base leading-relaxed relative overflow-y-auto max-h-[60vh] scrollbar-hide">

          {/* CRT SCANLINE OVERLAY */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] opacity-20 sticky top-0"></div>

          {/* STAGE 1: BOOT */}
          <div className="mb-4 break-words">
            <span className="text-gray-500 mr-2">guest@jalal-system:~$</span>
            <span className="typing-text">navigate --target current_page</span>
          </div>

          {/* STAGE 2: PROCESSING */}
          {textStage >= 1 && (
            <div className="mb-4 text-gray-300 space-y-1">
              <p>[WARN] Give me algeria pic.</p>
            </div>
          )}

          {/* STAGE 3: ERROR */}
          {textStage >= 2 && (
            <div className="mb-8">
              <h1 className="text-3xl sm:text-6xl font-bold text-red-500 mb-2 glitch-text">
                U SUCK MAHDI
              </h1>
              {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
              <p className="text-red-400 uppercase tracking-widest text-[10px] sm:text-xs">
                // Get a kitty.
              </p>
            </div>
          )}

          {/* STAGE 4: PROMPT */}
          {textStage >= 3 && (
            <div className="mb-6">
              <p className="text-white mb-2">Available recovery options:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-400 text-xs sm:text-sm">
                <li>im tired</li>
                <li>hows work</li>
                <li>no one asked</li>
              </ul>
            </div>
          )}

          {/* STAGE 5: KITTY */}
          {textStage >= 4 && (
            <div className="my-6 animate-in fade-in zoom-in-95 duration-500">
              <pre className="text-green-400 [text-shadow:0_0_8px_rgba(74,222,128,0.8)] text-[10px] sm:text-sm leading-tight select-none">
{cat}
              </pre>
              <p className="text-gray-500 text-[10px] sm:text-xs mt-1">
                &gt; milo was here. purr_loaded.exe [OK]
              </p>

              {/* Strolling cat */}
              <div className="relative h-16 mt-2 overflow-hidden">
                <pre className="cat-stroll text-green-400 [text-shadow:0_0_8px_rgba(74,222,128,0.8)] text-[10px] sm:text-sm leading-tight select-none">
{walker}
                </pre>
              </div>
            </div>
          )}

          {/* STAGE 6: INPUT LINE */}
          {textStage >= 5 && (
             <div className="mt-8 flex flex-wrap items-center gap-2 group">
                <span className="text-gray-500">guest@jalal-system:~$</span>

                <Link
                  href="/"
                  className="bg-green-500/20 text-green-400 hover:bg-green-500 hover:text-black px-2 py-0.5 transition-all animate-pulse hover:animate-none whitespace-nowrap"
                >
                  cd /home
                </Link>

                {/* Blinking Cursor */}
                <span className="w-2.5 h-5 bg-green-500 animate-[pulse_1s_infinite]"></span>
             </div>
          )}

        </div>
      </div>

      {/* FOOTER HINT */}
      <p className="mt-8 font-mono text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest opacity-60 text-center">
        [ Press the command above to reboot ]
      </p>

    </main>
  );
}
