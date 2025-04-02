
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const experienceData = [
  {
    title: "Instructional Student Assistant",
    company: "Cal State Fullerton",
    location: "Fullerton, CA",
    period: "Sep 2024 - Present",
    description: [
      "Delivered hands-on instruction for cyber-physical system security, Verilog, digital circuit design, and Multisim simulations.",
      "Mentored students in labs, troubleshoot digital electronics projects, and grade assignments with actionable feedback.",
      "Fostered practical mastery of hardware-software integration in security-focused environments."
    ]
  },
  {
    title: "Programmer Analyst",
    company: "Cognizant Technology Solutions",
    location: "Bengaluru, India",
    period: "Nov 2021 - Jul 2023",
    description: [
      "Engineered front-end web apps using React.js, HTML5, JavaScript, ensuring secure code practices and adherence to QA standards.",
      "Collaborated cross-functionally via JIRA and Figma for seamless design-to-development workflows.",
      "Bolstered cybersecurity initiatives as part of the phishing awareness team, hardening app vulnerabilities."
    ]
  },
  {
    title: "ML/AI Intern",
    company: "Pyze Inc.",
    location: "Bengaluru, India",
    period: "Jun 2020 - Nov 2020",
    description: [
      "Optimized machine learning models (Python) through data preprocessing, feature engineering, and hyperparameter tuning, boosting precision by 15%.",
      "Partnered with engineers to deploy scalable AI solutions, enhancing user experience via predictive analytics.",
      "Conducted rigorous A/B testing to validate model performance across real-world datasets."
    ]
  },
  {
    title: "Embedded Systems Intern",
    company: "U.N.I.Q Technologies",
    location: "Bengaluru, India",
    period: "Jan 2020 - Mar 2020",
    description: [
      "Developed firmware for embedded systems, refining device communication protocols (C/C++) to reduce latency by 20%.",
      "Debugged hardware-software interactions and streamlined firmware efficiency for industrial IoT devices.",
      "Gained end-to-end exposure to embedded system design, from prototyping to deployment."
    ]
  }
];

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
