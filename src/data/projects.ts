export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Project One",
    description: "A brief description of your amazing project and what problems it solves.",
    tags: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/yourusername/project",
    featured: true,
  },
  {
    id: "project-2",
    title: "Project Two",
    description: "Another great project showcasing your skills and expertise.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/yourusername/project",
    featured: true,
  },
  {
    id: "project-3",
    title: "Project Three",
    description: "A creative solution built with modern technologies.",
    tags: ["React", "Firebase", "Framer Motion"],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/yourusername/project",
    featured: true,
  },
];
