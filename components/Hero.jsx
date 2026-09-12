import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/content";
import { ease, useWidthAxis } from "@/components/motion";
import HeroCollage from "@/components/HeroCollage";

const Hero = () => {
  const reduced = useReducedMotion();

  // Each line of the name widens as it rises, staggered to match the sequence.
  const wdthLine1 = useWidthAxis({ from: 62, to: 125, duration: 1.2, delay: 0.12 });
  const wdthLine2 = useWidthAxis({ from: 62, to: 125, duration: 1.2, delay: 0.24 });

  // The page-load sequence: heading, then actions, then the line draws and the
  // stations arrive along it. Everything below is driven off this one timeline.
  const lift = {
    hidden: { opacity: 0, y: reduced ? 0 : 22 },
    visible: { opacity: 1, y: 0, transition: { duration: reduced ? 0.2 : 0.7, ease } },
  };

  return (
    <div className="relative flex w-full flex-col justify-center py-8 max-md:min-h-[100svh] max-md:py-24">
      {/* The hero's own content supplies the depth layers. Nothing decorative
          is added: the text and the route line simply travel at different
          rates as the scene scrolls away. */}
      {/* Upper band: content on the left, right half reserved. */}
      <div className="flex flex-1 items-center">
        <div className="grid w-full items-center gap-4 md:grid-cols-2">
      <div className="px-5 sm:px-8 md:pl-10 lg:pl-[calc(10vw+1.6rem)]">
      <motion.div
        className="w-full"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: reduced ? 0 : 0.12 } },
        }}
      >
        <motion.p variants={lift} className="text-small text-muted mb-5">
          {profile.role}, {profile.location}
        </motion.p>

        {/* Each line rises out of its own clipped band. */}
        <h1 className="text-display font-bold text-ink">
          {[
            { text: "Andre", wdth: wdthLine1 },
            { text: "Santiago-Neyra", wdth: wdthLine2 },
          ].map((line) => (
            <span key={line.text} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className="block"
                style={{ fontVariationSettings: line.wdth }}
                variants={{
                  hidden: { y: reduced ? 0 : "100%", opacity: reduced ? 0 : 1 },
                  visible: {
                    y: "0%",
                    opacity: 1,
                    transition: { duration: reduced ? 0.2 : 1.1, ease },
                  },
                }}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div variants={lift} className="mt-9 flex flex-wrap items-center gap-3">
          <motion.a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            whileHover={reduced ? undefined : { y: -2 }}
            whileTap={{ y: 0 }}
            transition={{ duration: 0.2, ease }}
            className="inline-flex items-center gap-2 rounded-card bg-ink px-5 py-2.5 text-small font-medium text-paper transition-colors hover:bg-route"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </motion.a>
          <motion.a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            whileHover={reduced ? undefined : { y: -2 }}
            whileTap={{ y: 0 }}
            transition={{ duration: 0.2, ease }}
            className="inline-flex items-center gap-2 rounded-card border border-rule px-5 py-2.5 text-small font-medium text-ink transition-colors hover:border-ink"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
            LinkedIn
          </motion.a>
        </motion.div>
      </motion.div>

      </div>

          {/* Right half: the collage, at its own parallax depth between the
              text block and the route line. */}
          <div className="hidden h-full md:block">
            <HeroCollage />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
