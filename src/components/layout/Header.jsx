import { siteContent } from "../../data/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Header = () => (
  <header className="sticky top-0 z-10 -mx-6 bg-bg/80 px-6 backdrop-blur-md">
    <div className="flex h-14 items-center justify-between">
      <a href="#top" className="font-mono text-sm transition-colors hover:text-accent">
        {siteContent.hero.name}
      </a>
      <nav aria-label="Primary" className="flex gap-5 font-mono text-xs text-muted">
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="transition-colors hover:text-fg max-sm:[&:nth-child(-n+2)]:hidden"
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;
