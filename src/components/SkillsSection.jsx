import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", icon: "/icons/html.svg", category: "frontend" },
  { name: "JavaScript", icon: "/icons/javascript.svg", category: "frontend" },
  { name: "React", icon: "/icons/react.svg", category: "frontend" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.svg", category: "frontend" },
  { name: "Bootstrap", icon: "/icons/bootstrap.svg", category: "frontend" },

  // Backend
  { name: "Node.js", icon: "/icons/nodejs.svg", category: "backend" },
  { name: "Express", icon: "/icons/express.svg", category: "backend" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "backend" },
  { name: "Django", icon: "/icons/django.svg", category: "backend" },

  // Tools
  { name: "Git/GitHub", icon: "/icons/github.svg", category: "tools" },
  { name: "Docker", icon: "/icons/docker.svg", category: "tools" },
  { name: "Figma", icon: "/icons/figma.svg", category: "tools" },
  { name: "AWS", icon: "/icons/aws.svg", category: "tools" },
  { name: "Linux", icon: "/icons/linux.svg", category: "tools" },

  // Languages
  { name: "Python", icon: "/icons/python.svg", category: "languages" },
  { name: "C#", icon: "/icons/csharp.svg", category: "languages" },
  { name: "Java", icon: "/icons/java.svg", category: "languages" },
  { name: "JavaScript", icon: "/icons/javascript.svg", category: "languages" },
  { name: "SQL", icon: "/icons/sql.svg", category: "languages" },
  { name: "MATLAB", icon: "/icons/matlab.svg", category: "languages" },
];

const categories = ["languages", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("languages");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Technologies</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center text-center"
            >
              {skill.icon && (
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="w-12 h-12 mb-3 object-contain"
                />
              )}
              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
