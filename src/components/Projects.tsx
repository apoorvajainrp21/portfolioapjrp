
import { projectsData } from '@/data/content';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  return (
    <section id="projects" className="bg-black py-24">
      <div className="container-custom">
        <div className="mb-6">
          <h2 className="text-5xl font-bold mb-3">Featured Projects</h2>
          <p className="text-white/70 text-lg">A curated selection of my web projects.</p>
        </div>
        
        <div className="flex justify-start mb-12">
          <Button variant="outline" className="group border-white/20 hover:bg-white/5">
            See all <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
          </Button>
        </div>
        
        <div className="space-y-8">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300"
            >
              <div className="overflow-hidden rounded-md border border-white/10">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white/50 text-sm">2023 • Personal</span>
                  </div>
                  
                  <h3 className="text-4xl font-bold mb-3">{project.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx}
                        variant="outline" 
                        className="bg-white/5 hover:bg-white/10 text-white border-white/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <p className="text-white/80 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-white hover:text-white/80 mt-auto text-sm font-medium group"
                  >
                    View Project <ExternalLink size={14} className="transition-transform group-hover:translate-x-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-end mt-12">
          <Button variant="outline" className="group border-white/20 hover:bg-white/5">
            See all <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
