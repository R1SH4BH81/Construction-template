"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { RoomtourModal } from "@/components/RoomtourModal";
import { HotspotModal } from "@/components/HotspotModal";
import { ConsultationModal } from "@/components/ConsultationModal";
import { Hotspot, Project } from "@/types";

export default function Home() {
  const [roomTourOpen, setRoomTourOpen] = useState(false);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState("");

  const handleOpenConsultation = (topic = "") => {
    setConsultationTopic(topic);
    setConsultationOpen(true);
  };

  const handleSelectProject = (project: Project) => {
    handleOpenConsultation(`Project case inquiry: ${project.title} (${project.location})`);
  };

  return (
    <div className="relative min-h-screen bg-[#0d0f11] text-[#1c1c1c] flex flex-col selection:bg-[#8C6D58] selection:text-white overflow-x-hidden">
      {/* Persistent Layout-Level Navbar fixed at top */}
      <Navbar
        onOpenContact={() => handleOpenConsultation("General Contact & Blueprint Consultation")}
      />

      <main className="flex-1 flex flex-col">
        {/* 1. Hero Section matching screenshot layout with mountain background */}
        <Hero
          onOpenContact={() => handleOpenConsultation("General Contact & Blueprint Consultation")}
          onOpenRoomTour={() => setRoomTourOpen(true)}
          onSelectHotspot={(spot) => setSelectedHotspot(spot)}
        />

        {/* 2. Key Architecture Metrics */}
        <StatsBar />

        {/* 3. Architectural Services */}
        <ServicesSection
          onSelectService={(serviceTitle) => handleOpenConsultation(`Service: ${serviceTitle}`)}
        />

        {/* 4. Signature Custom Residences & Cases */}
        <ProjectsGallery onSelectProject={handleSelectProject} />

        {/* 5. About the Studio & Philosophy */}
        <AboutSection
          onOpenConsultation={() => handleOpenConsultation("Studio Philosophy Consultation")}
        />

        {/* 6. Footer */}
        <Footer
          onOpenContact={() => handleOpenConsultation("Direct Atelier Inquiry")}
        />
      </main>

      {/* Interactive Modal: Virtual Roomtour */}
      <RoomtourModal
        isOpen={roomTourOpen}
        onClose={() => setRoomTourOpen(false)}
        onOpenConsultation={() => handleOpenConsultation("Master Bedroom Interior Spec")}
      />

      {/* Interactive Modal: Hotspot Engineering Specs */}
      <HotspotModal
        hotspot={selectedHotspot}
        onClose={() => setSelectedHotspot(null)}
        onConsultSpec={(title) => handleOpenConsultation(`Hotspot Architecture Spec: ${title}`)}
      />

      {/* Interactive Modal: Consultation & Project Inquiry */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        prefillTopic={consultationTopic}
      />
    </div>
  );
}
