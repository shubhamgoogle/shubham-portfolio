"use client";

import { portfolioData } from "@/data/portfolio";
import { MediumIcon } from "@/components/Icons";
import { ArrowUpRight, BookOpen, Clock, Calendar } from "lucide-react";

export default function ArticlesSection() {
  const articles = portfolioData.articles || [];

  return (
    <section id="articles" className="py-20 border-t border-gray-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-heading text-2xl sm:text-3xl">Articles &amp; Writing</h2>
          <p className="text-gray-600 text-sm sm:text-base mt-4 max-w-lg mx-auto">
            Deep dives published in <strong className="text-gray-900 font-semibold">Google Cloud</strong> on Medium covering Agentic AI, OpenTelemetry observability, and cloud data migrations.
          </p>
        </div>

        {/* Articles Grid (2 columns for 2 articles) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between shadow-xs hover:border-[#007a7a]/40 hover:shadow-md transition-all group"
            >
              <div>
                {/* Meta: Publication, Read time & Date */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500 mb-3.5">
                  <div className="flex items-center gap-2">
                    {article.publication && (
                      <span className="inline-flex items-center gap-1.5 font-medium text-[11px] text-[#007a7a] bg-[#007a7a]/10 px-2 py-0.5 rounded-full border border-[#007a7a]/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#05ce91]"></span>
                        {article.publication}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 font-mono text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-[#007a7a]" />
                      {article.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] text-gray-400">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#007a7a] transition-colors leading-snug mb-3">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-1"
                  >
                    <span>{article.title}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0 text-gray-400 group-hover:text-[#007a7a] transition-colors mt-0.5" />
                  </a>
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 leading-relaxed mb-5">
                  {article.description}
                </p>
              </div>

              <div>
                {/* Topic Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-gray-50 text-gray-600 border border-gray-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read Action */}
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#007a7a] hover:text-[#005a5a] transition-colors"
                >
                  <MediumIcon className="w-3.5 h-3.5" />
                  <span>Read on Medium</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Medium Profile CTA Box */}
        <div className="bg-gradient-to-r from-[#007a7a]/5 via-[#007a7a]/10 to-[#05ce91]/5 border border-[#007a7a]/20 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#007a7a] tracking-wide uppercase">
              <BookOpen className="w-4 h-4" />
              <span>Published on Medium</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900">
              Explore more engineering articles &amp; tutorials
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xl">
              Deep dives on Google Cloud Platform, production Agentic AI workflows, BigQuery, and enterprise lakehouse architectures.
            </p>
          </div>

          <a
            href={portfolioData.personal.medium || "https://medium.com/@shubu_google"}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#007a7a] hover:bg-[#006666] text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all shadow-xs hover:shadow"
          >
            <MediumIcon className="w-4 h-4" />
            <span>Visit Medium Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
