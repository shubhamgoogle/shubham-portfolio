"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Who am i?", href: "/#whoami" },
    { label: "Projects", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Articles", href: "/#articles" },
    { label: "Skills", href: "/#skills" },
    { label: "Beyond Code", href: "/beyond-code" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-gray-200/80 transition-all duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-gray-900 hover:text-[#007a7a] transition-colors"
        >
          <span>Shubham</span>
          <span className="text-[#007a7a]">.dev</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-gray-600">
          {navLinks.map((link) => {
            const isBeyond = link.href === "/beyond-code";
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`transition-all relative py-1 flex items-center gap-1.5 group ${
                  isBeyond
                    ? "text-[#007a7a] font-semibold hover:text-[#005f5f]"
                    : "hover:text-[#007a7a]"
                }`}
              >
                {isBeyond && (
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-gradient-to-br from-amber-400 via-orange-500 to-teal-500 text-white shadow-2xs group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                    <Sparkles className="w-3 h-3 text-white fill-white/40" />
                  </span>
                )}
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/#contact"
            className="px-4 py-1.5 rounded text-xs font-medium text-[#007a7a] border border-[#007a7a] hover:bg-[#007a7a] hover:text-white transition-all shadow-xs"
          >
            Say Hello
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 text-gray-700 hover:text-[#007a7a] transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 border-b border-gray-200 px-6 py-5 space-y-3 shadow-lg">
          {navLinks.map((link) => {
            const isBeyond = link.href === "/beyond-code";
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-2 text-sm font-medium py-1.5 transition-colors ${
                  isBeyond
                    ? "text-[#007a7a] font-semibold"
                    : "text-gray-700 hover:text-[#007a7a]"
                }`}
              >
                {isBeyond && (
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-gradient-to-br from-amber-400 via-orange-500 to-teal-500 text-white shadow-2xs">
                    <Sparkles className="w-3 h-3 text-white fill-white/40" />
                  </span>
                )}
                <span>{link.label}</span>
              </Link>
            );
          })}
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="text-xs text-[#007a7a] font-medium"
            >
              {portfolioData.personal.email}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1 rounded text-xs font-medium bg-[#007a7a] text-white"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
