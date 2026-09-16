import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/data/content";
import { AxisHeading, ease } from "@/components/motion";

/**
 * Experience as a row of expanding boxes.
 *
 * Three rectangular boxes sit side by side in the middle of the panel. Hovering
 * one widens it in place to reveal every point while the other two narrow. The
 * row height never changes, so opening a box can never push content past the
 * bottom of a panel that does not scroll.
 *
 * Each closed box carries its company logo as an oversized wash filling the
 * space under the text: too big for the box, so it is cropped by the edges, and
 * masked so it fades out before it reaches the heading. The wash fades away
 * while a box is open and returns when it closes.
 *
 * Hover drives this, so keyboard focus does too. Focus expands the same way,
 * which keeps the detail reachable without a pointer.
 */

const slug = (job) => job.org.toLowerCase().replace(/[^a-z0-9]+/g, "-");

// How much wider the open box grows relative to a closed one.
const OPEN_GROW = 2.4;

// Fades the wash out towards its own top, so it never crowds the heading.
const WASH_MASK = "linear-gradient(to top, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)";

const PlusIcon = ({ open }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
  </svg>
);

const Experience = () => {
  const reduced = useReducedMotion();
  const [openId, setOpenId] = useState(null);

  const open = (id) => setOpenId(id);
  const close = (id) => setOpenId((current) => (current === id ? null : current));

  const growTransition = reduced
    ? { duration: 0 }
    : { type: "spring", stiffness: 240, damping: 32 };
  const washTransition = reduced ? { duration: 0 } : { duration: 0.35, ease };

  return (
    <div className="w-full px-6 py-5 short:py-3 sm:px-10 max-md:border-t max-md:border-rule max-md:py-20">
      <div className="mx-auto w-full max-w-[1400px]">
        <AxisHeading className="section-head" from={108}>
          Experience
        </AxisHeading>
        <p className="mt-1 text-body text-muted short:text-small">
          Hover a role for details.
        </p>

        <div className="mt-5 flex flex-col gap-4 md:mt-6 md:h-[clamp(400px,64vh,660px)] md:flex-row md:gap-5">
          {experience.map((job) => {
            const id = slug(job);
            const isOpen = openId === id;

            return (
              <motion.article
                key={id}
                initial={false}
                animate={{ flexGrow: isOpen ? OPEN_GROW : 1 }}
                transition={growTransition}
                style={{ flexBasis: 0 }}
                onMouseEnter={() => open(id)}
                onMouseLeave={() => close(id)}
                className={`group relative flex min-w-0 flex-col overflow-hidden rounded-card border transition-colors ${
                  isOpen ? "border-ink bg-paper-sunk" : "border-rule bg-paper hover:border-ink"
                }`}
              >
                {/* Logo wash: oversized so the box crops it, and hidden while open. */}
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 top-[44%] overflow-hidden"
                  initial={false}
                  animate={{ opacity: isOpen ? 0 : 1 }}
                  transition={washTransition}
                >
                  <div
                    className="h-full w-full bg-no-repeat opacity-[var(--logo-wash)]"
                    style={{
                      backgroundImage: `url("${job.logo}")`,
                      // A little wider than the box, so the mark just runs off
                      // the edges while still reading as the logo.
                      backgroundSize: "112% auto",
                      backgroundPosition: "center bottom -6%",
                      maskImage: WASH_MASK,
                      WebkitMaskImage: WASH_MASK,
                    }}
                  />
                </motion.div>

                {/* Header sits above the wash: positioned elements paint later. */}
                <div className="relative p-5 md:p-6 short:p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[clamp(1.5rem,2.2vw,2.25rem)] font-bold leading-[1.05] text-ink type-semi-expanded">
                      {job.org}
                    </h3>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        isOpen
                          ? "border-ink bg-ink text-paper"
                          : "border-rule text-ink group-hover:border-ink"
                      }`}
                    >
                      <PlusIcon open={isOpen} />
                    </span>
                  </div>

                  <p className="mt-1.5 text-body text-muted">{job.role}</p>
                  <p className="mt-1 text-small text-muted">
                    {job.period}, {job.place}
                  </p>
                </div>

                {/* Details: shown only while open, faded in after the box widens. */}
                <motion.div
                  id={`experience-${id}`}
                  role="region"
                  aria-label={`${job.org} details`}
                  aria-hidden={!isOpen}
                  initial={false}
                  animate={{ opacity: isOpen ? 1 : 0 }}
                  transition={
                    reduced
                      ? { duration: 0 }
                      : isOpen
                      ? { delay: 0.2, duration: 0.3 }
                      : { duration: 0.1 }
                  }
                  className={`${
                    isOpen ? "flex" : "hidden"
                  } relative min-h-0 flex-1 flex-col border-t border-rule px-5 pb-5 pt-4 md:px-6 md:pb-6 short:px-4 short:pb-4 short:pt-3`}
                >
                  <ul className="space-y-2.5 short:space-y-1.5">
                    {job.points.map((point, j) => (
                      <li key={j} className="relative pl-5 text-body text-ink/85 short:text-small">
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full bg-route"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-4 short:pt-2">
                    {job.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-card border border-rule bg-paper px-2 py-0.5 text-small text-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Keyboard and touch equivalent of hovering. */}
                <button
                  type="button"
                  onFocus={() => open(id)}
                  onBlur={() => close(id)}
                  onClick={() => open(id)}
                  aria-expanded={isOpen}
                  aria-controls={`experience-${id}`}
                  aria-label={`Show details for ${job.role} at ${job.org}`}
                  className="absolute inset-0 z-10 rounded-card"
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
