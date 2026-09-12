import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ease } from "@/components/motion";

/**
 * Hero collage.
 *
 * Five photographs fly up from below, fade in, and settle into a deliberately
 * uneven pile. Positions are percentages of the container so the arrangement
 * holds its shape as the column resizes.
 *
 * Nothing here shares an edge or a centre line with anything else: each photo
 * lands somewhere along the middle of its neighbour rather than aligned to it.
 */
const photos = [
  // Landscape anchor across the top left.
  { src: "/img_1.jpg", w: 1440, h: 809, left: "-15%", top: "-13%", width: "44%", rotate: -5, z: 20 },
  // Portrait dropping past the anchor's right half.
  { src: "/img_2.jpg", w: 3072, h: 4096, left: "40%", top: "-26%", width: "28%", rotate: 4, z: 30 },
  // Lower left, overlapping the anchor's bottom third.
  { src: "/img_3.jpg", w: 3072, h: 4096, left: "-10%", top: "48%", width: "26%", rotate: -7, z: 40 },
  // Lower right, offset from its neighbour so the bottoms never line up.
  { src: "/img_4.jpg", w: 3072, h: 4096, left: "50%", top: "44%", width: "28%", rotate: 3, z: 25 },
  // Tall narrow one threading through the middle, on top of everything.
  { src: "/img_5.jpg", w: 640, h: 1138, left: "20%", top: "28%", width: "19%", rotate: -2, z: 50 },
];

const HeroCollage = () => {
  const reduced = useReducedMotion();

  return (
    <div className="relative h-full min-h-[420px] w-full" aria-hidden="true">
      {photos.map((p, i) => (
        <motion.div
          key={p.src}
          className="absolute rounded-[3px] bg-paper p-1.5 shadow-[0_10px_30px_rgba(20,24,28,0.16)]"
          style={{ left: p.left, top: p.top, width: p.width, zIndex: p.z }}
          initial={
            reduced
              ? { opacity: 0, rotate: p.rotate }
              : { opacity: 0, y: 120, scale: 0.9, rotate: 0 }
          }
          animate={{ opacity: 1, y: 0, scale: 1, rotate: p.rotate }}
          transition={{
            duration: reduced ? 0.3 : 0.85,
            ease,
            // Staggered so they arrive one after another rather than as a block.
            delay: reduced ? 0 : 0.45 + i * 0.13,
          }}
        >
          <Image
            src={p.src}
            alt=""
            width={p.w}
            height={p.h}
            sizes="(min-width: 1280px) 20vw, 25vw"
            priority={i < 2}
            className="h-auto w-full rounded-[2px] object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default HeroCollage;
