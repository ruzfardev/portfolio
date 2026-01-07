export interface Experience {
  id: string;
  type: "work" | "education";
  title: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate?: string;
  description: string;
  highlights?: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    type: "work",
    title: "Senior Developer",
    organization: "Company Name",
    location: "Remote",
    startDate: "2022",
    endDate: "Present",
    description: "Leading development of web applications and mentoring junior developers.",
    highlights: [
      "Built scalable frontend architecture",
      "Improved performance by 40%",
      "Led team of 5 developers",
    ],
  },
  {
    id: "exp-2",
    type: "work",
    title: "Full Stack Developer",
    organization: "Previous Company",
    location: "City, Country",
    startDate: "2020",
    endDate: "2022",
    description: "Developed and maintained multiple web applications.",
    highlights: [
      "Implemented CI/CD pipelines",
      "Migrated legacy systems to modern stack",
    ],
  },
  {
    id: "exp-3",
    type: "education",
    title: "Bachelor's in Computer Science",
    organization: "University Name",
    startDate: "2016",
    endDate: "2020",
    description: "Focused on software engineering and web development.",
  },
];
