import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RefCheck Scheduler – Automate Reference Check Coordination",
  description: "Schedules reference calls automatically, sends templated questions to references, and compiles responses into structured reports for HR teams and recruiters."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="93c16a45-08e7-4382-a69d-4abf4697d7a9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
