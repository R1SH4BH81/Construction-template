"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ROOM_TOUR_SLIDES } from "@/data/architectureData";

interface RoomtourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const RoomtourModal: React.FC<RoomtourModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [ambientAudio, setAmbientAudio] = useState(false);
  const [daylightMode, setDaylightMode] = useState<"Day" | "GoldenHour" | "Night">("Day");

  if (!isOpen) return null;

  const currentSlide = ROOM_TOUR_SLIDES[currentSlideIndex];

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % ROOM_TOUR_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + ROOM_TOUR_SLIDES.length) % ROOM_TOUR_SLIDES.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300">
      <div
        className="relative w-full max-w-5xl bg-[#141518] text-white rounded-3xl shadow-2xl border border-white/10 overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#191b20]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#8c6d58] flex items-center justify-center text-white">
              <svg className="w-4 h-4 translate-x-[1px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#8c6d58] font-bold block">
                Interactive Roomtour
              </span>
              <h3 className="text-base font-semibold text-white">
                {currentSlide.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Daylight simulation toggle */}
            <div className="hidden sm:flex items-center bg-black/40 rounded-full p-1 border border-white/10 text-xs">
              {(["Day", "GoldenHour", "Night"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setDaylightMode(mode)}
                  className={`px-3 py-1 rounded-full text-[11px] font-medium transition-colors ${
                    daylightMode === mode
                      ? "bg-[#8c6d58] text-white shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {mode === "GoldenHour" ? "Golden Hour" : mode}
                </button>
              ))}
            </div>

            {/* Audio Ambience button */}
            <button
              onClick={() => setAmbientAudio(!ambientAudio)}
              className={`p-2 rounded-full border transition-colors cursor-pointer ${
                ambientAudio
                  ? "bg-[#8c6d58] text-white border-transparent"
                  : "bg-white/5 text-gray-400 border-white/10 hover:text-white"
              }`}
              title={ambientAudio ? "Mute ambient breeze" : "Play ambient nature sound"}
            >
              {ambientAudio ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              )}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-colors cursor-pointer border border-white/10"
              aria-label="Close Roomtour"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main High-Res Visual Slide */}
        <div className="relative flex-1 min-h-[340px] sm:min-h-[460px] bg-black">
          <Image
            src={currentSlide.image}
            alt={currentSlide.title}
            fill
            sizes="(max-width: 1024px) 100vw, 1100px"
            className={`object-cover transition-all duration-700 ${
              daylightMode === "GoldenHour"
                ? "sepia-[0.35] brightness-95 contrast-105"
                : daylightMode === "Night"
                ? "brightness-70 contrast-125 saturate-75"
                : ""
            }`}
          />

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all hover:scale-110 cursor-pointer z-10"
            aria-label="Previous room"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all hover:scale-110 cursor-pointer z-10"
            aria-label="Next room"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Info Card Overlay at Bottom Left */}
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md p-4 sm:p-5 bg-black/75 backdrop-blur-md rounded-2xl border border-white/10 text-white z-10">
            <div className="flex items-center justify-between text-xs text-[#8c6d58] font-bold uppercase tracking-wider mb-1">
              <span>{currentSlide.room}</span>
              <span className="text-gray-300 font-mono">{currentSlide.dimensions}</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
              {currentSlide.description}
            </p>
          </div>
        </div>

        {/* Bottom Thumbnail Selector & Action Bar */}
        <div className="p-4 sm:p-5 bg-[#191b20] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Thumbnails */}
          <div className="flex items-center gap-3 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {ROOM_TOUR_SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlideIndex(index)}
                className={`relative w-20 sm:w-24 h-12 sm:h-14 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer ${
                  currentSlideIndex === index
                    ? "border-[#8c6d58] scale-105 shadow-md shadow-[#8c6d58]/30"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="100px"
                  className="object-cover"
                />
                <span className="absolute bottom-0 inset-x-0 bg-black/70 text-[9px] font-semibold py-0.5 text-center truncate px-1">
                  {slide.room}
                </span>
              </button>
            ))}
          </div>

          {/* CTA Inquire button */}
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full sm:w-auto px-7 py-3 bg-[#8c6d58] hover:bg-[#a17e66] text-white rounded-full text-xs font-bold tracking-widest uppercase shadow-lg shadow-[#8c6d58]/20 transition-all hover:scale-105 cursor-pointer"
          >
            Design Similar Interior
          </button>
        </div>
      </div>
    </div>
  );
};
