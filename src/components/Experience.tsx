
import { experienceData } from '@/data/content';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="bg-black">
      <div className="container-custom">
        <h2 className="section-heading">Experience</h2>
        
        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-white/10 bg-black shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-4">
                  <div className="bg-white/5 p-6 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                      <Briefcase size={28} className="text-white" />
                    </div>
                  </div>
                  <div className="p-6 md:col-span-3">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                      <Badge variant="outline" className="text-sm font-medium text-white border-white/20">
                        {experience.period}
                      </Badge>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center text-white/60 mb-4">
                      <span className="font-medium">{experience.company}</span>
                      <span className="hidden md:block mx-2">•</span>
                      <span>{experience.location}</span>
                    </div>
                    <ul className="space-y-2 mt-4">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 size={18} className="text-white mt-0.5 flex-shrink-0" />
                          <span className="text-white/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
