import { siteContent } from "../../data/site";
import ArrowLink from "../ui/ArrowLink";
import Section from "../ui/Section";

const Projects = () => {
  const { featured, earlier } = siteContent.projects;

  return (
    <Section id="projects" index="03" title="Projects">
      <ul className="divide-y divide-line">
        {featured.map((project, i) => (
          <li key={project.id} className="reveal group py-10 first:pt-0">
            <div className="flex items-baseline justify-between gap-4 font-mono text-xs text-muted">
              <span>{String(i + 1).padStart(2, "0")}</span>
              <span>
                {project.badge && (
                  <span className="mr-3 text-accent">{project.badge}</span>
                )}
                {project.year}
              </span>
            </div>

            <h3 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
              <ArrowLink href={project.link}>{project.title}</ArrowLink>
            </h3>
            <p className="mt-1 text-lg text-muted">{project.tagline}</p>

            <p className="mt-5 max-w-xl leading-relaxed text-fg/75">
              {project.description}
            </p>

            <p className="mt-5 font-mono text-xs text-muted">
              {project.technologies.join("  ·  ")}
            </p>
          </li>
        ))}
      </ul>

      <div className="reveal mt-6 border-t border-line pt-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Earlier &amp; smaller
        </p>

        <ul className="mt-2 divide-y divide-line">
          {earlier.map((project) => (
            <li
              key={project.id}
              className="grid gap-x-6 gap-y-1 py-4 sm:grid-cols-[12rem_1fr_auto] sm:items-baseline"
            >
              <span className="font-medium">
                <ArrowLink href={project.link}>{project.title}</ArrowLink>
              </span>
              <span className="text-sm leading-relaxed text-muted">
                {project.description}
                {project.live && (
                  <>
                    {" "}
                    <ArrowLink href={project.live} className="text-fg/80">
                      live
                    </ArrowLink>
                  </>
                )}
              </span>
              <span className="font-mono text-xs text-muted">{project.year}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Projects;
