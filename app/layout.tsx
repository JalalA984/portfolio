
import { Analytics } from "@vercel/analytics/react"
import Header from "@/components/Header";
import "./globals.css";
import { Jost } from "next/font/google";
import Footer from "@/components/Footer";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Jalal • Developer Portfolio",
  description: "Jalal Ahmad is an aspiring software engineer at the University of Maryland College Park. Jalal is a Computer Science student graduating in May 2026 from the University of Maryland College Park. Passionate about Software Engineering, Cloud, Distributed Systems, Machine Learning Systems, and High Performance Computing, Jalal is eager to build innovative solutions in tech. Connect with him on LinkedIn to learn more.",
  keywords: "Jalal Ahmad, Maryland, UMD, University of Maryland, College Park, Software Engineer, Software Engineering, Computer Science, Distributed Systems, Programming, Artificial Intelligence, AI, Machine Learning, Cloud Computing, High Performance Computing, Tech Enthusiast, Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <meta name="google-site-verification" content="v829dSTXwEV9h8r-X5IMslqf6gBhpzbfPT2T_UkzJXY" />
      <body className={`${jost.className} antialiased bg-[#E4E4E4] dark:bg-black text-gray-900 dark:text-gray-100`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

