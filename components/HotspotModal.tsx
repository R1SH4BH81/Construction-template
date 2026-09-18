"use client";

import React from "react";
import Image from "next/image";
import { Hotspot } from "@/types";

interface HotspotModalProps {
  hotspot: Hotspot | null;
  onClose: () => void;
  onConsultSpec: (hotspotTitle: string) => void;
}

export const HotspotModal: React.FC<HotspotModalProps> = ({
  hotspot,
  onClose,
  onConsultSpec,
}) => {
  if (!hotspot) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#1c1e22] text-white rounded-3xl shadow-2xl border border-white/10 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close */}
        <div className="relative h-48 sm:h-56 w-full bg-stone-900">
          {hotspot.previewImage && (
            <Image
              src={hotspot.previewImage}
              alt={hotspot.title}
              fill
              sizes="(max-width: 768px) 100vw, 680px"
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1e22] via-[#1c1e22]/50 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
            aria-label="Close dialog"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-[#8c6d58] text-white inline-block">
              {hotspot.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold mt-2 text-white">
              {hotspot.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {hotspot.description}
          </p>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#8c6d58] mb-3">
              Engineering &amp; Material Specifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {hotspot.specs.map((spec, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm text-gray-200"
                >
                  <svg
                    className="w-4 h-4 text-[#8c6d58] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-gray-400">
              Customizable for any site climate &amp; topography
            </span>
            <button
              onClick={() => {
                onClose();
                onConsultSpec(hotspot.title);
              }}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#8c6d58] hover:bg-[#a17e66] text-white rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-lg"
            >
              Inquire About This Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
