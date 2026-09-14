"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Activity, Trophy, Crown, Camera, MapPin, Compass, ArrowUpRight } from "lucide-react";
import { StravaIcon, CricketIcon, ChessComIcon } from "@/components/Icons";
import Footer from "@/components/Footer";

interface GalleryMoment {
  id: string;
  title: string;
  category: string;
  description: string;
  /**
   * Set this to a path under `/public`, e.g. "/images/gallery/triathlon.jpg",
   * or an external image URL. Leave empty to display the stylized icon card.
   */
  imageSrc?: string;
  bgGradient: string;
  icon: React.ReactNode;
}

const galleryMoments: GalleryMoment[] = [
  {
    id: "triathlon",
    title: "Triathlon Training",
    category: "Cycling & Long Runs",
    description: "Building aerobic base and mental endurance across weekend rides.",
    imageSrc: "", // e.g. "/images/gallery/triathlon.jpg"
    bgGradient: "from-amber-50 to-orange-100/50",
    icon: <StravaIcon className="w-5 h-5 text-[#FC6100]" />,
  },
  {
    id: "cricket",
    title: "Competitive Cricket",
    category: "League Tournament Matches",
    description: "Weekend games with teammates and live logging on CricHeroes.",
    imageSrc: "", // e.g. "/images/gallery/cricket.jpg"
    bgGradient: "from-red-50 to-rose-100/50",
    icon: <CricketIcon className="w-5 h-5 text-[#DC2626]" />,
  },
  {
    id: "chess",
    title: "Game Theory",
    category: "Tactics & Blitz",
    description: "Positional play and tactical speed workouts under clock pressure.",
    imageSrc: "", // e.g. "/images/gallery/chess.jpg"
    bgGradient: "from-lime-50 to-emerald-100/50",
    icon: <ChessComIcon className="w-5 h-5 text-[#629924]" />,
  },
  {
    id: "outdoors",
    title: "Outdoor & Nature",
    category: "Trek Routes & Exploration",
    description: "Finding calm and broad perspectives in outdoor trails and high passes.",
    imageSrc: "", // e.g. "/images/gallery/outdoors.jpg"
    bgGradient: "from-teal-50 to-cyan-100/50",
    icon: <Compass className="w-5 h-5 text-[#007a7a]" />,
  },
];

