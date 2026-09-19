import { siteContent } from "../../data/site";
import Section from "../ui/Section";

const Experience = () => (
  <Section id="experience" index="02" title="Experience">
    <ol className="divide-y divide-line">
      {siteContent.experience.map((job) => (
        <li
          key={job.id}
          className="reveal grid gap-3 py-10 first:pt-0 last:pb-0 sm:grid-cols-[9rem_1fr] sm:gap-8"
        >
          <p className="pt-2 font-mono text-xs text-muted">{job.period}</p>

          <div>
            <h3 className="font-serif text-3xl leading-tight">{job.role}</h3>
            <p className="mt-1 text-muted">
              {job.company} <span className="text-line">/</span> {job.location}
            </p>

            <ul className="mt-5 max-w-xl space-y-2.5 leading-relaxed text-fg/75">
              {job.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 font-mono text-xs text-muted">
              {job.technologies.join("  ·  ")}
            </p>
          </div>
        </li>
      ))}
    </ol>
  </Section>
);

export default Experience;
