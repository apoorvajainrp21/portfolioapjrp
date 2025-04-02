
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: "Master's in Computer Engineering",
    institution: "California State University, Fullerton",
    location: "Fullerton, CA",
    period: "2023 - Present",
    description: "Focusing on cybersecurity and hardware-software integration with a specialization in Brain-Computer Interfaces."
  },
  {
    degree: "Bachelor of Engineering in Electronics and Communication",
    institution: "Bengaluru, India",
    location: "Bengaluru, India",
    period: "2017 - 2021",
    description: "Focused on embedded systems, digital electronics, and communication protocols with projects in IoT and hardware security."
  }
];

const Education = () => {
  return (
    <section id="education" className="bg-black">
      <div className="container-custom">
        <h2 className="section-heading">Education</h2>
        
        <div className="space-y-8">
          {educationData.map((education, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-white/10 bg-black shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-4">
                  <div className="bg-white/5 p-6 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                      <GraduationCap size={28} className="text-white" />
                    </div>
                  </div>
                  <div className="p-6 md:col-span-3">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{education.degree}</h3>
                      <span className="text-sm font-medium text-white bg-white/10 px-3 py-1 rounded-full">
                        {education.period}
                      </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center text-white/60 mb-4">
                      <span className="font-medium">{education.institution}</span>
                      <span className="hidden md:block mx-2">•</span>
                      <span>{education.location}</span>
                    </div>
                    <p className="text-white/80">
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
