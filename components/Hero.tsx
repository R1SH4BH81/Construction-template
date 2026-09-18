"use client";

import React from "react";
import Image from "next/image";
import { HeroLeft } from "./HeroLeft";
import { HouseCard } from "./HouseCard";
import { Hotspot } from "@/types";

interface HeroProps {
  onOpenContact: () => void;
  onOpenRoomTour: () => void;
  onSelectHotspot: (hotspot: Hotspot) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenContact,
  onOpenRoomTour,
  onSelectHotspot,
}) => {
  // Background image requested by user
  const bgImage =
    "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=2000&auto=format&fit=crop";

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 md:pt-32">
      {/* Mountain Landscape Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Panoramic mountain landscape background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />

        {/* Cinematic Atmospheric Gradients to match the screenshot's soft overcast lighting */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#e3ded9]/85 via-[#ece7e1]/70 to-[#d9d3cb]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#e5e0da]/40 via-transparent to-[#101214]/80" />
      </div>

      {/* Main Hero Content Area: Split Editorial Left + Curved Showcase Card Right */}
      <div className="relative z-10 flex-1 max-w-[1600px] w-full mx-auto px-6 sm:px-10 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 lg:gap-12 pb-8 sm:pb-12">
        
        {/* Left Side: "THE PERFECT HOME®", Subtitle, START CTA */}
        <div className="w-full lg:w-5/12 flex items-start">
          <HeroLeft
            onStartClick={onOpenContact}
            onExploreHomes={() => scrollToSection("homes")}
          />
        </div>

        {/* Right Side: Architectural Floating Showcase Card */}
        <div className="w-full lg:w-7/12 flex justify-center lg:justify-end items-end">
          <HouseCard
            onOpenRoomTour={onOpenRoomTour}
            onSelectHotspot={onSelectHotspot}
          />
        </div>
      </div>
    </section>
  );
};
