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
  title: "Shubham Chawla | Data Engineer & Agentic AI Developer",
  description:
    "Portfolio of Shubham Chawla — Data Engineer & Agentic AI / LLM Developer at Google. Specializing in Lakehouses, GraphRAG, and Model Context Protocol (MCP) ecosystems.",
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
    title: "Shubham Chawla | Data Engineer & Agentic AI Developer",
    description:
      "Specializing in Big Data lakehouses, distributed streaming, and autonomous multi-agent LLM systems.",
    url: "https://shubhamchawla.dev",
    siteName: "Shubham Chawla Portfolio",
    locale: "en_US",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#090d16] text-[#f1f5f9] selection:bg-emerald-500/30 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}
