export interface Hotspot {
  id: string;
  title: string;
  category: string;
  description: string;
  specs: string[];
  x: number; // percentage from left
  y: number; // percentage from top
  previewImage?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  year: string;
  area: string;
  image: string;
  category: "Modern" | "Minimalist" | "Nordic" | "Villa";
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface RoomTourSlide {
  id: string;
  title: string;
  room: string;
  dimensions: string;
  image: string;
  description: string;
}
