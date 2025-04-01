
import { projectsData } from '@/data/content';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="bg-portfolio-lightGray">
      <div className="container-custom">
        <h2 className="section-heading">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-portfolio-darkBlue mb-2">{project.title}</h3>
                <p className="text-portfolio-darkBlue/80 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <Badge 
                      key={idx}
                      variant="secondary" 
                      className="bg-portfolio-blue/10 text-portfolio-blue hover:bg-portfolio-blue/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-portfolio-blue hover:text-portfolio-blue/80 text-sm font-medium"
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
