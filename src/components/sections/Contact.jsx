import { FaGithub, FaLinkedin } from "react-icons/fa";

import { siteContent } from "../../data/site";

const Contact = () => {
  return (
    <div className="pb-20">
      <h2 className="my-10 text-4xl text-center ">CONTACT</h2>
      <div className="tracking-tighter text-center">
        <p className="my-4">{siteContent.contact.location}</p>
        <a href={`mailto:${siteContent.contact.email}`} className="my-4 border-b">{siteContent.contact.email}</a>
        <a href={siteContent.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 my-4 text-2xl">
          <FaLinkedin />
        </a>

        <a href={siteContent.socialLinks.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-2xl">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Contact;