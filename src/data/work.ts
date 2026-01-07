export interface WorkProject {
  id: string;
  name: string;
  description: string;
  logo: string;
  url: string;
}

export const workProjects: WorkProject[] = [
  {
    id: "falcon",
    name: "Falcon",
    description: "Secure private messaging & command control platform for emergency services with real-time GPS tracking and dispatch management.",
    logo: "/images/work/falcon-logo.png",
    url: "https://datamicron.com/falcon/",
  },
  {
    id: "phoenix",
    name: "Phoenix AIP",
    description: "Generative AI platform for data preparation - from ETL to automated dashboards with natural language processing.",
    logo: "/images/work/phoenix-logo.png",
    url: "https://datamicron.com/phoenix-aip/",
  },
  {
    id: "eagle-eye",
    name: "Eagle Eye",
    description: "AI-powered investigation platform using knowledge graphs to uncover relationships and patterns in complex data.",
    logo: "/images/work/eagle-eye-logo.png",
    url: "https://datamicron.com/eagle-eye/",
  },
  {
    id: "ezdata",
    name: "EzData",
    description: "Modern ETL tool for data wrangling, cleaning, and transformation with AI-powered anomaly detection.",
    logo: "/images/work/ezdata-logo.png",
    url: "https://datamicron.com/ezdata/",
  },
];
