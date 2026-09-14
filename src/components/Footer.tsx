"use client";

import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, MediumIcon, GeminiIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-10 text-xs text-gray-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        {/* Left: Built by */}
        <div className="text-center sm:text-left space-y-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            <p className="text-gray-700 font-medium">
              Designed &amp; Developed by{" "}
              <span className="text-[#007a7a] font-semibold">
                {portfolioData.personal.name}
              </span>
            </p>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-blue-50/80 via-purple-50/80 to-pink-50/80 border border-purple-200/60 text-[11px] text-gray-700 font-medium shadow-2xs">
              <GeminiIcon className="w-3.5 h-3.5" />
              <span>
                Built with{" "}
                <span className="font-semibold bg-gradient-to-r from-[#4E82EE] via-[#9B72CF] to-[#D96570] bg-clip-text text-transparent">
                  Gemini
                </span>
              </span>
            </span>
          </div>
          <p className="text-gray-400 text-[11px] flex items-center gap-2 justify-center sm:justify-start">
            <span>AI &amp; Data Engineer @ Google</span>
            <span>•</span>
            <Link href="/beyond-code" className="hover:text-[#007a7a] transition-colors underline decoration-dotted">
              Beyond Code
            </Link>
          </p>
        </div>

        {/* Right: Socials & Back to Top */}
        <div className="flex items-center gap-5">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#007a7a] transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#007a7a] transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          {portfolioData.personal.medium && (
            <a
              href={portfolioData.personal.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#007a7a] transition-colors"
              aria-label="Medium Articles"
            >
              <MediumIcon className="w-4 h-4" />
            </a>
          )}
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="text-gray-500 hover:text-[#007a7a] transition-colors"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-gray-500 hover:text-gray-900 px-2.5 py-1 rounded bg-gray-100 border border-gray-200 transition-colors text-[11px]"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
