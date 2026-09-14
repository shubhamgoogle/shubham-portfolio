"use client";

import { ChevronDown, ArrowRight, Sparkles, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
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
              {/* Subtle top corner decoration */}
              <div className="absolute top-4 right-4 text-xs font-mono text-[#007a7a] bg-[#007a7a]/10 px-2 py-0.5 rounded">
                Verified
              </div>

              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#007a7a] to-[#05ce91] flex items-center justify-center text-white font-bold text-xl shadow-xs">
                  SC
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 leading-tight">
                    {portfolioData.personal.name}
                  </h3>
                  <p className="text-xs text-[#007a7a] font-medium mt-0.5">
                    AI &amp; Data Engineer @ Google
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-gray-500 mt-1">
                    <MapPin className="w-3 h-3 text-gray-400" />
                    <span>Hyderabad, India</span>
                  </div>
                </div>
              </div>

              {/* Core Competencies Summary */}
              <div className="space-y-2.5 pt-4 border-t border-gray-100 text-xs">
                <div className="flex items-start gap-2 text-gray-700">
                  <Sparkles className="w-3.5 h-3.5 text-[#007a7a] flex-shrink-0 mt-0.5" />
                  <span>Big Data Lakehouses (BigQuery &amp; Cloud Spanner)</span>
                </div>
                <div className="flex items-start gap-2 text-gray-700">
                  <Sparkles className="w-3.5 h-3.5 text-[#007a7a] flex-shrink-0 mt-0.5" />
                  <span>Agentic AI &amp; Model Context Protocol (MCP)</span>
                </div>
                <div className="flex items-start gap-2 text-gray-700">
                  <Sparkles className="w-3.5 h-3.5 text-[#007a7a] flex-shrink-0 mt-0.5" />
                  <span>Distributed Streaming &amp; OpenTelemetry Tracing</span>
                </div>
              </div>

              {/* Key Scale Metric Chips */}
              <div className="grid grid-cols-2 gap-2 mt-5 pt-4 border-t border-gray-100 font-mono text-center">
                <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                  <div className="text-sm font-bold text-[#007a7a]">Multi-TB+</div>
                  <div className="text-[10px] text-gray-500 mt-0.5">Lakehouse Scale</div>
                </div>
                <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                  <div className="text-sm font-bold text-[#007a7a]">&lt; 320ms</div>
                  <div className="text-[10px] text-gray-500 mt-0.5">GraphRAG P99</div>
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
    </section>
  );
}
