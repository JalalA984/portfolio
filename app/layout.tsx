import Header from "@/components/Header";
import "./globals.css";
import { Inter, Jost } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Jalal Ahmad • Dev Portfolio",
  description:
    "Jalal Ahmad is an aspiring full-stack developer at the University of Maryland College Park",
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
      </body>
    </html>
  );
}
