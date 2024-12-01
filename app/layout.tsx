/*

import { Analytics } from "@vercel/analytics/react"
import Header from "@/components/Header";
import "./globals.css";
import { Inter, Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Jalal • Developer Portfolio",
  description: "Jalal Ahmad is an aspiring full-stack developer software engineer at the University of Maryland College Park. Jalal Ahmad is a Computer Science student graduating in May 2026 from the University of Maryland College Park. Passionate about software engineering, programming, Artificial Intelligence, Machine Learning, and full-stack development, Jalal is eager to build innovative solutions in tech. Connect with him on LinkedIn to learn more.",
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

*/

"use client";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import "./globals.css";
import { Inter, Jost } from "next/font/google";
import { useState, useEffect } from "react";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Jalal • Developer Portfolio",
  description:
    "Jalal Ahmad is an aspiring software engineer at the University of Maryland College Park. He is a Computer Science student graduating in May 2026 from the University of Maryland College Park. Passionate about software engineering, programming, Artificial Intelligence, Machine Learning, and full-stack development, Jalal is eager to build innovative solutions in tech. Connect with him on LinkedIn to learn more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Wait for 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <html lang="en" className="!scroll-smooth">
      <meta
        name="google-site-verification"
        content="v829dSTXwEV9h8r-X5IMslqf6gBhpzbfPT2T_UkzJXY"
      />
      <body className={`${jost.className}`}>
        {isLoading ? (
          <div className="loading-screen">
            <h1>Loading...</h1>
          </div>
        ) : (
          <>
            <Header />
            {children}
            <Analytics />
          </>
        )}

        {/* Styles for the loading screen */}
        <style jsx>{`
          .loading-screen {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #000; /* Black background for loading screen */
            color: #fff; /* White text for contrast */
            font-size: 2rem;
          }
        `}</style>
      </body>
    </html>
  );
}

