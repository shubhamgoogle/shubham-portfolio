"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, ArrowRight, Sparkles, MapPin, X, Maximize2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const [showImageModal, setShowImageModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowImageModal(false);
    };
    if (showImageModal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showImageModal]);
  return (
    <section className="relative min-h-[calc(100vh-4rem)] pt-24 sm:pt-32 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Subtle background ambient text watermark like satnaing.dev */}
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-100 text-[10vw] font-black tracking-widest select-none pointer-events-none whitespace-nowrap -z-10 opacity-70"
      >
        DATA • AGENTIC AI
      </span>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Main Intro Text (8 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {/* Greeting */}
            <p className="text-[#007a7a] font-medium text-base sm:text-lg">
              Hi, my name is
            </p>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-none">
              {portfolioData.personal.name}
            </h1>

            {/* Role Subheading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#007a7a] tracking-tight">
              AI &amp; Data Engineer, Google
            </h2>

            {/* Concise Bio */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal pt-1">
              I am an AI &amp; Data Engineer at <strong className="text-gray-900 font-semibold">Google</strong> based in Hyderabad. I specialize in architecting distributed data lakehouses and production agentic AI systems for major banks and enterprise financial workloads.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#007a7a] hover:bg-[#006666] text-white px-6 py-3 rounded-md font-medium text-sm sm:text-base shadow-sm hover:shadow transition-all"
              >
                <span>Contact me!</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 hover:text-[#007a7a] border border-gray-300 hover:border-[#007a7a] px-5 py-3 rounded-md font-medium text-sm sm:text-base transition-all shadow-xs"
              >
                <span>View Projects</span>
              </a>
            </div>
          </div>

          {/* Right Visual: Clean Professional Profile Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow relative">
              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-5">
                <button
                  type="button"
                  onClick={() => setShowImageModal(true)}
                  className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#007a7a]/25 hover:border-[#007a7a] shadow-xs flex-shrink-0 group cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-[#007a7a] focus:ring-offset-2"
                  aria-label="View full size profile photo"
                  title="Click to view full photo"
                >
                  <Image
                    src={portfolioData.personal.avatar || "/profile.jpg"}
                    alt={`${portfolioData.personal.name} at Google Hyderabad`}
                    fill
                    sizes="80px"
                    className="object-cover object-[center_35%] group-hover:scale-110 transition-transform duration-300"
                    priority
                  />
                  {/* Hover overlay hint */}
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-5 h-5 text-white drop-shadow-md" />
                  </div>
                </button>
                <div>
                  <h3 className="text-base font-bold text-gray-900 leading-tight">
                    {portfolioData.personal.name}
                  </h3>
                  <p className="text-xs text-[#007a7a] font-medium mt-0.5">
                    {portfolioData.personal.statusBadge}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-gray-500 mt-1">
                    <MapPin className="w-3 h-3 text-gray-400" />
                    <span>Hyderabad, India</span>
                  </div>
                </div>
              </div>

              {/* Core Competencies Summary */}
              <div className="space-y-2 pt-4 border-t border-gray-100 text-xs">
                <div className="flex items-start gap-2 text-gray-700">
                  <Sparkles className="w-3.5 h-3.5 text-[#007a7a] flex-shrink-0 mt-0.5" />
                  <span>Big Data Lakehouses &amp; Multi-TB Scalable Pipelines</span>
                </div>
                <div className="flex items-start gap-2 text-gray-700">
                  <Sparkles className="w-3.5 h-3.5 text-[#007a7a] flex-shrink-0 mt-0.5" />
                  <span>Agentic AI, GraphRAG &amp; Model Context Protocol</span>
                </div>
                <div className="flex items-start gap-2 text-gray-700">
                  <Sparkles className="w-3.5 h-3.5 text-[#007a7a] flex-shrink-0 mt-0.5" />
                  <span>Knowledge Graphs using Graph Databases (Spanner &amp; Neo4j)</span>
                </div>
                <div className="flex items-start gap-2 text-gray-700">
                  <Sparkles className="w-3.5 h-3.5 text-[#007a7a] flex-shrink-0 mt-0.5" />
                  <span>Agentic AI Platforms on Google Cloud (ADK)</span>
                </div>
                <div className="flex items-start gap-2 text-gray-700">
                  <Sparkles className="w-3.5 h-3.5 text-[#007a7a] flex-shrink-0 mt-0.5" />
                  <span>Application Deployment &amp; Architecture on GCP Infra</span>
                </div>
                <div className="flex items-start gap-2 text-gray-700">
                  <Sparkles className="w-3.5 h-3.5 text-[#007a7a] flex-shrink-0 mt-0.5" />
                  <span>Production-Ready Agentic AI for Large Enterprises</span>
                </div>
                <div className="flex items-start gap-2 text-gray-700">
                  <Sparkles className="w-3.5 h-3.5 text-[#007a7a] flex-shrink-0 mt-0.5" />
                  <span>Distributed Streaming &amp; OpenTelemetry Tracing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:flex justify-center mt-12">
          <a
            href="#whoami"
            className="flex flex-col items-center gap-1 text-xs text-gray-400 hover:text-[#007a7a] transition-colors group animate-bounce"
            aria-label="Scroll down to Who am I section"
          >
            <span className="font-medium">Scroll</span>
            <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-[#007a7a]" />
          </a>
        </div>
      </div>

      {/* Full Photo Lightbox / Modal */}
      {showImageModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowImageModal(false)}
        >
          <div
            className="relative max-w-lg w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100 animate-in zoom-in-95 duration-200 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all cursor-pointer shadow-md"
              aria-label="Close image popup"
            >
              <X className="w-5 h-5" />
            </button>

            {/* High-res Image with original 4/5 portrait ratio */}
            <div className="relative w-full aspect-[4/5] bg-gray-950">
              <Image
                src={portfolioData.personal.avatar || "/profile.jpg"}
                alt={`${portfolioData.personal.name} at Google Hyderabad`}
                fill
                sizes="(max-width: 768px) 95vw, 512px"
                className="object-contain"
                priority
              />
            </div>

            {/* Caption bar */}
            <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-gray-900">
                  {portfolioData.personal.name}
                </h4>
                <p className="text-xs text-[#007a7a] font-medium">
                  {portfolioData.personal.statusBadge}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-700">
                <span className="w-2 h-2 rounded-full bg-[#34A853]"></span>
                <span>Google Hyderabad</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
