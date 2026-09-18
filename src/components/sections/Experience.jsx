"use client";

import { motion } from "framer-motion";

import { siteContent } from "../../data/site";

const Experience = () => {
  return (
    <div className="pb-16 border-b border-neutral-900">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-4xl text-center"
      >
        EXPERIENCE
      </motion.h2>

      <div>
        {siteContent.experience.map((experience) => (
          <div
            key={experience.id} className="flex flex-wrap mb-8 lg:justify-center">

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-100">{experience.period}</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} - {" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <div className="mb-4 text-neutral-400">
                {experience.highlights.map((highlight) => (
                  <p key={highlight}>{highlight}</p>
                ))}
              </div>
              {experience.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="px-2 py-1 mt-4 mr-2 text-sm font-medium rounded text-cyan-400 bg-neutral-900">{tech}</span>
              ))}
            </motion.div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;