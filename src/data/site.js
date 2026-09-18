import project1 from "../assets/images/projects/project-1.png";
import project2 from "../assets/images/projects/project-2.png";
import project3 from "../assets/images/projects/project-3.png";

const socialLinks = {
  github: "https://github.com/athxrvc",
  linkedin: "https://www.linkedin.com/in/atharva-choudhary-1ba373277",
};

export const siteContent = {
  hero: {
    name: "Atharva",
    role: "CS Student",
    introduction:
      "I am a Computer Science student based in London. I recently completed my placement year as a Software Engineer at Elanco Animal Health.",
  },
  about: {
    paragraphs: [
      "Hi!",
      "I'm Atharva, a Computer Science student at Brunel University of London. I'm particularly interested in backend engineering, cloud infrastructure and data systems, and enjoy understanding how the different pieces of a system come together behind the scenes.",
      "I recently completed my placement year at Elanco Animal Health, where I worked as a Software Engineer on the R&D Vision Platform. I worked on cloud-based video processing pipelines using GCP for large-scale computer vision workflows, as well as backend services, video lifecycle management and metadata orchestration. The experience gave me a much stronger interest in cloud infrastructure and building systems that can scale reliably as the amount of data and users grows.",
      "Alongside university, I enjoy working on personal projects and experimenting with technologies outside of my coursework. I'm particularly interested in learning by building things, whether that's software, cloud infrastructure or even putting together a PC from scratch.",
      "Outside of a rectangle screen, I spend a lot of my time following football and Formula 1, playing golf, hiking and travelling. I'm also interested in financial markets and fashion, and recently started learning Japanese. More recently, I've been experimenting with DJing and music, which has been a fun change from spending most of my time behind a computer.",
    ],
  },
  experience: [
    {
      id: "elanco-software-engineer",
      period: "June 2025 - July 2026",
      role: "Software Engineer",
      company: "Elanco Animal Health | Hook, UK",
      highlights: [
        "Architected and maintained cloud-based video processing pipelines (GCP) for large-scale computer vision workflows.",
        "Automated previously manual workflows, reducing time-to-insight and human error in video analysis.",
        "Contributing to system design decisions improving scalability, performance, and reliability.",
        "Developed backend services and UI features for video lifecycle management and metadata orchestration.",
      ],
      technologies: ["Google Cloud", "Terraform", "Python", "Typescript"],
    },
    {
      id: "headstarter-software-fellow",
      period: "July 2024 - October 2024",
      role: "Software Engineering Fellow",
      company: "Headstarter AI | New York, USA",
      highlights: [
        "Built 5 AI apps and APIs using NextJS, OpenAI, Pinecone and StripeAPI.",
        "Coached by Amazon, Bloomberg and Capital One engineers on Aglie, CI/CD, Git and microservice patterns.",
        "Participated in 3 global hackathons, leading a team of 4 engineering fellows.",
      ],
      technologies: ["OpenAI", "NextJS", "Pinecone", "StripeAPI"],
    },
  ],
  projects: [
    {
      id: "swiftbot",
      title: "Swiftbot: raspberry Pi based robot game",
      image: project1,
      link: "https://github.com/athxrva07/Draw-Shapes",
      description: [
        "Developed a game using Swiftbot, a Raspberry Pi robot with wheels, a camera, and lights",
        "Utilized an API provided by the university for integration and functionality enhancement",
        "Implemented functionality to scan and decode QR codes on instruction",
        "Programmed the robot to move and draw either a square or a triangle based on decoded text",
        "Generated a text file containing detailed information about all the shapes drawn",
      ],
      technologies: ["Java", "Raspberry Pi", "Motion Control", "File Handling", "API Integration"],
    },
    {
      id: "currency-converter",
      title: "Currency Converter",
      image: project2,
      link: "https://athxrva07.github.io/Currency-Converter/",
      description: [
        "Developed a Currency Converter Website that allows users to convert amounts from one currency to another using real-time exchange rates",
        "Integrated real-time exchange rates API for accurate and up-to-date currency conversions",
        "Designed a simple and user-friendly interface for seamless user experience",
        "Enabled users to convert amounts between different currencies efficiently",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
    },
    {
      id: "regal-residences",
      title: "Regal Residences Website",
      image: project3,
      link: "https://athxrva07.github.io/Regal-Residences/",
      description: [
        "A simple real estate website project to showcase upscale properties in London that I did for a hackathon.",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Frontend Design"],
    },
  ],
  contact: {
    location: "London, United Kingdom",
    email: "atharvavc04@gmail.com",
  },
  socialLinks,
};