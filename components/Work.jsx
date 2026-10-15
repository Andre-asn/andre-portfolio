import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/content";
import { AxisHeading, Reveal, ease } from "@/components/motion";

// A still dot: the rail marker is the only thing on the page that pulses.
const StatusTag = ({ status }) => {
  const isLive = status === "Live";

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-small ${
        isLive ? "text-ink" : "text-muted"
      }`}
    >
      <span
        aria-hidden="true"
        className={`block h-2 w-2 rounded-full ${isLive ? "bg-signal" : "bg-rule"}`}
      />
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
