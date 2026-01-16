import dynamic from "next/dynamic";
import Link from "next/link";
import LoadComponent from "@/components/LoadComponent";
import { links } from "@/lib/data";

export const metadata = {
  keywords:
    "Jalal Ahmad, Maryland, UMD, University of Maryland, College Park, Software Engineer, Software Engineering, Computer Science, Distributed Systems, Programming, Artificial Intelligence, AI, Machine Learning, Cloud Computing, High Performance Computing, Tech Enthusiast, Developer Portfolio",
};

// SPLINE HERO (Background Layer)
// Spline design credits due to @DesignGabor
// https://app.spline.design/@DesignGabor
const SplineHero = dynamic(
  () => import("../components/SplineHero.tsx").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="h-screen w-full bg-[#E4E4E4] dark:bg-black"></div>
    ),
  }
);

// NAV LINK COMPONENT
const NavLink = ({
  href,
  number,
  text,
}: {
  href: string;
  number: string;
  text: string;
}) => (
  <Link
    href={href}
    className="group flex items-center gap-3 cursor-pointer pointer-events-auto"
  >
    {/* "technical" index feel */}
    <span className="text-[10px] font-mono opacity-50 group-hover:opacity-100 transition-opacity duration-300">
      {number}
    </span>
    {/* text with bracket animation */}
    <span className="text-sm font-medium uppercase tracking-widest text-gray-900 dark:text-gray-100 group-hover:italic transition-all duration-300">
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1">
        [
      </span>
      {text}
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-1">
        ]
      </span>
    </span>
  </Link>
);

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#E4E4E4] dark:bg-black font-sans selection:bg-black selection:text-white">
      {/* ---------------- LAYER 0: 3D SCENE ---------------- */}
      {/* Absolute positioning ensures it stays behind everything */}
      <div className="absolute inset-0 z-0">
        <SplineHero />
      </div>

      {/* ---------------- LAYER 1: UI OVERLAY ---------------- */}
      {/* z-10 puts it on top. 
          pointer-events-none lets clicks pass through to the Spline model in empty areas. 
      */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 sm:p-12 pointer-events-none">
        {/* --- TOP ROW --- */}
        <header className="flex justify-between items-start w-full">
          {/* Top Left: Brand / Name */}
          <div className="flex flex-col pointer-events-auto">
            <h1 className="text-md font-bold uppercase tracking-tight text-gray-900 dark:text-white">
              Jalal Ahmad
            </h1>
            <p className="text-[10px] text-gray-500 font-mono mt-1">
              ( DEV_PORTFOLIO )
            </p>
          </div>

          {/* Top Right: Status / Location */}
          <div className="text-right pointer-events-auto">
            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
              Based in Maryland
            </p>
            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-1">
              Available for 2026
            </p>
          </div>
        </header>

        {/* --- CENTER: Loading State (If needed) --- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <LoadComponent />
        </div>

        {/* --- BOTTOM ROW --- */}
        <footer className="flex flex-col sm:flex-row justify-between items-center sm:items-end w-full pointer-events-none">
          {/* Bottom Left: MAIN NAVIGATION */}
          <nav className="grid grid-cols-2 gap-x-8 gap-y-2 w-full max-w-xs sm:max-w-none sm:w-auto sm:flex sm:flex-col sm:gap-2 mt-auto sm:mt-0 pointer-events-auto">
            {/* Label */}
            <p className="hidden sm:block text-[10px] text-gray-400 font-mono mb-2 uppercase tracking-widest">
              Directory
            </p>

            {links
              .filter((link) => link.hash !== "/")
              .map((link, index) => (
                <NavLink
                  key={link.hash}
                  href={link.hash}
                  number={`0${index + 1}`}
                  text={link.name}
                />
              ))}
          </nav>

          {/* Bottom Right: Socials / Current Role */}
          <div className="w-full sm:w-auto mt-6 sm:mt-0 pt-6 sm:pt-0 border-t border-dashed border-gray-300 dark:border-gray-800 sm:border-none pointer-events-auto text-center sm:text-right">
            <p className="text-[10px] font-mono text-gray-500 uppercase mb-2">
              Connect
            </p>
            <div className="flex gap-4 justify-center sm:justify-end">
              <a
                href="https://linkedin.com/in/jalalahm"
                target="_blank"
                className="text-xs font-medium uppercase hover:line-through transition-all text-gray-900 dark:text-white"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/JalalA984"
                target="_blank"
                className="text-xs font-medium uppercase hover:line-through transition-all text-gray-900 dark:text-white"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
