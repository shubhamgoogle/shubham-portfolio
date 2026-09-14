import { ArrowRight, Terminal as TerminalIcon } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="whoami" className="pt-32 pb-20 relative overflow-hidden">
      {/* Background ambient grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b18_1px,transparent_1px),linear-gradient(to_bottom,#1e293b18_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Intro */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{portfolioData.personal.statusBadge}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <p className="text-slate-400 font-mono text-sm tracking-wide">
                <span className="text-emerald-400">&gt;</span> const engineer = &quot;Shubham Chawla&quot;;
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Data Lakehouses</span> &amp; Autonomous <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Agentic AI</span>
              </h1>
            </div>

            {/* Bio */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              {portfolioData.personal.bio}
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#systems"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/20"
              >
                <span>View Featured Systems</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#terminal"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-mono text-sm transition-all"
              >
                <TerminalIcon className="w-4 h-4 text-emerald-400" />
                <span>Launch Interactive CLI</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <span>Get in touch</span>
              </a>
            </div>
          </div>

          {/* Right Column: Terminal Code Window */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs glow-emerald">
              {/* Window Header */}
              <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>
                <div className="text-slate-400 text-[11px] flex items-center gap-1.5">
                  <TerminalIcon className="w-3 h-3 text-slate-500" />
                  <span>shubham@google-cloud: ~</span>
                </div>
                <span className="text-slate-500 text-[10px]">bash</span>
              </div>

              {/* Terminal Body */}
              <div className="p-5 space-y-4 text-slate-300 leading-relaxed overflow-x-auto">
                <div>
                  <span className="text-emerald-400 font-semibold">$</span>{" "}
                  <span className="text-slate-100">cat system_spec.json</span>
                </div>
                <pre className="text-slate-300 font-mono text-[11px] leading-relaxed">
{`{
  "engineer": "Shubham Chawla",
  "organization": "Google",
  "location": "Hyderabad, India",
  "focus_areas": [
    "Enterprise Lakehouses (BigQuery & Spanner)",
    "Agentic AI (LangGraph & GraphRAG)",
    "Model Context Protocol (MCP) Ecosystem",
    "OpenTelemetry for LLM Observability"
  ],
  "streaming_scale": "50k+ events/sec CDC",
  "graph_retrieval": "Sub-second P99 (<320ms)",
  "status": "Engineering resilient architectures"
}`}
                </pre>
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-slate-400 text-[11px]">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Ready for connection
                  </span>
                  <span>v2.6.4-prod</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Stats Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {portfolioData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all group"
            >
              <div className="text-2xl font-bold font-mono text-white group-hover:text-emerald-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-300 mt-1">{stat.label}</div>
              <div className="text-[11px] text-slate-500 font-mono mt-0.5">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
