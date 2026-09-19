import PropTypes from "prop-types";

const Section = ({ id, index, title, children }) => (
  <section id={id} className="scroll-mt-16 border-t border-line py-16 md:py-24">
    <div className="grid gap-8 md:grid-cols-[9rem_1fr] md:gap-12">
      <h2 className="self-start font-mono text-xs uppercase tracking-[0.2em] text-muted md:sticky md:top-24">
        <span className="text-accent">{index}</span>
        <span className="ml-3">{title}</span>
      </h2>
      <div>{children}</div>
    </div>
  </section>
);

Section.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
