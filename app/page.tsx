

import dynamic from "next/dynamic";
import About from "@/components/About";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SectionDivider from "@/components/SectionDivider";
import Contact from "@/components/Contact";
import Coursework from "@/components/Coursework";
import Footer from "@/components/Footer";

const SplineHero = dynamic(
  () => import("../components/SplineHero.tsx").then((mod) => mod.default),
  {
    ssr: false, 
  }
);

export const metadata = {
  keywords: "Jalal Ahmad, UMD, University of Maryland, College Park, Software Engineer, Software Engineering, Computer Science, Full Stack Developer, Programming, Artificial Intelligence, AI, Machine Learning, Jalal Ahmad Linkedin",
};


export default function Home() {
  return (
    <main className="h-screen">
      <SplineHero />
      <section className="flex flex-col justify-center items-center mx-auto my-auto">
        <div className="flex flex-col justify-center items-center text-center">
          <Intro />
          <SectionDivider />
          <About />
          <Projects />
          <Skills />
          <Coursework />
          <Contact />
          <Footer />
        </div>
      </section>
    </main>
  );
}
