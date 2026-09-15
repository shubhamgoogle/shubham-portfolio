"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { CricketIcon } from "@/components/Icons";
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
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-gray-200/80 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-gray-900 hover:text-[#007a7a] transition-colors"
        >
          <span>Shubham</span>
          <span className="text-[#007a7a]">.dev</span>
        </Link>

        {/* Desktop Nav Links + Action Button Right-Aligned Together */}
        <div className="hidden md:flex items-center gap-6 lg:gap-7">
          <nav className="flex items-center gap-6 lg:gap-7 text-sm font-medium text-gray-600">
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
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#007a7a]/10 text-[#007a7a] border border-[#007a7a]/20 group-hover:bg-[#007a7a] group-hover:text-white group-hover:border-[#007a7a] transition-all duration-300">
                      <CricketIcon className="w-3.5 h-3.5 group-hover:-rotate-12 group-hover:scale-110 transition-transform duration-300" />
                    </span>
                  )}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Subtle Vertical Divider */}
          <span className="h-4 w-px bg-gray-200" aria-hidden="true" />

          {/* Action Button */}
          <a
            href="/#contact"
            className="px-4 py-1.5 rounded-md text-xs font-semibold text-[#007a7a] border border-[#007a7a] hover:bg-[#007a7a] hover:text-white transition-all shadow-2xs"
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
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#007a7a]/10 text-[#007a7a] border border-[#007a7a]/20">
                    <CricketIcon className="w-3.5 h-3.5" />
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
