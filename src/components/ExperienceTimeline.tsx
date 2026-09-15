"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { MapPin, Calendar, CheckCircle2, Sparkles, Building2 } from "lucide-react";
import { GoogleLogo, CarelonLogo, DeloitteLogo, CognizantLogo } from "@/components/Icons";

export default function ExperienceTimeline() {
  const [selectedPastIndex, setSelectedPastIndex] = useState<number>(0);

  const getCompanyLogo = (company: string, sizeClass = "w-6 h-6") => {
    if (company === "Google") return <GoogleLogo className={`${sizeClass} flex-shrink-0`} />;
    if (company === "Carelon") return <CarelonLogo className={`${sizeClass} flex-shrink-0`} />;
    if (company === "Deloitte") return <DeloitteLogo className={`${sizeClass} flex-shrink-0`} />;
    return <CognizantLogo className={`${sizeClass} flex-shrink-0`} />;
  };

  const googleExp = portfolioData.experience[0];
  const pastExperiences = portfolioData.experience.slice(1);
  const activePastExp = pastExperiences[selectedPastIndex] || pastExperiences[0];

  return (
    <section id="experience" className="py-20 border-t border-gray-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="section-heading text-2xl sm:text-3xl">Work Experience</h2>
          <p className="text-gray-600 text-sm sm:text-base mt-4 max-w-xl mx-auto">
            A decade of engineering distributed data systems, enterprise lakehouses, and production Agentic AI across Google, Carelon, Deloitte, and Cognizant.
          </p>
        </div>

        {/* 1. Flagship Google Spotlight Card */}
        {googleExp && (
          <div className="bg-gradient-to-br from-white via-white to-[#007a7a]/[0.03] rounded-2xl border-2 border-[#007a7a]/30 p-6 sm:p-8 shadow-md relative overflow-hidden mb-10">
            {/* Subtle top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4285F4] via-[#34A853] to-[#007a7a]" />

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-white border border-gray-200 shadow-xs">
                  {getCompanyLogo(googleExp.company, "w-8 h-8")}
                </div>
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {googleExp.role}
                    </h3>
                    <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-[#007a7a] text-white shadow-2xs">
                      {googleExp.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 mt-1.5 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      {googleExp.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[#007a7a] font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      {googleExp.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Flagship Badge */}
              <div className="self-start sm:self-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#007a7a]/10 text-[#007a7a] border border-[#007a7a]/20">
                  <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
                  Current Role • Featured Impact
                </span>
              </div>
            </div>

            {/* Summary */}
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-5 font-medium">
              {googleExp.summary}
            </p>

            {/* Key Deliverables in 2-column Grid for compact vertical height */}
            <div className="mt-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#007a7a] mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Key Engineering Deliverables &amp; Impact at Google
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {googleExp.achievements.map((item, aIdx) => (
                  <div
                    key={aIdx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-gray-100 text-xs sm:text-sm text-gray-700 leading-relaxed shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#007a7a] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mr-1">
                Core Stack:
              </span>
              {googleExp.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md bg-white text-gray-800 text-xs font-mono font-medium border border-gray-200 shadow-2xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 2. Previous Experience Compact Tabbed Switcher */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#007a7a]" />
              <span>Previous Enterprise Experience</span>
            </h3>
            <span className="text-xs text-gray-400 hidden sm:inline">
              Select a company to view role details
            </span>
          </div>

          {/* Interactive Company Tabs (3 columns side-by-side) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
            {pastExperiences.map((exp, idx) => {
              const isSelected = idx === selectedPastIndex;
              return (
                <button
                  key={exp.company}
                  type="button"
                  onClick={() => setSelectedPastIndex(idx)}
                  className={`flex items-center gap-3.5 p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? "bg-white border-2 border-[#007a7a] shadow-sm"
                      : "bg-white/70 border-gray-200 hover:border-gray-300 hover:bg-white opacity-80 hover:opacity-100"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg border ${
                      isSelected
                        ? "bg-[#007a7a]/10 border-[#007a7a]/20"
                        : "bg-gray-50 border-gray-100"
                    }`}
                  >
                    {getCompanyLogo(exp.company, "w-5 h-5")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <span
                        className={`text-sm font-bold truncate ${
                          isSelected ? "text-[#007a7a]" : "text-gray-800"
                        }`}
                      >
                        {exp.company}
                      </span>
                      <span className="text-[11px] font-mono text-gray-400 flex-shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 truncate mt-0.5 font-medium">
                      {exp.role}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Past Experience Detail Card */}
          {activePastExp && (
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 shadow-xs transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-gray-100">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h4 className="text-lg font-bold text-gray-900">
                      {activePastExp.role}
                    </h4>
                    <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-gray-100 text-gray-700">
                      {activePastExp.company}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    {activePastExp.summary}
                  </p>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1 text-xs text-gray-500 flex-shrink-0 font-medium">
                  <span className="flex items-center gap-1 text-[#007a7a] font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    {activePastExp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    {activePastExp.location}
                  </span>
                </div>
              </div>

              {/* Achievements in 2-column grid for compact height */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-4">
                {activePastExp.achievements.map((item, aIdx) => (
                  <div
                    key={aIdx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#007a7a] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mt-5 pt-4 border-t border-gray-100 flex flex-wrap gap-1.5">
                {activePastExp.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-gray-50 text-gray-600 text-[11px] font-mono border border-gray-200/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
