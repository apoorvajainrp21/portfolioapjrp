
import { Card, CardContent } from '@/components/ui/card';

const educationData = [
  {
    degree: "Master's in Computer Engineering",
    institution: "California State University, Fullerton",
    location: "Fullerton, CA",
    period: "2023 - Present",
    description: "Focusing on cybersecurity and hardware-software integration with a specialization in Brain-Computer Interfaces.",
    logo: "/lovable-uploads/e8b93bf3-75a1-424b-ba10-293444790da2.png"
  },
  {
    degree: "Bachelor of Engineering in Electronics and Communication",
    institution: "RNS Institute of Technology",
    location: "Bengaluru, India",
    period: "2017 - 2021",
    description: "Focused on embedded systems, digital electronics, and communication protocols with projects in IoT and hardware security.",
    logo: "/lovable-uploads/1d9b4658-6993-45f8-9679-663f8948c603.png"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-12 px-[15px]">
      <div className="container-custom">
        <h2 className="section-heading">Education</h2>
        
        <div className="space-y-6">
          {educationData.map((education, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-foreground/10 bg-background/5 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-4">
                  <div className="bg-foreground/5 p-6 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-foreground/10 flex items-center justify-center overflow-hidden">
                      <img 
                        src={education.logo} 
                        alt={education.institution}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="p-6 md:col-span-3">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold">{education.degree}</h3>
                      <span className="text-sm font-medium bg-foreground/10 px-3 py-1 rounded-full">
                        {education.period}
                      </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center text-foreground/60 mb-4">
                      <span className="font-medium">{education.institution}</span>
                      <span className="hidden md:block mx-2">•</span>
                      <span>{education.location}</span>
                    </div>
                    <p className="text-foreground/80">
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
