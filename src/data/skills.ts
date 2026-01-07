export type Proficiency = "beginner" | "intermediate" | "advanced" | "expert";

export interface Skill {
  name: string;
  icon: string; // Simple Icons slug or custom identifier
  proficiency: Proficiency;
  yearsOfExperience: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  label: string; // Short label for bento card header
  description: string;
  color: string;
  skills: Skill[];
}

// Order matters for bento grid layout:
// Cards 1-2: small (top left)
// Card 3: large - spans 2 cols/2 rows (top right)
// Card 4: large - spans 2 cols/2 rows (bottom left)
// Cards 5-6: small (bottom right)
export const skillCategories: SkillCategory[] = [
  // Card 1 (small - top left)
  {
    id: "state",
    title: "State Management",
    label: "State",
    description: "Managing application state",
    color: "#060010",
    skills: [
      { name: "Redux", icon: "redux", proficiency: "advanced", yearsOfExperience: 2 },
      { name: "Redux-Saga", icon: "reduxsaga", proficiency: "intermediate", yearsOfExperience: 1 },
      { name: "Context API", icon: "react", proficiency: "advanced", yearsOfExperience: 2 },
    ],
  },
  // Card 2 (small - top left)
  {
    id: "tools",
    title: "Tools",
    label: "Workflow",
    description: "Development tools & productivity",
    color: "#060010",
    skills: [
      { name: "Git", icon: "git", proficiency: "advanced", yearsOfExperience: 2 },
      { name: "VS Code", icon: "visualstudiocode", proficiency: "expert", yearsOfExperience: 3 },
      { name: "npm", icon: "npm", proficiency: "advanced", yearsOfExperience: 2 },
      { name: "Webpack", icon: "webpack", proficiency: "intermediate", yearsOfExperience: 1 },
    ],
  },
  // Card 3 (LARGE - top right, spans 2x2)
  {
    id: "frontend",
    title: "Frontend",
    label: "UI/UX",
    description: "Building interactive & responsive interfaces",
    color: "#060010",
    skills: [
      { name: "React", icon: "react", proficiency: "advanced", yearsOfExperience: 2 },
      { name: "TypeScript", icon: "typescript", proficiency: "advanced", yearsOfExperience: 2 },
      { name: "JavaScript", icon: "javascript", proficiency: "expert", yearsOfExperience: 3 },
      { name: "HTML5", icon: "html5", proficiency: "expert", yearsOfExperience: 3 },
      { name: "CSS3", icon: "css", proficiency: "expert", yearsOfExperience: 3 },
      { name: "Tailwind CSS", icon: "tailwindcss", proficiency: "advanced", yearsOfExperience: 1 },
      { name: "Bootstrap", icon: "bootstrap", proficiency: "advanced", yearsOfExperience: 2 },
      { name: "SASS", icon: "sass", proficiency: "advanced", yearsOfExperience: 2 },
      { name: "Next.js", icon: "nextdotjs", proficiency: "intermediate", yearsOfExperience: 1 },
    ],
  },
  // Card 4 (LARGE - bottom left, spans 2x2)
  {
    id: "backend",
    title: "Backend",
    label: "Server",
    description: "Server-side development & APIs",
    color: "#060010",
    skills: [
      { name: "Node.js", icon: "nodedotjs", proficiency: "intermediate", yearsOfExperience: 2 },
      { name: "Express", icon: "express", proficiency: "intermediate", yearsOfExperience: 1 },
      { name: "C#", icon: "dotnet", proficiency: "intermediate", yearsOfExperience: 1 },
      { name: ".NET", icon: "dotnet", proficiency: "intermediate", yearsOfExperience: 1 },
      { name: "REST APIs", icon: "fastapi", proficiency: "advanced", yearsOfExperience: 2 },
      { name: "PostgreSQL", icon: "postgresql", proficiency: "intermediate", yearsOfExperience: 1 },
      { name: "MongoDB", icon: "mongodb", proficiency: "intermediate", yearsOfExperience: 1 },
      { name: "Firebase", icon: "firebase", proficiency: "intermediate", yearsOfExperience: 1 },
    ],
  },
  // Card 5 (small - bottom right)
  {
    id: "testing",
    title: "Testing & QA",
    label: "Quality",
    description: "Quality assurance & testing",
    color: "#060010",
    skills: [
      { name: "Manual Testing", icon: "checkmarx", proficiency: "advanced", yearsOfExperience: 1 },
      { name: "Selenium", icon: "selenium", proficiency: "intermediate", yearsOfExperience: 1 },
      { name: "Jest", icon: "jest", proficiency: "intermediate", yearsOfExperience: 1 },
    ],
  },
  // Card 6 (small - bottom right)
  {
    id: "other",
    title: "Other Skills",
    label: "More",
    description: "Additional technologies",
    color: "#060010",
    skills: [
      { name: "Figma", icon: "figma", proficiency: "intermediate", yearsOfExperience: 1 },
      { name: "Jira", icon: "jira", proficiency: "advanced", yearsOfExperience: 2 },
      { name: "Agile/Scrum", icon: "trello", proficiency: "advanced", yearsOfExperience: 2 },
    ],
  },
];

// Helper to get proficiency color
export const getProficiencyColor = (proficiency: Proficiency): string => {
  const colors: Record<Proficiency, string> = {
    beginner: "#94a3b8",
    intermediate: "#60a5fa",
    advanced: "#a78bfa",
    expert: "#34d399",
  };
  return colors[proficiency];
};

// Helper to get proficiency label
export const getProficiencyLabel = (proficiency: Proficiency): string => {
  const labels: Record<Proficiency, string> = {
    beginner: "Learning",
    intermediate: "Proficient",
    advanced: "Advanced",
    expert: "Expert",
  };
  return labels[proficiency];
};