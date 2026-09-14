"use client";

import { X, Network, CheckCircle2, Activity } from "lucide-react";
import { SystemProject } from "@/data/portfolio";

interface ArchitectureModalProps {
  project: SystemProject | null;
  onClose: () => void;
}

export default function ArchitectureModal({ project, onClose }: ArchitectureModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-xl shadow-2xl overflow-hidden font-sans text-slate-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Network className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block">
                Architecture Blueprint
              </span>
              <h3 className="text-base font-bold text-white leading-snug">{project.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Deep Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">System Rationale</h4>
            <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>
          </div>

          {/* End-to-End Pipeline DAG Flow */}
          {project.architectureFlow && project.architectureFlow.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase text-emerald-400 tracking-wider mb-3 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5" />
                Pipeline Execution Flow (Directed Graph)
              </h4>
              <div className="space-y-2.5 p-4 rounded-lg bg-slate-950/80 border border-slate-800 font-mono text-xs">
                {project.architectureFlow.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center text-[11px] font-bold">
                      {idx + 1}
                    </span>
                    <div className="pt-0.5 text-slate-200">
                      {step}
                      {idx < project.architectureFlow!.length - 1 && (
                        <div className="w-0.5 h-3 bg-emerald-500/30 my-1 ml-2.5"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Engineering Highlights */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2.5">Technical Highlights</h4>
            <ul className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Metrics */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2.5">Benchmark Metrics</h4>
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-md bg-slate-950/60 border border-slate-800 text-center">
                  <div className="text-sm font-bold font-mono text-emerald-400">{m.value}</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/80 text-[11px] font-mono text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-500">Status: {project.status}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
