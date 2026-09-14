"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Activity, Trophy, Crown, Camera, MapPin, Compass, ArrowUpRight, Globe, Plane } from "lucide-react";
import { StravaIcon, CricketIcon, ChessComIcon, GooglePhotosIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";
import Footer from "@/components/Footer";

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
                    <span>Active games on Chess.com (@shubhamdal)</span>
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
                  Browse live photo albums from race days, cricket tournament matches, chess, and travels.
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                <Camera className="w-3.5 h-3.5 text-[#007a7a]" />
                <span>Albums &amp; Captures</span>
              </div>
            </div>

            {/* Responsive Photo Album Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Photo Card 1: Triathlon Google Photos Album */}
              <a
                href="https://photos.app.goo.gl/FqYPM5RDYxY5o2YK9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md hover:border-[#FC6100]/40 transition-all flex flex-col group cursor-pointer"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-amber-50 to-orange-100/60 flex flex-col items-center justify-center text-gray-500 p-5 relative overflow-hidden">
                  <div className="w-12 h-12 rounded-full bg-white shadow-xs flex items-center justify-center text-[#FC6100] mb-2.5 group-hover:scale-110 transition-transform">
                    <StravaIcon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-gray-800">Triathlon &amp; Races</span>
                  <span className="text-[11px] text-gray-500 mt-0.5">Endurance &amp; Training</span>

                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs border border-orange-200 text-[#FC6100] text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <GooglePhotosIcon className="w-3 h-3" />
                    <span>Album</span>
                  </div>
                </div>
                <div className="p-4 border-t border-gray-100 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 group-hover:text-[#FC6100] transition-colors">
                      Triathlon Photos
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                      Cycling routes, swim sessions, and race day moments.
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-[#FC6100]">
                    <span>Open Google Photos</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </a>

              {/* Photo Card 2: Cricket Google Photos Album */}
              <a
                href="https://photos.app.goo.gl/39nvdnAWToizzqgE6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md hover:border-[#DC2626]/40 transition-all flex flex-col group cursor-pointer"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-red-50 to-rose-100/60 flex flex-col items-center justify-center text-gray-500 p-5 relative overflow-hidden">
                  <div className="w-12 h-12 rounded-full bg-white shadow-xs flex items-center justify-center text-[#DC2626] mb-2.5 group-hover:scale-110 transition-transform">
                    <CricketIcon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-gray-800">Match Day &amp; Leagues</span>
                  <span className="text-[11px] text-gray-500 mt-0.5">Competitive Cricket</span>

                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs border border-red-200 text-[#DC2626] text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <GooglePhotosIcon className="w-3 h-3" />
                    <span>Album</span>
                  </div>
                </div>
                <div className="p-4 border-t border-gray-100 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 group-hover:text-[#DC2626] transition-colors">
                      Cricket Photos
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                      Tournament matches, celebrations, and on-field action.
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-[#DC2626]">
                    <span>Open Google Photos</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </a>

              {/* Photo Card 3: Chess on Chess.com */}
              <a
                href="https://www.chess.com/member/shubhamdal"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md hover:border-[#81b64c]/40 transition-all flex flex-col group cursor-pointer"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-lime-50 to-emerald-100/60 flex flex-col items-center justify-center text-gray-500 p-5 relative overflow-hidden">
                  <div className="w-12 h-12 rounded-full bg-white shadow-xs flex items-center justify-center text-[#629924] mb-2.5 group-hover:scale-110 transition-transform">
                    <ChessComIcon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-gray-800">Game Theory &amp; Tactics</span>
                  <span className="text-[11px] text-gray-500 mt-0.5">Blitz &amp; Puzzles</span>

                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs border border-lime-200 text-[#629924] text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Crown className="w-3 h-3" />
                    <span>Chess.com</span>
                  </div>
                </div>
                <div className="p-4 border-t border-gray-100 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 group-hover:text-[#629924] transition-colors">
                      Chess Activity
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                      Games, tactical puzzles, and match records on Chess.com.
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-[#629924]">
                    <span>View Profile (@shubhamdal)</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </a>

              {/* Photo Card 4: Around the World Travel */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs flex flex-col group">
                <div className="aspect-[4/3] bg-gradient-to-br from-teal-50 to-cyan-100/60 flex flex-col items-center justify-center text-gray-500 p-5 relative overflow-hidden">
                  <div className="w-12 h-12 rounded-full bg-white shadow-xs flex items-center justify-center text-[#007a7a] mb-2.5 group-hover:scale-110 transition-transform">
                    <Globe className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-gray-800">Around the World</span>
                  <span className="text-[11px] text-gray-500 mt-0.5">11 Countries Explored</span>

                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs border border-teal-200 text-[#007a7a] text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Plane className="w-3 h-3" />
                    <span>Travel</span>
                  </div>
                </div>
                <div className="p-4 border-t border-gray-100 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">
                      Global Exploration
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                      Traveling across 11 countries &amp; 4 continents, experiencing unique cultures and landscapes.
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-[#007a7a]">
                    <span>11 Countries Visited</span>
                    <Globe className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visited Countries Section */}
          <div className="border-t border-gray-200 pt-12 mt-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#007a7a]/10 text-[#007a7a] border border-[#007a7a]/20 mb-2">
                  <Plane className="w-3 h-3" />
                  <span>Global Footprint</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Visited Countries
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Passport stamps and explorations across 11 countries and 4 continents.
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs text-gray-600 font-mono bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-2xs">
                <Globe className="w-3.5 h-3.5 text-[#007a7a]" />
                <span className="font-semibold text-gray-900">11 Countries</span>
                <span className="text-gray-400">•</span>
                <span>4 Continents</span>
              </div>
            </div>

            {/* Countries Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {portfolioData.personal.hobbies.visitedCountries.map((country) => (
                <div
                  key={country.name}
                  className="bg-white rounded-xl border border-gray-200 p-3.5 shadow-2xs hover:shadow-sm hover:border-[#007a7a]/40 hover:-translate-y-0.5 transition-all flex items-center gap-3 group"
                >
                  <span className="text-2xl select-none" role="img" aria-label={country.name}>
                    {country.flag}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-gray-900 group-hover:text-[#007a7a] transition-colors truncate">
                      {country.name}
                    </p>
                    <p className="text-[10px] text-gray-400 font-mono uppercase truncate">
                      {country.region}
                    </p>
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
