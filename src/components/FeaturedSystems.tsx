"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { portfolioData, SystemProject } from "@/data/portfolio";
import { Network, ChevronLeft, ChevronRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import ArchitectureModal from "./ArchitectureModal";

export default function FeaturedSystems() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<SystemProject | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  const updateScrollButtons = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.scrollTo({ left: 0, behavior: "smooth" });
    const timer = setTimeout(updateScrollButtons, 150);
    return () => clearTimeout(timer);
  }, [activeCategory, updateScrollButtons]);

  useEffect(() => {
    updateScrollButtons();
    window.addEventListener("resize", updateScrollButtons);
    return () => window.removeEventListener("resize", updateScrollButtons);
  }, [updateScrollButtons]);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = 440;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="py-20 border-t border-gray-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="section-heading text-2xl sm:text-3xl">Featured Projects</h2>
          <p className="text-gray-600 text-sm sm:text-base mt-4 max-w-lg mx-auto">
            A selection of production lakehouses, GraphRAG engines, and open Model Context Protocol tooling.
          </p>
        </div>

        {/* Controls Bar: Category Filter Pills & Sliding Row Navigation Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
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

          {/* Left / Right Slide Controls */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-xs text-gray-400 hidden md:inline mr-1">
              Slide ({filteredSystems.length})
            </span>
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll projects left"
              className={`p-2 rounded-full border transition-all ${
                canScrollLeft
                  ? "bg-white text-gray-700 border-gray-300 hover:border-[#007a7a] hover:text-[#007a7a] shadow-xs cursor-pointer"
                  : "bg-gray-50 text-gray-300 border-gray-200 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll projects right"
              className={`p-2 rounded-full border transition-all ${
                canScrollRight
                  ? "bg-white text-gray-700 border-gray-300 hover:border-[#007a7a] hover:text-[#007a7a] shadow-xs cursor-pointer"
                  : "bg-gray-50 text-gray-300 border-gray-200 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Single Horizontal Sliding Row */}
        <div
          ref={scrollContainerRef}
          onScroll={updateScrollButtons}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {filteredSystems.map((project) => (
            <div
              key={project.id}
              className="w-[85vw] sm:w-[380px] md:w-[420px] flex-shrink-0 snap-start bg-white rounded-xl border border-gray-200 hover:border-[#007a7a]/50 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 group"
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
