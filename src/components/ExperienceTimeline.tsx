"use client";

import { portfolioData } from "@/data/portfolio";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { GoogleLogo, CarelonLogo, DeloitteLogo, CognizantLogo } from "@/components/Icons";

export default function ExperienceTimeline() {
  const getCompanyLogo = (company: string) => {
    if (company === "Google") return <GoogleLogo className="w-6 h-6 flex-shrink-0" />;
    if (company === "Carelon") return <CarelonLogo className="w-6 h-6 flex-shrink-0" />;
    if (company === "Deloitte") return <DeloitteLogo className="w-6 h-6 flex-shrink-0" />;
    return <CognizantLogo className="w-6 h-6 flex-shrink-0" />;
  };

  return (
    <section id="experience" className="py-20 border-t border-gray-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="section-heading text-2xl sm:text-3xl">Work Experience</h2>
          <p className="text-gray-600 text-sm sm:text-base mt-4 max-w-lg mx-auto">
            A decade of engineering distributed data systems, enterprise lakehouses, and production Agentic AI across Google, Carelon, Deloitte, and Cognizant.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {portfolioData.experience.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs hover:border-[#007a7a]/40 transition-colors"
            >
              {/* Role & Company Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3.5">
                  <div className="p-2 rounded-xl bg-gray-50 border border-gray-100">
                    {getCompanyLogo(exp.company)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">{exp.role}</h3>
                      <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#007a7a]/10 text-[#007a7a]">
                        {exp.company}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mt-1 font-medium">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-gray-400" />
                        {exp.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-[#007a7a]">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-4">
                {exp.summary}
              </p>

              {/* Key Deliverables & Impact */}
              <div className="mt-5 space-y-2.5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Key Deliverables &amp; Impact
                </h4>
                <ul className="space-y-2.5">
                  {exp.achievements.map((item, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#007a7a] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap gap-1.5">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded bg-gray-50 text-gray-700 text-xs font-mono border border-gray-200/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
