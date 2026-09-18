import { Hotspot, Project, ServiceItem, RoomTourSlide } from "@/types";

export const HOTSPOTS_DATA: Hotspot[] = [
  {
    id: "facade-larch",
    title: "Parametric Thermowood Facade",
    category: "Exterior Architecture",
    description: "Curved vertical timber slats made of sustainable Scandinavian thermo-treated pine with natural weather resistance and integrated warm micro-LED illumination.",
    specs: ["Thermowood Grade A+", "Concealed Fastening System", "Natural Fire Retardant", "Integrated 2700K Linear Lighting"],
    x: 65,
    y: 35,
    previewImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "panoramic-glazing",
    title: "Low-E Triple Glazing System",
    category: "Thermal Envelope",
    description: "Floor-to-ceiling panoramic sliding panels with slimline aluminum frames offering 99.2% UV blocking and zero-threshold indoor-outdoor continuity.",
    specs: ["Triple-pane Argon filled", "Ug value: 0.5 W/m²K", "Acoustic rating: 44dB", "Flush recessed tracks"],
    x: 28,
    y: 72,
    previewImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "cantilever-balcony",
    title: "Cantilevered Master Suite Terrace",
    category: "Structural Engineering",
    description: "Post-tensioned floating concrete balcony slab enclosed with seamless laminated structural glass railings for unobstructed mountain vistas.",
    specs: ["3.2m Unsupported Span", "12+12mm PVB Laminated Glass", "Drainage with hidden weep slots", "Micro-cement floor finish"],
    x: 82,
    y: 60,
    previewImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "foundation-podium",
    title: "Monolithic Podium & Landscape",
    category: "Site Integration",
    description: "Architectural fair-faced concrete base anchoring the residence to the hillside topography with native drought-tolerant drought garden beds.",
    specs: ["Hydrophobic Sealant", "Earthquake Resistance Zone 4", "Integrated French Drains", "Basalt Stone Pavers"],
    x: 48,
    y: 88,
    previewImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop"
  }
];

export const ROOM_TOUR_SLIDES: RoomTourSlide[] = [
  {
    id: "master-bedroom",
    title: "Master Suite & Horizon Lounge",
    room: "Primary Bedroom",
    dimensions: "38 m² / 409 sq ft",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop",
    description: "Warm neutral tones with bespoke walnut headboard, automated linen shades, integrated walk-in wardrobe, and direct glass access to the sunrise terrace."
  },
  {
    id: "living-atrium",
    title: "Open-Plan Living & Dining Atrium",
    room: "Main Level",
    dimensions: "74 m² / 796 sq ft",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    description: "Double-height ceilings with custom travertine fireplace, organic curved seating, and seamless flow into the minimalist chef's kitchen."
  },
  {
    id: "spa-bathroom",
    title: "Private Zen Spa & Soaking Bath",
    room: "En-suite Bathroom",
    dimensions: "22 m² / 236 sq ft",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
    description: "Freestanding stone resin tub facing a private lightwell courtyard with rain shower, heated micro-cement flooring, and matte bronze tapware."
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "villa-solaris",
    title: "Villa Solaris",
    subtitle: "Highland Biophilic Retreat",
    location: "Lake Geneva, Switzerland",
    year: "2025",
    area: "420 m²",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop",
    category: "Villa"
  },
  {
    id: "lumina-residence",
    title: "Lumina Residence",
    subtitle: "Cantilevered Coastal Pavilion",
    location: "Costa Brava, Spain",
    year: "2025",
    area: "360 m²",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    category: "Modern"
  },
  {
    id: "nordic-horizon",
    title: "Nordic Horizon",
    subtitle: "Minimalist Pine Forest Sanctuary",
    location: "Oslo Fjord, Norway",
    year: "2024",
    area: "290 m²",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
    category: "Nordic"
  },
  {
    id: "aether-house",
    title: "Aether House",
    subtitle: "Monolithic Glass & Travertine",
    location: "Aspen, Colorado",
    year: "2024",
    area: "510 m²",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
    category: "Minimalist"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "01",
    number: "01",
    title: "Custom Architectural Design",
    description: "From conceptual sketches and master planning to structural engineering and municipal permit approvals, tailored entirely to your lifestyle and site geology.",
    deliverables: ["Site Topography Analysis", "Bespoke Spatial Programming", "Permit & Zoning Documentation", "Structural & MEP Engineering"]
  },
  {
    id: "02",
    number: "02",
    title: "Photorealistic 3D & Virtual Reality",
    description: "Explore your future home before the first foundation is poured with hyper-realistic CGI renders, lighting simulations, and interactive 360° VR tours.",
    deliverables: ["4K Photorealistic Stills", "Cinematic Walkthrough Animations", "Interactive VR Experiences", "Sunlight & Shadow Studies"]
  },
  {
    id: "03",
    number: "03",
    title: "Interior Architecture & Ergonomics",
    description: "Meticulous interior design harmonizing acoustic dampening, custom millwork, custom lighting layouts, and curated sustainable European materials.",
    deliverables: ["Custom Millwork Detailing", "Material & Finish Schedules", "Ergonomic Lighting Plans", "Furniture & Art Curation"]
  },
  {
    id: "04",
    number: "04",
    title: "Turnkey Project Supervision",
    description: "End-to-end site management, contractor vetting, budget governance, and rigorous quality control through to final key handover.",
    deliverables: ["General Contractor Tender", "On-site Quality Auditing", "Budget & Timeline Governance", "Post-handover Warranty Support"]
  }
];

export const STATS_DATA = [
  { label: "Completed Residences", value: "240+", unit: "Homes" },
  { label: "Design Excellence Awards", value: "18", unit: "Honors" },
  { label: "Client Recommendation", value: "99.4%", unit: "Rating" },
  { label: "Sustainable Rating", value: "A+++", unit: "Energy Class" }
];
