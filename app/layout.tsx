import { Analytics } from "@vercel/analytics/react"
import Header from "@/components/Header";
import "./globals.css";
import { Inter, Jost } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <Head>
        {/* Primary Meta Tags */}
        <meta name="title" content="Jalal Ahmad • Developer Portfolio" />
        <meta name="description" content="Jalal Ahmad is an aspiring full-stack developer software engineer at the University of Maryland College Park. Jalal Ahmad is a Computer Science student graduating in May 2026 from the University of Maryland College Park. Passionate about software engineering, programming, Artificial Intelligence, Machine Learning, and full-stack development, Jalal is eager to build innovative solutions in tech. Connect with him on LinkedIn to learn more." />

        {/* LinkedIn Profile */}
        <meta property="og:see_also" content="https://linkedin.com/in/jalalahm/" />
      </Head>
      <body className={`${jost.className}`}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
