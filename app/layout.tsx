import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Vihashini K S | Full Stack Developer Portfolio",
  description:
    "Computer Science Engineering student at Sri Eshwar College of Engineering. Full Stack Developer specializing in MERN Stack, React, Node.js, and modern web technologies.",
  keywords: ["Vihashini K S", "Full Stack Developer", "MERN Stack", "React", "Next.js", "CSE Student", "Portfolio"],
  authors: [{ name: "Vihashini K S" }],
  openGraph: {
    title: "Vihashini K S | Full Stack Developer",
    description: "Building scalable web applications and innovative solutions through modern technologies.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
