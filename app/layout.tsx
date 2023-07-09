import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Marius Paduraru - Frontend Developer",
  description:
    "Welcome to Marius' portfolio - a web developer who embraces minimalism and simplicity. Discover beautifully crafted websites and intuitive user experiences. Explore Marius' work and see how he combines elegant design with powerful functionality to create compelling digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body>{children}</body>
    </html>
  );
}
