import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface MarqueeCarouselProps {
  direction?: "left" | "right";
  images: { src: string; alt: string }[];
}

export function MarqueeCarousel({
  direction = "right",
  images,
}: MarqueeCarouselProps) {
  // Double the items for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="overflow-hidden bg-light-brown py-10 border-y border-brown-dark/20">
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={{
          x:
            direction === "right"
              ? ["0%", "-50%"]
              : ["-50%", "0%"],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-44 h-24 bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm"
          >
            <ImageWithFallback
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}