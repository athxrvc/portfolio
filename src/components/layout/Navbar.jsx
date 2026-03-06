import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

const Navbar = () => {
  return <nav className="flex items-center justify-between py-6 mb-20">
    <div className="flex items-center flex-shrink-0">
        
    </div>

    <div className="flex items-center justify-center gap-4 m-8 text-4xl">
        <a href="https://www.linkedin.com/in/atharva-choudhary-1ba373277" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>

        <a href="https://github.com/athxrvc" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
    </div>
  </nav>

};

export default Navbar