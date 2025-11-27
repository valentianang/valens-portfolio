import { Navigation } from "./Navigation";
import { Hero } from "./Hero";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { MarqueeCarousel } from "./MarqueeCarousel";

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
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <MarqueeCarousel direction="right" images={topCarouselImages} />
        <Navigation />
        <MarqueeCarousel direction="left" images={bottomCarouselImages} />
      </div>
      <div style={{ paddingTop: '120px' }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}