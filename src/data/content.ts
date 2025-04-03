
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
    title: "Thesis: Gaming Accessibility for Visually Impaired",
    description: "Developed an accessible gaming system for visually impaired users, integrating audio cues, haptic feedback, and EEG-based controls. The project focuses on enhancing user experience through multi-sensory interactions, enabling intuitive gameplay without visual reliance.",
    technologies: ["Unity (C#)", "Nautilus EEG", "Speech Recognition", "Haptic Feedback", "Spatial Audio"],
    image: "https://images.unsplash.com/photo-1616588589676-62b3bd4108f6?q=80&w=2064&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Network Intrusion Detection with XAI",
    description: "Designed an AI-driven intrusion detection system (IDS) that identifies cyber threats while providing transparent explanations for decisions. Integrated machine learning models to detect anomalies and improve network security.",
    technologies: ["Python", "Scikit-Learn", "TensorFlow", "Wireshark", "SHAP"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2234&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "E-Commerce Online Bookstore",
    description: "Built a full-stack online bookstore with user authentication, shopping cart functionality, and real-time order tracking. Implemented a seamless and responsive UI to enhance the shopping experience.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux"],
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=2348&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "File Encryption using SHA-256 & Hashing",
    description: "Developed a secure encryption system leveraging SHA-256 hashing for data protection. Implemented file integrity verification and key-based encryption to prevent unauthorized access.",
    technologies: ["Python", "Cryptography Library", "Flask"],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2370&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Heart Disease Prediction",
    description: "Created a predictive model using machine learning algorithms to assess heart disease risk based on patient health parameters. Integrated a web interface for easy user interaction and data input.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "Matplotlib", "Flask"],
    image: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?q=80&w=2370&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Handwritten Digit Recognition",
    description: "Developed an AI model capable of recognizing handwritten digits with high accuracy. Used deep learning techniques, particularly CNNs, for feature extraction and classification.",
    technologies: ["Python", "TensorFlow (Keras)", "OpenCV", "CNN"],
    image: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?q=80&w=2370&auto=format&fit=crop",
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
