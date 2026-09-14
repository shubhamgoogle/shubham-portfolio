"use client";

import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, MediumIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-10 text-xs text-gray-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        {/* Left: Built by */}
        <div className="text-center sm:text-left space-y-1">
          <p className="text-gray-700 font-medium">
            Designed &amp; Developed by{" "}
            <span className="text-[#007a7a] font-semibold">
              {portfolioData.personal.name}
            </span>
          </p>
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
