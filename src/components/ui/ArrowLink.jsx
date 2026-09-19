import PropTypes from "prop-types";

const ArrowLink = ({ href, children, className = "" }) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel="noopener noreferrer"
    className={`group/link inline-flex items-baseline gap-1 transition-colors hover:text-accent ${className}`}
  >
    <span className="border-b border-line transition-colors group-hover/link:border-accent">
      {children}
    </span>
    <span
      aria-hidden
      className="text-muted transition-all group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-accent"
    >
      ↗
    </span>
  </a>
);

ArrowLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ArrowLink;
