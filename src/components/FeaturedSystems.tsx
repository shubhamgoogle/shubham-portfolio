"use client";

import { useState } from "react";
import { portfolioData, SystemProject } from "@/data/portfolio";
import { Network } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import ArchitectureModal from "./ArchitectureModal";

export default function FeaturedSystems() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<SystemProject | null>(null);

  const categories = [
    { id: "all", label: "All Systems" },
    { id: "agentic-ai", label: "Agentic AI & GraphRAG" },
    { id: "data-engineering", label: "Lakehouses & CDC" },
    { id: "mcp-tooling", label: "Model Context Protocol (MCP)" },
  ];

  const filteredSystems =
    activeCategory === "all"
      ? portfolioData.featuredSystems
      : portfolioData.featuredSystems.filter((item) => item.category === activeCategory);

  return (
    <section id="systems" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs tracking-wider uppercase mb-2">
              <span>{"// 02."}</span>
              <span>architectures &amp; systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Engineering Deployments
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Production data lakehouses, autonomous agentic loops, and secure MCP database toolboxes.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-md border transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400 shadow-sm"
                    : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSystems.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl bg-slate-900/70 border border-slate-800/90 hover:border-emerald-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5"
            >
              {/* Card Header: Category & Status */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded bg-slate-800/80 text-emerald-400 border border-slate-700/60">
                    {project.category.replace("-", " ").toUpperCase()}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-slate-300 text-sm leading-relaxed mt-2.5 font-normal">
                  {project.summary}
                </p>

                {/* Key Metrics Chips */}
                <div className="grid grid-cols-3 gap-2 my-5 p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 font-mono text-center">
                  {project.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="text-xs font-bold text-emerald-400">{m.value}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5 truncate">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/50 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-800/70 flex items-center justify-between text-xs font-mono">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium cursor-pointer"
                >
                  <Network className="w-3.5 h-3.5" />
                  <span>Inspect Architecture Blueprint</span>
                </button>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-400 hover:text-white transition-colors"
                    aria-label="View source repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Deep Architecture Inspection */}
      <ArchitectureModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
