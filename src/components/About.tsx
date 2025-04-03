
import { Badge } from '@/components/ui/badge';
import IconCloud from './IconCloud';

const About = () => {
  const techIcons = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "amazonaws",
    "postgresql",
    "vercel",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma"
  ];

  return (
    <section id="about" className="bg-black">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="section-heading">About Me</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Grad student. Python dev. Cybersecurity rookie. ML tinkerer. I'm Apoorva Jain, stitching hardware grit with software finesse at CSUF. My thesis? Using BCI to smash gaming barriers for the visually impaired.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              When not securing systems or training algorithms, I'm wielding paintbrushes and badminton rackets with equal fervor. Certifications? Just flexing my love for all things cyber. Let's engineer tech that's as human as it is groundbreaking.
            </p>
          </div>
          
          <div>
            <h2 className="section-heading">Technical Skills</h2>
            <IconCloud icons={techIcons} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
