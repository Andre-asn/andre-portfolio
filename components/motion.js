import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

// One easing curve for the whole site so motion feels like one system.
export const ease = [0.22, 1, 0.36, 1];

/**
 * Reveal
 * Scroll-triggered entrance. Fires once, and collapses to a plain fade when
 * the visitor asks for reduced motion.
 */
export const Reveal = ({
  children,
  delay = 0,
  y = 18,
  className,
  as = "div",
}) => {
  const reduced = useReducedMotion();
  const Tag = motion[as] || motion.div;

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: reduced ? 0.2 : 0.55, ease, delay: reduced ? 0 : delay }}
    >
      {children}
    </Tag>
  );
};

/**
 * Stagger
 * Parent that releases its children in sequence. Pair with <StaggerItem>.
 */
export const Stagger = ({ children, className, stagger = 0.08, delay = 0 }) => {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduced ? 0 : stagger,
            delayChildren: reduced ? 0 : delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className, y = 16 }) => {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduced ? 0 : y },
        visible: { opacity: 1, y: 0, transition: { duration: reduced ? 0.2 : 0.5, ease } },
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * useWidthAxis
 * Drives Archivo's variable width axis with a motion value and hands back a
 * ready-made font-variation-settings string. A motion value is used rather than
 * animating a CSS custom property directly, because Motion treats unregistered
 * custom properties as opaque strings and jumps straight to the end value
 * instead of interpolating.
 */
export const useWidthAxis = ({ from, to, duration = 0.9, delay = 0, play = true }) => {
  const reduced = useReducedMotion();
  const width = useMotionValue(reduced ? to : from);
  const fontVariationSettings = useTransform(width, (w) => `'wdth' ${w.toFixed(1)}`);

  useEffect(() => {
    if (!play) return;
    if (reduced) {
      width.set(to);
      return;
    }
    const controls = animate(width, to, { duration, delay, ease });
    return () => controls.stop();
  }, [play, reduced, to, duration, delay, width]);

  return fontVariationSettings;
};

/**
 * AxisHeading
 * Archivo carries a variable width axis, so headings arrive by widening into
 * place rather than by sliding.
 *
 * Width changes re-shape glyphs, so this reflows text while it runs. Keep it
 * to headings, never to body copy.
 */
export const AxisHeading = ({
  children,
  className,
  as = "h2",
  from = 100,
  to = 125,
  duration = 0.9,
  delay = 0,
}) => {
  const reduced = useReducedMotion();
  const Tag = motion[as] || motion.h2;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  const fontVariationSettings = useWidthAxis({ from, to, duration, delay, play: inView });

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ fontVariationSettings }}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: reduced ? 0.2 : 0.5, ease, delay: reduced ? 0 : delay }}
    >
      {children}
    </Tag>
  );
};
