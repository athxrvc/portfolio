import { FaGithub, FaLinkedin } from "react-icons/fa";

import { siteContent } from "../../data/site";

const Navbar = () => {
  return <nav className="flex items-center justify-between py-6 mb-20">
    <div className="flex items-center flex-shrink-0">

    </div>

    <div className="flex items-center justify-center gap-4 m-8 text-4xl">
      <a href={siteContent.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>

      <a href={siteContent.socialLinks.github} target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>
  </nav>;
};

export default Navbar;