import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubham Chawla | AI & Data Engineer, Google",
  description:
    "Portfolio of Shubham Chawla — AI & Data Engineer at Google. Specializing in Lakehouses, BigQuery, Cloud Spanner Graph, and Model Context Protocol (MCP) ecosystems.",
  keywords: [
    "Shubham Chawla",
    "Data Engineer",
    "Agentic AI",
    "LLM Developer",
    "Google",
    "BigQuery",
    "Cloud Spanner",
    "PySpark",
    "Model Context Protocol",
    "MCP",
    "GraphRAG",
    "LangGraph"
  ],
  authors: [{ name: "Shubham Chawla" }],
  openGraph: {
    title: "Shubham Chawla | AI & Data Engineer, Google",
    description:
      "Specializing in Big Data lakehouses, distributed streaming, and autonomous multi-agent LLM systems at Google.",
    url: "https://shubhamchawla.dev",
    siteName: "Shubham Chawla Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f9fafb] text-[#1f2937] selection:bg-[#007a7a] selection:text-white">
        {children}
      </body>
    </html>
  );
}
