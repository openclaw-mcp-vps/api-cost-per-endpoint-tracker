import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Cost Tracker — Per-Endpoint Cost Monitoring",
  description: "Track costs per API endpoint in real-time. Monitor usage, detect cost spikes, and optimize your API spending with per-endpoint analytics."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1105b26e-680b-426b-b4b9-6a5216af9050"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
