"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HOTSPOTS_DATA, ROOM_TOUR_SLIDES } from "@/data/architectureData";
import { Hotspot } from "@/types";

interface HouseCardProps {
  onOpenRoomTour: () => void;
  onSelectHotspot: (hotspot: Hotspot) => void;
}

export const HouseCard: React.FC<HouseCardProps> = ({
  onOpenRoomTour,
  onSelectHotspot,
}) => {
  const [activeTab, setActiveTab] = useState<"Interior" | "Design" | "3D">("3D");
  const [hoveredHotspot, setHoveredHotspot] = useState<Hotspot | null>(null);
  const [blueprintMode, setBlueprintMode] = useState(false);

  const categories: ("Interior" | "Design" | "3D")[] = ["Interior", "Design", "3D"];

  return (
    <div className="relative w-full max-w-[680px] lg:max-w-[740px] xl:max-w-[800px] z-20">
      {/* Outer Card Wrapper with Top-Curved Corners */}
      <div className="relative bg-white/95 backdrop-blur-md rounded-t-[36px] sm:rounded-t-[44px] md:rounded-t-[50px] shadow-2xl shadow-black/20 border border-white/60 pt-7 sm:pt-9 px-6 sm:px-9 pb-0 transition-all duration-300">


        <div className="relative mt-6 sm:mt-8 w-full h-[320px] sm:h-[400px] md:h-[440px] lg:h-[480px] rounded-t-[28px] sm:rounded-t-[36px] overflow-hidden group select-none">

          {/* Architectural Rendering Image */}
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop"
              alt="Custom Modern Villa Architectural Render"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 800px"
              className={`object-cover object-center transition-all duration-700 ${blueprintMode ? "invert hue-rotate-180 contrast-125 saturate-50" : "group-hover:scale-105"
                }`}
            />
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            {/* Blueprint Grid Overlay Mode */}
            {blueprintMode && (
              <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
            )}
          </div>

          {/* Interactive Radar Hotspots */}
          {HOTSPOTS_DATA.map((spot) => {
            const isHovered = hoveredHotspot?.id === spot.id;
            return (
              <div
                key={spot.id}
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-30"
              >
                {/* Hotspot Radar Circle Button */}
                <button
                  onClick={() => onSelectHotspot(spot)}
                  onMouseEnter={() => setHoveredHotspot(spot)}
                  onMouseLeave={() => setHoveredHotspot(null)}
                  className="relative group/spot flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 cursor-pointer focus:outline-none"
                  aria-label={`View detail for ${spot.title}`}
                >
                  {/* Radar Ripple Effect */}
                  <span className="absolute inset-0 rounded-full bg-white/40 animate-radar" />

                  {/* Solid White Marker Center */}
                  <span className="relative w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white border-2 border-white/80 shadow-md shadow-black/40 transition-transform duration-200 group-hover/spot:scale-125 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1c1c1c]" />
                  </span>
                </button>

                {/* Floating Preview Tooltip on Hover */}
                {isHovered && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-56 sm:w-64 p-3 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-black/10 z-40 animate-in fade-in zoom-in-95 duration-150 pointer-events-none">
                    <span className="text-[10px] font-bold text-[#8c6d58] tracking-widest uppercase block">
                      {spot.category}
                    </span>
                    <h4 className="text-[13px] font-bold text-gray-900 mt-0.5">
                      {spot.title}
                    </h4>
                    <p className="text-[11px] text-gray-600 line-clamp-2 mt-1 leading-relaxed">
                      {spot.description}
                    </p>
                    <div className="mt-2 text-[10px] font-semibold text-[#8c6d58] flex items-center gap-1">
                      <span>Click to view technical specs</span>
                      <span>&rarr;</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Bottom Card Bar: View Mode Switcher & Stats */}
          <div className="absolute bottom-4 left-4 right-4 z-30 flex items-center justify-between text-white/90 text-xs">
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-medium tracking-wide">
                {blueprintMode ? "Blueprint Cad View" : "4K Photorealistic Render"}
              </span>
            </div>

            <button
              onClick={() => setBlueprintMode(!blueprintMode)}
              className="bg-white/90 hover:bg-white text-gray-900 px-3 py-1.5 rounded-full font-semibold shadow-md transition-transform hover:scale-105 cursor-pointer"
            >
              {blueprintMode ? "Render View" : "Blueprint View"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
