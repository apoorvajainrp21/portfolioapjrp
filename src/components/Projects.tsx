
import { projectsData } from '@/data/content';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

const Projects = () => {
  return (
    <section id="projects" className="bg-black py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-5xl font-bold mb-3 text-white">Featured Projects</h2>
            <p className="text-white/70 text-lg">A curated selection of my web projects.</p>
            
            <div className="mt-8">
              <Button variant="outline" className="group border-white/20 hover:bg-white/5 text-white">
                See all <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <ScrollArea className="h-[700px] pr-4">
              <div className="space-y-8">
                {projectsData.map((project, index) => (
                  <div 
                    key={index} 
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300 bg-black"
                  >
                    <div className="md:col-span-1">
                      <div className="aspect-square overflow-hidden rounded-md border border-white/10">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-white/50 text-sm">2023 • Personal</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
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
                      
                      <p className="text-white/80 mb-4">
                        {project.description}
                      </p>
                      
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-red-500 hover:text-red-400 mt-auto text-sm font-medium group"
                        >
                          View Project <ExternalLink size={14} className="transition-transform group-hover:translate-x-1" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
                
                <div className="flex justify-center pt-4">
                  <a 
                    href="#"
                    className="text-white/60 hover:text-white flex items-center gap-2 group"
                  >
                    See more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
