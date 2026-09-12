import Image from "next/image";
import { bio, skills, education } from "@/data/content";
import { AxisHeading, Reveal, Stagger, StaggerItem } from "@/components/motion";

/**
 * Laid out to fit one viewport: the bio, the portrait and the education sit
 * side by side, with the skill groups spread across the foot of the panel.
 * Below md it collapses to a single column and scrolls with the page.
 */
const About = () => {
  return (
    <div className="w-full px-6 py-5 short:py-3 sm:px-10 max-md:border-t max-md:border-rule max-md:py-20">
      <div className="mx-auto w-full max-w-[1700px]">
        <AxisHeading className="section-head" from={108}>
          About
        </AxisHeading>

        <div className="mt-4 grid gap-6 md:mt-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Stagger stagger={0.08}>
              {bio.map((para, i) => (
                <StaggerItem key={i}>
                  <p className="mb-2 text-body text-ink/85 short:text-small">{para}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal className="md:col-span-3" delay={0.1}>
            <Image
              src="/profile.png"
              alt=""
              width={468}
              height={513}
              sizes="(min-width: 768px) 22vw, 40vw"
              className="w-40 rounded-card border border-rule object-cover md:w-full"
            />
          </Reveal>

          <Reveal className="md:col-span-4" delay={0.15}>
            <dl>
              {education.map((ed) => (
                <div key={ed.school} className="mb-4 last:mb-0">
                  <dt className="text-h3 font-semibold type-semi-expanded text-ink">
                    {ed.credential}
                  </dt>
                  <dd className="mt-1 text-body text-ink/70">
                    {ed.school}. {ed.when}.
                  </dd>
                  <dd className="mt-1 text-small text-muted">{ed.detail}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Stagger
          className="mt-6 grid gap-4 border-t border-rule pt-4 short:mt-4 short:gap-3 short:pt-3 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.07}
        >
          {skills.map((block) => (
            <StaggerItem key={block.group}>
              <h3 className="mb-2 text-body font-semibold text-ink">{block.group}</h3>
              <ul className="flex flex-wrap gap-1.5">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-card border border-rule px-2 py-0.5 text-small text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </div>
  );
};

export default About;
