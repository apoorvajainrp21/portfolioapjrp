
import { educationData } from '@/data/content';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="bg-portfolio-lightGray">
      <div className="container-custom">
        <h2 className="section-heading">Education</h2>
        
        <div className="space-y-8">
          {educationData.map((education, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-4">
                  <div className="bg-portfolio-blue/10 p-6 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-portfolio-lightBlue flex items-center justify-center">
                      <GraduationCap size={28} className="text-portfolio-blue" />
                    </div>
                  </div>
                  <div className="p-6 md:col-span-3">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-portfolio-darkBlue">{education.degree}</h3>
                      <span className="text-sm font-medium text-portfolio-blue bg-portfolio-lightBlue/30 px-3 py-1 rounded-full">
                        {education.period}
                      </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center text-portfolio-gray mb-4">
                      <span className="font-medium">{education.institution}</span>
                      <span className="hidden md:block mx-2">•</span>
                      <span>{education.location}</span>
                    </div>
                    <p className="text-portfolio-darkBlue/80">
                      {education.description}
                    </p>
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

export default Education;
