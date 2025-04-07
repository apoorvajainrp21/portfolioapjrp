
import { Timeline } from './ui/timeline';

const Experience = () => {
  const experienceData = [
    {
      title: "Instructional Student Assistant",
      content: (
        <div className="bg-background border border-foreground/10 rounded-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <img 
              src="/lovable-uploads/83be6319-21f6-4c92-a9f6-3fed671b22b6.png" 
              alt="CSUF Logo" 
              className="w-10 h-10 object-contain"
            />
            <div>
              <h3 className="text-xl font-bold">California State University, Fullerton</h3>
              <p className="text-foreground/70">Sep 2024 - Present</p>
            </div>
          </div>
          <p className="text-foreground/80 mb-3">
            As an Instructional Student Assistant at California State University, Fullerton, I supported the delivery of courses in Cyber-Physical Systems Security, Digital Circuit Design, Artificial Intelligence, and Front-End Development. I also assisted students with complex concepts, provided guidance on lab assignments, and graded coursework to ensure students gained industry-relevant skills.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">Cyber-Physical Systems Security</span>
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">Verilog</span>
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">NI Multisim</span>
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">React.js</span>
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">Web Application Development</span>
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">Artificial Intelligence (AI)</span>
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">Machine Learning</span>
          </div>
        </div>
      )
    },
    {
      title: "Programming Analyst",
      content: (
        <div className="bg-background border border-foreground/10 rounded-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <img 
              src="/lovable-uploads/d3ed163c-d64b-42e2-9d64-c4b2e079d331.png" 
              alt="Cognizant Logo" 
              className="w-10 h-10 object-contain"
            />
            <div>
              <h3 className="text-xl font-bold">Cognizant</h3>
              <p className="text-foreground/70">Nov 2021 - Jul 2023 · Bengaluru, Karnataka, India</p>
            </div>
          </div>
          <p className="text-foreground/80 mb-3">
            In my role as a Programming Analyst at Cognizant, I developed and optimized front-end applications using HTML, CSS, JavaScript, and React to create responsive and user-friendly interfaces. I implemented secure coding practices to mitigate vulnerabilities and collaborated with cross-functional teams to design and integrate secure authentication mechanisms using OAuth and JWT.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">React.js</span>
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">Java</span>
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">Web Application Development</span>
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">Usability Testing</span>
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">JavaScript</span>
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">Agile Project Management</span>
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">Kubernetes</span>
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">Docker Products</span>
          </div>
        </div>
      )
    },
    {
      title: "AI/ML Intern",
      content: (
        <div className="bg-background border border-foreground/10 rounded-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <img 
              src="/lovable-uploads/6bdb0dcd-e1c0-4d22-b16d-129de864fb8e.png" 
              alt="Pyze Logo" 
              className="w-10 h-10 object-contain"
            />
            <div>
              <h3 className="text-xl font-bold">Pyze</h3>
              <p className="text-foreground/70">Jun 2020 - Nov 2020 · Bengaluru, Karnataka, India</p>
            </div>
          </div>
          <p className="text-foreground/80 mb-3">
            As an AI/ML intern at Pyze Inc., I collaborated with the engineering team to deploy AI solutions and improve model performance through continuous testing and validation. My work involved data preprocessing, feature engineering, and model tuning to achieve higher precision and recall. I actively contributed to optimizing algorithms for better user experience.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">Python (Programming Language)</span>
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">Artificial Intelligence (AI)</span>
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">Problem Solving</span>
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">Information Technology</span>
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">Large Language Models (LLM)</span>
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">Natural Language Processing (NLP)</span>
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">Functional Testing</span>
          </div>
        </div>
      )
    },
    {
      title: "Embedded Systems Intern",
      content: (
        <div className="bg-background border border-foreground/10 rounded-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <img 
              src="/lovable-uploads/3553f5ca-d103-4138-b041-73dad2869949.png" 
              alt="Uniq Technologies Logo" 
              className="w-10 h-10 object-contain"
            />
            <div>
              <h3 className="text-xl font-bold">Uniq Technologies</h3>
              <p className="text-foreground/70">Jan 2020 - Mar 2020 · Bengaluru, Karnataka, India</p>
            </div>
          </div>
          <p className="text-foreground/80 mb-3">
            During my internship at U.N.I.Q Technologies, I focused on developing and optimizing embedded systems for various industrial applications. I collaborated with the engineering team to enhance device communication protocols, improve firmware efficiency, and troubleshoot hardware issues, gaining hands-on experience in the full development cycle of embedded systems.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">Embedded Systems</span>
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">C++</span>
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">Communication</span>
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">Problem Solving</span>
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">Information Technology</span>
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">Computer Hardware Troubleshooting</span>
            <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full">Firmware</span>
          </div>
        </div>
      )
    }
  ];
  
  return (
    <section id="experience" className="py-8 px-[4px] md:px-[15px]">
      <div className="container-custom">
        <Timeline data={experienceData} />
      </div>
    </section>
  );
};

export default Experience;
