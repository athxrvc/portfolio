const socialLinks = {
  github: "https://github.com/athxrvc",
  linkedin: "https://www.linkedin.com/in/atharva-choudhary-1ba373277",
};

export const siteContent = {
  hero: {
    name: "Atharva Choudhary",
    tagline: "Software engineer, drawn to the parts of a system you don't see.",
    introduction:
      "Computer Science student at Brunel University London. I recently finished a placement year at Elanco Animal Health, building cloud video pipelines on GCP.",
    sshCommand: "ssh ssh.athxrvc.co.uk",
    sshHint: "this site, but in your terminal",
  },
  about: {
    paragraphs: [
      "I'm a Computer Science student at Brunel University of London, most interested in backend engineering, cloud infrastructure and data systems. I like knowing how the pieces fit together behind the screen, and the best way I've found to learn that is to build things.",
      "My placement year at Elanco was on the R&D Vision Platform, working on GCP video-processing pipelines for large-scale computer vision. It's where “it works” became “it keeps working as the data and the users grow”, and I've been chasing that second part ever since.",
    ],
    elsewhereLabel: "Away from the keyboard",
    elsewhere: [
      "Football",
      "Formula 1",
      "Golf",
      "Hiking",
      "Travel",
      "Financial markets",
      "Fashion",
      "DJing",
      "Learning Japanese",
      "Building PCs",
    ],
  },
  experience: [
    {
      id: "elanco-software-engineer",
      period: "Jun 2025 – Jul 2026",
      role: "Software Engineer",
      company: "Elanco Animal Health",
      location: "Hook, UK",
      highlights: [
        "Architected and maintained GCP video-processing pipelines for large-scale computer vision workflows.",
        "Automated manual video-analysis workflows, cutting time-to-insight and human error.",
        "Built backend services and UI features for video lifecycle management and metadata orchestration.",
        "Contributed to system design decisions on scalability, performance and reliability.",
      ],
      technologies: ["Google Cloud", "Terraform", "Python", "TypeScript"],
    },
    {
      id: "headstarter-software-fellow",
      period: "Jul 2024 – Oct 2024",
      role: "Software Engineering Fellow",
      company: "Headstarter AI",
      location: "New York, USA",
      highlights: [
        "Built 5 AI apps and APIs with Next.js, OpenAI, Pinecone and the Stripe API.",
        "Coached by engineers from Amazon, Bloomberg and Capital One on Agile, CI/CD, Git and microservice patterns.",
        "Led a team of 4 fellows across 3 global hackathons.",
      ],
      technologies: ["Next.js", "OpenAI", "Pinecone", "Stripe API"],
    },
  ],
  projects: {
    featured: [
      {
        id: "portfolio-terminal",
        year: "2026",
        title: "portfolio-terminal",
        tagline: "A portfolio you connect to over SSH",
        description:
          "Run ssh ssh.athxrvc.co.uk and you get a keyboard-driven Textual app instead of a web page. Each connection gets its own sandboxed pseudo-terminal behind an AsyncSSH server, with no shell, exec or file transfer exposed. Content lives in TOML files, and it runs on a VPS under systemd.",
        link: "https://github.com/athxrvc/portfolio-terminal",
        technologies: ["Python", "AsyncSSH", "Textual", "TOML"],
      },
      {
        id: "openclaw-discord",
        year: "2026",
        title: "openclaw-discord",
        tagline: "A Discord assistant with long-term memory",
        description:
          "A self-hosted bot that answers in enabled channels using Google AI Studio, OpenAI or Anthropic models. Recent messages give it short-term context, and older conversation is summarised into long-term memory in PostgreSQL (Cloud SQL, provisioned with Terraform). Channels have their own modes, and admins toggle the AI per channel.",
        link: "https://github.com/athxrvc/openclaw-discord",
        technologies: ["Python", "PostgreSQL", "Prisma", "Terraform", "GCP"],
      },
      {
        id: "local-llm-api-gateway",
        year: "2026",
        title: "Local-LLM-API-Gateway",
        tagline: "Local models behind an OpenAI-compatible API",
        description:
          "A self-hosted gateway that lets any OpenAI-style client talk to models running locally: client to LiteLLM to Ollama. Data stays on your machine by default, and an optional Cloudflare Tunnel publishes the endpoint when you want it reachable.",
        link: "https://github.com/athxrvc/Local-LLM-API-Gateway",
        technologies: ["Ollama", "LiteLLM", "Cloudflare Tunnel"],
      },
    ],
    earlier: [
      {
        id: "readme-gen",
        year: "2026",
        title: "readme-gen",
        description: "AI-powered README generation as a VS Code extension.",
        link: "https://github.com/athxrvc/readme-gen",
      },
      {
        id: "geosearch",
        year: "2024",
        title: "GeoSearch",
        description: "Look up any country and export what you find as a PDF.",
        link: "https://github.com/athxrvc/GeoSearch",
        live: "https://geo-search-six.vercel.app",
      },
      {
        id: "currency-converter",
        year: "2024",
        title: "Currency Converter",
        description: "Convert between currencies using live exchange rates.",
        link: "https://github.com/athxrvc/Currency-Converter",
        live: "https://athxrva07.github.io/Currency-Converter/",
      },
      {
        id: "swiftbot",
        year: "2024",
        title: "SwiftBot",
        description:
          "Java on a Raspberry Pi robot that scans QR codes and draws the shape they name.",
        link: "https://github.com/athxrvc/Draw-Shapes",
      },
    ],
  },
  stack: [
    { label: "Languages", items: ["Python", "Java", "TypeScript", "JavaScript"] },
    { label: "Cloud & infra", items: ["Google Cloud", "Terraform", "Linux"] },
    {
      label: "Backend & data",
      items: ["Node.js", "Express", "PostgreSQL", "MySQL", "MongoDB"],
    },
    { label: "Web", items: ["React", "Next.js", "Tailwind CSS"] },
    { label: "AI tooling", items: ["Ollama", "LiteLLM", "OpenAI API", "Pinecone"] },
  ],
  contact: {
    heading: "Say hello.",
    location: "London, United Kingdom",
    email: "atharvavc04@gmail.com",
  },
  socialLinks,
};
