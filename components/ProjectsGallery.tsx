"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROJECTS_DATA } from "@/data/architectureData";
import { Project } from "@/types";

interface ProjectsGalleryProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Villa", "Modern", "Minimalist", "Nordic"];

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section id="homes" className="relative z-20 py-24 md:py-32 bg-[#131518] text-white">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8c6d58] block mb-3">
              Selected Works &amp; Cases
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-editorial tracking-tight text-white">
              Signature Residences
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  activeFilter === cat
                    ? "bg-[#8c6d58] text-white shadow-lg"
                    : "bg-white/5 text-gray-400 border border-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div id="cases" className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative rounded-3xl overflow-hidden bg-stone-900 border border-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-1.5 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-[320px] sm:h-[420px] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                
                <span className="absolute top-5 left-5 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[11px] font-bold tracking-widest uppercase text-white border border-white/10">
                  {project.category}
                </span>

                <span className="absolute top-5 right-5 text-xs text-white/80 font-mono">
                  {project.year}
                </span>
              </div>

              {/* Bottom Metadata */}
              <div className="p-6 sm:p-8 bg-[#181a1f] flex items-end justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-normal font-editorial text-white group-hover:text-[#8c6d58] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    {project.subtitle} &bull; {project.location}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-xs text-gray-500 font-mono block">Built Area</span>
                  <span className="text-sm font-semibold text-white font-mono">{project.area}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
