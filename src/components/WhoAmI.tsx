"use client";

import { GoogleLogo, CarelonLogo, DeloitteLogo, CognizantLogo } from "@/components/Icons";
import { Building2 } from "lucide-react";

export default function WhoAmI() {
  const companies = [
    {
      name: "Google",
      period: "2022 – Present",
      logo: <GoogleLogo className="w-6 h-6" />,
      isCurrent: true,
    },
    {
      name: "Carelon",
      period: "2021 – 2022",
      logo: <CarelonLogo className="w-6 h-6" />,
      isCurrent: false,
    },
    {
      name: "Deloitte",
      period: "2018 – 2021",
      logo: <DeloitteLogo className="w-6 h-6" />,
      isCurrent: false,
    },
    {
      name: "Cognizant",
      period: "2016 – 2018",
      logo: <CognizantLogo className="w-6 h-6" />,
      isCurrent: false,
    },
  ];

  return (
    <section id="whoami" className="py-20 border-t border-gray-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="section-heading text-2xl sm:text-3xl">Who am I?</h2>
        </div>

        {/* 2-Column Clean Layout: Work profile on left, company logos on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Focused Professional Narrative */}
          <div className="lg:col-span-6 space-y-4">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              I am an <strong className="text-gray-900 font-semibold">AI &amp; Data Engineer at Google</strong> with over <strong className="text-gray-900 font-semibold">10+ years of global experience</strong> architecting mission-critical data platforms and distributed systems.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              My engineering focuses on building high-throughput Big Data lakehouses and operationalizing production-grade Agentic AI workflows—partnering with major banks and global financial institutions to deliver scalable, secure, and deterministic architectures.
            </p>
          </div>

          {/* Right Column: Clean Company Logos & Timelines */}
          <div className="lg:col-span-6 space-y-2.5">
            <div className="flex items-center justify-between text-xs px-1">
              <span className="font-semibold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#007a7a]" />
                <span>Companies Worked With</span>
              </span>
              <span className="font-mono text-[11px] text-gray-400 font-medium">
                2016 – Present
              </span>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-xs divide-y divide-gray-100">
              {companies.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex items-center justify-center w-8 h-8">
                      {c.logo}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-[#007a7a] transition-colors">
                        {c.name}
                      </span>
                      {c.isCurrent && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#05ce91]/15 text-emerald-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#05ce91] animate-pulse"></span>
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <span className="text-xs sm:text-sm font-mono text-gray-500 font-medium">
                    {c.period}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
