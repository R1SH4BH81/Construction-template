"use client";

import React, { useState } from "react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillTopic?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  prefillTopic = "",
}) => {
  const [projectType, setProjectType] = useState("Custom Residence");
  const [budget, setBudget] = useState("€1.5M - €3M");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState(prefillTopic ? `Inquiry regarding: ${prefillTopic}` : "");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const projectTypes = [
    "Custom Residence",
    "Architectural Blueprint",
    "Photorealistic 3D",
    "Interior Architecture",
  ];

  const budgetTiers = [
    "€750K - €1.5M",
    "€1.5M - €3M",
    "€3M - €6M",
    "€6M+",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#1c1e22] text-white rounded-3xl shadow-2xl border border-white/10 overflow-hidden p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold font-editorial">Consultation Request Received</h3>
            <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-semibold">{name || "esteemed client"}</span>. Our lead architectural partner will review your project requirements and connect within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-8 py-3 bg-[#8c6d58] hover:bg-[#a17e66] text-white rounded-full text-xs font-bold tracking-widest uppercase"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8c6d58] block mb-1">
                Initiate Project
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Craft Your Custom Home
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Share your vision, terrain details, or desired architectural scope with our studio.
              </p>
            </div>

            {/* Project Type Selection */}
            <div>
              <label className="text-xs font-semibold text-gray-300 block mb-2 uppercase tracking-wider">
                Project Scope
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {projectTypes.map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => setProjectType(type)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium text-center border transition-all cursor-pointer ${
                      projectType === type
                        ? "bg-[#8c6d58] text-white border-transparent shadow-md"
                        : "bg-white/5 border-white/10 text-gray-300 hover:border-white/20"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Range */}
            <div>
              <label className="text-xs font-semibold text-gray-300 block mb-2 uppercase tracking-wider">
                Target Budget Range
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {budgetTiers.map((tier) => (
                  <button
                    type="button"
                    key={tier}
                    onClick={() => setBudget(tier)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium text-center border transition-all cursor-pointer ${
                      budget === tier
                        ? "bg-[#8c6d58] text-white border-transparent shadow-md"
                        : "bg-white/5 border-white/10 text-gray-300 hover:border-white/20"
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-400 block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alexander Wright"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#8c6d58] placeholder-gray-500"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 block mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="alexander@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#8c6d58] placeholder-gray-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-400 block mb-1">Plot Location / City</label>
                <input
                  type="text"
                  placeholder="e.g. Zurich, Switzerland"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#8c6d58] placeholder-gray-500"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 block mb-1">Special Preferences / Notes</label>
                <input
                  type="text"
                  placeholder="Terrain slope, lake view, solar orientation..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#8c6d58] placeholder-gray-500"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-gray-400">
                Guaranteed strict client NDA &amp; confidentiality
              </span>
              <button
                type="submit"
                className="px-8 py-3 bg-[#8c6d58] hover:bg-[#a17e66] text-white rounded-full text-xs font-bold tracking-widest uppercase shadow-lg shadow-[#8c6d58]/30 transition-all hover:scale-105 cursor-pointer"
              >
                Submit Consultation Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
