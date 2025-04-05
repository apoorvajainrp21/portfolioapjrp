
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function TimelineDemo() {
  const data = [
    {
      title: "Instructional Student Assistant",
      content: (
        <div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <h4 className="text-xl font-bold text-white">Cal State Fullerton</h4>
            <Badge variant="outline" className="text-sm font-medium text-white border-white/20 mt-2 md:mt-0">
              Sep 2024 - Present
            </Badge>
          </div>
          <div className="text-white/60 mb-4">
            <span>Fullerton, CA</span>
          </div>
          <ul className="space-y-2 mt-4">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={18} className="text-white mt-0.5 flex-shrink-0" />
              <span className="text-white/80">Delivered hands-on instruction for cyber-physical system security, Verilog, digital circuit design, and Multisim simulations.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={18} className="text-white mt-0.5 flex-shrink-0" />
              <span className="text-white/80">Mentored students in labs, troubleshoot digital electronics projects, and grade assignments with actionable feedback.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={18} className="text-white mt-0.5 flex-shrink-0" />
              <span className="text-white/80">Fostered practical mastery of hardware-software integration in security-focused environments.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Programmer Analyst",
      content: (
        <div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <h4 className="text-xl font-bold text-white">Cognizant Technology Solutions</h4>
            <Badge variant="outline" className="text-sm font-medium text-white border-white/20 mt-2 md:mt-0">
              Nov 2021 - Jul 2023
            </Badge>
          </div>
          <div className="text-white/60 mb-4">
            <span>Bengaluru, India</span>
          </div>
          <ul className="space-y-2 mt-4">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={18} className="text-white mt-0.5 flex-shrink-0" />
              <span className="text-white/80">Engineered front-end web apps using React.js, HTML5, JavaScript, ensuring secure code practices and adherence to QA standards.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={18} className="text-white mt-0.5 flex-shrink-0" />
              <span className="text-white/80">Collaborated cross-functionally via JIRA and Figma for seamless design-to-development workflows.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={18} className="text-white mt-0.5 flex-shrink-0" />
              <span className="text-white/80">Bolstered cybersecurity initiatives as part of the phishing awareness team, hardening app vulnerabilities.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "ML/AI Intern",
      content: (
        <div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <h4 className="text-xl font-bold text-white">Pyze Inc.</h4>
            <Badge variant="outline" className="text-sm font-medium text-white border-white/20 mt-2 md:mt-0">
              Jun 2020 - Nov 2020
            </Badge>
          </div>
          <div className="text-white/60 mb-4">
            <span>Bengaluru, India</span>
          </div>
          <ul className="space-y-2 mt-4">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={18} className="text-white mt-0.5 flex-shrink-0" />
              <span className="text-white/80">Optimized machine learning models (Python) through data preprocessing, feature engineering, and hyperparameter tuning, boosting precision by 15%.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={18} className="text-white mt-0.5 flex-shrink-0" />
              <span className="text-white/80">Partnered with engineers to deploy scalable AI solutions, enhancing user experience via predictive analytics.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={18} className="text-white mt-0.5 flex-shrink-0" />
              <span className="text-white/80">Conducted rigorous A/B testing to validate model performance across real-world datasets.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Embedded Systems Intern",
      content: (
        <div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <h4 className="text-xl font-bold text-white">U.N.I.Q Technologies</h4>
            <Badge variant="outline" className="text-sm font-medium text-white border-white/20 mt-2 md:mt-0">
              Jan 2020 - Mar 2020
            </Badge>
          </div>
          <div className="text-white/60 mb-4">
            <span>Bengaluru, India</span>
          </div>
          <ul className="space-y-2 mt-4">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={18} className="text-white mt-0.5 flex-shrink-0" />
              <span className="text-white/80">Developed firmware for embedded systems, refining device communication protocols (C/C++) to reduce latency by 20%.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={18} className="text-white mt-0.5 flex-shrink-0" />
              <span className="text-white/80">Debugged hardware-software interactions and streamlined firmware efficiency for industrial IoT devices.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={18} className="text-white mt-0.5 flex-shrink-0" />
              <span className="text-white/80">Gained end-to-end exposure to embedded system design, from prototyping to deployment.</span>
            </li>
          </ul>
        </div>
      ),
    }
  ];

  return <Timeline data={data} />;
}
