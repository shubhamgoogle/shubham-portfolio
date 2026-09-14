import { portfolioData } from "@/data/portfolio";
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs tracking-wider uppercase mb-2">
            <span>{"// 04."}</span>
            <span>experience_and_education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Career &amp; Engineering Foundation
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Building enterprise data architectures and production AI agent pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left / Main: Work Experience (Google) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
              <Briefcase className="w-4 h-4 text-emerald-400" />
              <span>Professional Experience</span>
            </div>

            {portfolioData.experience.map((exp, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-slate-900/70 border border-slate-800/90 p-6 sm:p-8 relative hover:border-slate-700 transition-all"
              >
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800/80">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                      <span>{exp.role}</span>
                      <span className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                        {exp.company}
                      </span>
                    </h3>
                    <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mt-1.5">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1 text-emerald-400/90">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-300 leading-relaxed mt-4 font-normal">
                  {exp.summary}
                </p>

                {/* Key Achievements */}
                <div className="mt-5 space-y-2.5">
                  <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                    Key Deliverables &amp; Impact
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((item, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Academic Foundation */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>Education</span>
            </div>

            {portfolioData.education.map((edu, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-slate-900/60 border border-slate-800/80 p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 inline-block mb-3">
                    {edu.period}
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug">{edu.degree}</h3>
                  <div className="text-xs font-mono text-slate-300 mt-1 font-medium">
                    {edu.institution}
                  </div>
                  <div className="text-xs text-emerald-400 font-mono mt-1">
                    Specialization: {edu.specialization}
                  </div>

                  <ul className="mt-4 space-y-2 text-xs text-slate-400 leading-relaxed border-t border-slate-800/80 pt-4">
                    {edu.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5 font-bold">›</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 text-[11px] font-mono text-slate-400">
                  Big Data &amp; Distributed Systems Core
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
