
import { IconCloudDemo } from './ui/icon-cloud-demo';

const About = () => {
  return (
    <section id="about" className="py-8">
      <div className="container-custom mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="max-w-xl px-[25px]">
            <h2 className="section-heading">About Me</h2>
            
            <img 
              src="/lovable-uploads/5fb2b019-da1a-4439-9f50-69770169de8c.png" 
              alt="Apoorva Jain" 
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            
            <p className="text-foreground/80 text-lg leading-relaxed mb-4 text-justify">
              Grad student. Python dev. Cybersecurity Enthusiast. ML tinkerer. I'm Apoorva Jain, stitching hardware grit with software finesse at CSUF. My thesis? Using BCI to smash gaming barriers for the visually impaired.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed text-justify">
              When not securing systems or training algorithms, I'm wielding paintbrushes and badminton rackets with equal fervor. Certifications? Just flexing my love for all things cyber. Let's engineer tech that's as human as it is groundbreaking.
            </p>
          </div>
          
          <div>
            <h2 className="section-heading text-2xl md:text-4xl">Technical Skills</h2>
            <div className="scale-85 -mt-6">
              <IconCloudDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
