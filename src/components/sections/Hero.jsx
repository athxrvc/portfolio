import { siteContent } from "../../data/site";
import CopyCommand from "../ui/CopyCommand";
import LocalTime from "../ui/LocalTime";

const Hero = () => {
  const { name, tagline, introduction, sshCommand, sshHint } = siteContent.hero;

  return (
    <section id="top" className="relative pb-20 pt-20 md:pb-28 md:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-6 top-0 -z-10 h-[32rem] bg-[radial-gradient(28rem_18rem_at_50%_40%,rgb(var(--accent)/0.1),transparent)]"
      />
      <p
        className="rise font-mono text-xs uppercase tracking-[0.2em] text-muted"
        style={{ "--i": 0 }}
      >
        Software engineer <span className="mx-2 text-accent">/</span> <LocalTime />
      </p>

      <h1
        className="rise mt-6 font-serif text-6xl leading-[0.95] tracking-tight sm:text-7xl md:text-8xl"
        style={{ "--i": 1 }}
      >
        {name}
      </h1>

      <p
        className="rise mt-8 max-w-2xl font-serif text-2xl leading-snug text-muted md:text-3xl"
        style={{ "--i": 2 }}
      >
        {tagline}
        <span
          aria-hidden
          className="caret ml-1.5 inline-block h-[0.75em] w-[0.42em] translate-y-[0.06em] bg-accent"
        />
      </p>

      <p
        className="rise mt-8 max-w-xl leading-relaxed text-fg/70"
        style={{ "--i": 3 }}
      >
        {introduction}
      </p>

      <div className="rise mt-10" style={{ "--i": 4 }}>
        <CopyCommand command={sshCommand} hint={sshHint} />
      </div>
    </section>
  );
};

export default Hero;
