import { siteContent } from "../../data/site";
import Section from "../ui/Section";

const Stack = () => (
  <Section id="stack" index="04" title="Stack">
    <dl className="divide-y divide-line">
      {siteContent.stack.map(({ label, items }) => (
        <div
          key={label}
          className="reveal grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[10rem_1fr] sm:gap-8"
        >
          <dt className="font-mono text-xs text-muted sm:pt-1">{label}</dt>
          <dd className="text-fg/85">{items.join(", ")}</dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default Stack;
