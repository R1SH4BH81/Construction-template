"use client";

import React, { useState } from "react";
import { SERVICES_DATA } from "@/data/architectureData";

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>("01");

  return (
    <section id="services" className="relative z-20 py-24 md:py-32 bg-[#0e0f12] text-white">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-white/10">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8c6d58] block mb-3">
              Comprehensive Studio Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-editorial tracking-tight text-white">
              End-to-End Architectural Craft
            </h2>
          </div>
          <p className="text-sm md:text-base text-gray-400 max-w-md font-sans leading-relaxed">
            We bridge imaginative concept art and computational engineering into physical residences of timeless distinction.
          </p>
        </div>

        {/* Services Accordion / Grid */}
        <div className="mt-12 divide-y divide-white/10">
          {SERVICES_DATA.map((service) => {
            const isOpen = activeServiceId === service.id;
            return (
              <div
                key={service.id}
                className="py-8 md:py-12 transition-all duration-300 group"
              >
                <div
                  onClick={() => setActiveServiceId(isOpen ? "" : service.id)}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-baseline gap-6 md:gap-12">
                    <span className="text-sm md:text-base font-mono text-[#8c6d58] font-bold">
                      {service.number}
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal font-editorial text-white group-hover:text-[#8c6d58] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white group-hover:border-[#8c6d58] group-hover:bg-[#8c6d58] transition-all">
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {isOpen && (
                  <div className="mt-6 md:mt-8 pl-12 md:pl-20 grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-300">
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-[#8c6d58]">
                        Key Deliverables
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-300">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8c6d58]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-2">
                        <button
                          onClick={() => onSelectService(service.title)}
                          className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-white hover:text-[#8c6d58] transition-colors cursor-pointer"
                        >
                          <span>Request Consultation For {service.title}</span>
                          <span>&rarr;</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
