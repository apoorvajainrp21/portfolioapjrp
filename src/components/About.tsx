
import { Badge } from '@/components/ui/badge';

type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const About = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming",
      icon: <CodeIcon />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "PHP"]
    },
    {
      title: "Frontend",
      icon: <LayoutIcon />,
      skills: ["React", "Vue", "Angular", "Next.js", "TailwindCSS", "CSS/SASS"]
    },
    {
      title: "Backend",
      icon: <ServerIcon />,
      skills: ["Node.js", "Express", "Django", "Flask", "Laravel", "GraphQL"]
    },
    {
      title: "Cloud & DevOps",
      icon: <CloudIcon />,
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "GCP"]
    },
    {
      title: "Data Science",
      icon: <DatabaseIcon />,
      skills: ["SQL", "NoSQL", "MongoDB", "PostgreSQL", "Redis", "Data Visualization"]
    }
  ];

  return (
    <section id="about" className="bg-black">
      <div className="container-custom">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              I'm a passionate software engineer and designer with over 5 years of experience building exceptional digital experiences. I specialize in creating clean, innovative solutions that solve real-world problems.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              My approach combines technical expertise with creative problem-solving. I enjoy working on challenging projects that push me to expand my skillset and explore new technologies.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Technical Skills</h3>
            
            <div className="space-y-8">
              {skillCategories.map((category, index) => (
                <div key={index} className="border border-white/10 rounded-lg p-6 bg-black">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                      {category.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-white">{category.title}</h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge 
                        key={idx}
                        variant="outline" 
                        className="bg-white/5 hover:bg-white/10 text-white border-white/10"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple icon components
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const LayoutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="9" y1="21" x2="9" y2="9"></line>
  </svg>
);

const ServerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
  </svg>
);

const CloudIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
  </svg>
);

const DatabaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

export default About;
