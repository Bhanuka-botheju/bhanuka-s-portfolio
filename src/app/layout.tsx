import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bhanuka | CS Engineer & Data Scientist",
  description:
    "Personal portfolio of Bhanuka – CS Engineer specializing in Data Science, and Physics educator for A/L students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0f1e] text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
