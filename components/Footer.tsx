"use client";

import React from "react";

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-20 bg-[#08090a] text-white border-t border-white/10 pt-20 pb-12">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-[3px]">
                <span className="w-[5px] h-[18px] bg-white rounded-full" />
                <span className="w-[5px] h-[24px] bg-[#8c6d58] rounded-full" />
                <span className="w-[5px] h-[14px] bg-white rounded-full" />
              </div>
              <span className="text-xl font-bold tracking-[0.2em] uppercase font-sans">
                RANTY
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed">
              International custom home architecture, engineering blueprints, and 3D virtual environment studios.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#8c6d58]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#homes" className="hover:text-white transition-colors">Custom Homes</a></li>
              <li><a href="#cases" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#8c6d58]">
              Studios
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-gray-400">
              <p>Rue du Rhône 42, 1204 Genève, CH</p>
              <p>Bahnhofstrasse 28, 8001 Zürich, CH</p>
              <p>Via Monte Napoleone 8, 20121 Milano, IT</p>
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#8c6d58]">
              Start a Dialogue
            </h4>
            <p className="text-xs text-gray-400">
              Inquire regarding plot evaluations, zoning feasibility, and custom blueprints.
            </p>
            <button
              onClick={onOpenContact}
              className="w-full py-3 bg-white hover:bg-gray-100 text-black rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer shadow-lg"
            >
              Contact Atelier
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} RANTY Architecture Atelier. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};
