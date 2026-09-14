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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden font-sans text-gray-800 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-md bg-[#007a7a]/10 text-[#007a7a]">
              <Network className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#007a7a] font-semibold uppercase tracking-wider block">
                Architecture Blueprint
              </span>
              <h3 className="text-base font-bold text-gray-900 leading-snug">{project.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Deep Overview */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
              System Rationale
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
          </div>

          {/* End-to-End Pipeline DAG Flow */}
          {project.architectureFlow && project.architectureFlow.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#007a7a] mb-3 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5" />
                Pipeline Execution Flow
              </h4>
              <div className="space-y-2 p-4 rounded-lg bg-gray-50 border border-gray-200 text-xs font-mono">
                {project.architectureFlow.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#007a7a]/10 text-[#007a7a] flex items-center justify-center text-[11px] font-bold">
                      {idx + 1}
                    </span>
                    <div className="pt-0.5 text-gray-700 font-medium">
                      {step}
                      {idx < project.architectureFlow!.length - 1 && (
                        <div className="w-0.5 h-3 bg-gray-300 my-1 ml-2.5"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Engineering Highlights */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2.5">
              Technical Highlights
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#007a7a] flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Metrics */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2.5">
              Key Metrics
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-gray-50 border border-gray-200 text-center font-mono">
                  <div className="text-sm font-bold text-[#007a7a]">{m.value}</div>
                  <div className="text-[10px] text-gray-500 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-gray-100 border border-gray-200 text-[11px] font-mono text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-gray-50 border-t border-gray-200 flex items-center justify-between text-xs">
          <span className="text-gray-500 font-mono">Status: {project.status}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-md bg-gray-900 hover:bg-gray-800 text-white transition-colors cursor-pointer font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
