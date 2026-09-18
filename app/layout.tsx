import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RANTY — We Craft Custom Homes | Premium Architecture & 3D Design",
  description:
    "Unique design and ergonomics from blueprints to photorealistic renders. Crafting bespoke luxury custom homes with sustainable architecture.",
  keywords: [
    "custom homes",
    "architecture studio",
    "modern villa design",
    "3D architectural renders",
    "luxury interior architecture",
    "Ranty",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#0d0f11] text-[#1c1c1c] font-sans selection:bg-[#8C6D58] selection:text-white">
        {children}
      </body>
    </html>
  );
}
