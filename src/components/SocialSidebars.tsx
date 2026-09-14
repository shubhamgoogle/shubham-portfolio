"use client";

import { portfolioData } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, MediumIcon } from "@/components/Icons";
import { Mail } from "lucide-react";

export default function SocialSidebars() {
  return (
    <>
      {/* Left Sidebar: Social Icons */}
      <div className="hidden lg:flex fixed left-8 xl:left-12 bottom-0 z-40 flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-5">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-gray-500 hover:text-[#007a7a] hover:-translate-y-1 transition-all duration-200"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-gray-500 hover:text-[#007a7a] hover:-translate-y-1 transition-all duration-200"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          {portfolioData.personal.medium && (
            <a
              href={portfolioData.personal.medium}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium Articles"
              className="text-gray-500 hover:text-[#007a7a] hover:-translate-y-1 transition-all duration-200"
            >
              <MediumIcon className="w-5 h-5" />
            </a>
          )}
          <a
            href={`mailto:${portfolioData.personal.email}`}
            aria-label="Direct Email"
            className="text-gray-500 hover:text-[#007a7a] hover:-translate-y-1 transition-all duration-200"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <div className="w-[1px] h-28 bg-gray-300" />
      </div>

      {/* Right Sidebar: Vertical Email Link */}
      <div className="hidden lg:flex fixed right-8 xl:right-12 bottom-0 z-40 flex-col items-center gap-6">
        <a
          href={`mailto:${portfolioData.personal.email}`}
          className="text-xs font-mono text-gray-500 hover:text-[#007a7a] hover:-translate-y-1 transition-all duration-200 tracking-wider [writing-mode:vertical-rl]"
        >
          {portfolioData.personal.email}
        </a>
        <div className="w-[1px] h-28 bg-gray-300" />
      </div>
    </>
  );
}
