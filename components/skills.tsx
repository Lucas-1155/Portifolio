import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Globe,
  Database,
  Server,
  Boxes,
  Dock,
  GitBranch,
  Cloud,
  Package,
  FileCode,
  Terminal,
  Cpu,
  Cable,
  Monitor,
} from "lucide-react";
import { JSX } from "react";

export function Skills() {
  const skillCategories = [
    {
      title: "</>Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
    },
    {
      title: "</>Backend",
      skills: [
        "Node.js",
        "Express",
        "MongoDB",
        "REST APIs",
        "Oracle",
        "Redis",
        "Mysql",
      ],
    },
    {
      title: "</>DevOps & Tools",
      skills: ["Git", "Docker", "Cloudfare pages", "Github"],
    },
  ];

  const skillIcons: Record<string, JSX.Element> = {
    React: <Code2 size={16} />,
    "Next.js": <Globe size={16} />,
    TypeScript: <FileCode size={16} />,
    "Tailwind CSS": <Globe size={16} />,
    HTML5: <FileCode size={16} />,
    CSS3: <FileCode size={16} />,
    JavaScript: <FileCode size={16} />,

    "Node.js": <Server size={16} />,
    Express: <Server size={16} />,
    MongoDB: <Database size={16} />,
    "REST APIs": <Boxes size={16} />,
    Oracle: <Database size={16} />,
    Redis: <Database size={16} />,
    Mysql: <Database size={16} />,

    Git: <GitBranch size={16} />,
    Docker: <Monitor size={16} />,
    "Cloudfare pages": <Cloud size={16} />,
    Github: <GitBranch size={16} />,
  };

  return (
    <section id="skills" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
              Habilidades Técnicas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Tecnologias e ferramentas que domino para criar aplicações
              modernas e escaláveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-center">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="flex items-center gap-1 text-sm"
                    >
                      {skillIcons[skill] && <span>{skillIcons[skill]}</span>}
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
