"use client";

import React from "react";

interface HeroLeftProps {
  onStartClick: () => void;
  onExploreHomes?: () => void;
}

export const HeroLeft: React.FC<HeroLeftProps> = ({ onStartClick, onExploreHomes }) => {
  return (
    <div className="flex flex-col items-start justify-center pt-8 pb-12 lg:py-16 xl:py-24 max-w-xl z-20 select-none">
      {/* Editorial Luxury Typography */}
      <h1 className="font-editorial text-white leading-[0.92] tracking-[-0.01em] uppercase">
        <span className="block text-[64px] sm:text-[84px] md:text-[98px] lg:text-[104px] xl:text-[116px] font-normal">
          THE
        </span>
        <span className="block text-[64px] sm:text-[84px] md:text-[98px] lg:text-[104px] xl:text-[116px] font-normal">
          PERFECT
        </span>
        <span className="relative inline-flex items-baseline text-[64px] sm:text-[84px] md:text-[98px] lg:text-[104px] xl:text-[116px] font-normal">
          <span>HOME</span>
          <sup className="text-[24px] sm:text-[32px] md:text-[36px] font-normal ml-1 -top-8 sm:-top-12">
            ®
          </sup>
        </span>
      </h1>



    </div>
  );
};
