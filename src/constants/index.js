import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const MAIN_CONTENT = `I am a placement year Computer Science student based in London. I am currently working as a Software Engineer at Elanco Animal Health.`;

export const ABOUT_TEXT = [
  "Hi, I'm Atharva, a Computer Science undergraduate at Brunel University London, with a strong interest in backend development, data systems, and cybersecurity. I am currently working as a software engineer at Elanco Animal Health.",
  "My academic journey is driven by curiosity about how secure, scalable, and reliable systems are designed and maintained. Through my studies, I've built a solid foundation in computer science while exploring different specialisations, with a growing focus on backend engineering, data-driven systems, and security principles.",
  "Outside of academics, I enjoy watching football, Formula 1, and playing golf, as well as spending time hiking and travelling. I also keep up with developments in technology and enjoy learning about new tools and trends in the backend and data space."
];

export const EXPERIENCES = [
   {
    year: "June 2025 - Present",
    role: "Software Engineer",
    company: "Elanco Animal Health | Hook, UK",
    description: `Currently working as a Software Engineer at Elanco Animal Health, contributing to the development and maintenance of software solutions that support the company's mission to improve animal health and well-being.\n Engaging in continuous learning and professional development to stay abreast of emerging technologies and best practices in software engineering.`,
    technologies: ["Google Cloud", "Terraform", "Python", "Typescript"],
  },


  {
    year: "July 2024 - October 2024",
    role: "Software Engineering Fellow",
    company: "Headstarter AI | New York, USA",
    description: `Built 5 AI apps and APIs using NextJS, OpenAI, Pinecone and StripeAPI.\n Coached by Amazon, Bloomberg and Capital One engineers on Aglie, CI/CD, Git and microservice patterns.\n Participated in 3 global hackathons, leading a team of 4 engineering fellows.`,
    technologies: ["OpenAI", "NextJS", "Pinecone", "StripeAPI"],
  }
];

export const PROJECTS = [
  {
    title: "Swiftbot: raspberry Pi based robot game",
    image: project1,
    link: "https://github.com/athxrva07/Draw-Shapes",
    description:
      "Developed a game using Swiftbot, a Raspberry Pi robot with wheels, a camera, and lights • Utilized an API provided by the university for integration and functionality enhancement • Implemented functionality to scan and decode QR codes on instruction • Programmed the robot to move and draw either a square or a triangle based on decoded text • Generated a text file containing detailed information about all the shapes drawn",
    technologies: ["Java", "Raspberry Pi", "Motion Control", "File Handling", "API Integration"],
  },
  {
    title: "Currency Converter",
    image: project2,
    link: "https://athxrva07.github.io/Currency-Converter/",
    description:
      "Developed a Currency Converter Website that allows users to convert amounts from one currency to another using real-time exchange rates • Integrated real-time exchange rates API for accurate and up-to-date currency conversions • Designed a simple and user-friendly interface for seamless user experience • Enabled users to convert amounts between different currencies efficiently",
    technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
  },
  {
    title: "Regal Residences Website",
    image: project3,
    link: "https://athxrva07.github.io/Regal-Residences/",
    description:
      "A simple real estate website project to showcase upscale properties in London that I did for a hackathon. ",
    technologies: ["HTML", "CSS", "JavaScript", "Frontend Design"],
  },
];

export const CONTACT = {
  address: "London, United Kingdom ",
  email: "atharvavc04@gmail.com",
};
