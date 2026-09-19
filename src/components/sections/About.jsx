import { siteContent } from "../../data/site";
import Section from "../ui/Section";

const About = () => {
  const { paragraphs, elsewhereLabel, elsewhere } = siteContent.about;

  return (
    <Section id="about" index="01" title="About">
      <div className="max-w-xl space-y-5 text-lg leading-relaxed">
        {paragraphs.map((paragraph, i) => (
          <p key={paragraph} className={i === 0 ? "text-fg" : "text-fg/70"}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className="reveal mt-12 max-w-xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {elsewhereLabel}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {elsewhere.map((item) => (
            <li
              key={item}
              className="rounded-full border border-line px-3 py-1 text-sm text-fg/80"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default About;
