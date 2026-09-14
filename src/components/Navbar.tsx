"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Terminal, Cpu } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "whoami", href: "#whoami", index: "01" },
    { label: "systems", href: "#systems", index: "02" },
    { label: "skills", href: "#skills", index: "03" },
    { label: "experience", href: "#experience", index: "04" },
    { label: "terminal", href: "#terminal", index: "05" },
    { label: "contact", href: "#contact", index: "06" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-slate-800/80 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#whoami"
          className="flex items-center gap-2 group text-slate-100 font-mono text-base font-semibold tracking-tight hover:text-emerald-400 transition-colors"
        >
          <div className="w-8 h-8 rounded-md bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
            <Cpu className="w-4 h-4" />
          </div>
          <span>
            <span className="text-emerald-400">&lt;</span>
            Shubham
            <span className="text-emerald-400"> /&gt;</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-slate-400 hover:text-emerald-400 transition-colors group flex items-center gap-1"
            >
              <span className="text-emerald-500/60 font-semibold">{link.index}.</span>
              <span className="group-hover:translate-x-0.5 transition-transform">{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Social Icons & Terminal Quick-Action */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800/60 rounded-md transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 rounded-md transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="#terminal"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 rounded-md transition-all"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>cli</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="md:hidden p-2 text-slate-400 hover:text-white cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu drop */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-6 py-5 space-y-4 font-mono text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-emerald-400 py-1"
            >
              <span className="text-emerald-500/60 mr-2">{link.index}.</span>
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-800 flex items-center gap-4">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 text-xs"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-xs"
            >
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
