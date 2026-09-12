import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/content";
import { AxisHeading, Reveal, ease } from "@/components/motion";

const StatusTag = ({ status }) => {
  const reduced = useReducedMotion();
  const isLive = status === "Live";

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-small ${
        isLive ? "text-ink" : "text-muted"
      }`}
    >
      {/* Live projects get the same signal pulse as the rail's current stop. */}
      <span className="relative block h-2 w-2">
        {isLive && !reduced && (
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-signal"
            initial={{ opacity: 0 }}
            animate={{ scale: [1, 3.2], opacity: [0.8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 1.2 }}
          />
        )}
        <motion.span
          aria-hidden="true"
          className={`relative block h-2 w-2 rounded-full ${
            isLive ? "bg-signal" : "bg-rule"
          }`}
          animate={isLive && !reduced ? { scale: [1, 0.82, 1] } : undefined}
          transition={
            isLive && !reduced
              ? { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
              : undefined
          }
        />
      </span>
      {status}
    </span>
  );
};

/**
 * Three projects across one viewport. The featured one keeps a surface behind
 * it so it still reads as the headline piece without needing extra height.
 */
const Work = () => {
  const reduced = useReducedMotion();
  const ordered = [...projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  return (
    <div className="w-full px-6 py-5 short:py-3 sm:px-10 max-md:border-t max-md:border-rule max-md:py-20">
      <div className="mx-auto w-full max-w-[1700px]">
        <AxisHeading className="section-head" from={108}>
          Work
        </AxisHeading>

        <div className="mt-4 grid gap-5 md:mt-6 md:grid-cols-3 md:gap-6">
          {ordered.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: reduced ? 0 : 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={
                reduced ? { duration: 0 } : { duration: 0.5, ease, delay: i * 0.08 }
              }
              className={`flex flex-col rounded-card p-5 md:p-6 ${
                project.featured
                  ? "border border-ink bg-paper-sunk"
                  : "border border-rule"
              }`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3
                  className={`font-semibold type-semi-expanded text-ink ${
                    project.featured ? "text-h2 type-expanded font-bold" : "text-h3"
                  }`}
                >
                  {project.name}
                </h3>
                <StatusTag status={project.status} />
              </div>

              <p className="mt-3 text-body text-ink/85">{project.summary}</p>
              <p className="mt-2 text-small text-muted">{project.detail}</p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-card border border-rule bg-paper px-2 py-0.5 text-small text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-underline mt-4 self-start text-body font-medium"
                >
                  Open {project.name}
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
