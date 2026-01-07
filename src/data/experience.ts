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
    title: "Middle Web Developer",
    organization: "DataMicron",
    location: "Tashkent, Uzbekistan",
    startDate: "Jun 2022",
    endDate: "Present",
    description: "Designing and implementing web applications using modern frontend technologies.",
    highlights: [
      "Led responsive website development, resulting in 25% increase in mobile traffic",
      "Implemented SEO strategies, achieving 15% increase in organic search rankings",
      "Built and maintained databases ensuring data integrity",
      "Collaborated with team using HTML, CSS, JavaScript, React.js",
    ],
  },
  {
    id: "exp-2",
    type: "work",
    title: "QA Engineer",
    organization: "DataMicron",
    location: "Tashkent, Uzbekistan",
    startDate: "Nov 2021",
    endDate: "Jun 2022",
    description: "Conducted comprehensive quality assurance testing on software applications.",
    highlights: [
      "Reduced product bugs by 20% through cross-functional collaboration",
      "Implemented automated testing, reducing testing time by 30%",
      "Developed test cases, plans, and scripts for improved product quality",
    ],
  },
  {
    id: "exp-3",
    type: "education",
    title: "Bachelor's in Business Information Systems",
    organization: "Westminster International University in Tashkent",
    location: "Tashkent, Uzbekistan",
    startDate: "2020",
    endDate: "2024",
    description: "Focused on information technology and business systems.",
  },
];
