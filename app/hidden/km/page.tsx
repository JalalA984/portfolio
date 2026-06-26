import type { Metadata } from "next";
import BracesStudio from "./BracesStudio";

export const metadata: Metadata = {
  title: "Mahdi's Brace Place",
  robots: { index: false, follow: false },
};

export default function HiddenKmPage() {
  return <BracesStudio />;
}
