import About from "@/components/About";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SectionDivider from "@/components/SectionDivider";
import SplineHero from "@/components/SplineHero";
import Contact from "@/components/Contact";
import Coursework from "@/components/Coursework";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="h-screen">
      <SplineHero />
      <section className=" flex flex-col justify-center items-center mx-auto my-auto">
        <div className="flex flex-col justify-center items-center text-center">
          <Intro />
          <SectionDivider />
          <About />
          <Projects />
          <Skills/>
          <Coursework/>
          <Contact/>
          <Footer/>
        </div>
      </section>
    </main>
  );
}
