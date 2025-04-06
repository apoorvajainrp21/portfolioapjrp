
import { projectsData } from '@/data/content';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useTheme } from 'next-themes';

const Projects = () => {
  const { theme } = useTheme();
  const githubUrl = "https://github.com/apoorvajainrp21";
  
  return (
    <section 
      id="projects" 
      className="py-24 px-[15px]"
      data-theme={theme}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-5xl font-bold mb-3">Featured Projects</h2>
            <p className="text-foreground/70 text-lg">A curated selection of my web projects.</p>
            
            <div className="mt-8">
              <Button 
                variant="outline" 
                className="group hover:bg-foreground/5"
                onClick={() => window.open(githubUrl, '_blank')}
              >
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
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 border rounded-lg transition-all duration-300 border-foreground/10 hover:border-foreground/20 bg-background"
                  >
                    <div className="md:col-span-1 flex items-center">
                      <div className="aspect-square overflow-hidden rounded-md border border-foreground/10">
                        <img 
                          src={index === 0 ? "/lovable-uploads/3a35a36e-2cdb-4738-84c0-f1105340c719.png" : project.image} 
                          alt={project.title} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-foreground/50 text-sm">2023 • Personal</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <Badge 
                            key={idx}
                            variant="outline" 
                            className="bg-foreground/5 hover:bg-foreground/10 border-foreground/10"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <p className="text-foreground/80 mb-4">
                        {project.description}
                      </p>
                      
                      <a 
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-red-500 hover:text-red-400 mt-auto text-sm font-medium group"
                      >
                        View Project <ExternalLink size={14} className="transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                ))}
                
                <div className="flex justify-center pt-4">
                  <a 
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-foreground flex items-center gap-2 group"
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
