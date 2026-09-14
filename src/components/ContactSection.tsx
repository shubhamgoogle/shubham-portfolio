"use client";

import { useState } from "react";
import { Mail, Copy, Check, Send, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 text-emerald-400 font-mono text-xs tracking-wider uppercase mb-2">
          <span>{"// 06."}</span>
          <span>initiate_connection</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Let&apos;s Build Resilient Systems
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
          Open to technical advisory, distributed data architecture discussions, and production Agentic AI collaborations.
        </p>

        {/* Contact Container */}
        <div className="mt-12 p-8 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl max-w-xl mx-auto space-y-6">
          {/* Email Copy Card */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Direct Email
                </span>
                <span className="text-sm font-mono font-semibold text-slate-200">
                  {portfolioData.personal.email}
                </span>
              </div>
            </div>

            <button
              onClick={copyEmail}
              className="w-full sm:w-auto px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 border border-slate-700/60 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* Social Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                    LinkedIn
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">/in/shubhamchawla10</div>
                </div>
              </div>
              <Send className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
            </a>

            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900/80 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                    GitHub
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">@shubhamdal</div>
                </div>
              </div>
              <Send className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
            </a>
          </div>

          {/* Location Badge */}
          <div className="pt-3 text-xs font-mono text-slate-400 flex items-center justify-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Based in {portfolioData.personal.location} (IST / UTC+5:30)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
