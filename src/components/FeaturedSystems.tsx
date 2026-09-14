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
    { id: "all", label: "All Projects" },
    { id: "agentic-ai", label: "Agentic AI & GraphRAG" },
    { id: "data-engineering", label: "Data Engineering & CDC" },
    { id: "mcp-tooling", label: "MCP & API Services" },
  ];

  const filteredSystems =
    activeCategory === "all"
      ? portfolioData.featuredSystems
      : portfolioData.featuredSystems.filter((item) => item.category === activeCategory);

  return (
    <section id="projects" className="py-20 border-t border-gray-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="section-heading text-2xl sm:text-3xl">Featured Projects</h2>
          <p className="text-gray-600 text-sm sm:text-base mt-4 max-w-lg mx-auto">
            A selection of production lakehouses, GraphRAG engines, and open Model Context Protocol tooling.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#007a7a] text-white shadow-xs"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:text-gray-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects 2-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSystems.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-gray-200 hover:border-[#007a7a]/50 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 group"
            >
              <div>
                {/* Category & Status */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded bg-gray-100 text-[#007a7a]">
                    {project.category.replace("-", " ").toUpperCase()}
                  </span>
                  <span className="text-[11px] text-gray-500 flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#05ce91]"></span>
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#007a7a] transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-gray-600 text-sm leading-relaxed mt-2.5 font-normal">
                  {project.summary}
                </p>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-3 gap-2 my-4 p-2.5 rounded-lg bg-gray-50 border border-gray-100 text-center font-mono">
                  {project.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="text-xs font-bold text-[#007a7a]">{m.value}</div>
                      <div className="text-[10px] text-gray-500 mt-0.5 truncate">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-gray-100 text-gray-700 text-[11px] font-mono border border-gray-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Blueprint modal trigger & GitHub link */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-medium">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-[#007a7a] hover:text-[#005959] transition-colors cursor-pointer"
                >
                  <Network className="w-3.5 h-3.5" />
                  <span>Architecture Blueprint</span>
                </button>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-gray-400 hover:text-gray-900 transition-colors"
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

      {/* Architecture Blueprint Modal */}
      <ArchitectureModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
