
type Education = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
};

type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
};

export const heroData = {
  name: "Jane Doe",
  title: "Software Engineer",
  description: "I build exceptional and accessible digital experiences for the web."
};

export const educationData: Education[] = [
  {
    degree: "Master of Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    period: "2019 - 2021",
    description: "Specialized in Artificial Intelligence and Machine Learning with a focus on Natural Language Processing."
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of California",
    location: "Berkeley, CA",
    period: "2015 - 2019",
    description: "Graduated with honors. Coursework included Data Structures, Algorithms, Software Engineering, and Database Systems."
  }
];

export const experienceData: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovations",
    location: "San Francisco, CA",
    period: "2021 - Present",
    description: [
      "Lead a team of 5 engineers developing a cloud-based SaaS platform",
      "Implemented CI/CD pipelines reducing deployment time by 50%",
      "Architected and developed RESTful APIs serving over 100k requests daily",
      "Improved application performance by 30% through code optimization"
    ]
  },
  {
    title: "Software Engineer",
    company: "DataDrive Solutions",
    location: "San Jose, CA",
    period: "2019 - 2021",
    description: [
      "Developed and maintained front-end applications using React and TypeScript",
      "Collaborated with UX designers to implement responsive UI components",
      "Created automated testing suites with Jest and React Testing Library",
      "Participated in agile development processes and code reviews"
    ]
  },
  {
    title: "Web Developer Intern",
    company: "Creative Web Studios",
    location: "Los Angeles, CA",
    period: "Summer 2018",
    description: [
      "Built responsive websites for small businesses using modern web technologies",
      "Optimized website performance and SEO",
      "Collaborated with designers to implement pixel-perfect designs"
    ]
  }
];

export const projectsData: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with payment processing, user authentication, and inventory management.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2064&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered application that generates content based on user prompts using natural language processing.",
    technologies: ["Python", "TensorFlow", "Flask", "React"],
    image: "https://images.unsplash.com/photo-1677442135133-3c94865e67a9?q=80&w=2232&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Fitness Tracking App",
    description: "A mobile application that tracks workouts, nutrition, and provides personalized fitness recommendations.",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
    image: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?q=80&w=2043&auto=format&fit=crop",
    link: "#"
  }
];

export const contactData = {
  email: "jane.doe@example.com",
  phone: "+1 (123) 456-7890",
  location: "San Francisco, CA",
  socialLinks: {
    linkedin: "https://linkedin.com/in/janedoe",
    github: "https://github.com/janedoe",
    twitter: "https://twitter.com/janedoe"
  }
};
