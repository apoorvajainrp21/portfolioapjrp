
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";

export function TimelineDemo() {
  const data = [
    {
      title: "Senior Software Engineer",
      content: (
        <div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <h4 className="text-lg font-semibold">Tech Innovations</h4>
            <span className="text-sm font-medium bg-foreground/10 px-3 py-1 rounded-full">
              2021 - Present
            </span>
          </div>
          <div className="mb-4 text-sm text-foreground/60">San Francisco, CA</div>
          <div className="space-y-2">
            <p className="text-foreground/80">• Lead a team of 5 engineers developing a cloud-based SaaS platform</p>
            <p className="text-foreground/80">• Implemented CI/CD pipelines reducing deployment time by 50%</p>
            <p className="text-foreground/80">• Architected and developed RESTful APIs serving over 100k requests daily</p>
            <p className="text-foreground/80">• Improved application performance by 30% through code optimization</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-foreground/10">React</Badge>
            <Badge variant="outline" className="bg-foreground/10">TypeScript</Badge>
            <Badge variant="outline" className="bg-foreground/10">Node.js</Badge>
            <Badge variant="outline" className="bg-foreground/10">AWS</Badge>
          </div>
        </div>
      ),
    },
    {
      title: "Software Engineer",
      content: (
        <div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <h4 className="text-lg font-semibold">DataDrive Solutions</h4>
            <span className="text-sm font-medium bg-foreground/10 px-3 py-1 rounded-full">
              2019 - 2021
            </span>
          </div>
          <div className="mb-4 text-sm text-foreground/60">San Jose, CA</div>
          <div className="space-y-2">
            <p className="text-foreground/80">• Developed and maintained front-end applications using React and TypeScript</p>
            <p className="text-foreground/80">• Collaborated with UX designers to implement responsive UI components</p>
            <p className="text-foreground/80">• Created automated testing suites with Jest and React Testing Library</p>
            <p className="text-foreground/80">• Participated in agile development processes and code reviews</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-foreground/10">React</Badge>
            <Badge variant="outline" className="bg-foreground/10">Jest</Badge>
            <Badge variant="outline" className="bg-foreground/10">Figma</Badge>
            <Badge variant="outline" className="bg-foreground/10">Agile</Badge>
          </div>
        </div>
      ),
    },
    {
      title: "Web Developer Intern",
      content: (
        <div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <h4 className="text-lg font-semibold">Creative Web Studios</h4>
            <span className="text-sm font-medium bg-foreground/10 px-3 py-1 rounded-full">
              Summer 2018
            </span>
          </div>
          <div className="mb-4 text-sm text-foreground/60">Los Angeles, CA</div>
          <div className="space-y-2">
            <p className="text-foreground/80">• Built responsive websites for small businesses using modern web technologies</p>
            <p className="text-foreground/80">• Optimized website performance and SEO</p>
            <p className="text-foreground/80">• Collaborated with designers to implement pixel-perfect designs</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-foreground/10">HTML/CSS</Badge>
            <Badge variant="outline" className="bg-foreground/10">JavaScript</Badge>
            <Badge variant="outline" className="bg-foreground/10">WordPress</Badge>
          </div>
        </div>
      ),
    }
  ];
  return (
    <div className="min-h-fit w-full pt-4 pb-12">
      <Timeline data={data} />
    </div>
  );
}
