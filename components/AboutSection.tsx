"use client";

import React from "react";
import Image from "next/image";

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="relative z-20 py-24 md:py-32 bg-[#0c0d0f] text-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8c6d58] block">
              Architectural Philosophy
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-editorial tracking-tight text-white leading-tight">
              Harmonizing Natural Landscapes with Spatial Precision
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
              Founded on the belief that a home should be an organic extension of its natural topography, RANTY crafts bespoke residential sanctuaries worldwide.
            </p>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-sans">
              From our initial parametric 3D acoustic and solar studies to the tactile selection of reclaimed timber and low-carbon alpine concrete, every square millimeter is engineered for calm, longevity, and sensory harmony.
            </p>

            <div className="pt-4 flex items-center gap-6">
              <button
                onClick={onOpenConsultation}
                className="px-8 py-3.5 bg-[#8c6d58] hover:bg-[#a17e66] text-white rounded-full text-xs font-bold tracking-widest uppercase shadow-lg shadow-[#8c6d58]/20 transition-all hover:scale-105 cursor-pointer"
              >
                Schedule Private Consultation
              </button>
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[380px] sm:h-[480px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop"
                alt="Architectural studio sketching and model drafting"
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#8c6d58] font-bold uppercase tracking-wider block">
                    Lead Studio
                  </span>
                  <p className="text-sm font-medium text-white">
                    Geneva &bull; Zurich &bull; Milan
                  </p>
                </div>
                <span className="text-xs font-mono text-gray-300">EST. 2014</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
