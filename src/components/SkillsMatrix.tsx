import { portfolioData } from "@/data/portfolio";
import { Database, Brain, Activity } from "lucide-react";

export default function SkillsMatrix() {
  const categoryIcons = [
    <Database key="db" className="w-5 h-5 text-emerald-400" />,
    <Brain key="ai" className="w-5 h-5 text-cyan-400" />,
    <Activity key="ops" className="w-5 h-5 text-purple-400" />
  ];

  return (
    <section id="skills" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs tracking-wider uppercase mb-2">
            <span>{"// 03."}</span>
            <span>technical_competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills &amp; Architecture Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Specialized toolsets across enterprise data engineering, agentic frameworks, and production observability.
          </p>
        </div>

        {/* 3 Columns for Core Skill Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.skills.map((cat, idx) => (
            <div
              key={cat.title}
              className="rounded-xl bg-slate-900/60 border border-slate-800/80 p-6 flex flex-col justify-between hover:border-slate-700/80 transition-all duration-200"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                    {categoryIcons[idx % categoryIcons.length]}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-snug">{cat.title}</h3>
                    <span className="text-[11px] font-mono text-slate-400">Pillar 0{idx + 1}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills Badges */}
                <div className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80 flex items-center justify-between text-xs font-mono group hover:border-slate-700 transition-colors"
                    >
                      <span className="text-slate-200 group-hover:text-emerald-300 transition-colors flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="text-[10px] text-slate-400 px-1.5 py-0.5 rounded bg-slate-800/60 border border-slate-700/40">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Total: {cat.skills.length} core tools</span>
                <span className="text-emerald-400/80">Active In Production</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
