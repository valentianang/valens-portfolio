import { Navigation } from "./Navigation";
import { Hero } from "./Hero";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { MarqueeCarousel } from "./MarqueeCarousel";
import { useState, useEffect } from "react";

const topCarouselImages = [
  { src: "/images/top-1.jpg", alt: "Coding workspace" },
  { src: "/images/top-2.jpg", alt: "Data analytics" },
  { src: "/images/top-3.jpg", alt: "Team collaboration" },
  { src: "/images/top-4.jpg", alt: "Business meeting" },
  { src: "/images/top-5.jpg", alt: "Business charts" },
  { src: "/images/top-6.jpg", alt: "Modern workspace" },
];

const bottomCarouselImages = [
  { src: "/images/bottom-1.jpg", alt: "Web development" },
  { src: "/images/bottom-2.jpg", alt: "Collaboration" },
  { src: "/images/bottom-3.jpg", alt: "Office work" },
  { src: "/images/bottom-4.jpg", alt: "Technology" },
  { src: "/images/bottom-5.jpg", alt: "Startup environment" },
  { src: "/images/bottom-6.jpg", alt: "Professional setting" },
];

export default function App() {
  const [showCarousels, setShowCarousels] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide carousels when scrolled down more than 100px
      setShowCarousels(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <div 
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-300"
        style={{
          paddingTop: showCarousels ? '0' : '0',
        }}
      >
        {showCarousels && <MarqueeCarousel direction="right" images={topCarouselImages} />}
        <Navigation isScrolled={!showCarousels} />
        {showCarousels && <MarqueeCarousel direction="left" images={bottomCarouselImages} />}
      </div>
      <div style={{ paddingTop: showCarousels ? '80px' : '40px' }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}