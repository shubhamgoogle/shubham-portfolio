"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { CornerDownLeft, RotateCcw } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

interface HistoryItem {
  command: string;
  output: string;
  isError?: boolean;
}

export default function InteractiveTerminal() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "welcome",
      output:
        "Welcome to Shubham Chawla's interactive CLI [v2.6.4-prod]. Type 'help' or click any quick command below to inspect architecture specs, skills, and contact info.",
    },
    {
      command: "whoami",
      output: portfolioData.terminalCommands.whoami,
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const quickCommands = ["help", "whoami", "systems", "skills", "metrics", "contact", "clear"];

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    const commandDict = portfolioData.terminalCommands as Record<string, string>;

    let resultOutput = "";
    let isError = false;

    if (commandDict[trimmed]) {
      resultOutput = commandDict[trimmed];
    } else {
      isError = true;
      resultOutput = `zsh: command not found: ${trimmed}. Type 'help' to see valid commands.`;
    }

    setHistory((prev) => [...prev, { command: trimmed, output: resultOutput, isError }]);
    setInputVal("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <section id="terminal" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400 font-mono text-xs tracking-wider uppercase mb-2">
            <span>{"// 05."}</span>
            <span>interactive_terminal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Developer Command Line Interface
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Query system metrics, architecture specs, and credentials straight from the CLI.
          </p>
        </div>

        {/* Terminal Container */}
        <div className="rounded-xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs glow-cyan">
          {/* Top Bar */}
          <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="ml-2 text-slate-400 text-[11px] hidden sm:inline">
                guest@shubham-cloud-run: ~/portfolio
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setHistory([])}
                className="text-slate-400 hover:text-white flex items-center gap-1 text-[11px] px-2 py-0.5 rounded hover:bg-slate-800 transition-colors cursor-pointer"
                title="Clear screen"
              >
                <RotateCcw className="w-3 h-3" />
                <span>clear</span>
              </button>
            </div>
          </div>

          {/* Terminal Screen */}
          <div
            className="p-5 min-h-[300px] max-h-[460px] overflow-y-auto space-y-3 cursor-text"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-emerald-400 font-bold">$</span>
                  <span className="text-slate-100 font-semibold">{item.command}</span>
                </div>
                <div
                  className={`pl-4 leading-relaxed whitespace-pre-line ${
                    item.isError ? "text-red-400" : "text-slate-300"
                  }`}
                >
                  {item.output}
                </div>
              </div>
            ))}

            {/* Current Input Line */}
            <div className="flex items-center gap-2 pt-1 text-slate-100">
              <span className="text-emerald-400 font-bold">$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'help' or select a shortcut..."
                className="flex-1 bg-transparent outline-none border-none text-slate-100 placeholder:text-slate-600 font-mono text-xs"
                autoCapitalize="none"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                onClick={() => handleCommand(inputVal)}
                className="text-slate-400 hover:text-emerald-400 p-1 cursor-pointer"
                aria-label="Execute command"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </div>

            <div ref={bottomRef} />
          </div>

          {/* Quick Command Pills */}
          <div className="px-4 py-3 bg-slate-900/60 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
            <span className="text-slate-400 text-[11px] font-mono mr-1">Quick prompts:</span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-emerald-400 border border-slate-700/60 transition-colors text-[11px] font-mono cursor-pointer"
              >
                ${cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
