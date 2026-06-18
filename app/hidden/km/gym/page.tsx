import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mahdi's Gym",
  description: "v1 interactive about anabolic steroids",
  robots: {
    index: false,
    follow: false,
  },
};

export default function GymPage() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <iframe
        src="/hidden/km/gym/index.html"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          overflow: "hidden",
        }}
        title="Mahdi's Gym"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
}