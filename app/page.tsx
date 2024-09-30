import dynamic from "next/dynamic";
import About from "@/components/About";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SectionDivider from "@/components/SectionDivider";
import Contact from "@/components/Contact";
import Coursework from "@/components/Coursework";
import Footer from "@/components/Footer";
import Head from "next/head";

const SplineHero = dynamic(
  () => import("../components/SplineHero.tsx").then((mod) => mod.default),
  {
    ssr: false, // Disable server-side rendering for this component
  }
);

export default function Home() {
  return (
    <main className="h-screen">
      <Head>
        <title>Jalal Ahmad • Developer Portfolio</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Jalal Ahmad, UMD, University of Maryland, College Park, Software Engineer, Software Engineering, Computer Science, Full Stack Developer, Programming, Artificial Intelligence, AI, Machine Learning, Jalal Ahmad Linkedin"
        />
        <link rel="canonical" href="https://jalalahmad.vercel.app/" />
      </Head>

      {/* SplineHero is dynamically imported and will only be rendered client-side */}
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
