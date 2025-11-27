import { motion } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";
import styles from "./MarqueeCarousel.module.css";

interface MarqueeCarouselProps {
  direction?: "left" | "right";
  images: { src: string; alt: string }[];
}

export function MarqueeCarousel({
  direction = "right",
  images,
}: MarqueeCarouselProps) {
  // 6x duplication for ultra-smooth infinite loop
  const duplicatedImages = [...images, ...images, ...images, ...images, ...images, ...images];

  return (
    <div className={styles.carousel}>
      <motion.div
        className={styles.carouselTrack}
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
          repeatType: "loop",
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className={styles.imageWrapper}
          >
            <ImageWithFallback
              src={image.src}
              alt={image.alt}
              className={styles.image}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}