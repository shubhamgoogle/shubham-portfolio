"use client";

import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { Database, Brain, Cloud, Award, ExternalLink } from "lucide-react";

export default function SkillsMatrix() {
  const categoryIcons = [
    <Database key="db" className="w-5 h-5 text-[#007a7a]" />,
    <Brain key="ai" className="w-5 h-5 text-[#007a7a]" />,
    <Cloud key="cloud" className="w-5 h-5 text-[#007a7a]" />
  ];

  return (
    <section id="skills" className="py-20 border-t border-gray-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-heading text-2xl sm:text-3xl">Skills &amp; Technologies</h2>
          <p className="text-gray-600 text-sm sm:text-base mt-4 max-w-lg mx-auto">
            Core competencies across enterprise data pipelines, agentic workflows, and Google Cloud platforms.
          </p>
        </div>

        {/* 3 Columns for Core Skill Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.skills.map((cat, idx) => (
            <div
              key={cat.title}
              className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between shadow-xs hover:border-[#007a7a]/40 hover:shadow-sm transition-all"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                    {categoryIcons[idx % categoryIcons.length]}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 leading-snug">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-gray-500 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills Badges */}
                <div className="space-y-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="px-3 py-2 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-between text-xs hover:bg-gray-100/70 transition-colors"
                    >
                      <span className="text-gray-800 font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#007a7a]"></span>
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span
                          className={`text-[10px] font-mono ${
                            skill.level === "Expert"
                              ? "text-[#007a7a] font-semibold bg-[#007a7a]/10 px-1.5 py-0.5 rounded border border-[#007a7a]/20"
                              : "text-gray-500"
                          }`}
                        >
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Certifications Sub-section */}
        <div className="mt-16 pt-12 border-t border-gray-200/80">
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#007a7a] uppercase tracking-wider mb-2">
              <Award className="w-4 h-4" />
              <span>Verified Credentials</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Professional Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {portfolioData.certifications.map((cert) => (
              <a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 flex items-start gap-5 shadow-xs hover:border-[#007a7a]/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Large Credly Badge Image */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 relative flex-shrink-0 bg-gray-50 rounded-xl p-2 border border-gray-100 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  <Image
                    src={cert.badgeImage}
                    alt={cert.name}
                    fill
                    sizes="(max-width: 768px) 80px, 96px"
                    className="object-contain p-1"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                  <div>
                    {cert.category && (
                      <span className="inline-block text-xs sm:text-[13px] font-bold px-3 py-1 rounded-full bg-[#007a7a]/10 text-[#007a7a] border border-[#007a7a]/25 mb-2.5">
                        {cert.category}
                      </span>
                    )}
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#007a7a] transition-colors leading-snug">
                      {cert.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Verification link */}
                  <div className="pt-3.5 mt-3.5 border-t border-gray-100 flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#007a7a] group-hover:underline">
                    <span>Verify on Credly</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