export default function BeyondCodePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9fafb] text-[#1f2937] selection:bg-[#007a7a] selection:text-white">
      {/* Top Simple Sticky Bar */}
      <header className="sticky top-0 z-50 glass-nav border-b border-gray-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-[#007a7a] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Engineering Portfolio</span>
          </Link>

          <Link
            href="/"
            className="text-base font-bold tracking-tight text-gray-900 hover:text-[#007a7a] transition-colors"
          >
            <span>Shubham</span>
            <span className="text-[#007a7a]">.dev</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          {/* Header */}
          <div className="mb-14 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#007a7a]/10 text-[#007a7a] border border-[#007a7a]/20 mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>Life &amp; Hobbies Outside the Terminal</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Beyond Code
            </h1>
            <p className="text-gray-600 text-base sm:text-lg mt-3 max-w-2xl leading-relaxed">
              When I&apos;m not architecting enterprise Big Data lakehouses or deploying agentic AI systems, I channel my energy into endurance athletics, competitive cricket, and chess.
            </p>
          </div>

          {/* 3 Main Pursuits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* 1. Triathlon & Endurance */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between shadow-xs hover:border-[#FC6100]/40 hover:shadow-sm transition-all group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FC6100]/10 flex items-center justify-center text-[#FC6100]">
                    <StravaIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-[#FC6100] bg-[#FC6100]/10 px-2 py-0.5 rounded font-medium">
                    Endurance
                  </span>
                </div>

                <h2 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-[#FC6100] transition-colors">
                  Triathlon Enthusiast
                </h2>
                <p className="text-xs text-[#FC6100] font-semibold mt-1 mb-3">
                  Swim • Bike • Run
                </p>

                <p className="text-xs text-gray-600 leading-relaxed mb-5">
                  Endurance sports teach the ultimate lessons in pacing, consistency, and discipline. Whether pushing through long-distance cycling routes, pool swim sessions, or early morning tempo runs, endurance training is my daily mental reset.
                </p>

                <div className="space-y-1.5 pt-3 border-t border-gray-100 text-[11px] text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FC6100]"></span>
                    <span>Weekly swim, cycle &amp; run regime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FC6100]"></span>
                    <span>Pacing &amp; mental resilience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FC6100]"></span>
                    <span>GPS-tracked workouts on Strava</span>
                  </div>
                </div>
              </div>

              <a
                href="https://www.strava.com/athletes/92222693"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#FC6100] hover:bg-[#e05500] text-white px-4 py-2.5 rounded-lg text-xs font-semibold transition-all shadow-xs"
              >
                <StravaIcon className="w-4 h-4" />
                <span>View Strava Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* 2. Cricket */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between shadow-xs hover:border-[#DC2626]/40 hover:shadow-sm transition-all group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#DC2626]/10 flex items-center justify-center text-[#DC2626]">
                    <CricketIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-[#DC2626] bg-[#DC2626]/10 px-2 py-0.5 rounded font-medium">
                    Tournament
                  </span>
                </div>

                <h2 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-[#DC2626] transition-colors">
                  Competitive Cricket
                </h2>
                <p className="text-xs text-[#DC2626] font-semibold mt-1 mb-3">
                  League Matches &amp; Tournaments
                </p>

                <p className="text-xs text-gray-600 leading-relaxed mb-5">
                  Cricket is a lifelong passion. Playing competitive league matches sharpens high-pressure tactical decisions, team camaraderie, and the ability to execute calmly when the game is on the line.
                </p>

                <div className="space-y-1.5 pt-3 border-t border-gray-100 text-[11px] text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]"></span>
                    <span>All-round competitive player</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]"></span>
                    <span>Weekend club &amp; corporate leagues</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]"></span>
                    <span>Ball-by-ball match analytics on CricHeroes</span>
                  </div>
                </div>
              </div>

              <a
                href="https://cricheroes.com/player-profile/1529762/shubham-chawla/matches"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#b91c1c] text-white px-4 py-2.5 rounded-lg text-xs font-semibold transition-all shadow-xs"
              >
                <CricketIcon className="w-4 h-4" />
                <span>View CricHeroes Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* 3. Chess */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between shadow-xs hover:border-[#81b64c]/50 hover:shadow-sm transition-all group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#81b64c]/15 flex items-center justify-center text-[#629924]">
                    <ChessComIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-[#629924] bg-[#81b64c]/10 px-2 py-0.5 rounded font-medium">
                    Tactics &amp; Blitz
                  </span>
                </div>

                <h2 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-[#629924] transition-colors">
                  Chess &amp; Game Theory
                </h2>
                <p className="text-xs text-[#629924] font-semibold mt-1 mb-3">
                  Calculation • Patience • Tactics
                </p>

                <p className="text-xs text-gray-600 leading-relaxed mb-5">
                  Chess is pure calculation and anticipation. Calculating variations and planning long-term positional structures closely mirrors architecting distributed, fault-tolerant software systems.
                </p>

                <div className="space-y-1.5 pt-3 border-t border-gray-100 text-[11px] text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#81b64c]"></span>
                    <span>Positional strategy &amp; endgame calculation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#81b64c]"></span>
                    <span>Rapid pattern recognition under time pressure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#81b64c]"></span>
                    <span>Active games &amp; puzzles on Chess.com (@shubhamdal)</span>
                  </div>
                </div>
              </div>

              <a
                href="https://www.chess.com/member/shubhamdal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#81b64c] hover:bg-[#6f9e3f] text-white px-4 py-2.5 rounded-lg text-xs font-semibold transition-all shadow-xs"
              >
                <ChessComIcon className="w-4 h-4" />
                <span>View Chess.com Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Photo Gallery & Moments */}
          <div className="border-t border-gray-200 pt-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Moments &amp; Captures
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Snapshots and highlights from endurance training routes, cricket matches, chess, and travels.
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                <Camera className="w-3.5 h-3.5 text-[#007a7a]" />
                <span>Gallery</span>
              </div>
            </div>

            {/* Responsive Photo Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {galleryMoments.map((moment) => (
                <div
                  key={moment.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs group hover:shadow-md transition-shadow flex flex-col"
                >
                  <div className={`aspect-[4/3] bg-gradient-to-br ${moment.bgGradient} relative overflow-hidden flex items-center justify-center`}>
                    {moment.imageSrc ? (
                      <img
                        src={moment.imageSrc}
                        alt={moment.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 p-5 relative">
                        <div className="w-11 h-11 rounded-full bg-white/90 shadow-xs flex items-center justify-center mb-2">
                          {moment.icon}
                        </div>
                        <span className="text-xs font-semibold text-gray-700 text-center">
                          {moment.title}
                        </span>
                        <span className="text-[11px] text-gray-400 mt-0.5 text-center">
                          {moment.category}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-3.5 border-t border-gray-100 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-gray-900">{moment.title}</h4>
                      <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                        {moment.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
