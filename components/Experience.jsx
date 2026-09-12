import { experience } from "@/data/content";
import { AxisHeading, Reveal } from "@/components/motion";

/**
 * The three roles sit side by side so the whole history fits one viewport
 * instead of running down the page.
 */
const Experience = () => {
  return (
    <div className="w-full px-6 py-5 short:py-3 sm:px-10 max-md:border-t max-md:border-rule max-md:py-20">
      <div className="mx-auto w-full max-w-[1700px]">
        <AxisHeading className="section-head" from={108}>
          Experience
        </AxisHeading>

        <div className="mt-6 grid gap-6 md:grid-cols-3 md:gap-8">
          {experience.map((job, i) => (
            <Reveal
              key={`${job.org}-${job.role}`}
              as="article"
              delay={i * 0.08}
              className="flex flex-col"
            >
              <p className="text-small text-muted">
                {job.period} &nbsp;&middot;&nbsp; {job.place}
              </p>
              <h3 className="mt-1 text-h3 font-semibold type-semi-expanded text-ink">
                {job.role}
              </h3>
              <p className="text-body font-medium text-route">{job.org}</p>

              <ul className="mt-4 space-y-2">
                {job.points.map((point, j) => (
                  <li key={j} className="relative pl-4 text-body text-ink/85 short:text-small">
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-[0.55em] h-1 w-1 rounded-full bg-rule"
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {job.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-card bg-paper-sunk px-2 py-0.5 text-small text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
