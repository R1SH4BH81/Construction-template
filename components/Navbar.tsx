"use client";

import React, { useState, useEffect } from "react";

interface NavbarProps {
  onOpenContact: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onNavigateSection }) => {
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("ENG");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages = ["ENG", "GER", "FRA", "ESP"];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigateSection) {
      onNavigateSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#e5e0da]/90 backdrop-blur-md shadow-sm border-b border-black/5 py-4"
          : "bg-transparent pt-6 md:pt-8 pb-4"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <nav className="flex items-center justify-between text-[#1c1c1c]">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer select-none"
            aria-label="RANTY Homepage"
          >
            {/* Stylized Architectural 3-Pill Icon */}
            <div className="flex items-center gap-[3px]">
              <span className="w-[5px] h-[18px] bg-[#1c1c1c] rounded-full transition-transform duration-300 group-hover:scale-y-110" />
              <span className="w-[5px] h-[24px] bg-[#1c1c1c] rounded-full transition-transform duration-300 group-hover:scale-y-105" />
              <span className="w-[5px] h-[14px] bg-[#1c1c1c] rounded-full transition-transform duration-300 group-hover:scale-y-125" />
            </div>
            <span className="text-[20px] md:text-[22px] font-bold tracking-[0.18em] uppercase text-[#1c1c1c] font-sans">
              RANTY
            </span>
          </a>

          {/* Center Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-10 lg:space-x-12 text-[15px] font-bold text-[#1c1c1c] tracking-wide">
            <button
              onClick={() => handleNavClick("services")}
              className="hover:text-black/70 transition-colors duration-200 cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("homes")}
              className="hover:text-black/70 transition-colors duration-200 cursor-pointer"
            >
              Homes
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className="hover:text-black/70 transition-colors duration-200 cursor-pointer"
            >
              About us
            </button>
            <button
              onClick={() => handleNavClick("cases")}
              className="hover:text-black/70 transition-colors duration-200 cursor-pointer"
            >
              Cases
            </button>
          </div>

          {/* Right Action: Language Selector & Contact Us */}
          <div className="flex items-center space-x-6 md:space-x-8 text-[14px] font-bold tracking-wider uppercase">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-[#1c1c1c] hover:text-black/70 transition-colors duration-200 cursor-pointer px-1 py-1 font-bold"
                aria-expanded={langOpen}
              >
                <span>{currentLang}</span>
                <svg
                  className={`w-3.5 h-3.5 stroke-[2.5] transition-transform duration-200 ${
                    langOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 py-2 w-24 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-black/5 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setCurrentLang(lang);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-1.5 text-[12px] font-bold hover:bg-black/5 transition-colors ${
                        currentLang === lang ? "text-black bg-black/5 font-extrabold" : "text-gray-700"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Us Underlined Link */}
            <button
              onClick={onOpenContact}
              className="group relative text-[#1c1c1c] hover:text-black/75 font-bold tracking-wider transition-colors duration-200 cursor-pointer py-1"
            >
              <span>CONTACT US</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#1c1c1c] transition-all duration-300 group-hover:h-[2.5px] group-hover:bg-black" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-800 hover:text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-black/10 flex flex-col space-y-4 animate-in slide-in-from-top-3 duration-200">
            <button
              onClick={() => handleNavClick("services")}
              className="text-left text-lg font-bold text-gray-900 hover:text-black py-1"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("homes")}
              className="text-left text-lg font-bold text-gray-900 hover:text-black py-1"
            >
              Homes
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className="text-left text-lg font-bold text-gray-900 hover:text-black py-1"
            >
              About us
            </button>
            <button
              onClick={() => handleNavClick("cases")}
              className="text-left text-lg font-bold text-gray-900 hover:text-black py-1"
            >
              Cases
            </button>
            <hr className="border-gray-200 my-2" />
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 bg-[#24211e] text-white rounded-xl font-bold tracking-wider uppercase text-xs text-center"
            >
              Get in Touch
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
