"use client";

import React from "react";
import { STATS_DATA } from "@/data/architectureData";

export const StatsBar: React.FC = () => {
  return (
    <section className="relative z-20 bg-[#121316] border-y border-white/10 py-12 md:py-16">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS_DATA.map((stat, i) => (
            <div key={i} className="flex flex-col space-y-1">
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#8c6d58]">
                {stat.unit}
              </span>
              <div className="text-3xl sm:text-4xl md:text-5xl font-light text-white font-editorial">
                {stat.value}
              </div>
              <span className="text-xs sm:text-sm text-gray-400 font-sans">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
