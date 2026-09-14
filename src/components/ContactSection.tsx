"use client";

import { useState } from "react";
import { Mail, Copy, Check, Send, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 border-t border-gray-200/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center">
        {/* Section Header */}
        <h2 className="section-heading text-2xl sm:text-3xl mb-4">Contact</h2>

        <h3 className="text-2xl sm:text-4xl font-bold text-gray-900 tracking-tight mt-4">
          Get in touch!
        </h3>

        <p className="text-gray-600 text-base sm:text-lg mt-3 max-w-lg mx-auto leading-relaxed">
          Whether you want to discuss distributed data architectures, agentic AI frameworks, or potential collaborations, my inbox is always open!
        </p>

        {/* Primary Mailto Action */}
        <div className="mt-8">
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="inline-flex items-center gap-2 bg-[#007a7a] hover:bg-[#006666] text-white px-8 py-3.5 rounded-md font-medium text-base shadow-sm hover:shadow transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Say Hello</span>
          </a>
        </div>

        {/* Email Copy Card & Socials */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-xs max-w-lg mx-auto space-y-5">
          {/* Email Copy Row */}
          <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs sm:text-sm font-mono text-gray-700 font-medium">
              {portfolioData.personal.email}
            </span>

            <button
              onClick={copyEmail}
              className="w-full sm:w-auto px-3.5 py-1.5 rounded-lg bg-white hover:bg-gray-100 text-xs font-medium text-gray-700 border border-gray-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#007a7a]" />
                  <span className="text-[#007a7a]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-gray-500" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Social Channels */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 hover:border-[#007a7a]/40 hover:bg-white transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <LinkedinIcon className="w-4 h-4 text-[#007a7a]" />
                <span className="text-xs font-semibold text-gray-800 group-hover:text-[#007a7a]">
                  LinkedIn
                </span>
              </div>
              <Send className="w-3 h-3 text-gray-400 group-hover:text-[#007a7a] group-hover:translate-x-0.5 transition-all" />
            </a>

            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 hover:border-[#007a7a]/40 hover:bg-white transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <GithubIcon className="w-4 h-4 text-gray-800" />
                <span className="text-xs font-semibold text-gray-800 group-hover:text-[#007a7a]">
                  GitHub
                </span>
              </div>
              <Send className="w-3 h-3 text-gray-400 group-hover:text-[#007a7a] group-hover:translate-x-0.5 transition-all" />
            </a>
          </div>

          {/* Location Footnote */}
          <div className="pt-2 text-xs text-gray-500 flex items-center justify-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#007a7a]" />
            <span>Based in {portfolioData.personal.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
