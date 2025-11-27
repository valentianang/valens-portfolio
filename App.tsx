import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { MarqueeCarousel } from "./components/MarqueeCarousel";

const topCarouselImages = [
  { src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500", alt: "Coding workspace" },
  { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500", alt: "Data analytics" },
  { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500", alt: "Team collaboration" },
  { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500", alt: "Business meeting" },
  { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500", alt: "Business charts" },
  { src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500", alt: "Modern workspace" },
];

const bottomCarouselImages = [
  { src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500", alt: "Web development" },
  { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500", alt: "Collaboration" },
  { src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500", alt: "Office work" },
  { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500", alt: "Technology" },
  { src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500", alt: "Startup environment" },
  { src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500", alt: "Professional setting" },
];

export default function App() {
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <MarqueeCarousel direction="right" images={topCarouselImages} />
        <Navigation />
        <MarqueeCarousel direction="left" images={bottomCarouselImages} />
      </div>
      <div className="pt-64">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}