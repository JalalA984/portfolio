import dynamic from "next/dynamic";
import About from "@/components/About";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SectionDivider from "@/components/SectionDivider";
import Contact from "@/components/Contact";
import Coursework from "@/components/Coursework";
import Footer from "@/components/Footer";
import Technologies from "@/components/Technologies";
import Header from "@/components/Header";
import { IconCloudDemo } from "@/components/IconCloudDemo";
import LoadComponent from "@/components/LoadComponent";

const SplineHero = dynamic(
  () => import("../components/SplineHero.tsx").then((mod) => mod.default),
  {
    ssr: false,
  }
);

export const metadata = {
  keywords:
    "Jalal Ahmad, UMD, University of Maryland, College Park, Software Engineer, Software Engineering, Computer Science, Full Stack Developer, Programming, Artificial Intelligence, AI, Machine Learning, Jalal Ahmad Linkedin",
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-screen">
        <SplineHero />
        <section className="flex flex-col justify-center items-center mx-auto my-auto">
          <div className="flex flex-col justify-center items-center text-center">
            <LoadComponent/>
            <Intro />
            <SectionDivider />
            <About />
            <Projects />
            <Skills />
    
            <Technologies />

            <div className="relative top-[-50px]">
              <IconCloudDemo />
            </div>

            <Coursework />
            <Contact />
            <Footer />
          </div>
        </section>
      </main>
    </>
  );
}
