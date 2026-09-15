import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/data/content";
import { AxisHeading } from "@/components/motion";

/**
 * Experience as a row of expanding boxes.
 *
 * Three rectangular boxes sit side by side in the middle of the panel. Selecting
 * one widens it in place to reveal every point while the other two narrow. The
 * row height never changes, so opening a box can never push content past the
 * bottom of a panel that does not scroll.
 *
 * The details are always rendered and only shown or hidden, never mounted and
 * unmounted, so there is no exit animation that could fail to finish and leave
 * stale content on screen.
 */

const slug = (job) => job.org.toLowerCase().replace(/[^a-z0-9]+/g, "-");

// How much wider the open box grows relative to a closed one.
const OPEN_GROW = 2.4;

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

  const toggle = (id) => setOpenId((current) => (current === id ? null : id));

  const growTransition = reduced
    ? { duration: 0 }
    : { type: "spring", stiffness: 240, damping: 32 };

  return (
    <div className="w-full px-6 py-5 short:py-3 sm:px-10 max-md:border-t max-md:border-rule max-md:py-20">
      <div className="mx-auto w-full max-w-[1400px]">
        <AxisHeading className="section-head" from={108}>
          Experience
        </AxisHeading>
        <p className="mt-1 text-body text-muted short:text-small">Select a role for details.</p>

        <div className="mt-5 flex flex-col gap-4 md:mt-6 md:h-[clamp(400px,64vh,660px)] md:flex-row md:gap-5">
          {experience.map((job) => {
            const id = slug(job);
            const open = openId === id;

            return (
              <motion.article
                key={id}
                initial={false}
                animate={{ flexGrow: open ? OPEN_GROW : 1 }}
                transition={growTransition}
                style={{ flexBasis: 0 }}
                className={`group relative flex min-w-0 flex-col overflow-hidden rounded-card border transition-colors ${
                  open ? "border-ink bg-paper-sunk" : "border-rule bg-paper hover:border-ink"
                }`}
              >
                {/* Header: logo and toggle icon, then company over role. */}
                <div className="p-5 md:p-6 short:p-4">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-card border border-rule bg-white">
                      <Image
                        src={job.logo}
                        alt=""
                        width={40}
                        height={40}
                        unoptimized
                        className="h-full w-full object-cover"
                      />
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        open
                          ? "border-ink bg-ink text-paper"
                          : "border-rule text-ink group-hover:border-ink"
                      }`}
                    >
                      <PlusIcon open={open} />
                    </span>
                  </div>

                  <h3 className="mt-4 text-[clamp(1.5rem,2.2vw,2.25rem)] font-bold leading-[1.05] text-ink type-semi-expanded short:mt-3">
                    {job.org}
                  </h3>
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
                  aria-hidden={!open}
                  initial={false}
                  animate={{ opacity: open ? 1 : 0 }}
                  transition={
                    reduced ? { duration: 0 } : open ? { delay: 0.2, duration: 0.3 } : { duration: 0.1 }
                  }
                  className={`${
                    open ? "flex" : "hidden"
                  } min-h-0 flex-1 flex-col border-t border-rule px-5 pb-5 pt-4 md:px-6 md:pb-6 short:px-4 short:pb-4 short:pt-3`}
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

                {/* The whole box is the control. */}
                <button
                  type="button"
                  onClick={() => toggle(id)}
                  aria-expanded={open}
                  aria-controls={`experience-${id}`}
                  aria-label={`${open ? "Hide" : "Show"} details for ${job.role} at ${job.org}`}
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
