
import { Analytics } from "@vercel/analytics/react"
import Header from "@/components/Header";
import "./globals.css";
import { Inter, Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Jalal • Developer Portfolio",
  description: "Jalal Ahmad is an aspiring full-stack developer software engineer at the University of Maryland College Park. Jalal Ahmad is a Computer Science student graduating in May 2026 from the University of Maryland College Park. Passionate about software engineering, programming, Artificial Intelligence, Machine Learning, and full-stack development, Jalal is eager to build innovative solutions in tech. Connect with him on LinkedIn to learn more.",
  keywords: "Jalal Ahmad, Maryland, UMD, University of Maryland, College Park, Software Engineer, Software Engineering, Computer Science, Full Stack Developer, Programming, Artificial Intelligence, AI, Machine Learning, Jalal Ahmad Linkedin",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <meta name="google-site-verification" content="v829dSTXwEV9h8r-X5IMslqf6gBhpzbfPT2T_UkzJXY" />
      <body className={`${jost.className}`}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

