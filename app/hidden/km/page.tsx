import type { Metadata } from "next";
import KmTerminal from "./KmTerminal";

export const metadata: Metadata = {
  title: "Access Denied",
  robots: { index: false, follow: false },
};

export default function HiddenKmPage() {
  return <KmTerminal />;
}
