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
      <body className={`${jost.className}`}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
