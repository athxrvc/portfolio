import { siteContent } from "../../data/site";
import ArrowLink from "../ui/ArrowLink";
import Section from "../ui/Section";

const Contact = () => {
  const { heading, location, email } = siteContent.contact;
  const { github, linkedin } = siteContent.socialLinks;

  return (
    <Section id="contact" index="05" title="Contact">
      <p className="font-serif text-5xl leading-none md:text-7xl">{heading}</p>

      <a
        href={`mailto:${email}`}
        className="mt-8 inline-block break-all text-xl text-fg transition-colors hover:text-accent md:text-2xl"
      >
        {email}
      </a>

      <p className="mt-6 text-muted">{location}</p>

      <div className="mt-8 flex gap-6 text-sm">
        <ArrowLink href={github}>GitHub</ArrowLink>
        <ArrowLink href={linkedin}>LinkedIn</ArrowLink>
      </div>
    </Section>
  );
};

export default Contact;
